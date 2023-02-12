song1 = "";
song2 = "";
 function preload() {
    song1 = loadSound("sound1.mp3");
    song2 = loadSound("sound2.mp3");
 }
 function draw() {
    image(video, 0, 0, 600, 500);
 }
 function setup() {
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide;
 }
