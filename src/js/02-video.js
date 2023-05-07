import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function currentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(currentTime, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  const actTime = parseFloat(savedTime);
  player
    .setCurrentTime(actTime)
    .then(() => {
      player.play();
    })
    .catch(error => {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
