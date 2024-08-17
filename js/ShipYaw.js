class ShipYaw {
    constructor(length, shipMass, b_y, timeStep) {
        this.length = length; // Length of the ship
        this.shipMass = shipMass; // Mass of the ship
        this.K_rd = 1.2; // Increased Rudder coefficient
        this.A_rd = 15; // Increased Rudder area
        this.b_y = b_y; // Reduced yaw resistance coefficient
        this.timeStep =timeStep; // Increased time step size

        this.omega_y = 0; // Initial angular velocity
        this.alpha_y = 0; // Initial angular acceleration
        this.theta_y = 0; // Initial yaw angle
    }

    // Rest of the methods remain the same...


    // Compute the moment of inertia (I_y)
    computeInertiaMoment() {
        return (this.shipMass * Math.pow(this.length, 2)) / 12;
    }

    // Compute the rudder force (F_rd) with updated velocity
    computeRudderForce(rudderAngle, velocity) {
        return this.K_rd * this.A_rd * Math.pow(velocity, 2) * rudderAngle;
    }

    // Compute the net yaw force (F_y) with updated velocity
    computeYawForce(rudderAngle, velocity) {
        let F_rd = this.computeRudderForce(rudderAngle, velocity);
        let I_y = this.computeInertiaMoment();
        let R=velocity*this.omega_y*0.02;
        let F_y = (F_rd * this.length) -(R*(this.length/2))+ ( I_y * this.alpha_y); //(window.forces.FT * this.length) -(window.forces.FHD* this.length);  // (F_rd*(this.length/2)) - (this.b_y*this.length/2) + (I_y* this.alpha_y	) ;//(F_rd * this.length) -(R*(this.length/2))+ ( I_y * this.alpha_y);
        // let F_y = window.forces.F *this.length/2 *Math.sin(rudderAngle);    //(F_rd*(this.length/2)) - (this.b_y*this.length/2) + (I_y*this.alpha_y	) ;
        return F_y;
    }

    // Update yaw based on the net force and provided velocity
    updateYaw(rudderAngle, velocity) {
        let F_y = this.computeYawForce(rudderAngle, velocity);
        let I_y = this.computeInertiaMoment();

        this.alpha_y = F_y / I_y;
        this.omega_y = (this.alpha_y * this.timeStep) ;
        this.theta_y = this.omega_y * this.timeStep;

        this.deltaX = velocity * Math.sin(this.omega_y * this.timeStep); // Change in x-position
        this.deltaZ = velocity * Math.cos(this.omega_y * this.timeStep); // Change in z-position


        console.log(`theta_y = ${this.theta_y}`);
        console.log(`omega_y = ${this.omega_y}`);

        return this.theta_y;
    }
}


    // // تحديث دوران السفينة بناءً على حركة yaw
    // updateShipRotation(ship, waterVelocity, rudderAngle) {
    //     let yawAngle = this.updateYaw(waterVelocity, rudderAngle);
    //     ship.rotation.y += yawAngle;

    //     // نوقف دوران السفينة إذا كانت السرعة الزاوية صغيرة جدًا
    //     if (Math.abs(this.omega_y) < 0.001) {
    //         this.omega_y = 0;
    //     }
    // }


// // إنشاء السفينة ومحاكاة الحركة
// let length = 120; // طول السفينة
// let shipMass = 50000; // كتلة السفينة (مثال)
// let K_rd = 0.02; // معامل الدفة (تقديري)
// let A_rd = 30;   // مساحة الدفة (تقديرية)

// let shipYaw = new ShipYaw(length, shipMass, K_rd, A_rd);

// // تحديث الحركة في الحلقة الرئيسية
// function animate() {
//     requestAnimationFrame(animate);

//     // هنا يجب أن تكون لديك قيم الماء وزاوية الدفة
//     let waterVelocity = 5; // سرعة الماء (تقديرية)
//     let rudderAngle = Math.PI / 18; // زاوية الدفة (تقديرية 10 درجات)

//     // تحديث دوران السفينة
//     shipYaw.updateShipRotation(ship, waterVelocity, rudderAngle);

//     renderer.render(scene, camera);
// }

// animate();
