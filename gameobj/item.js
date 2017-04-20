function Item(name,tipo,damage,resitencia,icone)
{
    this.name = name;
    this.tipo = tipo
    this.damage = damage;
    this.resitencia = resitencia;
    this.icone = icone;

}

Item.prototype = Object.create(Phaser.Button.prototype);

Item.prototype.constructor = Item;

Item.prototype.btn = function(game,x,y,sprite) 
{        
    Phaser.Button.call(this, game, 0, 0, sprite, function(ite){ console.log ("you clicked: ", ite.name);}, this,this.icone,this.icone,this.icone,null);
    this.anchor.setTo(0.5);
    return this;
};