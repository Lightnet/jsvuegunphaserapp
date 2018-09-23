<template>
    <div>
        <div id="phaserapp"></div>
    </div>
</template>

<script>
import Phaser from 'phaser';

import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';

import EBasePlugin from './plugins/EBasePlugin';

export default {
    //components: {},
    //created(){},
    data() {
        return {
        }
    },
    mounted(){
        //let self = this;
        this.config = {//work on mounted to get the id attach when create html
            version: "0.0.1",
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'phaserapp',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },//200
                    debug:true
                }
            },
            //plugins: [ 'BasePlugin','ControlPlugin','DialogModalPlugin' ],
            plugins: {
                global: [ EBasePlugin.DefaultCfg ],
            },
            //map: {
                //'base': 'base'
            //},
            //scene:[SceneMain]
            scene:[
                //TitleScene,
                GameScene,
                BootScene,
            ]
        };

        var game = new Phaser.Game(this.config);
    },
    methods: {
        
    }
}
</script>
<style>

</style>