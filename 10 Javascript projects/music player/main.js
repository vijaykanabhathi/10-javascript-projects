let progress=document.getElementById("progress");
let song=document.getElementById("song");
let controlicon=document.getElementById("controlicon");

song.onloadedmetadata=function () {
    progress.max=song.duration;
    progress.value=song.currentTime;
}

// play pause
function playpause() {
   if (controlicon.classList.contains("fa-pause")) {
    song.pause();

    controlicon.classList.remove( "fa-pause" );
    controlicon.classList.add( "fa-play" );
   }
   else{
    song.play();
    controlicon.classList.add( "fa-pause" );
    controlicon.classList.remove( "fa-play" );
   }
}

if (song.play) {
    setInterval(() => {
        progress.value=song.currentTime;
    },1000);
}

progress.onchange=function () {
    song.play();
    song.currentTime=progress.value;
    controlicon.classList.add( "fa-pause" );
    controlicon.classList.remove( "fa-play" );
}