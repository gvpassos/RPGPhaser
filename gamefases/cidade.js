var key1,
    tiggerInteracao,
    falasJSON;
cidade = {
    preload: function() {
        game.load.json('falas', 'data/json/falas.json');
        game.load.tilemap('cidade', 'data/json/cidade.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.spritesheet('city_outside', 'data/tileds/city_outside.png',32,32);
        game.load.image('floresta', 'data/tileds/2rdi8gz.png');

        game.load.image('balao', 'data/ui/balao.png');

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
        falasJSON = game.cache.getJSON('falas');
        
        this.map = game.add.tilemap('cidade');

        this.map.addTilesetImage('city_outside');
        this.map.addTilesetImage('floresta');   
        
        //this.map.addTilesetImage('guardaHomem');
        //this.map.addTilesetImage('guardaMulher');

        //this.map.addTilesetImage('vendedorHomem');
        //this.map.addTilesetImage('vendedorMulher');
        //this.map.addTilesetImage('mercado');

        this.layer = this.map.createLayer('baixo');
        this.collidelayer = this.map.createLayer('collidelayer');
        
        this.layer.resizeWorld();
        this.collidelayer.resizeWorld();

        this.map.setCollisionBetween(0,500,true,this.collidelayer);

       
        this.player = new Player('hero', 700 ,1400);
        // para quando o player entrar da casa
        playerStart.x = 0;
        playerStart.y = 0;
        
        this.npcs = game.add.group();
        this.npcs.add(NpcGuardas(this.map));
        this.npcs.add(NpcPortas(this.map));
        this.npcs.add(NpcVendedores(this.map));

        this.cima = this.map.createLayer('cima');
        
        this.cima.resizeWorld();
        

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        game.physics.arcade.collide(this.player, this.npcs.children[0]);
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);//guardas
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[1],interacao);//Portas
        game.physics.arcade.overlap(this.player.children[0], this.npcs.children[2],interacao);//vendedores

       
    },
    render:function()
    {
        //game.debug.body(this.player);
        game.debug.body(this.npcs.children[2].children[1]);
        game.debug.body(this.npcs.children[2].children[2]);
        game.debug.body(this.npcs.children[2].children[0]);
        
        


    }


}
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
    },

    update: function() {
        game.physics.arcade.collide(this.player, this.collidelayer);
        //game.physics.arcade.collide(this.player, this.npcs.children[0]);
        //game.physics.arcade.overlap(this.player.children[0], this.npcs.children[0],interacao);
        game.physics.arcade.overlap(this.player, this.saida,interacao);

       
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
        
        if (npc.key.match(/guarda.*/)) balaoDialogo(eval("falasJSON."+npc.key));
        else if(npc.name.match(/casa.*/)) game.state.start(npc.name);
        else if(npc.name.match(/vendedor.*/) || npc.name.match(/mercadon.*/)) {
            if(balaoDialogo(eval("falasJSON."+npc.key))){
                console.log("ue cade a loja");
            }
        }

        tiggerInteracao = false;

    }else if(key1.isUp) tiggerInteracao = true;

    if(npc.name.match(/saida.*/)){

        game.state.start(npc.name.split('saida')[1]);
    }
}