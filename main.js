x = 0;
y = 0;

let screen_width = null;
let screen_height = null;

let apple = null;

let speak_data = null;

let to_number = null;

draw_apple = false;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 to_number = Number(content);
 console.log(event); 

 content = event.results[0][0].transcript;
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    draw_apple = true;
  }
  else{
    document.getElementById("status").innerHTML = "The speech has not recognized a number";
  }
}
function preload() {
  apple = loadImage("apple.png");
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width,screen_height - 150);
  canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for (let i = 0; i < to_number; i++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple,x,y,50,50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
