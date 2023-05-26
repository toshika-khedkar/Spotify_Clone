console.log("heloo");
let songIndex = 0;

let audioElement = new Audio('images/1.mp3');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [

    { songName: "Let me down", filePath: "images/1.mp3", cover: "images/cover1.jpg" },
    { songName: "Die For You Ft Ari..", filePath: "images/2.mp3", cover: "images/cover2.jpg" },
    { songName: "Willow", filePath: "images/3.mp3", cover: "images/cover3.jpg" },
    { songName: "Stuck with you", filePath: "images/4.mp3", cover: "images/cover4.jpg" },
    { songName: "Positions", filePath: "images/5.mp3", cover: "images/cover5.jpg" },
    { songName: "Arcade", filePath: "images/6.mp3", cover: "images/cover6 (2).jpg" },
    // { songName: "Best Friends", filePath: "images/Best Friend.mp3", cover: "images/cover2.jpg" },
    { songName: "Cheap Thrills", filePath: "images/7.mp3", cover: "images/cover7 (2).jpg" },
    // { songName: "Butter", filePath: "images/8.mp3", cover: "images/cover8 (2).jpg" },
    // { songName: "Problem", filePath: "images/Problem.mp3", cover: "images/cover5.jpg" },
    // { songName: "Your Power", filePath: "images/Your Power.mp3", cover: "images/cover5.jpg" },
    // { songName: "Die For You", filePath: "images/9.mp3", cover: "images/cover9.jpg" }
    // { songName: "Unstoppable", filePath: "images/Unstoppable.mp3", cover: "images/cover5.jpg" },



]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `images/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');


    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `images/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `images/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');

})