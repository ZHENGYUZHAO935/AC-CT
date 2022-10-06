let gridstep = 50
let cRadius = gridstep * 0.37
function setup() {
  createCanvas(800, 600)
  colorMode(HSB, width, 100,100)
  
  
}
function draw() {
     background(180,200,127)
 //showGrid()

  noStroke()
  for(let x = 0; x < width/gridstep; x ++){
    for (let y =0; y < height/gridstep; y ++){
      let posX = (x * gridstep) + (gridstep * 0.5)
      let posY = (y * gridstep) + (gridstep * 0.5)
      
      posX += random(-2,2)
      posY += random(-2,2)
      
      fill(posX, 80,80)
      circle (posX,posY,cRadius*2)
    }
  }
}
function showGrid(){
   for(let x = 0; x < width; x = x+gridstep ){
    line (x, 0, x, height)
  }
  for(let y = 0; y < height; y +=gridstep){
    line(0, y, width,y);
  }
}