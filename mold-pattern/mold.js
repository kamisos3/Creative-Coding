class Mold {
    constructor() {
        // Mold vars
        this.y = random(width);
        this.x = random(height); // Sets mold pattern in the beggining of the canvas
        this.r = 0.5 // Radius

        // Traveling direction
        this.heading = 45;
        this.vx = cos(this.heading); // Turns polar coordinates to cartesian coordinates
        this.vy = sin(this.heading);
        this.rotAngle = 45;
        this.stop = false // Stops movement

        // Sensor vars
        this.rSensorPos = creativeVector(0, 0);
        this.lSensorPos = createVector(0, 0);
        this.fSensorAngle = 45;
        this.sensorDist = 10;
    }

    update() {
        // Controls when molds stop moving
        if (this.stop) {
            this.vx = 0;
            this.vy = 0;
        } else {
            this.vx = cos(this.heading);
            this.vy = sin(this.heading);
        }

        // Modulo expression to wrap canvas, division %
        this.x = (this.x + this.vx + width) % width;
        this.y = (this.y + this.vy + height) % height;

        
    }
     
    display() {
        fill(0);
        ellipse(this.x, this.y, this.r*2, this.r*2);

        
    }
    
}