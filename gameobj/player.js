

var Player  = function(sprite,x,y)
{
	Phaser.Sprite.call(this, game, x, y, sprite,10);

    this.anchor.setTo(0.5, 0.5);

    this.animations.add('front',[0,2],6,false);
    this.animations.add('left',[3,5],6,false);
    this.animations.add('right',[6,8],6,false);
    this.animations.add('back',[9,11],6,false);

    int = game.add.sprite(0,0);
    game.physics.arcade.enable(int);

    int.body.setSize(37,37,-18,-18);

    this.addChild(int);

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


// interacoes //
var style = { font: "48px Arial", fill: "#ffffff", align: "center"},
    bDialogo = 0;
    bDialogo.alive = false;
function balaoDialogo(fala)
{
    if(bDialogo.alive){
        bDialogo.kill(); 
    }else { 
        bDialogo = game.add.sprite(400,500,'balao');
        bDialogo.anchor.setTo(0.5);
        bDialogo.scale.setTo(0.5,0.3);

        bDialogo.fixedToCamera = true;



        text = game.add.text(0, 0, fala, style);
        text.anchor.set(0.5);

        bDialogo.addChild(text);

    }    
}