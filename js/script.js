//import * as THREE from 'three';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import *as dat from 'dat.gui';
//import { min } from 'three/examples/jsm/nodes/Nodes.js';

// const render=new THREE.WebGLRenderer(); 

// render.setSize(window.innerWidth,window.innerHeight);
 
// document.body.appendChild(render.domElement);

// const scene= new THREE.Scene();

// const camera=new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth/window.innerHeight,
//     0.1,
//     1000

// );

// const orbit=new OrbitControls(camera,render.domElement);

// const axes=new THREE.AxesHelper();
// scene.add(axes);

// camera.position.set(-10,30,30);
// orbit.update();

// const boxGeometry=new THREE.BoxGeometry();
// const boxMeterial=new THREE.MeshBasicMaterial({color:0x00ff00});
// const Box=new THREE.Mesh(boxGeometry,boxMeterial);
// scene.add(Box);
 
// const planeGeometry = new THREE.PlaneGeometry(30,30);
// const planeMeteria=new THREE.MeshBasicMaterial({
//     color:0xFFFFFF,
//     side:THREE.DoubleSide
// });

// const plane=new THREE.Mesh(planeGeometry,planeMeteria);
// scene.add(plane);
// plane.rotation.x= -0.5 * Math.PI;

// const sphereGeometry=new THREE.SphereGeometry();
// const sphereMaterial=new THREE.MeshLambertMaterial({
//     color:0x0000FF,
//     wireframe:false
// });

// const sphere=new THREE.Mesh(sphereGeometry,sphereMaterial);
// scene.add(sphere);
// sphere.position.set(-10,10,0);

// const gridHelper=new THREE.GridHelper(30);
// scene.add(gridHelper);

//const gui =new dat.GUI();
// const options ={
//     sphereColor:'#ffea00',
//     wireframe:false
// };
// gui.addColor(options,'sphereColor').onChange(function(e){
//     sphere.material.color.set(e);
// });

// gui.add(options,'wireframe').onChange(function(e){
// sphere.material.wireframe=e;
// });

// function animate(time){
//     Box.rotation.x=time/1000;
//     Box.rotation.y=time/1000;
//     render.render(scene,camera);

// }

//render.setAnimationLoop(animate);


class Stability {
    constructor() {
        this.m = 12000000;
        this.gravity = 9.8;
        this.Kmt = 15;
        this.kg = [];
        this.wight = [];
        this.Gm = 5;

        this.guiControls = {
            wight: 0,
            kg: 0,
            addLoad: () => {
                this.wight.push(this.guiControls.wight*1000);
                this.kg.push(this.guiControls.kg);
                this.WightCarrying();
            }
        };

        var gui = new dat.GUI();
        dat.GUI.toggleHide();
        gui.add(this.guiControls, 'wight').name('Weight');
        gui.add(this.guiControls, 'kg').name('Kg');
        gui.add(this.guiControls, 'addLoad').name('Add Load');

    }
    

    WightCarrying() {
        let Mom = [];
        let i = 0;
        while (i < this.wight.length) {
            Mom[i] = this.wight[i] * this.kg[i];
            i++;
        }

        let Wights = 0, Moms = 0;
        i = 0;
        while (i < this.wight.length) {
            Wights += this.wight[i];
            Moms += Mom[i];
            i++;
        }

        let Kgs = Wights ? Moms / Wights : 0; // Avoid division by zero

        this.Gm = this.Kmt - Kgs;

        if (this.Gm > 0) {
            console.log('Ship is stable.');
        } else if (this.Gm == 0) {
            console.log('Ship is neutrally stable.');
        } else {
            console.log('Ship is unstable.');
        }
       let sum=Wights/1000;
        console.log('The sum of wight carrying',sum);
        console.log('Moms',Moms);
        console.log('the sum of KGS',Kgs);
        

        this.CalculateDisplacement(Wights);
    }

    CalculateDisplacement(Wights) {
        let ShipWights = this.m * this.gravity;
        let ShipDisplacement = (ShipWights + Wights)/1000;
        console.log('Ship Displacement:', ShipDisplacement);
    }
}

// Assuming you have a three.js scene setup already
window.stable=new Stability();
//const stability = new Stability();
//stability.WightCarrying();