
NpcGuardas  = function(map)
{
    guard = game.add.group();
    guard.enableBody = true;

        // 000
    map.createFromObjects('npcs', 2914, 'guardaHomem', 1, true, false, guard);
    map.createFromObjects('npcs', 2902, 'guardaMulher', 1, true, false, guard);
    
    guard.setAll('body.immovable', true);


    return guard;
    

}
NpcPortas  = function(map)
{
    guard = game.add.group();
    guard.enableBody = true;

        // 000
    map.createFromObjects('npcs', 1454, 'city_outside', 46, true, false, guard);  
    map.createFromObjects('npcs', 1742, 'city_outside', 333, true, false, guard);  
     
    
    guard.setAll('body.immovable', true);

    for (var i=0;i < guard.children.length; i++) {
    	guard.children[i].name = 'casa'+ i;
    }

    return guard;
    

}

NpcVendedores = function (map) {

    guard = game.add.group();
    guard.enableBody = true;

    // 000
    map.createFromObjects('npcs', 2890, 'vendedorMulher', 1, true, false, guard);
    map.createFromObjects('npcs', 2878, 'vendedorHomem', 1, true, false, guard);
    map.createFromObjects('npcs', 2866, 'mercadonegro', 1, true, false, guard);

    guard.setAll('body.immovable', true);


    for (var i=0;i < guard.children.length; i++) {
        guard.children[i].name = 'vendedor'+ i;
        guard.children[i].body.setSize(76,96,-16,-16);
        if(   guard.children[i].key == 'mercadonegro' ) guard.children[i].name = 'vendedor'+ i;
    }

    return guard;
}

var NpcSaida =function (map,lugar) {
    guard = game.add.group();
    guard.enableBody = true;

    // PONT0
    map.createFromObjects('npcs', 717, 'city_inside', 138, true, false, guard);


    guard.setAll('body.immovable', true);

    for (var i=0;i < guard.children.length; i++) {
        guard.children[i].name = "saida"+lugar;
    }

    return guard;
}
