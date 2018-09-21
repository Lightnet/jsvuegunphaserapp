import Phaser from 'phaser';

import Player00 from '../sprites/Player00';
//import BasePlugin from '../plugins/BasePlugin';
//import ControlPlugin from '../plugins/ControlPlugin';
//import DialogModalPlugin from '../plugins/dialog_plugin';

//import EBasePlugin from '../plugins/EBasePlugin';

class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }

    preload(){
        console.log(this.load);

        //this.load.plugin('BasePlugin', 'path/to/BasePlugin.js');

        //this.load.plugin('BasePlugin', './plugins/baseplugin/BasePlugin.js');
        //this.load.scenePlugin('BasePlugin', './plugins/baseplugin/BasePlugin.js');
        //this.load.scenePlugin('BasePlugin', BasePlugin);
        //this.load.scenePlugin('ControlPlugin', ControlPlugin);

        //this.load.plugin('DialogModalPlugin', DialogModalPlugin);
        //this.load.plugin('EBasePlugin', EBasePlugin);

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
        //this.cameras.main.startFollow(this.player00);

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