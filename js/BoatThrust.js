// Ship Thrust Class
class ShipThrust {
    constructor(pitch, rpm, diameter, efficiency, power, hullEfficiency) {
        this.pitch = pitch;  // Propeller pitch (meters)
        this.rpm = rpm;      // Propeller rotation rate (revolutions per second)
        this.diameter = diameter;  // Propeller diameter (meters)
        this.efficiency = efficiency;  // Propulsion efficiency (ranges between 0.5 and 0.7)
        this.power = power;  // Engine power (watts)
        this.hullEfficiency = hullEfficiency;  // Hull efficiency (ranges between 0.5 and 0.7)
        this.shipSpeed = 0;  // Ship speed (meters/second)
        this.position = 0;   // Ship position (meters)
    }

    // Calculate theoretical advance speed of the propeller (V_t)
    theoreticalAdvanceSpeed() {
        return this.pitch * this.rpm;
    }

    // Calculate true slip ratio
    trueSlipRatio() {
        const Vt = this.theoreticalAdvanceSpeed();
        return 1 - (this.shipSpeed / Vt);
    }

    // Calculate actual advance speed of the propeller (V_a)
    actualAdvanceSpeed() {
        const Vt = this.theoreticalAdvanceSpeed();
        return Vt * (1 - this.trueSlipRatio());
    }

    // Calculate wake speed (V_w)
    wakeSpeed() {
        const Va = this.actualAdvanceSpeed();
        return this.shipSpeed - Va;
    }

    // Calculate wake fraction (W_f)
    wakeFraction() {
        const Vw = this.wakeSpeed();
        return Vw / this.shipSpeed;
    }

    // Calculate effective power required to overcome resistance
    effectivePower(resistance) {
        return resistance * this.shipSpeed;
    }

    // Calculate thrust force
    thrustForce(resistance) {
        const Peff = this.effectivePower(resistance);
        const wakeFraction = this.wakeFraction();
        return (this.efficiency * this.power) / (this.hullEfficiency * this.shipSpeed * (1 - wakeFraction));
    }

    // // Update boat speed and position
    // updateShipSpeed(newSpeed, timeInterval) {
    //     this.shipSpeed = newSpeed;
    //     this.position += this.boatSpeed * timeInterval;  // Update position based on speed and time interval
    // }

    // Calculate propulsion efficiency (ηp) based on conditions
    propulsionEfficiency() {
              return this.efficiency;
    }

    // Calculate hull efficiency (ηh) based on conditions
    hullEfficiencyFactor() {
        return this.hullEfficiency;
    }
}

export default ShipThrust;
