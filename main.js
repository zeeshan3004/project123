function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);


    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet= ml5.poseNet(video,modolLoaded);

    poseNet.on("pose",gotPoses);
}

function draw(){
    background("#808080");
}

function modolLoaded(){
    console.log("PoseNet Is initialized");
}

function gotPoses(results){
  if (results.length>0){
      console.log(results);
  }
}