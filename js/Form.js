class Form {

  constructor() {
    this.input = createInput();
    this.button = createButton('Press this button if you dare (But I warned you)');

    this.name = createElement('h2');
    this.nameP2 = createElement('h2');

    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2')

    this.saying1 = createElement('h2');
    this.saying2 = createElement('h2');
    this.saying3 = createElement('h2');
     
    this.instruction = createElement('h1');

  
    
    
  }
  hide(){
    this.name.hide();
    this.nameP2.hide();
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
    this.greeting2.hide();
    this.saying1.hide();
    this.saying2.hide();
    this.saying3.hide(); 
    this.instruction.hide();
   
  }
  display(){
    background(bg);
    textSize(100);
    fill("black");
    text("Drone Buster",displayWidth/2-50,100);

    this.saying1.html("Write your name");
    this.saying2.html("and press the button");
    this.saying3.html("to play the game");

    this.instruction.html("INSTRUCTION");

    this.name.html("Enter your name");
    this.nameP2.html("to play the game:");

    this.name.position(displayWidth/2+200,300);
    this.nameP2.position(displayWidth/2+200,330);

    this.button.position(displayWidth/2-390,500);
    this.input.position(displayWidth/2+390,356);

    this.saying1.position(displayWidth/2-700,100);
    this.saying2.position(displayWidth/2-700,130);
    this.saying3.position(displayWidth/2-700,160);
    
    
    this.instruction.position(displayWidth/2-700,50);
    
    
 
  this.button.mousePressed(()=>{
    this.name.hide();
    this.nameP2.hide();
    this.button.hide();
    this.input.hide();
    this.saying1.hide();
    this.saying2.hide();
    this.saying3.hide();
    this.instruction.hide();

   

   
     
    //this.greeting.html("Hello! Well I see you have pressed the button.");
    //this.greeting2.html("Well now you got to read the rules to play the game");
    
    //this.greeting.position(displayWidth/2-350,450);
    //this.greeting2.position(displayWidth/2-350,480);
  });
}

}  
 

