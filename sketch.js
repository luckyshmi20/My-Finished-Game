var input
var button
var login

var wrongans1 = true
var rightans1 = true

var wronganswer2 = true
var rightans2 = true

var wronganswer3 = true
var rightans3 = true

var wronganswer4 = true
var rightans4 = true

var wronganswer5 = true
var rightans5 = true

var score = 0
var returnh

function setup(){
  createCanvas(1580,710); 
  //  background("lilac");

  push();
  textSize(80);
  fill("black");
  textStyle(ITALIC);
  text("Welcome to the general knowledge quiz", 80, 90);
  pop();

  textSize(25);
  fill("black");
  text("Please enter your name:", 380, 310);
   
  login = createInput("");
  login.style('color',"blue");
  login.position(700,300,30,30);
    
  button = createButton("Start the game");
  button.style('color',"green");
  button.style('background-color',"white");
  button.style('font-size',"24px");
  button.position(700,400,90,90);
  button.mousePressed(()=>{
  name1=login.value()
  if(name1 == ""){
    alert("Please enter a name");
  }
  else{
    button.mousePressed(Question1);
  }
  })

}

function Question1(){
    background("lilac");
    login.hide();
    button.hide();
    q1 = createElement("h1");
    q1.html("Q1. Who is the prime minister in the UK?");
    q1.style('color', "green");
    q1.position(40,40);

    q1a = createButton("Theresa May");
    q1a.style('color',"blue");
    q1a.style('background-color',"white");
    q1a.style('font-size',"24px");
    q1a.position(80,120);

    q1a.mousePressed(q1Option1);

    q1b = createButton("Boris Johnson");
    q1b.style('color',"blue");
    q1b.style('background-color',"white");
    q1b.style('font-size',"24px");
    q1b.position(80,170);

    q1b.mousePressed(q1Option2);

    q1c = createButton("Rishi Sunak");
    q1c.style('color',"blue");
    q1c.style('background-color',"white");
    q1c.style('font-size',"24px");
    q1c.position(80,220);

    q1c.mousePressed(q1Option3);

    q1d = createButton("Clement Atlee");
    q1d.style('color',"blue");
    q1d.style('background-color',"white");
    q1d.style('font-size',"24px");
    q1d.position(80,270);

    q1d.mousePressed(q1Option4);

    next = createButton("Continue to the next question!");
    next.style('color',"blue");
    next.style('background-color',"white");
    next.style('font-size',"24px");
    next.position(80,400);

    next.mousePressed(Question2);

}

function q1Option1(){
  q1a.style("background-color", "red");
  q1c.style("background-color", "green");

  wrongans1 = createElement("h1");
  wrongans1.html("Your answer was incorrect. The correct option was c.");
  wrongans1.style('color', "green");
  wrongans1.position(40,330);
}

function q1Option2(){
  q1b.style("background-color", "red");
  q1c.style("background-color", "green");

  wrongans1 = createElement("h1");
  wrongans1.html("Your answer was incorrect. The correct option was c.");
  wrongans1.style('color', "green");
  wrongans1.position(40,330);
}

function q1Option3(){
  q1c.style("background-color", "green");

  rightans1 = createElement("h1");
  rightans1.html("Your answer was correct. Well Done!!");
  rightans1.style('color', "green");
  rightans1.position(40,330);
  score +=1; 
}

function q1Option4(){
  q1d.style("background-color", "red");
  q1c.style("background-color", "green");

  wrongans1 = createElement("h1");
  wrongans1.html("Your answer was incorrect. The correct option was c.");
  wrongans1.style('color', "green");
  wrongans1.position(40,330);
}

function Question2(){
  background("white");
  q1.hide();
  q1a.hide();
  q1b.hide();
  q1c.hide();
  q1d.hide();
  next.hide();
  
  if(wrongans1.show){
    wrongans1.hide();
  }
  if(rightans1.show){
    rightans1.hide();
  }
  
  q2 = createElement("h1");
  q2.html("Q2. What is actually electricity?");
  q2.style('color', "green");
  q2.position(40,40);

  q2a = createButton("A flow of electrons");
  q2a.style('color',"blue");
  q2a.style('background-color',"white");
  q2a.style('font-size',"24px");
  q2a.position(80,120);

  q2a.mousePressed(q2Option1);

  q2b = createButton("A flow of water");
  q2b.style('color',"blue");
  q2b.style('background-color',"white");
  q2b.style('font-size',"24px");
  q2b.position(80,170);

  q2b.mousePressed(q2Option2);

  q2c = createButton("A flow of air");
  q2c.style('color',"blue");
  q2c.style('background-color',"white");
  q2c.style('font-size',"24px");
  q2c.position(80,220);

  q2c.mousePressed(q2Option3);

  q2d = createButton("a flow of current");
  q2d.style('color',"blue");
  q2d.style('background-color',"white");
  q2d.style('font-size',"24px");
  q2d.position(80,270);

  q2d.mousePressed(q2Option4);

  next2 = createButton("Continue to the next question!");
  next2.style('color',"blue");
  next2.style('background-color',"white");
  next2.style('font-size',"24px");
  next2.position(80,400);

  next2.mousePressed(Question3);
}

