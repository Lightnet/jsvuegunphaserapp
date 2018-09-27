import Phaser from 'phaser';

class HUDScene extends Phaser.Scene{
    constructor(){
        super('HUDScene');
    }

    preload(){

    }

    create(){
        this.createHUD();
        this.Score = 0;
        //console.log("init game app?");
        //this.events.emit('addScore');
    }

    createHUD(){
        let self = this;
        let HUDText = this.HUDText = this.add.text(1, 1, 'HUD', { fill: '#0f0' });

        let HUDHealth = this.HUDHealth = this.add.text(1, 20, 'Health:100/100', { fill: '#0f0' });
        let HUDMagic = this.HUDMagic = this.add.text(1, 40, 'Magic:100/100', { fill: '#0f0' });
        let HUDTactic = this.HUDTactic = this.add.text(1, 60, 'Tactic:0/100', { fill: '#0f0' });

        let HUDMenu = this.HUDMenu = this.add.text(1, 80, 'Menu', { fill: '#0f0' });
        HUDMenu.setInteractive();

        HUDMenu.on('pointerdown', ()=>{
            console.log("test");
            self.events.emit('action');
        });

        //console.log(this.HUDText);
        this.HUDText.fixedToCamera = true;
        

        //  Grab a reference to the Game Scene
        let ourGame = this.scene.get('GameScene');
        //  Listen for events from it
        ourGame.events.on('addScore',()=> {
            self.Score++;
            HUDText.setText('Score: ' + self.Score);
            console.log("Add HUD point?");
        }, this);
    }

    update(){

    }
}
export default HUDScene;