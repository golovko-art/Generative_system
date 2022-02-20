const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)
  background(230)
  colorMode(HSL);

  PALETTE = [
    color(300, 100, 50), //pink
    color(230, 100, 30), //blue
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  const circles = new Circles() 
  circles.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outLineShape = new OutLineShape()
  outLineShape.render()

  testLines()
}
