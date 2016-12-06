var angle = 0;
var computer;
var capture;
var vid;
var planeX = 500;
var boxTexture;
var video;
var roadVid;
var playing = false;

function preload(){
  computer = loadModel('computer.obj');
  vid = createVideo("windowsxp.mov");
  snowVid = createVideo("snow2.mp4");
  roadVid = createVideo("road.mov");
  }



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  capture = createCapture(VIDEO);
  capture.size(100, 100);
 
  vid.loop();
  vid.hide();
  
  snowVid.loop();
  snowVid.hide();
  
  roadVid.hide();
  
  boxTexture = vid;
  video = vid;
  }

function draw() {

  background(51);

  texture(video);
  plane(planeX, windowHeight);
  planeX += 0.5;
  
  rotateX(angle);
  rotateY(angle * 0.3);
  texture(boxTexture);
  capture.hide();
  translate(50, 50, 150);
  model(computer);
  
  angle +=0.02;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === 88 ){
    
  if (video === roadVid) {
     
      toggleVid(playing);
  }
    console.log("PreSSED!");
    boxTexture = capture;
    video = snowVid;
    if(planeX >= 2000){
    planeX = 500
   
  }
  } 
  else if (keyCode === 80) {
    if (video === roadVid) {
      video = snowVid;
      toggleVid(playing);
    } else {
    console.log("PreSSED2!");
    video = roadVid;
    toggleVid(!playing);
    }
     
  }
   else {
     if (video === roadVid) {
      
      toggleVid(playing);
     }
    boxTexture = vid;
    video = vid;
    
  }
  
  }
  
  function toggleVid(){
    if (playing) {
      roadVid.pause();
    } else {
      roadVid.loop();
    }
    playing = !playing;
    }

