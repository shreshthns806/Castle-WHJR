
function setup() {
  createCanvas(1200,500);
  createSprite(600, 480, 1200, 40);
}

function draw() {
  background(0);  
  
//Create Flag  
  
  //Pole
    strokeWeight(3);
    stroke(255);
    line(50,480,50,180);
  
  
  rectMode(CORNER);
   
  //Saffron
    fill(rgb(255,165,0))
    rect(50,180,90,20);
  
  //White
    fill(255);
    rect(50,200,90,20);
  
  //Green
    fill("green");
    rect(50,220,90,20)
  
  //Ashok Chakra
  fill("blue");
  
  circle(95,210,15)

  //Create First Building
  fill("orange");
stroke("orange")
    rect(280,160,80,300)
    triangle(280,160,360,160,315,80)
  
  //Create Second Building
fill("orange");
    rect(360,250,80,220);
  
    rectMode(CENTER);
    strokeWeight(0);
    rect(375,250,10,15);
    rect(400,250,10,15);
    rect(425,250,10,15);

  //Create Third Building
    rectMode(CORNER);
    fill("white");
    rect(440,160,150,345);
  //Create Door
    rectMode(CENTER);
    fill(rgb(193,154,107));
    rect(515,410,50,100) 
  //Create Fourth Building
  fill("green")
  rectMode(CORNER);
  rect(590,250,80,220);
  rectMode(CENTER);
  rect(605,250,10,15);
  rect(630,250,10,15);
  rect(655,250,10,15);
  //Create Fifth Building
  fill("green")
  rect(710,310,80,300)
  triangle(670,160,750,160,705,80)   
  drawSprites();
}