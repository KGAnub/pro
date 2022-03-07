function preload() {
    mustache = loadImage('https://i.postimg.cc/RFtWQ7P4/istockphoto-485318064-612x612.jpg');
}


function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(64, 168, 50);
    stroke(44, 25, 250);
    circle(nosex,nosey,20);
    image(clown_nose,nosex1,nosey1,30,30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('poseNet is Initialised');
}
nosex = 0;
nosey = 0;
nosex1 = 0;
nosey1 = 0;
function gotPoses(results) {

    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    
    nosex = results[0].pose.nose.x;

    nosey = results[0].pose.nose.y;
    nosex1 = nosex-15;
    nosey1 = nosey-15;
    }
}



