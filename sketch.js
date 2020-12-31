let dino;
let dImg;
let cImg;
let bImg;
let cacti = [];
let graceModeActive = false;
let life = 5;
let lifeCounter;


function preload() {
  dImg = loadImage('dino.png');
  cImg = loadImage('cactus.png');
  bImg = loadImage('desert.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight)
  dino = new Dino();
  
   lifeCounter = createDiv('Life = ' + life);
   lifeCounter.position(20,20);
   lifeCounter.id = 'life';
   lifeCounter.style('color','purple');
}

function keyPressed() {
  if (key == ' ') {
    dino.jump();
  }
}
this.hits = function(dino){
  if (graceModeActive){
    return;
  }
  if (dino.hits(c)){
    this.highlight = true;
            life--;
            graceModeActive = true;
            setTimeout(function(){
                graceModeActive = false;
                
                },2000);
            return true;
  }
  this.highlight = false;
    return false;
}

function draw() {
  
  
  if (random(1) < 0.005) {
    cacti.push(new Cactus());
  }    
   
  background(bImg);
  for (let c of cacti){
    c.move(); 
    c.show();
   
  if (dino.hits(c)&&!c.hit) {
    c.hit=true;
    --life;
    lifeCounter.elt.innerHTML = `Life = ${life}`;
    console.log('Game Over!');
  }
   
    //noLoop();
   
  
  
  dino.show();
  dino.move();
  //noLoop();
  //{
    //background(220);
        //fill(255, 0, 255);
        //noStroke();
		//textAlign(LEFT);
        //ellipse(x, y, radius*2, radius*2);
		//text("Life: " + life, 20, 20);
  //}  
  
  
  }
  
  
} 

