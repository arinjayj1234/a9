songa = ""
songb = ""

function preload(){
	songa = loadSound("songa.mp3");
	songb = loadSound("songb.mp3")	
}

function setup(){
	canvas = createCanvas(600, 500);	
	canvas.center()

	video = createCapture(VIDEO);
	video.hide();
}

function draw(){
	image(video, 0, 0, 600, 500);
}
