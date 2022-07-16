class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.spritesheet("ship", "assets/spritesheets/ship.png", {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {frameWidth: 32, frameHeight: 16});
        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet("power-up", "assets/spritesheets/power-up.png", {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet("player", "assets/spritesheets/player.png", {frameWidth: 16, frameHeight: 24});
        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {frameWidth: 16, frameHeight: 16});

        this.load.bitmapFont("pixelFont", "assets/font/fon.png", "assets/font/font.xml");
        
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumers("ship"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumers("power-up", {start: 0, end: 1}), 
            frameRate: 20, 
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumers("power-up", {start: 2, end: 3}), 
            frameRate: 20, 
            repeat: -1
        });
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumers("player"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumers("beam"),
            frameRate: 20,
            repeat: -1
        });
    }
}