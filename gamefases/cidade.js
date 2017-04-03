var key1,
    tiggerInteracao,
    falasJSON;
cidade = {
    preload: function() {
        game.load.json('falas', 'data/json/falas.json');
        game.load.tilemap('cidade', 'data/json/cidade.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image('city_outside', 'data/tileds/city_outside.png');
        game.load.image('floresta', 'data/tileds/2rdi8gz.png');

        game.load.image('balao', 'data/ui/balao.png');

        game.load.spritesheet('hero', 'data/player/player.png',32,32,12);



        game.load.spritesheet('guardaMulher', 'data/npc/guarda/mulher.png',32,32,12);
        game.load.spritesheet('guardaHomem', 'data/npc/guarda/homem.png',32,32,12);
    
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        tiggerInteracao = true;
        falasJSON = game.cache.getJSON('falas');
        
        this.map = game.add.tilemap('cidade');

        this.map.addTilesetImage('city_outside');
        this.map.addTilesetImage('floresta');   
        
        this.map.addTilesetImage('homem','guardaHomem');
        this.map.addTilesetImage('mulher','guardaMulher');  

        this.layer = this.map.createLayer('baixo');
        this.collidelayer = this.map.createLayer('collidelayer');
        
        this.layer.resizeWorld();
        this.collidelayer.resizeWorld();

        this.map.setCollisionBetween(0,500,true,this.collidelayer);

       
        this.player = new Player('hero', 700 ,1400);
        
        this.npcs = game.add.group();
        this.npcs.add(NpcGuardas(this.map));


        this.cima = this.map.createLayer('cima');
        
        this.cima.resizeWorld();
        

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        game.physics.arcade.collide(this.player, this.npcs.children[0]);
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);

       
    },
    render:function()
    {
        //game.debug.body(this.player);
        //game.debug.body(this.player.children[0]);

    }


}


function interacao(player,npc)
{
    console.log('oh ye');
    if(key1.isDown && tiggerInteracao)
    {
        console.log(tiggerInteracao);
        balaoDialogo(eval("falasJSON."+npc.key));

        tiggerInteracao = false;

    }else if(key1.isUp) tiggerInteracao = true;
}