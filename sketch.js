// P5.JS TEMPLATE

var frames1 // framecount for dash
var frames2 // framecount for attack
var frames3 // second framecount for attack
var attacks
var player

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 400)
    background("white")
    angleMode(DEGREES)

    frames1 = 0
    frames2 = 5
    frames3 = 0

    attacks = 0

    player = new Player()
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {


    background("white")
    frames1 += 1
    frames2 += 1
    frames3 += 1
    fill("black")
    text(attacks, 100, 100)
    text(frames3, 100, 160)

    player.move()
    player.show()
    player.crosshair()
    player.attack()


    // EVENT FUNCTIONS

}

function mousePressed() {
    if (mouseButton == LEFT) {
        if (attacks < 3) {
            frames3 = 0
            frames2 = 0
            attacks++
        }
    }
}
