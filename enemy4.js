function Enemy4(x, y) {
    this.x = x
    this.y = y
    this.h = 40
    this.hp = 3
    this.col = "gray"
    this.str = "#F533FF"
    this.coll1
    this.coll2
    this.frames = 120
    this.inRange = false
}

Enemy4.prototype.move = function () {
    this.hitDetect()
    this.collDetect(player)
    this.frames++

        if (dist(player.x, player.y, this.x, this.y) > 100) {
            this.inRange = false
        }

    if (this.frames > 120) {
        if (dist(player.x, player.y, this.x, this.y) < 100) { // resets framecount if player is in range, triggering attack 
            if (!this.inRange) {
                this.inRange = true
                this.frames = 0
            }
        }
    }

    Enemy4.prototype.attack = function () {
        if (player.hp > 0) {
            if (this.frames < 45) {
                stroke("#f533ff")
                noFill()
                ellipse(this.x, this.y, 150)
            } else if (this.frames > 44 && this.frames < 48) {
                fill("#BD1E6E")
                ellipse(this.x, this.y, 150)
                if (dist(player.x, player.y, this.x, this.y) < 90) {
                    if (frames8 > 30) {
                        player.hp--
                            frames7 = 21
                        frames8 = 0
                    }
                }
            }
        }
    }

    Enemy4.prototype.show = function () {


        fill(this.col)
        this.col = "#383838"
        ellipse(this.x, this.y, this.h)

        fill("#BD1E6E")
        rect(this.x - 15, this.y + 25, 30, 13)
        fill("#f533ff")
        for (var i = 0; i < this.hp; i++) {
            rect(this.x - 12 + 9 * i, this.y + 28.75, 6, 6)
        }

    }
}


Enemy4.prototype.collDetect = function (playerObj) { // detects if object is touching player

    if (dist(this.x, this.y, playerObj.x, playerObj.y) > this.h / 2 + playerObj.h / 2) {
        this.col1 = playerObj.x
        this.col2 = playerObj.y
    } else {
        playerObj.x = this.col1
        playerObj.y = this.col2
    }



}

Enemy4.prototype.hitDetect = function () { // detects if object is hit by player

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

    fill(this.col)
    stroke(this.str)

    var angleEne = Math.atan2(p2.y - p3.y, p2.x - p3.x) * 180 / Math.PI
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI

    if (angleDeg > 0 && angleEne < 0) {
        angleEne = -angleEne
    } else if (angleEne > 0 && angleDeg < 0) {
        angleDeg = -angleDeg
    }

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
