var Npc  = function(sprite,x,y)
{
	Phaser.Sprite.call(this, game, x, y, sprite,10);

    this.anchor.setTo(0.5, 0.5);

    this.animations.add('front',[0,2],6,false);
    this.animations.add('left',[3,5],6,false);
    this.animations.add('right',[6,8],6,false);
    this.animations.add('back',[9,11],6,false);

    game.physics.arcade.enable(this);
    
    game.add.existing(this);

}

Npc.prototype = Object.create(Phaser.Sprite.prototype);
Npc.prototype.constructor = Player;

