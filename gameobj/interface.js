function criarConversa(npc,index) {
    var controle;
    if ( typeof(falasJSON[npc.name]) ===   "undefined" ) controle = npc.key;
    else controle = npc.name;

    if(index >= falasJSON[controle].length) {
        interface.style.display = "none";
        game.paused = false;
        return true;
        tiggerInteracao = false;
    }

    interface.style.display = "block";

    

        interface.innerHTML =   "<div class='balao'>"+ falasJSON[controle][index]+"</div>";



        document.addEventListener("keydown", function(key)
        {
            

            
            if(key.keyCode == 90 || key.keyCode == 13){
                criarConversa(npc,index+1);            

            }
        });
}



function carregarInterface(){

}


