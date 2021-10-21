leftwristx=0;
rightwristx=0;
difference=0;



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
    fill("#FFFFFF");
    text("Zeeshan",50,400);
    textSize(difference);
    document.getElementById("font_size").innerHTML="Font Size Of The Text: "+difference+"px";
}

function modolLoaded(){
    console.log("PoseNet Is initialized");
}

function gotPoses(results){
  if (results.length>0){
      console.log(results);
      leftwristx=results[0].pose.leftWrist.x;
      rightwristx=results[0].pose.rightWrist.x;
      difference=floor(leftwristx-rightwristx);
      console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx+"difference= "+difference);
  }
}