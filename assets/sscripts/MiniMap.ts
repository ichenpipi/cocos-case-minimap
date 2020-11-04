const { ccclass, property } = cc._decorator;

@ccclass
export default class MiniMap extends cc.Component {

    @property(cc.Camera)
    private camera: cc.Camera = null;

    @property(cc.Sprite)
    private sprite: cc.Sprite = null;

    protected start() {
        const renderTexture = new cc.RenderTexture();
        renderTexture.initWithSize(180, 180);
        // renderTexture.setFlipY(false);
        this.sprite.node.scaleY = -1;
        this.sprite.spriteFrame = new cc.SpriteFrame(renderTexture);
        this.camera.targetTexture = renderTexture;
    }

}
