class ShipThrust {
    constructor(pitch, rpm, diameter, efficiency, power, hullEfficiency, shipSpeed, resistance) {
        this.pitch = pitch;  // Propeller pitch (meters)
        this.rpm = rpm;      // Propeller rotation rate (revolutions per second)
        this.diameter = diameter;  // Propeller diameter (meters)
        this.efficiency = efficiency;  // Propulsion efficiency (ranges between 0.5 and 0.7)
        this.power = power;  // Engine power (watts)
        this.hullEfficiency = hullEfficiency;  // Hull efficiency (ranges between 0.5 and 0.7)
        this.shipSpeed = shipSpeed;  // Initial speed of the ship (meters/second)
        this.resistance = resistance;  // Resistance encountered by the ship (newtons)

        // Calculate the thrust force during initialization
        this.thrust = this.thrustForce();

        console.log(`Calculating thrust force with parameters:
            propellerDiameter: ${this.diameter},
            propellerPitch: ${this.pitch},
            numberOfBlades: ${this.rpm},
            propellerEfficiency: ${this.efficiency},
            power: ${this.power},
            hullEfficiency: ${this.hullEfficiency},
            shipSpeed: ${this.shipSpeed},
            resistance: ${this.resistance},
            Thrust: ${this.thrust}`);
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
        if (this.shipSpeed === 0) return 0; // Avoid division by zero
        const Vw = this.wakeSpeed();
        return Vw / this.shipSpeed;
    }

    // Calculate effective power required to overcome resistance
    effectivePower() {
        return this.resistance * this.shipSpeed;
    }

    // Calculate thrust force
    thrustForce() {
        if (this.shipSpeed === 0 && this.resistance === 0) {
            // When the ship is stationary, calculate thrust based on power
            return this.power * this.efficiency;
        }

        const Peff = this.effectivePower();
        const wakeFraction = this.wakeFraction();

        if (this.shipSpeed === 0 || this.hullEfficiency === 0 || wakeFraction >= 1) {
            return 0; // Avoid invalid calculations
        }

        const thrust = (this.efficiency * this.power) / (this.hullEfficiency * this.shipSpeed * (1 - wakeFraction));

        return thrust;
    }

    // Calculate propulsion efficiency (ηp) based on conditions
    propulsionEfficiency() {
        return this.efficiency;
    }

    // Calculate hull efficiency (ηh) based on conditions
    hullEfficiencyFactor() {
        return this.hullEfficiency;
    }
}
