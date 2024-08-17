class ShipHeave {
    constructor(length, width, height, shipMass, bh , Kh , timeStep) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.shipMass = shipMass;
        this.bh = bh;
        this.Kh = Kh;
        this.timeStep = timeStep;

        this.velocity = 0; 
        this.acceleration = 0; 
        this.Fh = 0;
    }

    generateHeightField(position) {
        let heightField = [];
        for (let i = 0; i < this.length; i++) {
            heightField[i] = [];
            for (let j = 0; j < this.width; j++) {
                heightField[i][j] = position + (Math.random() * 2 - 1); // Adding some variability
            }
        }
        return heightField;
    }

    computeAverageHeightField(heightField) {
        let totalHeight = 0;
        let count = 0;

        for (let i = 0; i < heightField.length; i++) {
            for (let j = 0; j < heightField[i].length; j++) {
                totalHeight += heightField[i][j];
                count++;
            }
        }

        return totalHeight / count;
    }

    computeHeaveForce(heightField) {
        let Ha = this.computeAverageHeightField(heightField);
        let Rh = this.bh * this.shipMass * this.velocity;
        let A = this.length * this.width;
        this.Fh = (this.Kh * Ha * A) - Rh;
        
        console.log(`Ha: ${Ha}, Rh: ${Rh}, Fh: ${this.Fh}`);
        
        return this.Fh;
    }

    updateHeave(positionY) {
        let heightField = this.generateHeightField(positionY);
        let Fh = this.computeHeaveForce(heightField);
        this.acceleration = Fh / this.shipMass;
        this.velocity += this.acceleration * this.timeStep;
        
        if (Math.abs(this.velocity) < 0.001) {
            this.velocity = 0; // Avoid infinite small oscillations
        }

        return this.velocity * this.timeStep;
    }

    updateShipPosition(ship, positionY) {
        let heave = this.updateHeave(positionY);
        ship.position.y += heave;
    }
}
