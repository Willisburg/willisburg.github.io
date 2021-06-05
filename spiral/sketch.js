let width = 600;
let height = 600;
let slider1;
let slider2;
let slider3;
let slider4;
let slider1Text;
let slider2Text;
let slider3Text;
let slider4Text;
let fpsText;
let tick = 0;

function setup() {
	let canvas = createCanvas(width, height);
	canvas.position(window.innerWidth/2 - width/2, 50, 'relative');
	
	//slider for count and scale
	slider1 = createSlider(1, 50000, 1);
	slider1.position(window.innerWidth/2 - width/2, 10);
	slider1.size(width-20, 10);
	
	slider1Text = createElement('h5', 'scale: ');
	slider1Text.position(window.innerWidth/2 + width/2, 8);
	slider1Text.style('margin', '0');
	slider1Text.style('color', '#c9d1d9');
	
	//slider for criteria or number to be divisible by
	slider2 = createSlider(1, 500, 1, 1);
	slider2.position(window.innerWidth/2 - width/2, 30);
	slider2.size(width-20, 10);
	
	slider2Text = createElement('h5', 'mod: ');
	slider2Text.position(window.innerWidth/2 + width/2, 25);
	slider2Text.style('margin', '0');
	slider2Text.style('color', '#c9d1d9');
	
	//slider for checking prime numbers
	slider3 = createSlider(0, 1, 0, 1);
	slider3.position(window.innerWidth/2 - width/2 - 70, 10);
	slider3.size(50, 10);
	
	slider3Text = createElement('h5', 'check primes');
	slider3Text.position(window.innerWidth/2 - width/2 - 170, 8);
	slider3Text.style('margin', '0');
	slider3Text.style('color', '#c9d1d9');
	
	//slider for checking prime numbers
	slider4 = createSlider(1, 1000, 1, 1);
	slider4.position(window.innerWidth/2 - width/2 - 70, 30);
	slider4.size(50, 10);
	
	slider4Text = createElement('h5', 'text size');
	slider4Text.position(window.innerWidth/2 - width/2 - 170, 25);
	slider4Text.style('margin', '0');
	slider4Text.style('color', '#c9d1d9');
	
	fpsText = createElement('h5', 'fps: ');
	fpsText.position(0, 8);
	fpsText.style('margin', '0');
	fpsText.style('color', '#c9d1d9');
}

function draw() {
	//setting up a background:
	stroke(18, 18, 18);
	fill(25, 25, 25);
	rect(0, 0, width, height);
	
	stroke(255, 204, 0);	
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);
		
	//setting up initial values:
	let maxvalue = slider1.value()*2;
	let scale = width / (slider1.value() * 2);
	let criteria = slider2.value();
	let primeCheck = slider3.value();
	let textsize2 = slider4.value();
	
	//updating scale and mod labels
	slider1Text.html('scale: '+ slider1.value().toString());
	if(primeCheck == 0)
		slider2Text.html('mod: '+ slider2.value().toString());
	else
		slider2Text.html('mod: Primes');
	
	//updating fps label
	if(tick % 10 == 0)
		fpsText.html('fps: '+ int(frameRate()).toString());
	tick++;

	for(let i = 0; i < maxvalue; i++)
	{
		position = polarPos(i, i);
		if((primeCheck == 0 && i % criteria == 0) || 
		   (primeCheck == 1 && isPrime(i)))
		{
			//Drawing circles in polar coordinates
			//if criteria is met
			fill(240, 231, 213);
			stroke(240, 231, 213);
			circle(position.x * scale + width  / 2, 
				  -position.y * scale + height / 2, 5);
			
			//Drawing values of circles in polar coordinates
			fill(25, 25, 25;
			stroke(25, 25, 25);
			textsize = 100 / slider1.value()*textsize2;
			textSize(textsize);
			text(i, 
				 position.x * scale + width  / 2, 
				-position.y * scale + height / 2);
		}
	}
}

//calculates polar positions from 
//given distance and angle in radians
function polarPos(distance, rads)
{
	x = Math.cos(rads) * distance;
	y = Math.sin(rads) * distance;
	return {x, y};
}

//checks whether a giver number is prime or not
//returns 1 if it is prime, 0 otherwise
function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false;
  return num > 1;
}
