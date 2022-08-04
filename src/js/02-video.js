import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const onPlay = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
  const currentTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  player.setCurrentTime(currentTime.seconds);
}
