class Background{

    backGroundAnim = new Animator(
        ASSET_MANAGER.getAsset("./spritesheets/Backgrounds.png"),
        22,
        22,
        1348,
        850,
        1,
        Infinity,
        2,
        false,
        false,
        false);

    constructor(game){
        this.game = game;
    }

    update(){

    };

    draw(ctx){
        this.backGroundAnim.drawFrame(this.game.clockTick, ctx, 0, 0, 1)
    };

}