function q2Option1(){
  q2a.style("background-color", "green");

  rightans2 = createElement("h1");
  rightans2.html("Your answer was correct. Well Done!!.");
  rightans2.style('color', "green");
  rightans2.position(40,330);
  score +=1; 
}

function q2Option2(){
  q2b.style("background-color", "red");
  q2a.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was incorrect. The correct option was a.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}

function q2Option3(){
  q2c.style("background-color", "red");
  q2a.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was incorrect. The correct option was a.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}

function q2Option4(){
  q2d.style("background-color", "red");
  q2a.style("background-color", "green");

  wronganswer2 = createElement("h1");
  wronganswer2.html("Your answer was incorrect. The correct option was a.");
  wronganswer2.style('color', "green");
  wronganswer2.position(40,330);
}

function Question3(){
  background("white");
  q2.hide();
  q2a.hide();
  q2b.hide();
  q2c.hide();
  q2d.hide();
  next2.hide();
  
  if(wronganswer2.show){
    wronganswer2.hide();
  }
  if(rightans2.show){
    rightans2.hide();
  }
  
  q3 = createElement("h1");
  q3.html("Q3. Which of the following disorders is the fear of being alone?");
  q3.style('color', "green");
  q3.position(40,40);

  q3a = createButton("Aerophobia");
  q3a.style('color',"blue");
  q3a.style('background-color',"white");
  q3a.style('font-size',"24px");
  q3a.position(80,120);

  q3a.mousePressed(q3Option1);

  q3b = createButton("Agoraphobia");
  q3b.style('color',"blue");
  q3b.style('background-color',"white");
  q3b.style('font-size',"24px");
  q3b.position(80,170);

  q3b.mousePressed(q3Option2);

  q3c = createButton("Acrophobia");
  q3c.style('color',"blue");
  q3c.style('background-color',"white");
  q3c.style('font-size',"24px");
  q3c.position(80,220);

  q3c.mousePressed(q3Option3);

  q3d = createButton("Arachnophobia");
  q3d.style('color',"blue");
  q3d.style('background-color',"white");
  q3d.style('font-size',"24px");
  q3d.position(80,270);

  q3d.mousePressed(q3Option4);

  next3 = createButton("Continue to the next question!");
  next3.style('color',"blue");
  next3.style('background-color',"white");
  next3.style('font-size',"24px");
  next3.position(80,400);

  next3.mousePressed(Question4);
}

function q3Option1(){
  q3a.style("background-color", "red");
  q3b.style("background-color", "green");

  wronganswer3 = createElement("h1");
  wronganswer3.html("Your answer was incorrect. The correct option was b.");
  wronganswer3.style('color', "green");
  wronganswer3.position(40,330);
}

function q3Option2(){
  q3b.style("background-color", "green");

  rightans3 = createElement("h1");
  rightans3.html("Your answer was correct. Well Done!!.");
  rightans3.style('color', "green");
  rightans3.position(40,330);
  score +=1; 
}

function q3Option3(){
  q3c.style("background-color", "red");
  q3b.style("background-color", "green");

  wronganswer3 = createElement("h1");
  wronganswer3.html("Your answer was incorrect. The correct option was b.");
  wronganswer3.style('color', "green");
  wronganswer3.position(40,330);
}

function q3Option4(){
  q3d.style("background-color", "red");
  q3b.style("background-color", "green");

  wronganswer3 = createElement("h1");
  wronganswer3.html("Your answer was incorrect. The correct option was b.");
  wronganswer3.style('color', "green");
  wronganswer3.position(40,330);
}

function Question4(){
  background("white");

  q3.hide();
  q3a.hide();
  q3b.hide();
  q3c.hide();
  q3d.hide();
  next3.hide();
  
  if(wronganswer3.show){
    wronganswer3.hide();
  }
  if(rightans3.show){
    rightans3.hide();
  }
  
  q4 = createElement("h1");
  q4.html("Q4. What is the speed of sound?");
  q4.style('color', "green");
  q4.position(40,40);

  q4a = createButton("120 km/h");
  q4a.style('color',"blue");
  q4a.style('background-color',"white");
  q4a.style('font-size',"24px");
  q4a.position(80,120);

  q4a.mousePressed(q4Option1);

  q4b = createButton("400 km/h");
  q4b.style('color',"blue");
  q4b.style('background-color',"white");
  q4b.style('font-size',"24px");
  q4b.position(80,170);

  q4b.mousePressed(q4Option2);

  q4c = createButton("1,200 km/h");
  q4c.style('color',"blue");
  q4c.style('background-color',"white");
  q4c.style('font-size',"24px");
  q4c.position(80,220);

  q4c.mousePressed(q4Option3);

  q4d = createButton("700 km/h");
  q4d.style('color',"blue");
  q4d.style('background-color',"white");
  q4d.style('font-size',"24px");
  q4d.position(80,270);

  q4d.mousePressed(q4Option4);

  next4 = createButton("Continue to the next question!");
  next4.style('color',"blue");
  next4.style('background-color',"white");
  next4.style('font-size',"24px");
  next4.position(80,400);

  next4.mousePressed(Question5);
}

