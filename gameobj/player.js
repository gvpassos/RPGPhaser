

var Player  = function(sprite,x,y)
{
	Phaser.Sprite.call(this, game, x, y, sprite,10);

    this.anchor.setTo(0.5, 0.5);

    this.animations.add('front',[0,2],6,false);
    this.animations.add('left',[3,5],6,false);
    this.animations.add('right',[6,8],6,false);
    this.animations.add('back',[9,11],6,false);

    game.physics.arcade.enable(this);
    game.camera.follow(this);

    game.add.existing(this);

}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function()
{
     this.body.velocity.x = 0;
     this.body.velocity.y = 0;   

    deltaTime = (game.time.elapsedMS / 100 );
    speed = 1000* deltaTime;

	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.body.velocity.x -= speed;
        this.animations.play('left');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.body.velocity.x += speed;
        this.animations.play('right');
    }

    else if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        this.body.velocity.y  -= speed;
        this.animations.play('back');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        this.body.velocity.y += speed ;
        this.animations.play('front');
    }
    
}