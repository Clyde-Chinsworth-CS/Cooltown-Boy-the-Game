function Player() {

    this.x = width / 2
    this.y = height / 2
    this.h = 30
    this.alpha = 0
    this.dashalpha = 100

    var scrimbim = this.x
    var scrimbim2 = this.x

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

        if (frames1 < 7) {
            this.alpha = 0;
        } else if (attacks > 0) {
            this.alpha = 0
        } else {
            this.alpha = 4;
        }


        if (keyIsDown(87)) {
            this.y -= this.alpha;
        }
        if (keyIsDown(83)) {
            this.y += this.alpha;
        }
        if (keyIsDown(65)) {
            this.x -= this.alpha;
        }
        if (keyIsDown(68)) {
            this.x += this.alpha;
        }
        if (frames1 > 30) { // dash delay 
            if (keyIsDown(32)) {
                scrimbim = this.x
                scrimbim2 = this.y
                frames2 = 10
                this.dashalpha = 100
                if (keyIsDown(87)) {
                    if (keyIsDown(65) || keyIsDown(68)) {
                        this.dashalpha = this.dashalpha / 2
                    }
                    this.y -= this.dashalpha;
                    frames1 = 0
                }
                if (keyIsDown(83)) {
                    if (keyIsDown(65) || keyIsDown(68)) {
                        this.dashalpha = this.dashalpha / 2
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
                noStroke();
                fill(66, 231, 232);
                arc(player.x, player.y, 100, 100, angleDeg + 100, angleDeg - 100)
                player.x += -Math.cos(angleDeg * Math.PI / 180) * 1.75
                player.y += -Math.sin(angleDeg * Math.PI / 180) * 1.75

        }
        fill("black");
        noStroke();
        ellipse(this.x, this.y, this.h);



    }

    this.attack = function () {
        if (attacks > 0) {
            if (frames3 > 15) {
                frames3 = 0
                attacks = 0
            }

        }


    }
}
