/**
 * @author jbouny / https://github.com/fft-ocean
 */



var MAIN =
{
	ws_Renderer : null,
	ws_Camera : null,
	ws_Scene : null,
	ws_Controls : null,
	ws_Ocean : null,
	ws_Environment : "night",
	ws_Raining : false,
	count:0,
	Wind :{
		wind:0,

	},
	projectileDirection: {
        x: 0,
        y: 0,
        z: -1 ,// Default direction along the Z-axis
		
    },
	ws_Commands : {
		states : {
			up : false,
			right : false,
			down : false,
			left : false
		},
		movements : {
			speed : 0.0,
			angle : 0.0
		}
	},

	Initialize : function () {

		this.ws_Renderer = new THREE.WebGLRenderer();
		this.ws_Renderer.context.getExtension( 'OES_texture_float' );
		this.ws_Renderer.context.getExtension( 'OES_texture_float_linear' );
		this.ws_Renderer.setClearColor( 0x000000 );

		document.body.appendChild( this.ws_Renderer.domElement );

		this.ws_Scene = new THREE.Scene();

			

		this.ws_GroupShip = new THREE.Object3D();
		this.warShip = new THREE.Object3D();
		this.ws_Scene.add( this.ws_GroupShip );
		this.ws_GroupShip.add( this.warShip );

		this.ws_GroupProjectile = new THREE.Object3D();
		this.projectile = new THREE.Object3D();
		this.ws_Scene.add( this.ws_GroupProjectile );
		this.ws_GroupProjectile.add( this.projectile );
		

		this.ws_Camera = new THREE.PerspectiveCamera( 55.0, WINDOW.ws_Width / WINDOW.ws_Height, 0.5, 1000000 );
		this.ws_Camera.position.set( -650, 400, 3500 );
		this.ws_Camera.lookAt( new THREE.Vector3() );
		this.warShip.add( this.ws_Camera );

		// Initialize Orbit control
		this.ws_Controls = new THREE.OrbitControls( this.ws_Camera, this.ws_Renderer.domElement );
		this.ws_Controls.userPan = false;
		this.ws_Controls.target.set( 0, 100.0, 0 );
		this.ws_Controls.noKeys = true;
		this.ws_Controls.userPanSpeed = 0;
		this.ws_Controls.minDistance = 0;
		this.ws_Controls.maxDistance = 20000.0;
		this.ws_Controls.minPolarAngle = 0;
		this.ws_Controls.maxPolarAngle = Math.PI * 0.75;

		this.InitializeSound();
		//this.InitializeBouttonWithSound();
		this.InitializeLoader();
		this.InitializeScene();

		this.InitGui();
		this.InitCommands();
		

		
		

	},
	
	InitializeSound : function InitializeSound() {
		
		var initSound = function initSound( url ) {
		
			if ( window.HTMLAudioElement ) {
			
				var sound = new Audio('');

				if ( sound.canPlayType( 'audio/mp3' ) ) {
				
					var sound = new Audio( url );
					
					sound.addEventListener( 'ended', function() {
						this.currentTime = 0;
						this.play();
					}, false );
					
					return sound;
					
				}
				
			}
			
		};
		
		this.ws_soundWaves = initSound( 'sound/waves.mp3' );
		this.ws_soundRain = initSound( 'sound/rain.mp3' );
		this.ws_soundHorn = initSound( 'sound/shipHorn.mp3' );
		
		
	},

	
	InitializeLoader : function InitializeLoader() {
	
		this.ws_Loader = new THREE.LoadingManager();
		
		var log = function( message, type, timeout ) {
			console.log( message );
			messg( message, type, timeout );
		}
		
		var delay = 1500;
		this.ws_Loader.onProgress = function( item, loaded, total ) {
			log( 'Loaded ' + loaded + '/' + total + ':' + item, 'info', delay );
		};
		this.ws_Loader.onLoad = function () {
			log( 'Loaded.', 'success', delay );
		};
		this.ws_Loader.onError = function () {
			log( 'Loading error.', 'error', delay );
		};
		
		
		this.ws_ImageLoader = new THREE.ImageLoader( this.ws_Loader );
	
	},

	InitializeScene : function InitializeScene() {

		// Add light
		this.ws_MainDirectionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
		this.ws_MainDirectionalLight.position.set( -0.2, 0.5, 1 );
		this.ws_Scene.add( this.ws_MainDirectionalLight );

		// Add Black Pearl
		var loader = new THREE.OBJMTLLoader(this.ws_Loader);
		this.ws_warShip = null;
		loader.load('/models/war3/ship.obj', '/models/war3/ship.mtl', function (object) {
			object.position.y = 85.0;
			// Set scale
			object.scale.set(12.0, 15.0, 10.5); // Adjust the scale if necessar6

			// Apply material properties
			if (object.children) {
				object.children.forEach(function (child) {
					if (child.material) {
						child.material.side = THREE.DoubleSide;
		
						// If using MeshPhongMaterial, ensure color is set correctly
						if (child.material instanceof THREE.MeshPhongMaterial) {
							child.material.color = new THREE.Color(0xffffff); // Set the color to white or any desired color
						}
					}
				});
			}
		
			MAIN.warShip.add(object);
			MAIN.ws_warShip = object;
		});


		
		

		// Add rain
		{
			var size = 128;
			var rainTexture = new THREE.Texture();
			rainTexture.generateMipmaps = false;
			rainTexture.magFilter = THREE.LinearFilter;
			rainTexture.minFilter = THREE.LinearFilter;
			this.ws_ImageLoader.load( 'img/water-drop.png', function ( image ) {
					rainTexture.image = image;
					rainTexture.needsUpdate = true;
			} );

			var rainShader = THREE.ShaderLib['rain'];

			var rainMaterial = new THREE.ShaderMaterial({
				fragmentShader: rainShader.fragmentShader,
				vertexShader: rainShader.vertexShader,
				uniforms: rainShader.uniforms,
				transparent: true,
				depthWrite: false
			});
			rainMaterial.uniforms.texture.value = rainTexture;

			this.s_RainGeometry = new THREE.Geometry();
			for ( i = 0; i < 100; i++ )
			{
				var vertex = new THREE.Vector3();
				vertex.x = Math.random() * 2.0 * size - size;
				vertex.y = Math.random() * 2.0 * size - size;
				vertex.z = Math.random() * size - size * 0.5;
				this.s_RainGeometry.vertices.push( vertex );
			}
			this.ws_Rain = new THREE.Points( this.s_RainGeometry, rainMaterial );
			this.ws_Camera.add( this.ws_Rain );
			this.ws_Rain.position.setZ( - size * 0.75 ) ;
		}

		// Initialize Clouds
		this.ws_CloudShader = new CloudShader( this.ws_Renderer, 512 );
		this.ws_CloudShader.cloudMesh.scale.multiplyScalar( 4.0 );
		this.ws_Scene.add( this.ws_CloudShader.cloudMesh );

		// Initialize Ocean
		var gsize = 512;
		var res = 512;
		var gres = 256;
		var origx = -gsize / 2;
		var origz = -gsize / 2;
		this.ws_Ocean = new THREE.Ocean( this.ws_Renderer, this.ws_Camera, this.ws_Scene,
		{
			INITIAL_SIZE : 200.0,
			INITIAL_WIND : [ 10.0, 10.0 ],
			INITIAL_CHOPPINESS : 3.6,
			CLEAR_COLOR : [ 1.0, 1.0, 1.0, 0.0 ],
			SUN_DIRECTION : this.ws_MainDirectionalLight.position.clone(),
			OCEAN_COLOR: new THREE.Vector3( 0.35, 0.4, 0.45 ),
			SKY_COLOR: new THREE.Vector3( 10.0, 13.0, 15.0 ),
			EXPOSURE : 0.15,
			GEOMETRY_RESOLUTION: gres,
			GEOMETRY_SIZE : gsize,
			RESOLUTION : res
		} );

		this.LoadSkyBox();
		this.LoadMountains();
	},

	InitGui : function InitGui() {



		var gui = new dat.GUI();
		this.guiControls = {
			fire: () => {    
				 MAIN.onMouseDown();
			}
            
        };
 		gui.add(this.guiControls, 'fire').name('Fire');
	
        // Add sliders for projectile direction
         var projectileFolder = gui.addFolder('Projectile Direction');
         projectileFolder.add(this.projectileDirection, 'x', -1, 1).name('Direction X');
         projectileFolder.add(this.projectileDirection, 'y', -1, 1).name('Direction Y');
         projectileFolder.add(this.projectileDirection, 'z', -1, 1).name('Direction Z');
		 projectileFolder.add( this.Wind,'wind',0, 60).name('wind');
		 
			
			
			//.onChange(value => {
       //    this.wind=parseFloat(value);
       //  });;

         projectileFolder.open();

		// Initialize UI
		var gui = new dat.GUI();
		dat.GUI.toggleHide();
		
		gui.add( this.ws_Ocean, "size", 10, 2000 ).onChange( function( v ) {
			this.object.size = v;
			this.object.changed = true;
		} );
		gui.add( this.ws_Ocean.materialSpectrum.uniforms.u_choppiness, "value", 0.1, 8 ).name( "choppiness" );
		gui.add( this.ws_Ocean, "windX", -50, 50 ).onChange( function ( v ) {
			this.object.windX = v;
			this.object.changed = true;
		} );
		gui.add( this.ws_Ocean, "windY", -50, 50 ).onChange( function ( v ) {
			this.object.windY = v;
			this.object.changed = true;
		} );
		gui.add( this.ws_Ocean, "exposure", 0.0, 0.5 ).onChange( function ( v ) {
			this.object.exposure = v;
			this.object.changed = true;
		} );
		gui.add( MAIN.ws_Ocean.materialOcean, "wireframe" );

		var main = this;

		$( '#env-selector > ul > li[key="' + this.ws_Environment + '"]' ).addClass( 'selected' );
		$( '#env-selector > ul > li' ).click( function() {
			main.UpdateEnvironment( $( this ).attr('key') );

			$( '#env-selector > ul > li' ).removeClass( 'selected' );
			$( this ).addClass( 'selected' );
		} ).each( function() {
			$( this ).html( '<a href="#' + $( this ).attr('key') + '">' + $( this ).html() + '</a>' );
		} ) ;

	},

	InitCommands : function InitCommands() {

		var LEFT = 37,
			UP = 38,
			RIGHT = 39,
			DOWN = 40;
			E = 69;

		var keyHandler = function keyHandler( action ) {
			
			return function( event ) {
				var key = event.which;
				if( key >= LEFT && key <= DOWN ) {
					switch( key ) {
						case UP : MAIN.ws_Commands.states.up = action ; break ;
						case RIGHT : MAIN.ws_Commands.states.right = action ; break ;
						case DOWN : MAIN.ws_Commands.states.down = action ; break ;
						case LEFT : MAIN.ws_Commands.states.left = action ; break ;
					}
				}else if (key === E) {
                    if (MAIN.ws_soundHorn) {
                        if (action) {
                            MAIN.ws_soundHorn.play().then(() => {
                                console.log('Sound played on key press');
                                MAIN.soundTimeout = setTimeout(function() {
                                    MAIN.ws_soundHorn.pause();
                                    MAIN.ws_soundHorn.currentTime = 0; // Reset the sound to the beginning
                                    console.log('Sound stopped after 5 seconds');
                                }, 5000); // Stop the sound after 5 seconds
                            }).catch(error => {
                                console.error('Error playing sound:', error);
                            });
                        }
						
                    }
				}
			}
		}

		$( document ).keydown( keyHandler( true ) );
		$( document ).keyup( keyHandler( false ) );

	},

	LoadMountains : function LoadSkyBox() {

		var main = this;

		var mountainTexture = new THREE.Texture();
		mountainTexture.generateMipmaps = false;
		mountainTexture.magFilter = THREE.LinearFilter;
		mountainTexture.minFilter = THREE.LinearFilter;
		this.ws_ImageLoader.load( 'img/mountains.png', function ( image ) {
				mountainTexture.image = image;
				mountainTexture.needsUpdate = true;
		} );


		var mountainsMaterial = new THREE.MeshBasicMaterial( {
			map: mountainTexture,
			transparent: true,
			side: THREE.BackSide,
			depthWrite: false
		} );

		var addMountain = function addMountain( size ) {

			var moutains = new THREE.Mesh(
				new THREE.CylinderGeometry( size, size, 35000, 32, 1, true ),
				mountainsMaterial
			);
			moutains.position.y = 10000;
			MAIN.ws_Scene.add( moutains );

		} ;

		// Add twice with different size in order to avoid some artifacts on the reflection
		addMountain( 120000 );
		addMountain( 150000 );

		// Add a black cylinder to hide the skybox under the water
		var cylinder = new THREE.Mesh(
			new THREE.CylinderGeometry( 150000, 150000, 150000, 32, 1, true ),
			new THREE.MeshBasicMaterial( { color: new THREE.Color( 1, 1, 1 ), side: THREE.BackSide } )
		);
		cylinder.position.y = -80000;
		main.ws_Scene.add( cylinder );

	},

	LoadSkyBox : function LoadSkyBox() {

		var cubeShader = THREE.ShaderLib['cube'];

		var skyBoxMaterial = new THREE.ShaderMaterial( {
			fragmentShader: cubeShader.fragmentShader,
			vertexShader: cubeShader.vertexShader,
			uniforms: cubeShader.uniforms,
			side: THREE.BackSide
		} );

		this.ws_SkyBox = new THREE.Mesh(
			new THREE.BoxGeometry( 450000, 450000, 450000 ),
			skyBoxMaterial
		);

		this.ws_Scene.add( this.ws_SkyBox );

		var url = window.location.href, idx = url.indexOf("#");
		var anchor = idx != -1 ? url.substring(idx+1) : null;
		var environmentParameter = anchor;

		if( environmentParameter !== null ) {
			this.ws_Environment = environmentParameter;
		}

		this.UpdateEnvironment( this.ws_Environment );

	},

	UpdateEnvironment : function UpdateEnvironment( key ) {

		var textureName = '';
		var textureExt = ".jpg";
		var directionalLightPosition = null;
		var directionalLightColor = null;
		var raining = false;

		switch( key ) {
			case 'night':
				textureName = 'grimmnight';
				directionalLightPosition = new THREE.Vector3( -0.3, 0.3, 1 );
				directionalLightColor = new THREE.Color( 1, 1, 1 );
				raining = true;
				break;
			case 'morning':
				textureName = 'clouds';
				directionalLightPosition = new THREE.Vector3( -1, 0.5, 0.8 );
				directionalLightColor = new THREE.Color( 1, 0.95, 0.8 );
				break;
			case 'day':
				textureName = 'sky';
				directionalLightPosition = new THREE.Vector3( -0.5, 0.5, -0.6 );
				directionalLightColor = new THREE.Color( 1, 0.95, 0.9 );
				break;
			case 'cloudy':
				textureName = 'miramar';
				directionalLightPosition = new THREE.Vector3( 0.3, 1.0, 0.5 );
				directionalLightColor = new THREE.Color( 0.9, 0.95, 1 );
				raining = true;
				break;
			case 'sunset':
				textureName = 'sunset';
				directionalLightPosition = new THREE.Vector3( -0.7, 0.2, -1 );
				directionalLightColor = new THREE.Color( 1, 0.8, 0.5 );
				break;
			case 'interstellar':
				textureName = 'interstellar';
				directionalLightPosition = new THREE.Vector3( -0.7, 1.0, -0.4 );
				directionalLightColor = new THREE.Color( 0.8, 1.0, 0.95 );
				break;
			case 'apocalypse':
				textureName = 'violent_days';
				directionalLightPosition = new THREE.Vector3( 1, 0.3, 1 );
				directionalLightColor = new THREE.Color( 1, 0.85, 0.3 );
				break;
			default:
				return;
		};

		this.ws_Environment = key;
		this.ws_Raining = raining;
		this.ws_MainDirectionalLight.position.copy( directionalLightPosition );
		this.ws_MainDirectionalLight.color.copy( directionalLightColor );
		this.ws_Ocean.materialOcean.uniforms.u_sunDirection.value.copy( this.ws_MainDirectionalLight.position );
		if ( raining ) {
			this.ws_soundRain.play();

		}
		else {
			this.ws_soundRain.pause();
		}
		
		var sources = [
			'img/' + textureName + '_west' + textureExt,
			'img/' + textureName + '_east' + textureExt,
			'img/' + textureName + '_up' + textureExt,
			'img/' + textureName + '_down' + textureExt,
			'img/' + textureName + '_south' + textureExt,
			'img/' + textureName + '_north' + textureExt
		];
		var images = [];

		var cubeMap = new THREE.CubeTexture( images );
		cubeMap.flipY = false;

		var imageLoader = this.ws_ImageLoader;
		var loaded = 0;
		var loadTexture = function ( i ) {
			imageLoader.load( sources[ i ], function ( image ) {
				cubeMap.images[ i ] = image;
				loaded ++;
				if ( loaded === 6 ) {
					cubeMap.needsUpdate = true;
				}
			} );

		}

		for ( var i = 0, il = sources.length; i < il; ++ i ) {
			loadTexture( i );
		}
		
		cubeMap.format = THREE.RGBFormat;
		cubeMap.generateMipmaps = false;
		cubeMap.magFilter = THREE.LinearFilter;
		cubeMap.minFilter = THREE.LinearFilter;

		this.ws_SkyBox.material.uniforms['tCube'].value = cubeMap;
		this.ws_soundWaves.play();
		
		
	},

	Display : function () {

		this.ws_Renderer.render( this.ws_Scene, this.ws_Camera );
		

	},
	
	getWaveHeight: function(x, z) {
		if (this.ws_Ocean) {
			// Assuming the `getHeightAt` method exists and takes in x and z coordinates
			var waveHeight = this.ws_Ocean.getHeightAt(x, z);
			return waveHeight;
		} else {
			console.error("Ocean object not initialized.");
			return null;
		}
	},

	CreateWave(x, z, y) {
		// Assuming the ocean mesh has vertices that can be manipulated
		const oceanGeometry = this.ws_Ocean.oceanMesh.geometry;
		const vertices = oceanGeometry.attributes.position.array;
		const oceanSize = this.ws_Ocean.oceanMesh.scale.x;
	
		// Normalize the x, z coordinates to the vertex grid
		const normalizedX = (x + oceanSize / 2) / oceanSize;
		const normalizedZ = (z + oceanSize / 2) / oceanSize;
	
		// Find the closest vertex to the provided x, z coordinates
		let closestVertexIndex = null;
		let minDistance = Infinity;
	
		for (let i = 0; i < vertices.length; i += 3) {
			const vx = vertices[i];
			const vz = vertices[i + 2];
	
			const dx = vx - normalizedX * oceanSize;
			const dz = vz - normalizedZ * oceanSize;
			const distance = dx * dx + dz * dz;
	
			if (distance < minDistance) {
				minDistance = distance;
				closestVertexIndex = i;
			}
		}
	
		if (closestVertexIndex !== null) {
			// Modify the y coordinate of the closest vertex to create the wave
			vertices[closestVertexIndex + 1] += y;
	
			// Update the geometry to reflect the changes
			oceanGeometry.attributes.position.needsUpdate = true;
			oceanGeometry.computeVertexNormals();
		}
	},
	//  onMouseDown(event) {
	// 	// Check if the left mouse button is pressed (button 0)
	// 	if (event.button === 0) {
	// 		if (!MAIN.ws_projectile) {
	// 			// Load the projectile if it hasn't been loaded yet
	// 			var projectileLoader = new THREE.OBJMTLLoader(this.ws_Loader);
	// 			projectileLoader.load('/models/projectile/TankShell.obj', '/models/projectile/TankShell.mtl', function (object) {
	// 				object.position.y = 90.0;
	// 				object.rotation.x = -1.5;
	// 				object.scale.set(12.0, 30.0, 10.5); // Adjust the scale if necessary
	
	// 				// Apply material properties
	// 				if (object.children) {
	// 					object.children.forEach(function (child) {
	// 						if (child.material) {
	// 							child.material.side = THREE.DoubleSide;
	
	// 							// Ensure color is set correctly
	// 							if (child.material instanceof THREE.MeshPhongMaterial) {
	// 								child.material.color = new THREE.Color(0xffffff); // Set to desired color
	// 							}
	// 						}
	// 					});
	// 				}
	
	// 				// Add to scene and set as the active projectile
	// 				MAIN.projectile.add(object);
	// 				MAIN.ws_projectile = object;
	// 			});
	// 		}
	// 	}
	// },
	
	//  onMouseUp(event) {
	// 	// Check if the left mouse button is released (button 0)
	// 	if (event.button === 0 && MAIN.ws_projectile) {
	// 		// Launch the projectile forward (e.g., along the Z-axis)
	// 		var projectileVelocity = new THREE.Vector3(0, 0, -1); // Adjust direction as needed
	// 		var speed = 50; // Adjust the speed as necessary
	
	// 		// Set the projectile's velocity
	// 		projectileVelocity.multiplyScalar(speed);
			
	// 		// Animate the projectile by updating its position over time
	// 		var animateProjectile = function() {
	// 			if (MAIN.ws_projectile) {
	// 				MAIN.ws_projectile.position.add(projectileVelocity);
	
	// 				// Optionally, remove the projectile if it goes out of bounds or hits something
	// 				// if (MAIN.ws_projectile.position.z < -1000) {
	// 				//     MAIN.projectile.remove(MAIN.ws_projectile);
	// 				//     MAIN.ws_projectile = null;
	// 				//     return;
	// 				// }
	
	// 				requestAnimationFrame(animateProjectile);
	// 			}
	// 		};
	
	// 		animateProjectile();
	// 	}
	// },
	

	SpawnProjectile : function (position, direction) {
		// Load the projectile model dynamically each time a projectile is spawned
		var loader = new THREE.OBJMTLLoader(this.ws_Loader);
		loader.load('/models/projectile/TankShell.obj', '/models/projectile/TankShell.mtl', function (object) {
			// Set initial position and direction
			object.position.copy(position);
			//object.rotation.copy(direction);
			object.rotation.x = -1.5;
		
			 this.angleY = Math.atan2(direction.x, direction.z);
			
			object.scale.set(12.0, 30.0, 10.5); // Adjust the scale if necessary
	
			// Apply material properties
			object.children.forEach(function (child) {
				if (child.material) {
					child.material.side = THREE.DoubleSide;
	
					if (child.material instanceof THREE.MeshPhongMaterial) {
						child.material.color = new THREE.Color(0xffffff); // Set the color to white or any desired color
					}
				}
			});
	
			// Add the projectile to the scene
			MAIN.projectile.add(object);
			MAIN.ws_GroupProjectile.add(MAIN.projectile);
		//	MAIN.projectile.rotation.set(0,this.angleY,0); 

			
			// Logic to handle movement or lifetime of the projectile
			MAIN.MoveProjectile(object,direction);
		});
	},
	
	MoveProjectile : function (projectile,direction) {
		// Implement logic for projectile movement here
		var speed = 1000; // Set the speed of the projectile
	//	this.ws_projectile.position.add(direction.multiplyScalar(speed));
		//var direction = new THREE.Vector3(0, 0, -1); // Example direction; modify based on your needs
		var delta = 0.1; // Example time delta for movement calculation
		//MAIN.ws_GroupProjectile.rotation.y=this.angleY;
		// Use requestAnimationFrame or another loop to update the projectile's position over time
		var move = function () {
			if (projectile) {
				projectile.position.add(direction.clone().multiplyScalar(speed * delta));
				projectile.position.y -=1;
	
				// Optionally remove the projectile after it travels a certain distance
				if (projectile.position.z < -500000 ||projectile.position.z > 500000 || projectile.position.x < -500000  ||  projectile.position.x > 500000) {
					MAIN.ws_GroupProjectile.remove(projectile);
					projectile = null; // Clear the reference
				} else {
					requestAnimationFrame(move);
				}
			}
		};
		move();
	},

	onMouseDown : function (event) {
		// Check if the left mouse button is pressed (button 0)
		//if (event.button === 0) {
			// Define the initial position and direction of the projectile
			var position = new THREE.Vector3(MAIN.ws_GroupShip.position.x,MAIN.ws_GroupShip.position.y, MAIN.ws_GroupShip.position.z);
			// var direction = new THREE.Euler(0, MAIN.ws_Camera.rotation.y, 0);
			var direction = new THREE.Vector3(
                MAIN.projectileDirection.x,
                MAIN.projectileDirection.y,
                MAIN.projectileDirection.z
            ).normalize();
		
	
			// Spawn a new projectile
			MAIN.SpawnProjectile(position, direction);

		//}
	},
	
	
	Update : function () {
		
	


		// Update camera position
		if( this.ws_Camera.position.y < 0.0 ) {
			this.ws_Camera.position.y = 2.0;
		}
		MAIN.CreateWave(10, 50, 5);  // Creates a wave at position (10, 20) with a height of 5 units
		MAIN.CreateWave(100, 1000, 100); 

var xCoord = 0;
var zCoord = 0;
//var yHeight = MAIN.getWaveHeight(xCoord, zCoord);
// console.log(this.ws_Ocean);
// console.log("Wave height at (" + xCoord + ", " + zCoord + ") is " );


		// Update black ship displacements
		this.UpdateCommands();
		this.ws_GroupShip.rotation.y += this.ws_Commands.movements.angle;// rotation ship with press on boutton
		this.warShip.rotation.z = -this.ws_Commands.movements.angle * 10.0;
		this.warShip.rotation.x = this.ws_Commands.movements.speed * 0.00005;//animation for movement the ship front and back
		var shipDisplacement = (new THREE.Vector3(0, 0, -2)).applyEuler(this.ws_GroupShip.rotation).multiplyScalar( 5.0 * this.ws_Commands.movements.speed );
		this.ws_GroupShip.position.add( shipDisplacement );
		

		var currentTime = new Date().getTime();
		this.ws_Ocean.deltaTime = ( currentTime - lastTime ) / 1000 || 0.0;
		lastTime = currentTime;

		// Update black ship movements
		if( this.ws_warShip !== null  )
		{
			var animationRatio = 1.0 + this.ws_Commands.movements.speed * 0.05;
			this.ws_warShip.rotation.y = Math.cos( currentTime * 0.0008 ) * 0.001 - 0.025;
			this.ws_warShip.rotation.x = Math.sin( currentTime * 0.001154 + 0.78 ) * 0.0000000010 + 0.05;//animation front and back
		}
		if( this.ws_warShip !== null){

		this.ws_warShip.rotation.y=Math.PI/2;
	//	this.count=1;
		}

		// Update load 
		if ((window.stable.Gm < 0 || window.stable.ShipDisplacement >=12000000) && this.count==0 ) {
			this.count=1;
			let animation = 0;
			let position = 300;
			const maxAnimation = 1;
			const minPosition = -1000;
			//MAIN.ws_Commands.movements.speed=0;
			
			const animate = () => {
				// console.log('animation', animation);
				// console.log('position', position);
		        if(animation < maxAnimation && animation< 1){

					this.ws_GroupShip.rotation.x = animation;
					animation += 0.0001;
				}
				if ( position > minPosition && animation == 1) {
					
					this.ws_GroupShip.position.y = position;
					position -= 0.3;
					
					
				}
				 
				if(animation < maxAnimation || position > minPosition )
				{
				requestAnimationFrame(animate);
				}
				else
				{
					console.log('Animation stopped.');
				}
			};
		
			
				animate();
			
		}
		
		if ((window.stable.HorizontalDisplacement > 5 || window.stable.HorizontalDisplacement <-5 || window.forces.rotationAngle < -0.1 || window.forces.rotationAngle > 0.1) && this.count==0 ) {
			this.count=1;
			let animation = 0;
			let position = 300;
			const maxAnimation = 1;
			const minPosition = -1000;
			MAIN.ws_Commands.movements.speed=0;
			
			const animate = () => {
				// console.log('animation', animation);
				// console.log('position', position);

				if(window.stable.HorizontalDisplacement > 5 || window.forces.rotationAngle<-0.1){
					if(animation < maxAnimation && animation< 1){	
						this.ws_GroupShip.position.y -= 0.5;
						this.ws_GroupShip.rotation.z -= 0.0005;
							animation += 0.0005;
					}						
				}
				else{
		        if(animation < maxAnimation && animation< 1){	
					
					this.ws_GroupShip.rotation.z = animation;
					    animation += 0.0005;
				}		
			}
				if ( position > minPosition && animation == 1) {
					
					this.ws_GroupShip.position.y = position;
					position -= 0.3;
					
					
				}
				 
				if(animation < maxAnimation || position > minPosition )
				{
				requestAnimationFrame(animate);
				}
				else
				{
					console.log('Animation stopped.');
				}
			};
		
			
				animate();
			
		}
	

		// Update rain
		if( this.ws_Raining ) {
			var seed = 1;
			var fastRandom = function fastRandom() {
				var x = Math.sin( seed++ ) * 10000;
				return x - Math.floor( x );
			}
			for( i in this.s_RainGeometry.vertices )
			{
				var speed = 4.0;
				this.s_RainGeometry.vertices[i].y -= fastRandom() * speed + speed;
				if( this.s_RainGeometry.vertices[i].y < -50 )
					this.s_RainGeometry.vertices[i].y = 50;
			}
			this.ws_Rain.rotation.set( -this.ws_Camera.rotation.x, -this.ws_Camera.rotation.y, -this.ws_Camera.rotation.z, "ZYX" );
			this.s_RainGeometry.verticesNeedUpdate = true;
		}

		// Render ocean reflection
		this.ws_Camera.remove( this.ws_Rain );
		this.ws_Ocean.render();
		if( this.ws_Raining )
			this.ws_Camera.add( this.ws_Rain );

		// Updade clouds
		this.ws_CloudShader.update();

		// Update ocean data
		this.ws_Ocean.update();
		
		this.ws_Controls.update();
		this.Display();

	},

	UpdateCommands : function UpdateCommands() {

		var states = this.ws_Commands.states;

		// Update speed
		var targetSpeed = 0.0;
		if( states.up ) {
			targetSpeed = 1.0;
		}
		else if( states.down ) {
			targetSpeed = -1.0;
		}
		var curSpeed = this.ws_Commands.movements.speed ;
		this.ws_Commands.movements.speed = curSpeed + ( targetSpeed - curSpeed ) * 0.05;

		// Update angle
		var targetAngle = 0.0;
		if( states.left ) {
			targetAngle = Math.PI * 0.0001;
		}
		else if( states.right ) {
			targetAngle = -Math.PI * 0.0001;
		}
		if( states.down ) {
			targetAngle *= -1.0;
		}
		
		var curAngle = this.ws_Commands.movements.angle ;
		this.ws_Commands.movements.angle = curAngle + ( targetAngle - curAngle ) * 0.05;

	},

	Resize : function ( inWidth, inHeight ) {

		this.ws_Camera.aspect = inWidth / inHeight;
		this.ws_Camera.updateProjectionMatrix();
		this.ws_Renderer.setSize( inWidth, inHeight );
		this.Display();

	},
	
}
