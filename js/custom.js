$(window).scroll(function () {
    $(".slides-section").css("top","-" + ($(this).scrollTop() / 2) + "px");
});

var c = document.getElementById("matrix");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "1001010010101100111010010101010101010";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = matrix[Math.floor(Math.random()*matrix.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);




$('#autoplay').textition({

 speed: 1,
	
 map: {x: 200, y: 100, z: 0},
	
 autoplay: true,

 interval: 3

});


$('.t1 h5').waypoint(function(direction){
$('.t1 h5, .t1 p').css({ opacity: 1 });
shuffleLetters(document.querySelectorAll('.t1 h5, .t1 p'), {
  step: 15,
  fps: 20
});
this.destroy();
},  
{ 
    offset: '70%', 
});

$('.t2 h5').waypoint(function(direction){
$('.t2 h5, .t2 p').css({ opacity: 1 });
shuffleLetters(document.querySelectorAll('.t2 h5, .t2 p'), {
  step: 15,
  fps: 20
});
this.destroy();
},  
{ 
    offset: '70%', 
});

$('.t3 h5').waypoint(function(direction){
$('.t3 h5, .t3 p').css({ opacity: 1 });
shuffleLetters(document.querySelectorAll('.t3 h5, .t3 p'), {
  step: 15,
  fps: 20
});
this.destroy();
},  
{ 
    offset: '70%', 
});

$('.t4 h5').waypoint(function(direction){
$('.t4 h5, .t4 p').css({ opacity: 1 });
shuffleLetters(document.querySelectorAll('.t4 h5, .t4 p'), {
  step: 15,
  fps: 20
});
this.destroy();
},  
{ 
    offset: '70%', 
});

$('.t5 h5').waypoint(function(direction){
$('.t5 h5, .t5 p').css({ opacity: 1 });
shuffleLetters(document.querySelectorAll('.t5 h5, .t5 p'), {
  step: 15,
  fps: 20
});
this.destroy();
},  
{ 
    offset: '70%', 
});

$('.t6 h5').waypoint(function(direction){
$('.t6 h5, .t6 p').css({ opacity: 1 });
shuffleLetters(document.querySelectorAll('.t6 h5, .t6 p'), {
  step: 15,
  fps: 20
});
this.destroy();
},  
{ 
    offset: '70%', 
});

AOS.init({
	once: true,
});

/*
particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#3cff00"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.050007084336947755,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 287.5407349374496,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
	"config_demo": {
      "hide_card": false,
      "background_color": "#000000",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
}

);*/




var table = [
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
"Pixel", "focus", "https://themeforest.net/item/pixelfocus-one-page-html-template/22952784", 1, 1,
"Awm", "Systems", "http://www.awmsystems.com/", 18, 1,
"Dark", "Fashion", "http://dailyfun.pk/.xeon/darkfashion/", 1, 2,
"Lock", "Stress", "http://dailyfun.pk/.xeon/lockstress/", 1, 1,
"Active", "Solutions", "http://dailyfun.pk/.xeon/activewebsol/", 18, 1,
"Egg", "Login", "http://dailyfun.pk/.xeon/egg/", 1, 2,
"Trimed", "ltd", "http://dailyfun.pk/.xeon/trimed/", 1, 1,
"Live", "Soccer", "http://dailyfun.pk/.xeon/livesoccer/", 18, 1,
"Rose", "Gloves", "http://rosegloves.com/main.php", 1, 2,
"Daily", "Fun", "http://dailyfun.pk/", 1, 1,
			];

			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = { table: [], sphere: [], helix: [], grid: [] };

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table

				for ( var i = 0; i < table.length; i += 5 ) {

					var element = document.createElement( 'a' );
					element.className = 'element';
					element.setAttribute('target', '_blank');
					element.setAttribute('href', table[ i+2 ]);
					element.style.backgroundColor = 'rgba(0, 150, 0,' + ( Math.random() * 0.5 + 0.25 ) + ')';

					var number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = ( i / 5 ) + 1;
					element.appendChild( number );

					var symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.innerHTML = table[ i ] + '<br>' + table[ i+1 ];
					element.appendChild( symbol );

		

					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 8000 - 4000;
					object.position.y = Math.random() * 1600 - 800;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );

					objects.push( object );

					//

					var object = new THREE.Object3D();
					object.position.x = ( table[ i + 3 ] * 220 ) - 2030;
					object.position.y = - ( table[ i + 4 ] * 220 ) + 990;

					targets.table.push( object );
					

				}

				// sphere

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = Math.acos( - 1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;

					var object = new THREE.Object3D();

					object.position.setFromSphericalCoords( 800, phi, theta );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				// helix

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var theta = i * 0.175 + Math.PI;
					var y = - ( i * 8 ) + 450;

					var object = new THREE.Object3D();

					object.position.setFromCylindricalCoords( 900, theta, y );

					vector.x = object.position.x * 2;
					vector.y = object.position.y;
					vector.z = object.position.z * 2;

					object.lookAt( vector );

					targets.helix.push( object );

				}

				// grid

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = new THREE.Object3D();

					object.position.x = ( ( i % 5 ) * 400 ) - 800;
					object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
					object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

					targets.grid.push( object );

				}

				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( $("body").prop("clientWidth"), window.innerHeight );
				document.getElementById( 'portfolio' ).appendChild( renderer.domElement );

				//

				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 1;
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.noZoom = true;
				controls.addEventListener( 'change', render );

				transform( targets.sphere, 2000 );


				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();
$('#portfolio').waypoint(function(direction){
				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}
	new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();
	$('#portfolio h4').css({ opacity: 1 });
this.destroy();
},  
{ 
    offset: '40%', 
});
				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();
				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}

$('#power').waypoint(function(direction){
new Vivus('power', {start: 'autostart', type: 'scenario', duration: 420}, function (obj) {
  obj.el.classList.add('finished');
});
$('#power').css({ opacity: 1 });
this.destroy();
},  
{ 
    offset: '40%', 
});