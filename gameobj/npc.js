
NpcGuardas  = function(map)
{
    guard = game.add.group();
    guard.enableBody = true;

        // 000
    map.createFromObjects('npcs', 702, 'guardaHomem', 1, true, false, guard);
    map.createFromObjects('npcs', 690, 'guardaMulher', 1, true, false, guard);
    
    guard.setAll('body.immovable', true);


    return guard;
    

}
NpcPortas  = function(map)
{
    guard = game.add.group();
    guard.enableBody = true;

        // 000
    map.createFromObjects('npcs', 46, 'city_outside', 46, true, false, guard);
    map.createFromObjects('npcs', 139, 'city_outside', 139, true, false, guard);
    
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
    map.createFromObjects('npcs', 714, 'vendedorMulher', 1, true, false, guard);
    map.createFromObjects('npcs', 726, 'vendedorHomem', 1, true, false, guard);
    map.createFromObjects('npcs', 738, 'mercadonegro', 1, true, false, guard);

    guard.setAll('body.immovable', true);


    for (var i=0;i < guard.children.length; i++) {
        guard.children[i].name = 'vendedor'+ i;
        guard.children[i].body.setSize(76,96,-16,-16);
        if(   guard.children[i].key == 'mercadonegro' ) guard.children[i].name = 'vendedor'+ i;
    }

    return guard;

}