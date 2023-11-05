import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

function handleTimeUpdate(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

const throttledHandleTimeUpdate = throttle(handleTimeUpdate, 1000);

player.on('timeupdate', (data) => {
  throttledHandleTimeUpdate(data.seconds);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime).catch((error) => {
    console.error('Не вдалося встановити час відтворення', error);
  });
}
