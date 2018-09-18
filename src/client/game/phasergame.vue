<template>
    <div>
    <div id="phaserapp"></div>
    </div>
</template>

<script>
import Phaser from 'Phaser';

export default {
    components: {

    },
    data() {
        return {
            //username: 'Guest',
            //pubid:''
        }
    },
    //created(){
    //},
    mounted(){
    
        let self = this;
        this.config = {//work on mounted to get the id attach when create html
            version: "0.0.1",
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'phaserapp',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: preload,
                create: create
            }
        };
        function preload ()
        {
            console.log(this.load);
            this.load.setBaseURL('http://labs.phaser.io');
        
            this.load.image('sky', 'assets/skies/space3.png');
            this.load.image('logo', 'assets/sprites/phaser3-logo.png');
            this.load.image('red', 'assets/particles/red.png');
        }
        function create ()
        {
            this.add.image(400, 300, 'sky');
            var particles = this.add.particles('red');
            var emitter = particles.createEmitter({
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });
            var logo = this.physics.add.image(400, 100, 'logo');
            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);
            emitter.startFollow(logo);
            console.log("init game app?");
        }
        var game = new Phaser.Game(this.config);
    },
    methods: {
        
    }
}
</script>

<style>
.example {
  color: red;
}
</style>