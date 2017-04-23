var playerStart = {x:0,y:0,frame:10};

var Player  = function(sprite,x,y)
{
    if(playerStart.x == 0 && playerStart.y ==0)
	    Phaser.Sprite.call(this, game, x, y, sprite,10);
    else Phaser.Sprite.call(this, game, playerStart.x, playerStart.y, sprite,playerStart.frame);

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

        //menu 
}

// interacoes com o player

function interacao(player,npc)//quando a um botao a ser precionado 
{
    //console.log('oh ye');
    if(key1.isDown && tiggerInteracao)
    {
        criarConversa(npc,0);
        game.paused = true;
        tiggerInteracao = false;

    }else if(key1.isUp) tiggerInteracao = true;
}
function entrada(player,npc){
    if(key1.isDown && tiggerInteracao)
    {
         if(npc.name.match(/casa.*/))
            game.state.start(npc.name);
    }else if(key1.isUp) tiggerInteracao = true;
   
}
function autoInteracao(player,npc)// quando nao ha um botao a ser pressionado 
{
    if(npc.name.match(/saida.*/)){

        game.state.start(npc.name.split('saida')[1]);
    }
}



function openInterface(){
    if(key2.isDown && tiggerInteracao)
    {
        carregarInterface();

    }else if(key2.isUp) tiggerInteracao = true;
}

// fora do Game

