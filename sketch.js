let width = 800;
let height = 800;
let size = 0;
var points = [];
let iterations = 15;
let slider;

function setup() {
	createCanvas(width, height);
	slider = createSlider(0, 20, 1);
	slider.position(10, 10);
	slider.style('width', '80px');
}

function mouseClicked()
{
	points[size] = [];
	points[size][0] = mouseX; 
	points[size][1] = mouseY;
	size ++;
}

function draw() {
	iterations = slider.value();
	background(255);
	rect(0, 0, width, height);
	points.forEach(element => {
		point(element[0], element[1]);
	});
	if(size>1)
	{
		initx = fuckRecursion0(0, 0, size);
		inity = fuckRecursion1(0, 0, size);
		for(let i = 1; i < size * iterations+1; i++)
		{
			t = i / (size * iterations);
			x = fuckRecursion0(t, 0, size);
			y = fuckRecursion1(t, 0, size);
			line(initx, inity, x, y);
			initx = x;
			inity = y;
			point(x, y);
		}
	}
}

//Bezier for x recursively
function fuckRecursion0(t, start, end) {
	if(start == size) return mouseX;
	if(start == end) return points[start][0];
	let value = (1 - t) * fuckRecursion0(t, start, end - 1) + t * fuckRecursion0(t, start+1, end);
	return value;
}

//Bezier for y recursively
function fuckRecursion1(t, start, end) {
	if(start == size) return mouseY;
	if(start == end) return points[start][1];
	let value = (1 - t) * fuckRecursion1(t, start, end - 1) + t * fuckRecursion1(t, start+1, end);
	return value;
}