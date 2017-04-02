var coins;
cidade= {

    preload: function() {
        game.load.tilemap('cidade', 'data/json/cidade.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image('city_outside', 'data/tileds/city_outside.png');
        game.load.image('floresta', 'data/tileds/2rdi8gz.png');

        game.load.spritesheet('hero', 'data/player/player.png',32,32,12);



        game.load.spritesheet('guardaMulher', 'data/npc/guarda/mulher.png',32,32,12);
        game.load.spritesheet('guardaHomem', 'data/npc/guarda/homem.png',32,32,12);
    
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);


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
        
        //  Here we create our coins group
        coins = game.add.group();
        coins.enableBody = true;

        // 000
        this.map.createFromObjects('npcs', 702, 'guardaHomem', 1, true, false, coins);
        this.map.createFromObjects('npcs', 690, 'guardaMulher', 1, true, false, coins);
    



        this.cima = this.map.createLayer('cima');
        
        this.cima.resizeWorld();
        

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer,function(p,l){console.log('yee')});
        game.physics.arcade.collide(this.player, coins);

       
    },
    render:function()
    {
        game.debug.body(this.player);

    }


}


