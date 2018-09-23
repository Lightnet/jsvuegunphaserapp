import Phaser from 'phaser';

import Player00 from '../sprites/Player00';
//import BasePlugin from '../plugins/BasePlugin';

class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }

    preload(){
        console.log(this.load);
        this.load.image('grayredblock', 'assets/blockredgray32.png');
        this.load.image('player00', 'assets/characters/player00.png');
    }

    create(){
        //console.log('Ready');
        //console.log("init game app?");
        //this.sys.install('EBasePlugin');
        console.log(this);
        //this.add.addNineSlice();
        console.log()
        this.add.EBasePlugin();
        //this.sys.install('BasePlugin');
        //this.sys.install('ControlPlugin');
        this.add.text(1, 1, 'Hello Phaser!', { fill: '#0f0' });

        console.log(Phaser.Input.Keyboard.KeyCodes);

        // this.keys will contain all we need to control player.
        // Any key could just replace the default (like this.key.jump)
        this.keys = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            fire: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        };

        this.cameras.main.roundPixels = true;
        //this.add.image(100, 200, 'player00');

        this.spawnplayer();

        this.AddStuff();
    }

    spawnplayer(){
        this.player00 = new Player00({
            scene: this,
            key: 'player00',
            //x: 16 * 6,
            //y: this.sys.game.config.height - 48 - 48
            x:1,
            y:1,
        });
        // The camera should follow Mario
        this.cameras.main.startFollow(this.player00);
    }

    AddStuff(){
        let block = this.physics.add.sprite(200, 200, 'grayredblock');

        this.physics.add.collider(block, this.player00);

    }

    update(time, delta){


        if (this.physics.world.isPaused) {
            return;
        }

        // Run the update method of player
        if(this.player00 !=null){
            this.player00.update(this.keys, time, delta);
        }

    }
}
export default GameScene;