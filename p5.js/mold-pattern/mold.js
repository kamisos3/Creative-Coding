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
        this.rSensorPos = createVector(0, 0);
        this.lSensorPos = createVector(0, 0);
        this.fSensorPos = createVector(0, 0);
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

        // Creates 3 sensor positions
        this.getSensorPos(this.rSensorPos, this.heading + this.sensorAngle);
        this.getSensorPos(this.lSensorPos, this.heading - this.sensorAngle);
        this.getSensorPos(this.fSensorPos, this.heading);

        // Get indices for the sensors pos, anf color value for the indices
        let index, l, r, f;
        index = 4 * (d * floor(this.rSensorPos.y)) * (d * width) + 4 * (d * floor(this.rSensorPos.x));
        r = pixels[index];

        index = 4 * (d * floor(this.lSensorPos.y)) * (d * width) + 4 * (d * floor(this.lSensorPos.x));
        l = pixels[index];

        index = 4 * (d * floor(this.fSensorPos.y)) * (d * width) + 4 * (d * floor(this.fSensorPos.x));
        f = pixels[index];

        // Compares values r, l, f to move the sensors
        if (f > l && f > r) {
            this.heading += 0;
        } else if (f < l && f < r) {
            if (random(1) < 0.5) {
                this.heading += this.rotAngle;
            } else {
                this.heading -= this.rotAngle;
            }
        } else if (l > r) {
            this.heading += -this.rotAngle;
        } else if (r > l) {
            this.heading += this.rotAngle;
        }

    }

    display() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);


    }

    getSensorPos(sensor, angle) {
        sensor.x = (this.x + this.sensorDist * cos(angle) + width) % width;
        sensor.y = (this.y + this.sensorDist * sin(angle) + height) % height;
    }

}