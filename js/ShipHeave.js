class ShipHeave {
    constructor(length, width, height, shipMass, bh = 1.3, Kh = 1.0, timeStep = 0.16) {
        this.length = length; // طول السفينة
        this.width = width;   // عرض السفينة
        this.height = height; // ارتفاع السفينة
        this.shipMass = shipMass; // كتلة السفينة
        this.bh = bh; // معامل المقاومة للماء
        this.Kh = Kh; // معامل القوة للسفينة
        this.timeStep = timeStep; // حجم الخطوة الزمنية

        this.velocity = 0; // السرعة الأولية
        this.acceleration = 0; // التسارع الأولي
    }

    // حساب Ha: حقل الارتفاع المتوسط
    computeAverageHeightField(heightField) {
        let totalHeight = 0;
        for (let i = -this.length / 2; i < this.length / 2; i++) {
            for (let j = -this.width / 2; j < this.width / 2; j++) {
                totalHeight += heightField[i + this.length / 2][j + this.width / 2];
            }
        }
        return totalHeight / (this.length * this.width);
    }

    // حساب القوة الصافية Fh
    computeHeaveForce(heightField) {
        let Ha = this.computeAverageHeightField(heightField);
        let Rh = this.bh * this.shipMass * this.velocity;
        let A = this.length * this.width;
        let Fh = (this.Kh * Ha * A) - Rh;
        return Fh;
    }

    // تحديث heave بناءً على القوة الصافية
    updateHeave(heightField) {
        let Fh = this.computeHeaveForce(heightField);
        this.acceleration = Fh / this.shipMass;
        this.velocity += this.acceleration * this.timeStep;
        let heave = this.velocity * this.timeStep;
        return heave;
    }

    // تحديث موضع السفينة بناءً على حركة heave
    updateShipPosition(ship, heightField) {
        let heave = this.updateHeave(heightField);
        ship.position.y += heave;

        // نوقف السفينة إذا كانت السرعة صغيرة جدًا
        if (Math.abs(this.velocity) < 0.001) {
            this.velocity = 0;
        }
    }
}

// إنشاء السفينة ومحاكاة الحركة
// let length = 120; // طول السفينة
// let width = 20;   // عرض السفينة
// let height = 30;  // ارتفاع السفينة
// let shipMass = 50000; // كتلة السفينة (مثال)

let shipHeave = new ShipHeave(length, width, height, shipMass);

// تحديث الحركة في الحلقة الرئيسية
function animate() {
    requestAnimationFrame(animate);

    // هنا يجب أن يكون لديك مصفوفة حقل الارتفاع (heightField)
    let heightField = generateHeightField();

    // تحديث حركة السفينة
    shipHeave.updateShipPosition(ship, heightField);

    renderer.render(scene, camera);
}

animate();
