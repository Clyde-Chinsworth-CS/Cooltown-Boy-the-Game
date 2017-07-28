function Enemy1(x, y) {
    this.x = x
    this.y = y
    this.h = 25
    this.hp = 3
    this.delta = 1.25 // move speed of enemy
    this.col = "gray"
    this.str = "#F533FF"
    this.coll1
    this.coll2
    this.frames = 120
    this.inRange = false
    this.ang
}

Enemy1.prototype.move = function () {
    this.wallcoll()
    this.hitDetect()
    this.collDetect(player)

    this.frames++

        this.col = "gray"

    var p1 = {
        x: player.x,
        y: player.y
    };

    var p2 = {
        x: this.x,
        y: this.y
    };
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

    if (this.frames > 90 && dist(player.x, player.y, this.x, this.y) > this.h / 2 + player.h / 2 + 5) { // move command
        this.x += -Math.cos(angleDeg * Math.PI / 180) * this.delta
        this.y += -Math.sin(angleDeg * Math.PI / 180) * this.delta
    }


    if (dist(player.x, player.y, this.x, this.y) > 60) {
        this.inRange = false
    }

    if (this.frames > 120) {
        if (dist(player.x, player.y, this.x, this.y) < 60) { // resets framecount if player is in range, triggering attack 
            if (!this.inRange) {
                this.inRange = true
                this.frames = 0
            }
        }
    }

    Enemy1.prototype.attack = function () {
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
            if (this.frames < 43) {
                this.ang = angleDeg
            }
            if (this.frames < 45) {
                this.x += Math.random()
                this.x -= Math.random()
                this.y += Math.random()
                this.y -= Math.random()
            } else if (this.frames > 44 && this.frames < 65) {
                this.x += -Math.cos(this.ang * Math.PI / 180) * 6
                this.y += -Math.sin(this.ang * Math.PI / 180) * 6
                if (dist(player.x, player.y, this.x, this.y) < this.h / 2 + player.h / 2) {
                    if (frames8 > 30) {
                        player.hp--
                            frames7 = 21
                        frames8 = 0
                    }
                }
            } else if (player.hp == 0) {
                this.delta = 0
            } else {
                this.delta = 1.25
            }
        }
    }

    Enemy1.prototype.show = function () {
        ellipse(this.x, this.y, this.h)
        fill("#BD1E6E")

        rect(this.x - 15, this.y + 19.25, 30, 13)
        fill("#f533ff")
        for (var i = 0; i < this.hp; i++) {
            rect(this.x - 12 + 9 * i, this.y + 23, 6, 6)
        }

    }
}

Enemy1.prototype.wallcoll = function () { //detects if object is touching wall

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

Enemy1.prototype.collDetect = function (playerObj) { // detects if object is touching player

    if (dist(this.x, this.y, playerObj.x, playerObj.y) > this.h / 2 + playerObj.h / 2) {
        this.col1 = playerObj.x
        this.col2 = playerObj.y
    } else {
        playerObj.x = this.col1
        playerObj.y = this.col2
    }



}

Enemy1.prototype.hitDetect = function () { // detects if object is hit by player

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
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

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
                fill("#BD1E6E")
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
        fill("#BD1E6E")
    }
}
