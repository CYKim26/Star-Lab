let bg
let starFill

function setup() {
  createCanvas(400, 400)
  changeBGColor()
  starFill = randomColor() 
  fill(starFill)
  noStroke() 
  star = createStar()
}

function draw() {
  background(bg) 
  // Task 2: create an object, and an accompanying function, that allows for 
  //   "breathing a variable" (having it fluctuate within a given range by
  //   a given step). 
  // Alternate Task 2: implement breathing of the inner and outer radii
  //   through the use of trigonometric functions (like sin or cos). Remember 
  //   that these functions, by default, are in radians [0,TWO_PI]
  drawStar(star)
  breathe(star, 1)
}

// Task 1: parameterize this function for inner and outer radii and number of sides
function createStar( mx = width/2, my = height/2, ir = 50, or = 100, numberOfSides = 7) {
  let star = {}
  star.np = numberOfSides * 2
  star.the = 0
  star.dt = TWO_PI/star.np
  star.ir = ir
  star.or = or
  star.mx = mx
  star.my = my
  star.breathStep = 1
  return star
}

function breathe(star) {

  star.or += star.breathStep
  if (star.or >= 125 || star.or <=75) {
    star.breathStep*=-1
  }
  
}
function drawStar(star) {
  
  beginShape()
  for( let i = 0; i < star.np; i++ ) {
    if( i % 2 === 0 ) {
      vertex( star.mx + star.ir*cos(star.the + star.dt * i), star.my + star.ir*sin(star.the + star.dt * i ) )
    } else {
      vertex( star.mx + star.or*cos(star.the + star.dt * i), star.my + star.or*sin(star.the + star.dt * i ) )
    }
  } 
  endShape()
}

function randomColor(avenues=true) {
  if( avenues ) {
    return color(randomAvenuesColor())
  } else {
    return color(random(255),random(255),random(255))
  }

}

function changeBGColor(avenues=true) {
  bg = randomColor(avenues)
}

function keyPressed() {
  if( key === 'b' ) {
    changeBGColor()
  }
}

// Hex Codes for the Official Avenues Colors 
const colors = { // const instead of let
  white: "#ffffff",
  black: "#000000",
  ash: "#B7B09C", 
  ochre: "#D3AE6F",
  indigo: "#3D68B2",
  moss: "#267355",
  pristineBlue: "#44C3D4",
  violet: "#9796C9",
  nimbus: "#CAC3BC",
  pistachio: "#C5D982",
  olive: "#8A916A",
  terracotta: "#C17E60",
  gold: "#F5CD64",
  clay: "#C3411E",
  grass: "#0D9A48",
  navy: "#273879"
}

function randomAvenuesColor() {
  return random(Object.values(colors))
}
