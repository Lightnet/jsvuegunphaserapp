import Phaser from 'phaser';

import Player00 from '../sprites/Player00';

class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }

    preload(){
        console.log(this.load);

        this.load.image('player00', 'assets/characters/player00.png');
    }

    create(){
        //console.log('Ready');
        //console.log("init game app?");
        this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });

        // this.keys will contain all we need to control player.
        // Any key could just replace the default (like this.key.jump)
        this.keys = {
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            jump2: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            fire: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        };

        
        this.add.image(100, 200, 'player00');

        this.player00 = new Player00({
            scene: this,
            key: 'player00',
            x: 16 * 6,
            y: this.sys.game.config.height - 48 - 48
        });


        // The camera should follow Mario
        this.cameras.main.startFollow(this.player00);

        this.cameras.main.roundPixels = true;


    }

    update(time, delta){


        if (this.physics.world.isPaused) {
            return;
        }

        // Run the update method of player
        this.player00.update(this.keys, time, delta);

    }
}
export default GameScene;