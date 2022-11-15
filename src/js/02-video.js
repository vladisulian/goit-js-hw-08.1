
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(element => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(element.seconds)
    );
  }, 1000)
);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  player
    .setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
    .catch(function (error) {
      console.error(error);
    });
}
