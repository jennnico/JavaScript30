let playing = false;
const player = document.querySelector(`.player__video`);
const toggle = document.querySelector(`.toggle`);
const video = document.querySelector(`video`);
const progressBar = document.querySelector(`.progress__filled`);
let toggleText = toggle.textContent;

let jumpBack = document.querySelector(`button[data-skip="${-10}"]`);
let jumpAhead = document.querySelector(`button[data-skip="${25}"]`);

let progress = document.querySelector('.progress');
let sliderVolume = document.querySelector(`input[name="volume"]`);
let sliderSpeed = document.querySelector(`input[name="playbackRate"]`);


//set the volume
sliderVolume.oninput = function() {
    let vol = this.value;
    video.volume = vol;
}

//set the play speed
sliderSpeed.oninput = function(){
    let rate = this.value
    video.playbackRate = rate;
}

//play and pause
function toggleVideo(){

    if(toggleText === '►'){
        toggleText = '❚❚'
    } else{toggleText = '►'}

    if(playing === true){
        video.pause();
    }else{
        video.play();
    }

    toggle.textContent = toggleText;
    playing = !playing;
}

function jumpBackwards(){
    video.currentTime = video.currentTime - 10;
}

function jumpForwards(){
    video.currentTime = video.currentTime + 25;
}

function timeUpdate(){
    let progresso = video.currentTime * 100;
    progressBar.style.flexBasis = (progresso / video.duration) + "%";
    console.log(progresso / video.duration)
}


player.addEventListener('click', toggleVideo);
jumpBack.addEventListener('click', jumpBackwards);
jumpAhead.addEventListener('click', jumpForwards);
video.ontimeupdate = function() {timeUpdate()};
