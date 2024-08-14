class Stability {
    constructor() {
        this.m = 3000000;
        this.gravity = 9.8;
        this.Kmt = 15;
        this.kg = [];
        this.weight = [];
        this.Gm = 5;
        this.ShipDisplacement = this.m;
        this.gravityForce = 0;
        this.count=0;
        this.wightAdded=0
        this.HorizontalDisplacement=0;
        this.d=0;

        this.guiControls = {
            weight: 0,
            kg: 0,
            d:0,
            addLoad: () => {
                this.count=0;
                this.weight.push(this.guiControls.weight * 1000);
                this.kg.push(this.guiControls.kg);
                this.wightAdded=this.guiControls.weight * 1000;
                this.d=this.guiControls.d;
                this.updateWeightCarrying();
            },
            loadLose: () => {
                this.count=1;
                this.weight.push(this.guiControls.weight * 1000*-1);
                this.kg.push(this.guiControls.kg);
                this.wightAdded=this.guiControls.weight * 1000;
                this.updateWeightCarrying();
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
        let shipWeight = this.m * this.gravity;
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
    }


}

// Initialize the Stability class
window.stable = new Stability();
