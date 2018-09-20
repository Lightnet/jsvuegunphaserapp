<template>
    <div>
        <div id="phaserapp"></div>
    </div>
</template>

<script>
import Phaser from 'phaser';
import SceneMain from './SceneMain';

export default {
    
    components: {

    },

    data() {
        return {
        }
    },

    //created(){
    //},

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
                    gravity: { y: 200 },
                    debug:true
                }
            },
            scene:[SceneMain]
        };

        var game = new Phaser.Game(this.config);
    },
    methods: {
        
    }
}
</script>
<style>

</style>