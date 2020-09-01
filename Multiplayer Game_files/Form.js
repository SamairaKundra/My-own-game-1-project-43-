class Form {

  constructor() {
    this.input = createInput();
    this.button = createButton('Press this button if you dare (But I warned you)');
    this.name = createElement('h2');
    this.nameP2 = createElement('h2');
  
    
  }
  hide(){
    this.name.hide();
    this.nameP2.hide();
    this.button.hide();
    this.input.hide();
    
  }
  display(){
    background(bg);
    textSize(100);
    fill("black");
    text("Drone Buster",displayWidth/2-50,200);
    textSize(20);
    text("This game’s name is the drone buster video game",displayWidth/2-710,20);
    text("You have to press the the play button to go to the next page",displayWidth/2-710,50);
    text("but before doing that don’t forget to enter your name.",displayWidth/2-710,80) ;
    text("The rules of the game will be shown on the next page",displayWidth/2-710,110);
    text("so enjoy yourself and prepare yourself",displayWidth/2-710,140);
    text("and I hope you will like this game",displayWidth/2-710,170);
    this.name.html("Enter your name");
    this.nameP2.html("to play the game:");
    this.name.position(displayWidth/2+200,300);
    this.nameP2.position(displayWidth/2+200,330);
    this.button.position(displayWidth/2-390,500);
    this.input.position(displayWidth/2+390,356);
 
  this.button.mousePressed(()=>{
    //this.name.hide();
    this.nameP2.hide();
    //this.button.hide();
    //this.input.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  });
}

}  
 

