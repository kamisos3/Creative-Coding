class Mold {
    constructor() {
        this.y = width/2;
        this.x = height/2; // Sets mold pattern in the beggining of the canvas
        this.r = 5 // Radius

        // Traveling direction
        this.heading = 45;
        this.vx = cos(this.heading); // Turns polar coordinates to cartesian coordinates
        this.vy = sin(this.heading);
    }
     
    display() {
        fill(0);
        ellipse(this.x, this.y, this.r*2, this.r*2);

        
    }
    
}