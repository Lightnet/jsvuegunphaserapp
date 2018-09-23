// http://www.html5gamedevs.com/topic/36850-solvederror-thisaddbutton-is-not-a-function/
// https://snowbillr.github.io/blog//2018-07-03-buttons-in-phaser-3/
// https://github.com/photonstorm/phaser-examples


import Phaser from 'phaser';

class TitleScene extends Phaser.Scene{
    constructor(){
        super('TitleScene');
    }

    preload(){
        //console.log(this.load);
        //this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
        //this.load.image('button', 'assets/buttons/button_sprite_sheet.png');

        //this.load.image('grayredblock', 'assets/blockredgray32.png');

        this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', { frameWidth: 85, frameHeight: 24 });
    }

    create(){

        //console.log("init game app?");
        //this.button = this.add.button(1, 400, 'button', this.actionOnClick, this, 2, 1, 0);
        //this.startBtn = this.add.sprite(100, 100, 'button').setInteractive();
        console.log(this);
        let screenheight = this.game.config.height;

        let helloButton = this.helloButton = this.add.text(100, 100, 'Phaser 3 Game!', { fill: '#0f0' });
        helloButton.setInteractive();
        helloButton.on('pointerover', () => { console.log('pointerover'); });
        helloButton.on('pointerout', function (event) { /* Do something when the mouse exits. */ });
        helloButton.on('pointerdown', ()=>{console.log("press?")}); // Start game on click.
        helloButton.y = screenheight/2 - 160;

        let btnNewGame = this.btnNewGame = this.add.text(100, 100, 'New Game', { fill: '#0f0' });
        btnNewGame.y = screenheight/2 - 120;
        btnNewGame.setInteractive();
        btnNewGame.on('pointerdown', this.clickNewGame);
        let btnLoadGame = this.btnLoadGame = this.add.text(100, 100, 'Load Game', { fill: '#0f0' });
        btnLoadGame.y = screenheight/2 - 100;
        btnLoadGame.setInteractive();
        btnLoadGame.on('pointerdown', this.clickLoadGame);
        let btnOptionGame = this.btnOptionGame = this.add.text(100, 100, 'Option', { fill: '#0f0' });
        btnOptionGame.y = screenheight/2 - 80;
        btnOptionGame.setInteractive();
        btnOptionGame.on('pointerdown',  this.clickOptionGame);
    }

    clickNewGame(){
        console.log("new game");
    }

    clickLoadGame(){
        console.log("load game");
    }

    clickOptionGame(){
        console.log("option game");
    }

    actionOnClick () {
        console.log("click")
    }

    update(){

    }
}
export default TitleScene;