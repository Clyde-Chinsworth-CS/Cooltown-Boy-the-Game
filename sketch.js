// P5.JS TEMPLATE

var frames1 // framecount for dash
var frames2 // framecount for attack
var frames3 // second framecount for attack
var frames4 // framecount for shoot gun
var frames6 // framecount for enemy attack
var frames7 // framecount for heals
var frames8 // framecount for i-frames after player is hit
var attacks
var ammo
var player

var col = "white" // colour for stage screen
var alpha = 0 // transparency for game over screen
var stage = 0 // ADJUST FOR TESTING, OTHERWISE SET TO ZERO
var stagecount = 0
var deathcount = 0 

function preload() {
    img = loadImage("data/Vignette.png")
    img2 = loadImage("data/Overlay.png")
    img3 = loadImage("data/art.png")
    custFont = loadFont("data/Squared Display.ttf")
}

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 400)
    background("#CCDBC7")
    angleMode(DEGREES)
    frames1 = 0
    frames2 = 5
    frames3 = 0
    frames4 = 8
    frames6 = 240
    frames7 = 30
    frames8 = 60

    bullets = []
    enemies = []

    attacks = 0
    ammo = 6

    player = new Player()
    bar = new ui()

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

    background("white")
    frames1++
    frames2++
    frames3++
    frames4++
    frames6++
    frames7++
    frames8++
    fill("black")

    if (player.hp > 0) { // if player hp reaches 0, remove control
        player.move()
        player.attack()
    }

    player.show()
    player.heal()
    player.crosshair()

    stroke(255)
    fill(255)

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].move()
        
        if (player.hp > 0) {
            enemies[i].attack()
        }
        
        enemies[i].show()

        if (enemies[i].hp == 0) { // enemy will be removed if hp reaches 0
            enemies.splice(i, 1)
        }

    }


    for (var i = 0; i < bullets.length; i++) { // player bullets
        bullets[i].move()
        bullets[i].show()

        if (bullets[i].x > width + bullets[i].h / 2 || bullets[i].x < 0 - bullets[i].h / 2 || bullets[i].y > height + bullets[i].h / 2 || bullets[i].y < 0 - bullets[i].h / 2) {
            bullets.splice(i, 1)
        }
    }

    bar.show() // shows UI 

    if (frames8 > 10 && player.hp == 0) { // when player hp reaches 0, display game over screen 
        image(img2, 0, 0, width, height)
        textFont(custFont)
        textAlign(CENTER)
        textSize(50)
        fill("#fff")
        text("GAME OVER", width / 2, height / 2)

        textSize(22)
        if (stagecount == 1) { // will display stages completed
            text("you completed " + stagecount + " level", width / 2, height / 2 + 30)
        } else {
            text("you completed " + stagecount + " levels", width / 2, height / 2 + 30)
        }

        if (frameCount % 30 === 0) {
            if (alpha == 255) {
                alpha = 0
            } else {
                alpha = 255
            }
        }
        fill(255, alpha)
        textSize(20)
        text("R to reset", width / 2, height / 2 + 100)

        if (keyIsDown(82)) { // resets program
            frames8 = 0
            stage = 0
            stagecount = 0
            enemies.splice(0, enemies.length)
            player.hp = 5
            ammo = 6
            player.kits = 3
            player.x = width / 2
            player.y = height / 2
            deathcount ++
        }

    }

    initialize()

}

function keyPressed() {

    if (frames7 > 30) { // if heal animation is finished, heal
        if (keyIsDown(81)) {
            if (player.kits > 0 && player.hp < 5) {
                frames7 = 0 // resets animation
                frames4 = 0 // stops player movement
            }
        }
    }
}

function mousePressed() {
    if (player.hp > 0) {
        if (mouseButton == LEFT) { // sword swing
            if (attacks < 3) { // player can not do combo that exceeds 3
                frames3 = 0
                frames2 = 0
                attacks++
            }
        }
        if (mouseButton == RIGHT) { // gun shoot
            if (ammo > 0.5) { // gun will only shoot if ammo requirement is met 
                frames4 = 0
                ammo--
                bullets.push(new Bullet())
                for (var i = 0; i < bullets.length; i++) {
                    bullets[bullets.length - 1].clicked()
                }
            }
        }
    }

}
