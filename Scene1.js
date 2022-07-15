class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("ship", "assets/image/ship.png")
        this.load.image("ship2", "assets/image/ship2.png")
        this.load.image("ship3", "assets/image/ship3.png")
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}