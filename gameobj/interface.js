function UserInterface(game,x,y){
	ui = this;
	
    this.Menu = game.add.sprite(x,y,'balao');// background 
		this.Menu.scale.setTo(0.7);    
        this.Menu.anchor.setTo(0.5);
        this.Menu.fixedToCamera = true; 
		
	// fechar o inventario
	btnClose = (game.add.button(10-(this.Menu.width/2),10-(this.Menu.height/2),'btnClose',ui.closeMenu,this,0,0,1));  
            btnClose.anchor.setTo(0.5);
            
            btnClose.fixedToCamera = true; 
		this.Menu.addChild(btnClose);
	
	//Title
	menuName = game.add.text(0,10-(this.Menu.height/2),"Inventario",style);
            menuName.anchor.set(0.5);
            menuName.fixedToCamera =true;
		this.Menu.addChild(menuName);
	
	
	
	
	this.Menu.kill();
    this.menuisClose = true;

};

UserInterface.prototype.constructor = UserInterface;

UserInterface.prototype.open = function(Itens)
{  
    if(this.menuisClose){
       
		this.Menu.revive();   		
    
        this.menuisClose = false;
	}
};


UserInterface.prototype.closeMenu = function()
{
    this.Menu.kill();
    this.menuisClose = true;
};

UserInterface.prototype.Carregar = function(){
     if(game.input.keyboard.isDown(Phaser.Keyboard.X) && travaMenu){
                if (this.interface.menuisClose)this.interface.open([]);
                else this.interface.closeMenu();
                travaMenu = false;            
            }else if(!game.input.keyboard.isDown(Phaser.Keyboard.X)) travaMenu = true ;
}