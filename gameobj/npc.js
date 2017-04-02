var NpcGuardas  = function(map)
{
    coins = game.add.group();
    coins.enableBody = true;

        // 000
    map.createFromObjects('npcs', 702, 'guardaHomem', 1, true, false, coins);
    map.createFromObjects('npcs', 690, 'guardaMulher', 1, true, false, coins);
    
    coins.callAll('body.immobable',);


    
    

}

