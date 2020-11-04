const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    private speed: number = 5;

    private direction: MoveDirection = null;

    protected onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    protected update(dt: number) {
        if (!this.direction) return;
        switch (this.direction) {
            case MoveDirection.Up:
                this.node.y += this.speed;
                break;
            case MoveDirection.Down:
                this.node.y -= this.speed;
                break;
            case MoveDirection.Left:
                this.node.x -= this.speed;
                break;
            case MoveDirection.Right:
                this.node.x += this.speed;
                break;
        }
        cc.director.emit('player-move', this.node.position);
    }

    private onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.direction = MoveDirection.Up;
                break;
            case cc.macro.KEY.s:
                this.direction = MoveDirection.Down;
                break;
            case cc.macro.KEY.a:
                this.direction = MoveDirection.Left;
                break;
            case cc.macro.KEY.d:
                this.direction = MoveDirection.Right;
                break;
        }
    }

    private onKeyUp(event: cc.Event.EventKeyboard) {
        this.direction = null;
    }

}

enum MoveDirection {
    Up = 1,
    Down,
    Left,
    Right
}
