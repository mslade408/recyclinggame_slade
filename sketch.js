
let bg;
let glassbottle;
let bannana;
let can;
let leaves;
let pizzabox;
let plasticbottle;
let platicbag;
let styrofoam;
let vegies;
function preload() {
  bg = loadImage("background-1.jpg");
  glassbottle = loadImage("items/glass_bottle.png");
  bannana = loadImage("items/bannana.png");
  can = loadImage("items/can.png");
  leaves = loadImage("items/leaves.png");
  pizzabox = loadImage("items/pizzabox.png");
  plasticbottle = loadImage("items/plastic_bottle.png");
  plasticbag = loadImage("items/plasticbag.png");
  styrofoam = loadImage("items/styrofoam.png");
  veggies = loadImage("items/veggies.png");
}

let object1 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 67,
  display: function () {
    image(bannana, this.x, this.y, 90, 90);
    //or instead of shape, display image here
  },
};

let object2 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 82,
  display: function () {
    image(can, this.x, this.y, 120, 120);
  },
};

let object3 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 82,
  display: function () {
    image(glassbottle, this.x, this.y, 90, 90);
  },
};

let object4 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 67,
  display: function () {
    image(leaves, this.x, this.y, 120, 120);
  },
};
let object5 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 76,
  display: function () {
    image(pizzabox, this.x, this.y, 90, 90);
  },
};
let object6 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 82,
  display: function () {
    image(plasticbottle, this.x, this.y, 90, 90);
  },
};
let object7 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 76,
  display: function () {
    image(plasticbag, this.x, this.y, 90, 90);
  },
};
let object8 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 76,
  display: function () {
    image(styrofoam, this.x, this.y, 90, 90);
  },
};
let object9 = {
  on: true,
  x: 175,
  y: 75,
  theCode: 67,
  display: function () {
    image(veggies, 100, 50, 250, 250);
  },
};
let objects =[object1, object2, object3, object4, object5, object6, object7, object8, object9]
let objectIndex = 0
let cooldown = 0
let cooldownText =""



var clicks = 0;

function setup() {
  createCanvas(410, 410);
  
 
}

function draw() {
  background(bg);
  //text formatting
  noStroke();
  fill(255);
  textSize(80);
  textAlign(CENTER, CENTER);
  //displaying number of clicks
  text(clicks, 50, 40);
  
  if (cooldown>0){
    cooldown--
    if (cooldown==0){
      cooldownText=""
    }else{
      text(cooldownText,200,200)
    }
  }
  else if(objectIndex<objects.length){

    if (objects[objectIndex].on) {
      objects[objectIndex].display();
      // if (object2.on){
      //  object2.display();
    }
  }else{
    text('Game Over', 200, 200)
  }
}



function keyPressed() {
   console.log('press')
  console.log(keyCode)
  if( cooldown > 0){
    console.log("Ignored")

  }
  else if(objectIndex< objects.length){
    //check that keycode is correct for the one displayed
    if (objects[objectIndex].on) {
      if (keyCode === objects[objectIndex].theCode) {
        //fix to correct keycode
        //text("Correct", 200, 100);
        cooldownText = "Correct"
        cooldown = 100//how many frames
        objectIndex++
        clicks++;
      } else {
        //text("Wrong!", 200, 100);
        cooldownText = "Wrong"
        cooldown = 100
        objectIndex = objects.length
        //lose state
      }
    }
  }else{
    objectIndex = 0
    clicks = 0
    
  }

}
