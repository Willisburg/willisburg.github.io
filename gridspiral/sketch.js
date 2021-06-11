let width = 600;
let height = 600;
let slider1;
let slider2;
let slider3;
let input;
let slider1Text;
let slider1Text2;
let slider2Text;
let fpsText;
let tick = 0;
let maxvalue = 0;
let prevslidervalue = 0;

function setup() {
	let canvas = createCanvas(width, height);
	canvas.position(window.innerWidth/2-width/2, 50, 'relative');
	
	//slider for ring count and scale
	slider1 = createSlider(600, 900, 20);
	slider1.position(window.innerWidth/2-width/2, 10);
	slider1.size(width-20, 10);
	
	slider1Text = createElement('h5', 'scale');
	slider1Text.position(window.innerWidth/2 + width/2, 8);
	slider1Text.style('margin', '0');
	slider1Text.style('color', '#c9d1d9');
	
	slider1Text2 = createElement('h5', 'amount');
	slider1Text2.position(window.innerWidth/2 + width/2 + 80, 8);
	slider1Text2.style('margin', '0');
	slider1Text2.style('color', '#c9d1d9');
		
	//slider for criteria or number to be divisible by
	slider2 = createSlider(-5, 5, 0, 0.00000001);
	slider2.position(window.innerWidth/2-width/2, 30);
	slider2.size(width-20, 10);
	
	slider2Text = createElement('h5', 'mod');
	slider2Text.position(window.innerWidth/2 + width/2, 25);
	slider2Text.style('margin', '0');
	slider2Text.style('color', '#c9d1d9');
	
	slider3 = createSlider(0, 1, 0, 1);
	slider3.position(window.innerWidth/2-width/2-50, 10);
	slider3.size(50, 10);
	
	fpsText = createElement('h5', 'fps: ');
	fpsText.position(0, 8);
	fpsText.style('margin', '0');
	fpsText.style('color', '#c9d1d9');
}

function draw() {
	
	//setting up a background:
	stroke(88, 166, 255);
	fill(27, 27, 34);
	rect(0, 0, width, height);
	if(slider3.value()==1)
	{
		line(0, 0, width, height);
		line(width, 0, 0, height);
	}
	//setting up initial values:
	let spd = slider2.value();
	let criteria = 343-tick/500*spd;
	
	if(slider1.value() != prevslidervalue)
		maxvalue = calcBL(slider1.value());			
	prevslidervalue = slider1.value();
	let scale = width / (slider1.value() * 2);
	
	//updating scale and mod labels
	slider1Text.html('scale: '+ slider1.value().toString());
	slider1Text2.html('amount: '+ int(maxvalue/criteria).toString());
	slider2Text.html('mod: '+ criteria.toString());
	
	//updating fps label
	if(tick % 10 == 0)
		fpsText.html('fps: '+ int(frameRate()).toString());
	tick++;
	
	//iterating through the spiral, drawing if criteria is met
	for(let i = 0; i < maxvalue; i+=criteria)
	{
		position = calcPos(i);
		startColor = [227, 76, 38];
		endColor = [241, 224, 90];
		currentColor = colorStep(startColor, endColor, i/maxvalue);
		
		fill(currentColor);
		stroke(currentColor);
		point(position.x * scale + width  / 2 - scale, 
			 -position.y * scale + height / 2 - scale);
		
	}
}

//Calculate a color between start and end given 
//the ratio between end and start
function colorStep(start, end, step)
{
	return [start[0]+(end[0] - start[0])*step,
  		    start[1]+(end[1] - start[1])*step,
 		    start[2]+(end[2] - start[2])*step];
}
