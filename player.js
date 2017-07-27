function Player() {

    this.x = width / 2
    this.y = height / 2
    this.h = 30
    this.gh = 15
    this.alpha = 0
    this.dashalpha = 100
    this.spriteState = 0
    this.fillCol = "black"

    var scrimbim //variables for player.x,y
    var scrimbim2
    var scrimbim3
    var scrimbim4

    this.kits = 3
    this.hp = 5
    var oldHp = this.hp

    this.crosshair = function () {
        stroke(66, 231, 232);
        strokeWeight(2);
        line(mouseX - 15, mouseY, mouseX, mouseY - 15)
        line(mouseX, mouseY - 15, mouseX + 15, mouseY)
        line(mouseX + 15, mouseY, mouseX, mouseY + 15)
        line(mouseX, mouseY + 15, mouseX - 15, mouseY)

        line((mouseX + this.x) / 2 - 5, (mouseY + this.y) / 2, (mouseX + this.x) / 2, (mouseY + this.y) / 2 - 5)
        line((mouseX + this.x) / 2, (mouseY + this.y) / 2 - 5, (mouseX + this.x) / 2 + 5, (mouseY + this.y) / 2)
        line((mouseX + this.x) / 2 + 5, (mouseY + this.y) / 2, (mouseX + this.x) / 2, (mouseY + this.y) / 2 + 5)
        line((mouseX + this.x) / 2, (mouseY + this.y) / 2 + 5, (mouseX + this.x) / 2 - 5, (mouseY + this.y) / 2)
    }

    this.move = function () {
        if (frames1 < 14 || attacks > 0 || frames4 < 14 || frames7 < 30 || frames8 < 15) { // stops player if any of these framecounts are reset 
            this.alpha = 0
        } else {
            this.alpha = 3
        }

        if (keyIsDown(87)) {
            this.y -= this.alpha
        }
        if (keyIsDown(83)) {
            this.y += this.alpha
        }
        if (keyIsDown(65)) {
            this.x -= this.alpha
        }
        if (keyIsDown(68)) {
            this.x += this.alpha
        }
        if (frames1 > 30 && frames7 > 30) { // dash delay 
            if (keyIsDown(32)) { // if the space key is pressed, player will dash
                scrimbim = this.x
                scrimbim2 = this.y
                frames2 = 10
                this.dashalpha = 100
                if (keyIsDown(87)) {
                    if (keyIsDown(65) || keyIsDown(68)) {
                        this.dashalpha = this.dashalpha / 1.5
                    }
                    this.y -= this.dashalpha;
                    frames1 = 0

                }
                if (keyIsDown(83)) {
                    if (keyIsDown(65) || keyIsDown(68)) {
                        this.dashalpha = this.dashalpha / 1.5
                    }
                    this.y += this.dashalpha;
                    frames1 = 0
                }
                if (keyIsDown(65)) {
                    this.x -= this.dashalpha
                    frames1 = 0
                }
                if (keyIsDown(68)) {
                    this.x += this.dashalpha
                    frames1 = 0

                }
            }

        } else if (frames1 < 10) { // dash graphic
            stroke(66, 231, 232)
            strokeWeight(2)
            line(scrimbim, scrimbim2, this.x, this.y)
        }

        this.wallcoll();

    }


    this.show = function () {
        var p1 = {
            x: mouseX,
            y: mouseY
        };

        var p2 = {
            x: this.x,
            y: this.y
        };
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

        if (frames2 < 5) { //  WHEN PLAYER ATTACKS, MOVE IN DIRECTION OF MOUSE
            noStroke()
            fill(66, 231, 232)
            arc(player.x, player.y, 110, 110, angleDeg + 100, angleDeg - 100)
            player.x += -Math.cos(angleDeg * Math.PI / 180)
            player.y += -Math.sin(angleDeg * Math.PI / 180)

        }
        noStroke()
        fill(this.fillCol)
        ellipse(this.x, this.y, this.h)

    }
    this.attack = function () {
        if (attacks > 0) {
            if (frames3 > 15) {
                frames3 = 0
                attacks = 0
            }
        }
    }
    this.heal = function () {

        if (frames7 > 19 && frames7 < 21) {
            this.hp = 5
            this.kits--
        }

        if (frames7 > 19 && frames7 < 23) { // player will change color if healing
            player.fillCol = "#80F585"
        } else if (frames8 < 7) { // player will change color if damaged, vignette will appear 
            player.fillCol = "#BD1E6E"
            image(img, 0, 0, width, height)
        } else {
            player.fillCol = "black"
        }
    }
    this.wallcoll = function () { //detects if object is touching wall

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

}

function Bullet() {
    //properties
    this.x
    this.y
    this.h = 15
    this.ang
}

Bullet.prototype.move = function () {
    this.x += -Math.cos(this.ang * Math.PI / 180) * 13
    this.y += -Math.sin(this.ang * Math.PI / 180) * 13

}

Bullet.prototype.show = function () {
    stroke(66, 231, 232)
    fill(245, 51, 255)
    ellipse(this.x, this.y, this.h)
}

Bullet.prototype.clicked = function () {
    this.x = player.x
    this.y = player.y
    var p1 = {
        x: mouseX,
        y: mouseY
    };

    var p2 = {
        x: player.x,
        y: player.y
    };
    this.ang = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI; // angle for bullet direction
}


function ui() {
    this.show = function () {

        fill("#000")
        noStroke()
        rect(52, 10, 142, 30)
        rect(52, 42, 124, 20)

        rect(10, 10, 40, 52)
        fill("#80F585")
        rect(23, 22, 15, 4)
        rect(28.5, 17, 4, 15)

        fill("gray")
        rect(54, 44, 120, 16)
        for (var i = 0; i < 5; i++) {
            noStroke
            rect(54 + 28 * i, 12, 26, 26)
        }
        for (var i = 0; i < player.hp; i++) {
            fill("#80F585")
            noStroke
            rect(54 + 28 * i, 12, 26, 26)
        }

        for (var i = 0; i < ammo; i += 0.5) {
            fill(245, 51, 255)
            noStroke
            rect(54 + 20 * i, 44, 10, 16)
        }

        for (var i = 0; i < 5; i++) {
            stroke("black")
            line(74 + 20 * i, 44, 74 + 20 * i, 60)
        }

        for (var i = 0; i < 3; i++) {
            fill("gray")
            noStroke()
            rect(18 + 10 * i, 44, 4, 4)
        }

        for (var i = 0; i < player.kits; i++) {
            fill("#80F585")
            noStroke()
            rect(18 + 10 * i, 44, 4, 4)
        }
    }
}
