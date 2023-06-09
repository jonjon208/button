const soundSources = [
  'sound1.mp4',
  'sound2.mp4',
  'sound3.mp4'
];

const audioPlayer = document.getElementById('audioPlayer');
let isPlaying = false;

function playRandomSound() {
  if (!isPlaying) {
    const randomIndex = Math.floor(Math.random() * soundSources.length);
    const randomSound = soundSources[randomIndex];
    audioPlayer.src = randomSound;
    audioPlayer.play();
    isPlaying = true;
  }
}

function stopSound() {
  if (isPlaying) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
  }
}
