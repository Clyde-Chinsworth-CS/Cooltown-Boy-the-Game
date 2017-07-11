function wallcoll() { //detects if object is touching wall
    if (this.x > width) {
        this.x = width - this.h;
    }
    if (this.x < 0) {
        this.x = 0
    }
    if (this.y > height) {
        this.y = height - this.h
    }
    if (this.y < 0) {
        this.y = 0 
    }
}
    
