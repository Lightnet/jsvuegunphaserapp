

export default class player00 extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.acceleration = 600;
        this.body.maxVelocity.x = 200;
        this.body.maxVelocity.y = 500;
        this.animSuffix = '';
        this.small();

        this.bending =false;
        this.wasHurt = -1;
        this.flashToggle = false;
        this.star = {
            active: false,
            timer: -1,
            step: 0
        }
        this.enteringPipe = false;
        //this.anims.play('stand');
        this.alive = true;
        this.type = 'player00';
        this.jumpTimer = 0;
        this.jumping = false;
        this.fireCoolDown = 0;
        /*
        this.on('animationcomplete', () => {
            if (this.anims.currentAnim.key === 'grow' || this.anims.currentAnim.key === 'shrink') {
                this.scene.physics.world.resume();
            }
        }, this);
        */
    }

    small() {
        //this.body.setSize(10, 10);
        //this.body.offset.set(3, 14);
    }

    update(keys, time, delta) {
        /*
        let input = {
            left: keys.left.isDown || this.scene.touchControls.left,
            right: keys.right.isDown || this.scene.touchControls.right,
            down: keys.down.isDown || this.scene.touchControls.down,
            jump: keys.jump.isDown || keys.jump2.isDown || this.scene.touchControls.jump,
            fire: keys.fire.isDown
        }
        */

        let input = {
            left: keys.left.isDown ,
            right: keys.right.isDown ,
            down: keys.down.isDown ,
            //jump: keys.jump.isDown || keys.jump2.isDown,
            up: keys.up.isDown,
            fire: keys.fire.isDown
        }

        if (input.left) {
            //this.x -= 1;
            this.runX(-this.acceleration);
            //this.flipX = true;
        } else if (input.right) {
            this.runX(this.acceleration);
            //this.x += 1;
            this.flipX = false;
        } else if (input.up) {
            this.runY(-this.acceleration);
            //this.y -= 1;
            //this.run(this.acceleration / 3);
            //this.flipX = false;
        } else if (input.down) {
            this.runY(this.acceleration); 
            //this.flipX = false;
        } else if (this.body.blocked.down) {

            if (Math.abs(this.body.velocity.x) < 10) {
                //this.body.setVelocityX(0);
                //this.run(0);
            } else {
                //this.run(((this.body.velocity.x > 0) ? -1 : 1) * this.acceleration / 2);
            }
        }else{
            this.runX(0);
            this.runY(0);
        }
    }

    runX(vel) {
        this.body.setAccelerationX(vel);
    }

    runY(vel) {
        this.body.setAccelerationY(vel);
    }

}