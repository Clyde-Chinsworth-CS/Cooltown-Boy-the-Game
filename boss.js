function Boss(x, y) {
    this.x = x
    this.y = y
    this.h = 50
    this.hp = 20
    this.col = "black"
    this.str = "#F533FF"
    this.coll1
    this.coll2
    this.frames = 120
    this.frames2 = 120 // FRAME RATE FOR LINE
    this.oldx // VALUE STORAGE FOR LINE
    this.oldy
    this.inRange = false
    this.ang = 180
    this.attacks = 0
    this.array = []
}

Boss.prototype.move = function () {
    this.hitDetect()
    this.collDetect(player)

    this.frames++
        this.frames2++

        Boss.prototype.attack = function () {

            var p1 = {
                x: player.x,
                y: player.y
            };

            var p2 = {
                x: this.x,
                y: this.y
            };

            var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

            if (player.hp > 0) {
                if (this.attacks < 3) { // wall bounce attack
                    if (this.x + this.h / 2 > width) {
                        this.attacks++
                            this.ang = angleDeg
                    }
                    if (this.x - this.h / 2 < 0) {
                        this.attacks++
                            this.ang = angleDeg
                    }
                    if (this.y + this.h / 2 > height) {
                        this.attacks++
                            this.ang = angleDeg
                    }
                    if (this.y - this.h / 2 < 0) {
                        this.attacks++
                            this.ang = angleDeg
                    }
                    this.x += -Math.cos(this.ang * Math.PI / 180) * 18
                    this.y += -Math.sin(this.ang * Math.PI / 180) * 18
                    this.frames = 0
                    if (dist(player.x, player.y, this.x, this.y) < this.h / 2 + player.h / 2) {
                        if (frames8 > 30) {
                            player.hp -= 2
                            frames7 = 21
                            frames8 = 0
                        }
                    }
                } else if (this.attacks >= 3) { // shoot gun attack
                    if (this.frames > 120) {
                        this.oldx = this.x
                        this.oldy = this.y
                        this.x = width / 2
                        this.y = height / 2
                        this.frames = 0
                        this.frames2 = 0
                        this.attacks = 4
                    }

                    if (this.frames2 < 10) {
                        stroke(this.str)
                        strokeWeight(2)
                        line(this.oldx, this.oldy, this.x, this.y)
                    }
                    if (this.attacks >= 7) {
<<<<<<< HEAD
=======
                        if (this.frames > 60) {
                            this.x += Math.random()
                            this.x -= Math.random()
                            this.y += Math.random()
                            this.y -= Math.random()
                        }
>>>>>>> 3dd7e429ac85021499cb168ce55897f16cf0a784
                        if (this.frames > 119) {
                            this.attacks = 0
                        }
                    }
                    if (this.attacks >= 4 && this.attacks < 7) {
<<<<<<< HEAD
=======
                        if (this.frames > 20) {
                            this.col = "#42E7E8"
                        }
>>>>>>> 3dd7e429ac85021499cb168ce55897f16cf0a784
                        if (this.frames > 40) {
                            this.array.push(new BBullet(this.x, this.y))
                            this.frames = 0
                            this.attacks++
                        }
                    }

                }
                for (var i = 0; i < this.array.length; i++) { // enemy bullets
                    if (this.frames == 0) {
                        this.array[this.array.length - 1].clicked()
                    }
                    this.array[i].move()
                    this.array[i].show()

                    if (this.array[i].x > width + this.array[i].h / 2 || this.array[i].x < 0 - this.array[i].h / 2 || this.array[i].y > height + this.array[i].h / 2 || this.array[i].y < 0 - this.array[i].h / 2) {
                        this.array.splice(i, 1)
                    } else if (dist(this.array[i].x, this.array[i].y, player.x, player.y) < player.h / 2 + this.array[i].h / 2) {
                        this.array.splice(i, 1)
                        player.hp--
                            frames7 = 21
                        frames8 = 0
                    }
                }

            }
        }

    Boss.prototype.show = function () {
        fill(this.col)
        stroke(this.str)
        ellipse(this.x, this.y, this.h)
        fill("#BD1E6E")
        rect(this.x - 90, this.y + 40, 184, 13) //hp bar
        fill("#f533ff")
        for (var i = 0; i < this.hp; i++) {
            rect(this.x - 86 + 9 * i, this.y + 43.75, 6, 6)
        }

    }
}