function q4Option1(){
  q4a.style("background-color", "red");
  q4c.style("background-color", "green");

  wronganswer4 = createElement("h1");
  wronganswer4.html("Your answer was incorrect. The correct option was c.");
  wronganswer4.style('color', "green");
  wronganswer4.position(40,330);
}

function q4Option2(){
  q4b.style("background-color", "red");
  q4c.style("background-color", "green");

  wronganswer4 = createElement("h1");
  wronganswer4.html("Your answer was incorrect. The correct option was c.");
  wronganswer4.style('color', "green");
  wronganswer4.position(40,330);
}

function q4Option3(){
  q4c.style("background-color", "green");

  rightans4 = createElement("h1");
  rightans4.html("Your answer was correct. Well Done!!.");
  rightans4.style('color', "green");
  rightans4.position(40,330);
  score +=1; 
}

function q4Option4(){
  q4d.style("background-color", "red");
  q4c.style("background-color", "green");

  wronganswer4 = createElement("h1");
  wronganswer4.html("Your answer was incorrect. The correct option was c.");
  wronganswer4.style('color', "red");
  wronganswer4.position(40,330);
}

function Question5(){
  background("white");

  q4.hide();
  q4a.hide();
  q4b.hide();
  q4c.hide();
  q4d.hide();
  next4.hide();
  
  if(wronganswer4.show){
    wronganswer4.hide();
  }
  if(rightans4.show){
    rightans4.hide();
  }
  
  q5 = createElement("h1");
  q5.html("Q5. What is the speed of sound?");
  q5.style('color', "green");
  q5.position(40,40);

  q5a = createButton("120 km/h");
  q5a.style('color',"blue");
  q5a.style('background-color',"white");
  q5a.style('font-size',"24px");
  q5a.position(80,120);

  q5a.mousePressed(q5Option1);

  q5b = createButton("400 km/h");
  q5b.style('color',"blue");
  q5b.style('background-color',"white");
  q5b.style('font-size',"24px");
  q5b.position(80,170);

  q5b.mousePressed(q5Option2);

  q5c = createButton("1,200 km/h");
  q5c.style('color',"blue");
  q5c.style('background-color',"white");
  q5c.style('font-size',"24px");
  q5c.position(80,220);

  q5c.mousePressed(q5Option3);

  q5d = createButton("700 km/h");
  q5d.style('color',"blue");
  q5d.style('background-color',"white");
  q5d.style('font-size',"24px");
  q5d.position(80,270);

  q5d.mousePressed(q5Option4);

  next5 = createButton("Well Done!! You have completed the quiz.");
  next5.style('color',"blue");
  next5.style('background-color',"white");
  next5.style('font-size',"24px");
  next5.position(80,400);

  next5.mousePressed(lastPage);
}

function q5Option1(){
  q5a.style("background-color", "green");

  rightans5 = createElement("h1");
  rightans5.html("Your answer was correct. Well Done!!.");
  rightans5.style('color', "green");
  rightans5.position(40,330);
  score +=1; 
}

function q5Option2(){
  q5b.style("background-color", "red");
  q5a.style("background-color", "green");

  wronganswer5 = createElement("h1");
  wronganswer5.html("Your answer was incorrect. The correct option was a.");
  wronganswer5.style('color', "green");
  wronganswer5.position(40,330);
}

function q5Option3(){
  q5c.style("background-color", "red");
  q5a.style("background-color", "green");

  wronganswer5 = createElement("h1");
  wronganswer5.html("Your answer was incorrect. The correct option was a.");
  wronganswer5.style('color', "green");
  wronganswer5.position(40,330);
}

function q5Option4(){
  q5d.style("background-color", "red");
  q5a.style("background-color", "green");

  wronganswer5 = createElement("h1");
  wronganswer5.html("Your answer was incorrect. The correct option was a.");
  wronganswer5.style('color', "green");
  wronganswer5.position(40,330);
}

function lastPage(){
  q5.hide();
  q5a.hide();
  q5b.hide();
  q5c.hide();
  q5d.hide();
  next5.hide();
  
  if(wronganswer5.show){
    wronganswer5.hide();
  }
  if(rightans5.show){
    rightans5.hide();
  }

  textSize(80);
  fill("black");
  text("Your final score is: " +score,425,100);

  if(score >= 3){
  textSize(80);
  fill("green");
  text("Congratulations!! You did really well ",150,200);
  }
  else{
  textSize(80);
  fill("red");
  text("Perhaps you should retake the quiz... ",150,200);
  }
}