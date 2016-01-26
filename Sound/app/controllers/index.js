var player = Ti.Media.createSound({ url: "sound/sound.mp3" });
var volume = player.getVolume();

updateVolume();

function playSound(e) {
  player.play();
}

function stopSound() {
  player.stop();
}


function volumeUp() {
  volume += 0.1;
  changeVolume();
}

function volumeDown() {
  volume -= 0.1;
  changeVolume();
}

function changeVolume() {
  if(volume < 0) {
    volume = 0;
  }

  if(volume > 1) {
    volume = 1;
  }

  player.setVolume(volume);
  updateVolume();
}

function updateVolume() {
  $.volume.text = "볼륨: " + Math.round(volume * 100) + "%";
}

$.index.open();
