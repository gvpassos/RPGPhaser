var key1,travaMenu,
    tiggerInteracao,
    falasJSON;
/// CIDADE //////////////////////////////////////////////////////////////////////////////////

var cidade = { 

    preload: function() {
        game.load.json('falas', 'data/json/falas.json');
        game.load.tilemap('cidade', 'data/json/cidade.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.spritesheet('city_outside', 'data/tileds/city_outside.png',32,32);
        game.load.spritesheet('florest', 'data/tileds/2rdi8gz.png',32,32);
        game.load.spritesheet('base', 'data/tileds/base_out_atlas.png',32,32);
        game.load.spritesheet('terrain', 'data/tileds/terrain_atlas.png',32,32);
        game.load.spritesheet('paredestile', 'data/tileds/paredestile.png',32,32);
       

        game.load.image('balao', 'data/ui/balao.png');
        game.load.image('btnClose', 'data/ui/btnClose.png');
        game.load.image('slot', 'data/ui/slot.png');

        game.load.spritesheet('hero', 'data/player/player.png',32,32,12);



        game.load.spritesheet('guardaMulher', 'data/npc/guarda/mulher.png',32,32,12);
        game.load.spritesheet('guardaHomem', 'data/npc/guarda/homem.png',32,32,12);

        game.load.spritesheet('vendedorMulher', 'data/npc/vendedor/vendedorMulher.png',32,32,12);
        game.load.spritesheet('vendedorHomem', 'data/npc/vendedor/vendedorHomem.png',32,32,12);
        game.load.spritesheet('mercadonegro', 'data/npc/vendedor/mercadonegro.png',32,32,12);

    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        tiggerInteracao = true;
        travaMenu = true;
        falasJSON = game.cache.getJSON('falas');
        
        this.map = game.add.tilemap('cidade');

        this.map.addTilesetImage('city_outside');
        this.map.addTilesetImage('paredestile'); 
        this.map.addTilesetImage('florest');
        this.map.addTilesetImage('terrain'); 
        this.map.addTilesetImage('base');
        
        
        //this.map.addTilesetImage('guardaHomem');
        //this.map.addTilesetImage('guardaMulher');

        //this.map.addTilesetImage('vendedorHomem');
        //this.map.addTilesetImage('vendedorMulher');
        //this.map.addTilesetImage('mercado');

        this.layer = this.map.createLayer('baixo');
        this.collidelayer = this.map.createLayer('collidelayer');
        
        this.layer.resizeWorld();
        this.collidelayer.resizeWorld();

        this.map.setCollisionBetween(0,5000,true,this.collidelayer);

       
        this.player = new Player('hero', 620 ,1400);
        // para quando o player entrar da casa
        playerStart.x = 0;
        playerStart.y = 0;
        
        this.npcs = game.add.group();
        this.npcs.add(NpcGuardas(this.map));
        this.npcs.add(NpcPortas(this.map));
        this.npcs.add(NpcVendedores(this.map));

        this.cima = this.map.createLayer('cima');
        
        this.cima.resizeWorld();
        this.interface = new UserInterface(game,400,300);

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        game.physics.arcade.collide(this.player, this.npcs.children[0]);
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);//guardas
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[1],interacao);//Portas
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[2],interacao);//vendedores

        this.interface.Carregar();       
       
    },
    render:function()
    {
        //game.debug.body(this.player);
        game.debug.body(this.npcs.children[2].children[1]);
        game.debug.body(this.npcs.children[2].children[2]);
        game.debug.body(this.npcs.children[2].children[0]);
        
        


    }


}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// CASA 7 (palacio)
casa7 = {
    preload: function() {
        game.load.tilemap('casa7', 'data/json/casa7.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.spritesheet('city_inside', 'data/tileds/city_inside.png',32,32);
    
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        tiggerInteracao = true;
        falasJSON = game.cache.getJSON('falas');
        
        this.map = game.add.tilemap('casa7');

        this.map.addTilesetImage('city_outside');
        this.map.addTilesetImage('city_inside');   

        this.layer = this.map.createLayer('baixo');
        this.collidelayer = this.map.createLayer('collidelayer');
        this.solo = this.map.createLayer("solo");

        this.layer.resizeWorld();
        this.collidelayer.resizeWorld();
        this.solo.resizeWorld();

        this.map.setCollisionBetween(0,500,true,this.collidelayer);
        this.map.setCollisionBetween(0,500,true,this.solo);
       
        this.player = new Player('hero', 788 ,742);
        // para quando o player sair da casa
        playerStart.x = 267;
        playerStart.y = 1143;
        playerStart.frame = 1

        this.saida = NpcSaida(this.map,'cidade');
        /*
        this.npcs = game.add.group();
        this.npcs.add(NpcGuardas(this.map));
         */


        //this.cima = this.map.createLayer('cima');
        
        //this.cima.resizeWorld();
        this.interface = new UserInterface(game,400,300);

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        //game.physics.arcade.collide(this.player, this.npcs.children[0]);
        //game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);
        game.physics.arcade.overlap(this.player, this.saida,autoInteracao);

        this.interface.Carregar();

       
    },
    render:function()
    {
        //game.debug.body(this.player);
        //game.debug.body(this.player.children[0]);

    }


}

// /// // /// /// /// /// /// /// 0/// 0/// 
casa0 = {
    preload: function() {
        game.load.tilemap('casa0', 'data/json/casa0.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.spritesheet('city_inside', 'data/tileds/city_inside.png',32,32);
    
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        tiggerInteracao = true;
        falasJSON = game.cache.getJSON('falas');
        
        this.map = game.add.tilemap('casa0');

        this.map.addTilesetImage('city_outside');
        this.map.addTilesetImage('city_inside');   

        this.layer = this.map.createLayer('baixo');
        this.collidelayer = this.map.createLayer('collidelayer');
        

        this.layer.resizeWorld();
        this.collidelayer.resizeWorld();
        

        this.map.setCollisionBetween(0,500,true,this.collidelayer);
        this.map.setCollisionBetween(0,500,true,this.solo);
       
        this.player = new Player('hero', 620 , 580);
        // para quando o player sair da casa
        playerStart.x = 428;
        playerStart.y = 1041;
        playerStart.frame = 1

        this.saida = NpcSaida(this.map,'cidade');
        /*
        this.npcs = game.add.group();
        this.npcs.add(NpcGuardas(this.map));
         */


        this.cima = this.map.createLayer('cima');
        
        this.cima.resizeWorld();
        this.interface = new UserInterface(game,400,300);

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        //game.physics.arcade.collide(this.player, this.npcs.children[0]);
        //game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);
        game.physics.arcade.overlap(this.player, this.saida,autoInteracao);

        this.interface.Carregar();

       
    },
    render:function()
    {
        //game.debug.body(this.player);
        //game.debug.body(this.player.children[0]);

    }


}


// /// // /// /// /// /// /// /// 1/// 1/// 
casa1 = {
    preload: function() {
        game.load.tilemap('casa1', 'data/json/casa1.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.spritesheet('city_inside', 'data/tileds/city_inside.png',32,32);
    
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        tiggerInteracao = true;
        falasJSON = game.cache.getJSON('falas');
        
        this.map = game.add.tilemap('casa1');

        this.map.addTilesetImage('city_outside');
        this.map.addTilesetImage('city_inside');   

        this.layer = this.map.createLayer('baixo');
        this.collidelayer = this.map.createLayer('collidelayer');
        

        this.layer.resizeWorld();
        this.collidelayer.resizeWorld();
        

        this.map.setCollisionBetween(0,500,true,this.collidelayer);
        this.map.setCollisionBetween(0,500,true,this.solo);
       
        this.player = new Player('hero', 127 , 417);
        // para quando o player sair da casa
        playerStart.x = 1093;
        playerStart.y = 880;
        playerStart.frame = 1;

        this.saida = NpcSaida(this.map,'cidade');
        /*
        this.npcs = game.add.group();
        this.npcs.add(NpcGuardas(this.map));
         */


        this.cima = this.map.createLayer('cima');
        
        this.cima.resizeWorld();
        this.interface = new UserInterface(game,400,300);

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        //game.physics.arcade.collide(this.player, this.npcs.children[0]);
        //game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);
        game.physics.arcade.overlap(this.player, this.saida,autoInteracao);

        this.interface.Carregar();

       
    },
    render:function()
    {
        //game.debug.body(this.player);
        //game.debug.body(this.player.children[0]);

    }


}