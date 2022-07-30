video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status"),innnerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    Image(video, 0, 0, 480, 380);
}