let width = 600;
let height = 600;
let slider1;
let slider2;

let slider1Text;
let slider2Text;

let fpsText;
let tick = 0;

function setup() {
	let canvas = createCanvas(width, height);
	canvas.position(window.innerWidth/2-width/2, 50, 'relative');
	
	//slider for ring count and scale
	slider1 = createSlider(1, 1000, 500);
	slider1.position(window.innerWidth/2-width/2, 10);
	slider1.size(width-20, 10);
	
	slider1Text = createElement('h5', 'scale');
	slider1Text.position(window.innerWidth/2 + width/2, 8);
	slider1Text.style('margin', '0');
	slider1Text.style('color', '#c9d1d9');
		
	//slider for criteria or number to be divisible by
	slider2 = createSlider(0, 600, 343, 1);
	slider2.position(window.innerWidth/2-width/2, 30);
	slider2.size(width-20, 10);
	
	slider2Text = createElement('h5', 'mod');
	slider2Text.position(window.innerWidth/2 + width/2, 25);
	slider2Text.style('margin', '0');
	slider2Text.style('color', '#c9d1d9');
	
	
	
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
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);
	
	//setting up initial values:
	let maxvalue = calcBL(slider1.value());
	let scale = width / (slider1.value() * 2);
	let criteria = slider2.value();
	
	
	//updating scale and mod labels
	slider1Text.html('scale: '+ slider1.value().toString());
	slider2Text.html('mod: '+ slider2.value().toString());
	
	
	//updating fps label
	if(tick % 10 == 0)
		fpsText.html('fps: '+ int(frameRate()).toString());
	tick++;
	
	//iterating through the spiral, drawing if criteria is met
	for(let i = criteria; i < maxvalue; i+=criteria)
	{
			position = calcPos(i);
		
			startColor = [227, 76, 38];
			endColor = [241, 224, 90];
			currentColor = colorStep(startColor, endColor, i/maxvalue);
			
			fill(currentColor);
			stroke(currentColor);
			
			rect(position.x * scale + width  / 2 - scale, 
				-position.y * scale + height / 2 - scale, 
				 scale, scale);
		
		
		
		if(slider1.value() <= 30)
		{
			stroke(0);
			fill(255);
			textAlign(CENTER);
			textsize = 100/slider1.value()
			textSize(textsize);
			text(i, 
				 position.x * scale + width  / 2 - scale/2, 
				-position.y * scale + height / 2 - scale/2 + textsize/3);
		}
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
