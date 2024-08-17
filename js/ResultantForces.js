class Forces {
    constructor() {
        this.mass = 3000000; // Mass of the ship
        this.gravity = 9.8; // Acceleration due to gravity
        this.FT = 0; // Ship Thrust
        this.FHD = 0; // Total Resistance
        this.Fb = 0; // Buoyant Force
        this.W = 0; // Weight Force
        this.F = 0; // Net Force
        this.Cr = 0.8; // Resistance Coefficient
        this.waterDensity = 1000; // Water Density
        this.airDensity = 1.225; // Air Density
        this.V =0; // Ship Volume
        this.velocity = 0; // Initial Velocity
        this.acceleration = 0; // Initial Acceleration
        this.distanse=0;
        this.position = { x: 0, y: 0, z: 0 }; // Initial position (m)
        this.timeInterval = 0.1; // Time Interval in Seconds
        this.Angle = 0; // Ship heading angle in degrees
        this.deltaAngle=0;

        this.length=125;
        this.width=15;
        this.height=30;

        this.Power=0;
        this.Torque=0;
        this.angularAcceleration=0;
        this.angularVelocity = 0;
        this.r=156;
        this.count=1;
        this.direction = { x: 0, z: -1 }; // Initial direction facing -z axis
        // Initialize the weight force
        this.W = this.calculateWeightForce();
        this.updateForces();
      


        this.shipYaw = new ShipYaw(this.length, window.stable.ShipDisplacement,  0.01, 0.2);
        this.shipHeave=new ShipHeave(this.length,this.width,this.height,window.stable.ShipDisplacement,0.1,0.4,0.1);
        
        
        // GUI Controls
         this.guiControls = {
            power: 0, // Engine power slider value
            angle:0,
        };

        var gui = new dat.GUI();
        dat.GUI.toggleHide();

        // Add a slider to control engine power
        gui.add(this.guiControls, 'power', 0, 50000000).name('Engine Power').onChange(value => {
            this.Power =Math.abs( parseFloat(value));
            this.updateForces();
            this.updateSpeedAndPosition();
        });

        gui.add(this.guiControls, 'angle', -35, 35).name('Angle').onChange(value => {
         this.Angle=parseFloat(value);
         
         this.rudderAngleRadians = (this.Angle * Math.PI) / 180;
         this.rotationAngle=this.shipYaw.updateYaw(this.Angle,this.velocity);
         this.updateDirection(); // Update direction based on angle

         this.updateForces();
         this.updateSpeedAndPosition();
        });


    }

    updateForces() 
    {this.crossSectionalAreaWater =window.stable.crossSectionalAreaWater;
        this.crossSectionalAreaAir =window.stable.crossSectionalAreaAir;
        this.FHD = this.calculateTotalResistance(this.velocity);
        this.t = new ShipThrust(3, 120, 5, 0.6, this.Power, 0.7, this.velocity, this.FHD);
        this.FT = this.t.thrust;
      
        this.Fb =this.calculateBuoyantForce(); 
    

        if(window.stable.gravityForce != 0){
            this.W = window.stable.gravityForce;
        }
    
        this.F = this.sumOfForces();
    
        if (this.Angle !== 0) {
            // Update the ship's yaw using the velocity
            this.rotationAngle = this.shipYaw.updateYaw(this.Angle, this.velocity);
        }
      
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
        let C_d = 0.2; // form drag coefficient
        return 0.5 * this.waterDensity * this.crossSectionalAreaWater * C_d * Math.pow(velocity, 2);
    }

    // Calculate Wave Resistance
    calculateWaveResistance(velocity) {
        let alpha = 0.1; //  wave resistance coefficient
        let lambda = 50; //  characteristic length
        let beta = 1.0; //  wave-making efficiency factor
        return alpha * this.waterDensity * this.gravity * Math.pow(lambda, 2) * beta * Math.pow((velocity / (this.gravity * lambda)), 2);
    }

    // Calculate Air Resistance
    calculateAirResistance(velocity) {
        let C_a = 0.1; //  air drag coefficient
        return 0.5 * this.airDensity * this.crossSectionalAreaAir * C_a * Math.pow(velocity, 2);
    }

    calculateDisplacedVolume() {
        return window.stable.ShipDisplacement / this.waterDensity;
    }


    // Calculate Buoyant Force
    calculateBuoyantForce() {

     this.V = this.calculateDisplacedVolume();
     return this.waterDensity * this.V * this.gravity;
    
    }

    // // Calculate Weight Force
     calculateWeightForce() {
         return this.mass * this.gravity;
     }

    // Sum of Forces
    sumOfForces() {
        return this.FT - this.FHD + this.Fb - this.W;
    }

    // Calculate Acceleration
    calculateAcceleration() {
        return this.F / window.stable.ShipDisplacement;
    }

    
    

updateSpeedAndPosition() {
    if (this.intervalId) {
        clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
        console.log(`Weight = ${this.W}`);
        console.log(`Resistance = ${this.FHD}`);
        console.log(`Buoyancy = ${this.Fb}`);
        console.log(`Thrust = ${this.FT}`);
        console.log(`Angular Acceleration = ${this.angularAcceleration}`);
        console.log(`Torque = ${this.Torque}`);
        console.log(`r = ${this.r}`);
        console.log(`Angular Velocity = ${this.angularVelocity}`);
        console.log(`rotationAngle = ${this.rotationAngle}`);
        console.log(`rotationVelo = ${this.shipYaw.omega_y}`);
        console.log(`waterVelo = ${this.shipYaw.waterVelocity}`);

        // Ensure all properties are numbers before calculations
        if (isNaN(this.velocity) || isNaN(this.acceleration)) {
            console.error('One or more properties are NaN. Stopping simulation.');
            clearInterval(this.intervalId);
            return;
        }
        if(window.stable.Gm < 0 ||window.stable.HorizontalDisplacement > 5 || window.stable.HorizontalDisplacement <-5)
       {
             this.inter=setInterval(()=>{
                MAIN.ws_Commands.movements.speed-=0.01;
            if( MAIN.ws_Commands.movements.speed<0.1){
                MAIN.ws_Commands.movements.speed=0;
                console.log('problem in ship,it is sinking ');
                clearInterval(this.inter);
                clearInterval(this.intervalId);
                return ;
            }

             },this.timeInterval*1000);
            

       }
       
            this.velocity = this.acceleration * this.timeInterval + this.velocity;
            console.log(`Speed: ${this.velocity} m/s`);
            if(this.Angle != 0) {
          this.angularVelocity = this.shipYaw.omega_y;
          // this.velocity =this.shipYaw.omega_y;//*100; // v = ω * r
          this.angularAcceleration=this.shipYaw.alpha_y;
          
       }

       
            this.actualSpeed = this.velocity;
      
        let speedDifference = this.actualSpeed - MAIN.ws_Commands.movements.speed;
        MAIN.ws_Commands.movements.speed += (speedDifference * 0.1) * 0.30; // Adjust the factor as needed for smoother transitions
        console.log(`Actual Speed: ${MAIN.ws_Commands.movements.speed} m/s`);

        this.updatePosition();
        console.log(`New position: x = ${this.position.x} m, z = ${this.position.z} m`);

        this.updateForces();
        console.log(`Time Interval: ${this.timeInterval} `);

    }, this.timeInterval * 1000); // Execute every 0.1 second
}

    // Calculate Reynolds number (simple example)
    calculateReynoldsNumber() {
        return 1e6; // Placeholder value; typically depends on ship dimensions and velocity
    }


   
    updateDirection() {
        const angleRadians = (this.Angle * Math.PI) / 180;

        // Apply rotation based on the angle to the current direction
        const cosAngle = Math.cos(angleRadians);
        const sinAngle = Math.sin(angleRadians);

        const newX = this.direction.x * cosAngle - this.direction.z * sinAngle;
        const newZ = this.direction.x * sinAngle + this.direction.z * cosAngle;

        this.direction.x = newX;
        this.direction.z = newZ;
    }

    updatePosition() {
        if(this.Angle > 0) {
        MAIN.ws_Commands.movements.angle = -this.rotationAngle /100 ;
        }
        if(this.Angle < 0){
            MAIN.ws_Commands.movements.angle = this.rotationAngle/100  ;

        }
        // Calculate the new position
        const deltaX = this.velocity * this.direction.x * this.timeInterval;
        const deltaZ = this.velocity * this.direction.z * this.timeInterval;

        this.position.x += deltaX;
        this.position.z += deltaZ;
    }


    

    updateSidebar() {
        document.getElementById('weightValue').innerText = this.W.toFixed(2);
        document.getElementById('resistanceValue').innerText = this.FHD.toFixed(2);
        document.getElementById('buoyancyValue').innerText = this.Fb.toFixed(2);
        document.getElementById('thrustValue').innerText = this.FT.toFixed(2);
        document.getElementById('speedValue').innerText = Math.floor(this.velocity * 3.6);
        document.getElementById('accelerationValue').innerText =this.acceleration.toFixed(2);
        document.getElementById('angularAcceleration').innerText =this.angularAcceleration.toFixed(2);
        document.getElementById('angularVelocity').innerText =this.angularVelocity.toFixed(2);
        document.getElementById('position.X').innerText = this.position.x;
        document.getElementById('position.Z').innerText = this.position.z;
        document.getElementById('Ship Displacement').innerText = window.stable.ShipDisplacement/1000;
        document.getElementById('averageGM').innerText = window.stable.Gm;
        document.getElementById('DistanceWight').innerText = window.stable.HorizontalDisplacement;
    }


}

// Initialize the Forces class
window.forces = new Forces();
