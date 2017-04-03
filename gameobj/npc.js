var NpcGuardas  = function(map)
{
    guard = game.add.group();
    guard.enableBody = true;

        // 000
    map.createFromObjects('npcs', 702, 'guardaHomem', 1, true, false, guard);
    map.createFromObjects('npcs', 690, 'guardaMulher', 1, true, false, guard);
    
    guard.setAll('body.immovable', true);


    return guard;
    

}

