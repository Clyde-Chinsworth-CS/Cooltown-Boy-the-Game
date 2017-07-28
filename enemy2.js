function Enemy2(x, y) {
    this.x = x
    this.y = y
    this.h = 25
    this.hp = 2
    this.delta = 0
    this.col = "#4A5E73"
    this.str = "#F533FF"
    this.coll1
    this.coll2
    this.frames = 0
    this.ang
    this.array = []
}

Enemy2.prototype.move = function () {
    this.hitDetect()
    this.collDetect(player)

    this.frames++



        var p1 = {
            x: player.x,
            y: player.y
        };

    var p2 = {
        x: this.x,
        y: this.y
    };
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

    Enemy2.prototype.attack = function () {

        if (player.hp > 0) {
            if (this.frames < 150 && this.frames > 110) { // wind up
                this.col = "#42E7E8"
            }
            if (this.frames == 150) {
                this.array.push(new Bullute(this.x, this.y))
                this.frames = 0
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
}

Enemy2.prototype.show = function () {
    fill(this.col)
    stroke(this.str)
    ellipse(this.x, this.y, this.h)

    fill("#BD1E6E")
    stroke("#f533ff")

    rect(this.x - 11.5, this.y + 19.25, 22, 13)
    fill("#f533ff")
    for (var i = 0; i < this.hp; i++) {
        rect(this.x - 8 + 9 * i, this.y + 23, 6, 6)
    }

}

Enemy2.prototype.collDetect = function (playerObj) { // detects if object is touching player

    if (dist(this.x, this.y, playerObj.x, playerObj.y) > this.h / 2 + playerObj.h / 2) {
        this.coll1 = playerObj.x
        this.coll2 = playerObj.y
    } else {
        playerObj.x = this.coll1
        playerObj.y = this.coll2
    }



}

Enemy2.prototype.hitDetect = function () { // detects if object is hit by player

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

    this.col = "#4A5E73"

    var angleEne = Math.atan2(p2.y - p3.y, p2.x - p3.x) * 180 / Math.PI
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

    if (angleDeg > 0 && angleEne < 0) {
        angleEne = -angleEne
    } else if (angleEne > 0 && angleDeg < 0) {
        angleDeg = -angleDeg
    }

=======
    
    this.col = "#4A5E73"
    
    var angleEne = Math.atan2(p2.y - p3.y, p2.x - p3.x) * 180 / Math.PI
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

>>>>>>> 3dd7e429ac85021499cb168ce55897f16cf0a784
    if (frames2 == 1) {
        if (dist(this.x, this.y, player.x, player.y) <= this.h / 2 + 55) { // sword
            if (angleEne < angleDeg + 85 && angleEne > angleDeg - 85) {
                this.hp--
                    this.frames = 0
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
                this.frames = 0
            bullets.splice(i, 1)
            frames5 = 0
        }
    }
    if (frames5 < 5) {
        this.col = "#BD1E6E"
    }
}

function Bullute(x, y) {
    //properties
    this.x = x
    this.y = y
    this.h = 15
    this.frames = 0
    this.ang
}

Bullute.prototype.move = function () {
    this.frames++
        this.x += Math.cos(this.ang * Math.PI / 180) * 10
    this.y += Math.sin(this.ang * Math.PI / 180) * 10

}

Bullute.prototype.show = function () {
    stroke(66, 231, 232)
    fill(245, 51, 255)
    ellipse(this.x, this.y, this.h)
}

Bullute.prototype.clicked = function () {

    var p1 = {
        x: this.x,
        y: this.y
    };

    var p2 = {
        x: player.x,
        y: player.y
    };
    this.ang = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI) + random(-7.5, 7.5) // angle for bullet direction
}
