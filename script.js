let song = document.getElementById("song");
let playBtn = document.getElementById("play");
let songs = [
     "songs/song1.mp3",
     "songs/song2.mp3",
     "songs/song3.mp3"


];
let CurrentSongIndex = 0;
playBtn.addEventListener("click", () => {
    if(song.paused) {
        song.play();
        playBtn.innerText = "pause";
    } else{
        song.pause();
        playBtn.innerText="play";

    }

});
let progressBar= document.getElementById("progressBar");
song.addEventListener("timeupdate",() => {
    if(song.duration) {
         let progress = (song.currentTime/song.duration)*100;
    progressBar.value=progress;
    
    currentTime.innerText= formatTime(song.currentTime);
    totalTime.innerText= formatTime(song.duration);
    }
   
});
progressBar.addEventListener("input", () => {
    song.currentTime = (progressBar.value * song.duration)/100;
    progressBar.max = 100;

});
let songName = document.getElementById("songName");
   let songNames = [
    "Song 1",
    "Song 2 ",
    "Song 3 "
];

function loadSong(index) {
    song.src = songs[index];
    songName.innerText = songNames[index];
}

let nextBtn = document.getElementById("next") ;
nextBtn.addEventListener("click",() => {
    CurrentSongIndex++;
    if(CurrentSongIndex>=songs.length) {
        CurrentSongIndex=0;
    }
    loadSong(CurrentSongIndex);
});
prevBtn.addEventListener("click",() => {
    CurrentSongIndex--;
    if(CurrentSongIndex < 0) {
        CurrentSongIndex = songs.length - 1; 
    }
    
});
    
song.addEventListener("ended",() => {
    CurrentSongIndex++;
    if(CurrentSongIndex >= songs.length) { 
        CurrentSongIndex = 0;
    }
   
});

let currentTime = document.getElementById("currentTime");
let totalTime = document.getElementById("totalTime");
function formatTime(seconds) {
    let mins = Math.floor(seconds/60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    return mins + ":" + secs;
}
loadSong(CurrentSongIndex);