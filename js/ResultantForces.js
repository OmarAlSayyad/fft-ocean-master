class Forces {
    constructor() {
        this.mass = 12000000; // Mass of the ship
        this.gravity = 9.8; // Acceleration due to gravity
        this.FT = 0; // Ship Thrust
        this.FHD = 0; // Total Resistance
        this.Fb = 0; // Buoyant Force
        this.W = 0; // Weight Force
        this.F = 0; // Net Force
        this.Cr = 0.8; // Resistance Coefficient
        this.waterDensity = 1000; // Water Density
        this.airDensity = 1.225; // Air Density
        this.crossSectionalAreaWater = 256; // Cross-sectional Area of the Ship in Water
        this.crossSectionalAreaAir = 256; // Cross-sectional Area of the Ship in Air
        this.V = 12000; // Ship Volume
        this.velocity = 0; // Initial Velocity
        this.acceleration = 0; // Initial Acceleration
        this.position = 0; // Initial Position
        this.timeInterval = 0.1; // Time Interval in Seconds

        this.Power=0;

        // Initialize the weight force
        this.W = this.calculateWeightForce();

         // GUI Controls
         this.guiControls = {
            power: 0, // Engine power slider value
        };

        var gui = new dat.GUI();
        dat.GUI.toggleHide();

        // Add a slider to control engine power
        gui.add(this.guiControls, 'power', 0, 100000000).name('Engine Power').onChange(value => {
            this.Power = parseFloat(value);
            this.updateForces();
            this.updateSpeedAndPosition();
        });

        // Start the update loop
        this.startUpdateLoop();
    }

    updateForces() {
        this.FHD = this.calculateTotalResistance(this.velocity);

      this.t=new ShipThrust(3, 120, 5, 0.6, this.Power, 0.7, this.velocity, this.FHD);
   
      this.FT= this.t.thrust;

        this.Fb = this.calculateBuoyantForce();
        this.F = this.sumOfForces();
        this.acceleration = this.calculateAcceleration();
        this.updateSidebar();

        


    }

    // Calculate Total Resistance based on velocity
    calculateTotalResistance(velocity) {
        if (velocity <= 0) return 0; // No resistance if velocity is zero or negative

        let frictionalResistance = this.calculateFrictionalResistance(velocity);
        let formDrag = this.calculateFormDrag(velocity);
        let waveResistance = this.calculateWaveResistance(velocity);
        let airResistance = this.calculateAirResistance(velocity);
        return frictionalResistance + formDrag + waveResistance + airResistance;
    }

    // Calculate Frictional Resistance
    calculateFrictionalResistance(velocity) {
        if (velocity <= 0) return 0; // Avoid calculating if velocity is zero or negative
        let reynoldsNumber = this.calculateReynoldsNumber();
        let C_f = 0.075 / Math.pow((Math.log10(velocity * reynoldsNumber) - 2), 2);
        return 0.5 * this.waterDensity * this.crossSectionalAreaWater * C_f * Math.pow(velocity, 2);
    }

    // Calculate Form Drag
    calculateFormDrag(velocity) {
        let C_d = 0.2; // Example form drag coefficient
        return 0.5 * this.waterDensity * this.crossSectionalAreaWater * C_d * Math.pow(velocity, 2);
    }

    // Calculate Wave Resistance
    calculateWaveResistance(velocity) {
        let alpha = 0.1; // Example wave resistance coefficient
        let lambda = 50; // Example characteristic length
        let beta = 1.0; // Example wave-making efficiency factor
        return alpha * this.waterDensity * this.gravity * Math.pow(lambda, 2) * beta * Math.pow((velocity / (this.gravity * lambda)), 2);
    }

    // Calculate Air Resistance
    calculateAirResistance(velocity) {
        let C_a = 0.1; // Example air drag coefficient
        return 0.5 * this.airDensity * this.crossSectionalAreaAir * C_a * Math.pow(velocity, 2);
    }

    // Calculate Buoyant Force
    calculateBuoyantForce() {
        return this.waterDensity * this.V * this.gravity;
    }

    // Calculate Weight Force
    calculateWeightForce() {
        return this.mass * this.gravity;
    }

    // Sum of Forces
    sumOfForces() {
        return this.FT - this.FHD + this.Fb - this.W;
    }

    // Calculate Acceleration
    calculateAcceleration() {
        return this.F / this.mass;
    }

    // Update Speed and Position
    updateSpeedAndPosition() {
        // Clear any existing interval to avoid multiple intervals running simultaneously
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.intervalId = setInterval(() => {
            console.log(`Weight = ${this.W}`);
            console.log(`Resistance = ${this.FHD}`);
            console.log(`Buoyancy = ${this.Fb}`);
            console.log(`Thrust = ${this.FT}`);

            // Log the current state before updating
            console.log(`Current state: velocity = ${this.velocity}, acceleration = ${this.acceleration}, position = ${this.position}`);

            // Ensure all properties are numbers before calculations
            if (isNaN(this.velocity) || isNaN(this.acceleration) || isNaN(this.position)) {
                console.error('One or more properties are NaN. Stopping simulation.');
                clearInterval(this.intervalId);
                return;
            }

            // Update the ship speed
            this.velocity = this.acceleration * this.timeInterval + this.velocity;
            console.log(`Speed: ${this.velocity} m/s`);

            if (this.velocity <= 40) {
                this.actualSpeed = this.velocity;
            }

            // Smoothly update DEMO.ms_Commands.movements.speed to match this.velocity
            let speedDifference = this.actualSpeed - DEMO.ms_Commands.movements.speed;
            DEMO.ms_Commands.movements.speed += (speedDifference * 0.1) *0.60; // Adjust the factor as needed for smoother transitions
            console.log(`Actual Speed: ${DEMO.ms_Commands.movements.speed} m/s`);

            // Update the ship position
            this.position = 0.5 * this.acceleration * Math.pow(this.timeInterval, 2) + this.velocity * this.timeInterval + this.position;
            console.log(`New position: ${this.position} m`);

            // Recalculate forces with updated velocity
            this.updateForces();

        }, this.timeInterval * 1000); // Execute every 0.1 second
    }

    // Calculate Reynolds number (simple example)
    calculateReynoldsNumber() {
        return 1e6; // Placeholder value; typically depends on ship dimensions and velocity
    }

    updateSidebar() {
        document.getElementById('weightValue').innerText = this.W.toFixed(2);
        document.getElementById('resistanceValue').innerText = this.FHD.toFixed(2);
        document.getElementById('buoyancyValue').innerText = this.Fb.toFixed(2);
        document.getElementById('thrustValue').innerText = this.FT.toFixed(2);
        document.getElementById('speedValue').innerText = Math.floor(this.velocity * 3.6);
        document.getElementById('accelerationValue').innerText =this.acceleration.toFixed(2);
        document.getElementById('positionValue').innerText = this.position.toFixed(2);
    }
}

// Initialize the Forces class
window.forces = new Forces();
