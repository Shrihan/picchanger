tintcolor=""
function setup() {
    canvas=createCanvas(800, 800);
    canvas.position(540,200)
    video=createCapture(VIDEO)
    video.hide()
  }
  
  function draw() {
    background(220);
    tint(tintcolor)
    image(video,200,200,400,400)
    fill("green")
    rect(56, 38, 700, 20);
    rect(56, 738, 700, 20);
    rect(36, 38, 20, 700);
    rect(736, 38, 20, 700);
    fill("red")
    circle(50, 50, 50);
    circle(750, 50, 50);
    circle(50, 750, 50);
    circle(750, 750, 50);
  }
  function applyfilter(){
    tintcolor=document.getElementById("color").value 
  }
  function take_snapshot(){
    save("myfilter.png")
  }