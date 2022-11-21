// Add js here.
var vid = document.querySelector("#videoplayer"); //variable
vid.autoplay = false;//autoplay
vid.loop = false;//loop

//play
var playbtn = document.querySelector('#play');
playbtn.addEventListener('click', function(){
    vid.play();
});

//pause
var pausebtn = document.querySelector('#pause');
pausebtn.addEventListener('click', function(){
    vid.pause();
});

//make video slow
var slowbtn = document.querySelector('#slower').addEventListener("click", makeslower);
function makeslower(){
    var speed = vid.playbackRate;
     if (speed == 0.5){
        window.alert("Video is at slowest speed!");
     }
     else {
        if (speed == 1){

            speed = 0.5;
            vid.playbackRate = speed;
        }
        else if(speed == 2){

            speed = 1;
            vid.playbackRate = speed;
        }
     }
};

//make video fast
var fastbtn = document.querySelector('#faster').addEventListener("click", makefaster);
function makefaster(){
    var speed = vid.playbackRate;
    if (speed == 2){
        window.alert("Video is at fastest speed!");
    }
    else {
        if (speed == 1){

            speed = 2;
            vid.playbackRate = speed;
        }
        else if (speed == 0.5){
            speed = 1;
            vid.playbackRate = speed;
        }
    }
};

//skip
function skipvideo(value){
    var vid = document.querySelector("#videoplayer");
    vid.currentTime += value;
}

document.querySelector("#skip").addEventListener('click', function(){
    let videoTime = vid.currentTime;
    if(videoTime >= vid.duration){
        vid.pause();
        document.querySelector('#skip').innerHTML = "Restart";
        vid.play();
    }
    else if (videoTime >= 0){
        document.querySelector('#skip').innerHTML = "Skip Ahead";
        vid.currentTime += 15;
        vid.play();
    }
});

//mute
var mutebtn = document.querySelector("#mute");
mutebtn.addEventListener("click", function(){

    if(vid.muted == true){
        vid.muted = false;
        mutebtn.innerHTML = 'Mute';
    }
    else{
        vid.muted = true;
        mutebtn.innerHTML = 'Unmute';
    }
});

//slider
var sliderbtn = document.querySelector("#slider");
sliderbtn.addEventListener("change", function(){
    vid.volume = sliderbtn.value / 100;
    document.querySelector('#volume').innerHTML = sliderbtn.value+"%";
});
