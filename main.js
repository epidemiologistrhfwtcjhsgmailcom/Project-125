leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(10, 50);
    canvas = createCanvas(400, 400);
    canvas.position(430, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("PoseNet is Initialized and Loaded.");
}

function draw() {
    background('#ff1a75');
    textSize(difference);
    fill('#ffccff');
    text('Nainika', 50, 400);
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}