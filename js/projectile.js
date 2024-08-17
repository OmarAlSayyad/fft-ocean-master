let animationFrameId;
let t = 0;
let interval = 0.02;
let t_flight;

function startSimulation() {
    t = 0; // Reset time
    simulateProjectile();
}

function stopSimulation() {
    cancelAnimationFrame(animationFrameId); // Stop the animation
}

function resetSimulation() {
    stopSimulation();
    const canvas = document.getElementById('trajectoryCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
}

function simulateProjectile() {
    // Get the input values from the user
    const shipSpeed = window.forces.velocity        //parseFloat(document.getElementById('shipSpeed').value);
     const launchAngle =   parseFloat(document.getElementById('launchAngle').value) * Math.PI / 180; // Convert to radians
    // const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
    const windSpeed = MAIN.Wind.wind; 

    // Constants
    const g = 9.81;  // acceleration due to gravity (m/s^2)
    const h_ship = 10;  // height of the launch platform (m)
    const rho = 1.225;  // air density (kg/m^3)
    const C_d = 0.47;  // drag coefficient
    const A = 0.05;  // cross-sectional area (m^2)
    const m = 50;  // mass of the projectile (kg)
    
    // Adjust initial velocity components based on input
    const V_x_initial = initialVelocity * Math.cos(launchAngle) + shipSpeed;  // horizontal component
    const V_y_initial = initialVelocity * Math.sin(launchAngle);  // vertical component
                                             
    // Calculate time of flight
    t_flight = 2 * V_y_initial / g;

    // Get canvas context
    const canvas = document.getElementById('trajectoryCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear previous drawing if starting new simulation
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animation function
    function animate() {
        if (t <= t_flight) {
            // Calculate velocity magnitude
            const v_x = V_x_initial - windSpeed;
            const v_y = V_y_initial - g * t;
            const v = Math.sqrt(v_x ** 2 + v_y ** 2);

            // Calculate drag force
            const F_drag = 0.5 * C_d * rho * A * v ** 2;
            const F_drag_x = F_drag * (v_x / v);
            const F_drag_y = F_drag * (v_y / v);

            // Adjust velocities with drag and wind
            const V_x_with_drag = v_x - (F_drag_x / m) * t;
            const V_y_with_drag = v_y - (F_drag_y / m) * t;

            // Calculate positions with adjusted velocities
            const x = V_x_with_drag * t;  // horizontal position
            const y = h_ship + V_y_with_drag * t - 0.5 * g * t * t;  // vertical position

            // Draw the trajectory
            if (t === 0) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height - h_ship);  // Start from launch point
            } else {
                ctx.lineTo(x, canvas.height - y);  // Adjust for canvas coordinates
                ctx.strokeStyle = 'red';
                ctx.stroke();
            }

            // Draw the projectile as a small circle
            ctx.beginPath();
            ctx.arc(x, canvas.height - y, 5, 0, 2 * Math.PI); // Small circle of radius 5
            ctx.fillStyle = 'blue';
            ctx.fill();

            t += interval;
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    // Start the animation
    animate();
}

