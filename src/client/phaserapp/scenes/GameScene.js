// https://github.com/photonstorm/phaser-examples/blob/master/examples/camera/fixed%20to%20camera.js
// https://labs.phaser.io/edit.html?src=src%5Cscenes%5Cui%20scene%20es6.js
// https://www.joshmorony.com/phaser-fundamentals-handling-collisions/


import Phaser from 'phaser';

import Player00 from '../sprites/Player00';
//import BasePlugin from '../plugins/BasePlugin';

class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }

    preload(){
        //console.log(this.load);
        this.load.image('grayredblock', 'assets/blockredgray32.png');
        this.load.image('player00', 'assets/characters/player00.png');
    }

    create(){
        this.players = this.add.group();
        this.enemies = this.add.group();
        this.projectiles = this.add.group();
        //this.walls = this.add.group();
        this.walls = this.physics.add.staticGroup();

        this.walls = this.add.group();
        //console.log('Ready');
        //console.log("init game app?");
        //this.sys.install('EBasePlugin');
        //console.log(this);
        //this.add.addNineSlice();
        this.add.EBasePlugin();
        //this.sys.install('BasePlugin');
        //this.sys.install('ControlPlugin');
        let TextUI =  this.add.text(1, 1, 'Hello Phaser!', { fill: '#0f0' });
        TextUI.setInteractive();
        let self = this;
        TextUI.on('pointerdown', ()=>{
            console.log("test");
            self.events.emit('action');
        });
        
        this.initHUD();
        
        //console.log(Phaser.Input.Keyboard.KeyCodes);
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

    initHUD(){
        //this.HUDText = this.add.text(100, 100, 'HUD', { fill: '#0f0' });
        //console.log(this.HUDText);
        //this.HUDText.fixedToCamera = true;
        //console.log(this);
        this.scene.scene.scene.launch('HUDScene');
        //this.events.emit('addScore'); does not work when it since not yet init

        let HUDScene = this.scene.get('HUDScene');

        HUDScene.events.on('action',()=> {
            //HUDText.setText('Score: ' + self.Score);
            console.log("Game Action?");
        }, this);
    }

    spawnplayer(){
        //this.players
        this.player00 = new Player00({
            scene: this,
            key: 'player00',
            //x: 16 * 6,
            //y: this.sys.game.config.height - 48 - 48
            x:1,
            y:1,
        });
        this.players.add(this.player00);
        // The camera should follow Mario
        this.cameras.main.startFollow(this.player00);
    }

    AddStuff(){
        let block = this.physics.add.sprite(200, 200, 'grayredblock');
        //this.projectiles.create(200, 200, 'grayredblock').physics;
        this.projectiles.add(block);
        //console.log(this.projectiles);

        //this.physics.add.collider(block, this.player00);
        // http://phaser.io/tutorials/making-your-first-phaser-3-game/part8
        //this.physics.add.overlap(this.player00, block, this.overlapcollision, null, this);
        //this.physics.add.overlap(this.player00, this.projectiles, this.overlapcollision, null, this);
        this.physics.add.overlap(this.players, this.projectiles, this.overlapcollision, null, this);


        let wall = this.physics.add.sprite(0, 200, 'grayredblock');
        wall.body.immovable = true;
        //wall.body.mass = 0;
        //console.log(wall);
        //wall.setCollisionByProperty({
            //collide: true
        //});
        this.walls.add(wall);
        //this.walls.create(0, 220, 'grayredblock');

        this.physics.add.collider(this.players, this.walls);

    }

    overlapcollision (player, star){
        //star.disableBody(true, true);
        console.log("collision");
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
