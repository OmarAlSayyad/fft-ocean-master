class Stability {
    constructor() {
        this.mass = 3000000;
        this.gravity = 9.8;
        this.Kmt = 15;
        this.kg = [];
        this.weight = [];
        this.Gm = 5;
        this.ShipDisplacement = this.mass;
        this.gravityForce = 0;
        this.count=0;
        this.wightAdded=0
        this. t=0;
        this.d=0;
        this.HorizontalDisplacement=0;
        this.waterDensity = 1000; // Water Density
        this.airDensity = 1.225; // Air Density

        this.length=125;
        this.width=15;
        this.height=30;
        this.displacedVolume=3000;
        this.crossSectionalAreaWater = 24;  // Cross-sectional Area of the Ship in Water
        this.crossSectionalAreaAir = 426; //Cross-sectional Area of the Ship in Air


        this.guiControls = {
            weight: 0,
            kg: 0,
            d:0,
            addLoad: () => {
                this.count=0;
                this.weight.push(this.guiControls.weight * 1000);
                this.kg.push(this.guiControls.kg);
                this.wightAdded=this.guiControls.weight * 1000;
                this.crossSectionalAreaWater = this.calculateSubmergedCrossSectionalArea();
                this.crossSectionalAreaAir = this.calculateCrossSectionalAreaAir();
                if(this.wightAdded!==0){
                this.updatePositionDueToWeight();
                    }
                this.d=this.guiControls.d;
                this.updateWeightCarrying();
              
            },
            loadLose: () => {
                if(this.ShipDisplacement > this.mass){
                this.count=1;
                this.weight.push(this.guiControls.weight * 1000*-1);
                this.kg.push(this.guiControls.kg);
                 this.wightAdded=this.guiControls.weight * 1000;
                 this.updateWeightCarrying();
                 this.crossSectionalAreaWater = this.calculateSubmergedCrossSectionalArea();
                 this.crossSectionalAreaAir = this.calculateCrossSectionalAreaAir();
                 this.updatePositionDueToWeight();
                }
              
               
            },

        };

        var gui = new dat.GUI();
        dat.GUI.toggleHide();
        gui.add(this.guiControls, 'weight').name('Weight');
        gui.add(this.guiControls, 'kg').name('Kg');
        gui.add(this.guiControls, 'd').name('Distance');
        gui.add(this.guiControls, 'addLoad').name('Add Load');
        gui.add(this.guiControls, 'loadLose').name('Load Separation');
    }

    
    calculateInitialDraft() {
        let initialDisplacement = this.mass * this.gravity / this.waterDensity; // Initial displaced volume in cubic meters
        return initialDisplacement / (this.length * this.width); // Initial draft in meters
    }

    // Calculate the new draft after loading weight
    calculateNewDraft() {
        this.displacedVolume = this.ShipDisplacement / this.waterDensity; // Displaced volume in cubic meters
        return this.displacedVolume / (this.length * this.width); // New draft in meters
    }

    // Calculate draft difference
    calculateDraftDifference() {
        let initialDraft = this.calculateInitialDraft();
        let newDraft = this.calculateNewDraft();
        return newDraft - initialDraft; // Draft difference in meters
    }

    // Update the ship's position based on draft difference
    updatePositionDueToWeight() {
        let draftDifference = Math.abs(this.calculateDraftDifference());
       
        if(this.count===0){
            this.i=0;
            const animate = () => {
                MAIN.ws_GroupShip.position.y -= 0.04;

				if(this.i <= draftDifference )
                    {this.i+=0.1;
                    requestAnimationFrame(animate);

                    }
                
                };
                 animate();
         }
        else{
            this.i=0;
            const animate = () => {
                MAIN.ws_GroupShip.position.y += 0.04;

				if(this.i <= draftDifference )
                    {this.i+=0.1;
                    requestAnimationFrame(animate);

                    }
               
                };
                 animate();
         
        
         } 
    }

    // Calculate new submerged cross-sectional area
    calculateSubmergedCrossSectionalArea() {
        this.newDraft = this.calculateNewDraft();
        return this.width * this.newDraft; // New cross-sectional area in square meters
    }

    // Calculate freeboard (height above waterline)
    calculateFreeboard() {
        let newDraft = this.calculateNewDraft();
        return this.height - newDraft; // New freeboard in meters
    }

    // Calculate new cross-sectional area exposed to air
    calculateCrossSectionalAreaAir() {
        let newFreeboard = this.calculateFreeboard();
        return this.width * newFreeboard; // New cross-sectional area in square meters
    }


    updateWeightCarrying() {
        let moments = [];
        let i = 0;
        while (i < this.weight.length) {
            moments[i] = this.weight[i] * this.kg[i];
            i++;
        }

        let totalWeights = 0, totalMoments = 0;
        i = 0;
        while (i < this.weight.length) {
            totalWeights += this.weight[i];
            totalMoments += moments[i];
            i++;
        }

        let avgKg = totalWeights ? totalMoments / totalWeights : 0;

        this.Gm = this.Kmt - avgKg;

        if (this.Gm > 0) {
            console.log('Ship is stable.');
        } else if (this.Gm == 0) {
            console.log('Ship is neutrally stable.');
        } else {
            console.log('Ship is unstable.');
        }

        let weightSum = totalWeights / 1000;
        console.log('Total weight carrying:', weightSum);
        console.log('Total moments:', totalMoments);
        console.log('Average KG:', avgKg);

        this.calculateDisplacement(this.wightAdded);
        window.forces.updateForces(); // Ensure forces are updated after displacement change
    }

    calculateDisplacement(Weight) {
        let shipWeight = this.mass * this.gravity;
        if(this.count===0){
        this.ShipDisplacement = this.ShipDisplacement+Weight ;
        }
        else{
            this.ShipDisplacement = this.ShipDisplacement-Weight ;
        }
        this.gravityForce = this.ShipDisplacement * this.gravity;

        this.HorizontalDisplacement+=(this.wightAdded*this.d)/this.ShipDisplacement;
   
        console.log('Ship Displacement:', this.ShipDisplacement);
        console.log('Horizontal Displacement:', this.HorizontalDisplacement);
        console.log('Gravity Force:', this.gravityForce);
        this.wightAdded=0;
    }


}

// Initialize the Stability class
window.stable = new Stability();