Boss.prototype.wallcoll = function () { //detects if object is touching wall

    if (this.x + this.h / 2 > width) {
        this.x = width - this.h / 2
    }
    if (this.x - this.h / 2 < 0) {
        this.x = 0 + this.h / 2
    }
    if (this.y + this.h / 2 > height) {
        this.y = height - this.h / 2
    }
    if (this.y - this.h / 2 < 0) {
        this.y = 0 + this.h / 2
    }
}

Boss.prototype.collDetect = function (playerObj) { // detects if object is touching player

    if (dist(this.x, this.y, playerObj.x, playerObj.y) > this.h / 2 + playerObj.h / 2) {
        this.col1 = playerObj.x
        this.col2 = playerObj.y
    } else {
        playerObj.x = this.col1
        playerObj.y = this.col2
    }



}

Boss.prototype.hitDetect = function () { // detects if object is hit by player

    var frames5 = 5
    frames5++

    var p1 = {
        x: mouseX,
        y: mouseY
    }

    var p2 = {
        x: player.x,
        y: player.y
    }

    var p3 = {
        x: this.x,
        y: this.y
    }

<<<<<<< HEAD
=======


>>>>>>> 3dd7e429ac85021499cb168ce55897f16cf0a784
    this.col = "black"

    var angleEne = Math.atan2(p2.y - p3.y, p2.x - p3.x) * 180 / Math.PI
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

<<<<<<< HEAD
    if (angleDeg > 0 && angleEne < 0) {
        angleEne = -angleEne
    } else if (angleEne > 0 && angleDeg < 0) {
        angleDeg = -angleDeg
    }

=======
>>>>>>> 3dd7e429ac85021499cb168ce55897f16cf0a784
    if (frames2 == 1) {
        if (dist(this.x, this.y, player.x, player.y) <= this.h / 2 + 55) { // sword
            if (angleEne < angleDeg + 85 && angleEne > angleDeg - 85) {
                this.hp--
                    if (ammo < 6) {
                        ammo += 0.5
                    }
            }
        }
    }
    if (frames2 < 6) {
        if (dist(this.x, this.y, player.x, player.y) <= this.h / 2 + 55) {
            if (angleEne < angleDeg + 90 && angleEne > angleDeg - 90) {
                this.col = "#BD1E6E"
            }
        }
    }

    for (var i = 0; i < bullets.length; i++) { // gun
        if (dist(this.x, this.y, bullets[i].x, bullets[i].y) < bullets[i].h / 2 + this.h / 2) {
            this.hp--
                bullets.splice(i, 1)
            frames5 = 0
        }
    }
    if (frames5 < 5) {
        this.col = "#BD1E6E"
    }
}

function BBullet(x, y) {
    //properties
    this.x = x
    this.y = y
    this.h = 30
    this.frames = 0
    this.ang
}

BBullet.prototype.move = function () {
    this.frames++
        this.x += Math.cos(this.ang * Math.PI / 180) * 15
    this.y += Math.sin(this.ang * Math.PI / 180) * 15

}

BBullet.prototype.show = function () {
    stroke(66, 231, 232)
    fill(245, 51, 255)
    ellipse(this.x, this.y, this.h)
}

BBullet.prototype.clicked = function () {

    var p1 = {
        x: this.x,
        y: this.y
    };

    var p2 = {
        x: player.x,
        y: player.y
    };
    this.ang = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI) // angle for bullet direction
}
