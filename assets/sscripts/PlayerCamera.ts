const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerCamera extends cc.Component {

    protected onLoad() {
        cc.director.on('player-move', this.onPlayerMove, this);
    }

    protected onDestroy() {
        cc.director.off('player-move', this.onPlayerMove, this);
    }

    private onPlayerMove(playerPos: any) {
        this.node.position = playerPos;
    }

}
