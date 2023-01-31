song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
song1="music.mp3";
function preload(){

    song=loadSound("music.mp3");

}
function setup(){

    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){

    image(video,0,0,600,500);
    if(scoreleftwrist>0.2){
    fill("#FF0001");
    stroke("#FF0001");
    circle(leftwristX,leftwristY,20);
    InnumberleftwristY=Number(leftwristY);
    removedecimals=floor(InnumberleftwristY);
    volume=removedecimals/500;
    document.getElementById("song").innerHTML="song1 =  "+song1;
    song.play("music.mp3"); 

   }

}

function modelLoaded(){

    console.log("Posenet is intiatilized.");

}
function gotPoses(results){

    if (results.length>0){

        console.log(results);
        scoreleftwrist=results[0].pose.keypoints[9].score;
        scorerightwrist=results[0].pose.keypoints[10].score;
        console.log("score Left wrist =  "+scoreleftwrist+"score Right wrist =  "+scorerightwrist);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("leftwristX = "+leftwristX+" leftwristY = "+leftwristY);
        rightwristX=results[0].pose.rightwrist.x;
        rightwristY=results[0].pose.rightwrist.y;
        console.log("rightwristX = "+rightwristX+"rightwristY = "+rightwristY);
        song.play();

    }
    

}
