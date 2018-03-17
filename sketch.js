var song
var sampleIsPlaying = false;

function preload(){
    song = loadSound("sounds/swv-weak.mp3");
}

function setup(){
    createCanvas(600,400).parent("sketch-holder");
    
    background(0);
    
    volslider = createSlider(0, 255, 0);
    volslider.position(385, 250);
    freqslider = createSlider(0, 255, 0);
    freqslider.position(385, 300);
    speedslider = createSlider(0, 300, 0);
    speedslider.position(385, 350);
}

function draw(){
    var val1 = volslider.value();
    var val2 = freqslider.value();
    var val3 = speedslider.value();
    song.volume(val1);
    freq(val2);
    song.speed(val3);
}

function keyPressed(){
    if(keyCode == 32){
        if(sampleIsPlaying){
            song.pause();
            sampleIsPlaying = false;
        }else{
            song.loop();
            sampleIsPlaying = true;
        }
    }
}