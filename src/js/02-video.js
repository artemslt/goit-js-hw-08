import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const VIDEOPLAYER_CURRENRT_TIME = 'videoplayer-current-time';
const onPlay = data => {
  localStorage.setItem(VIDEOPLAYER_CURRENRT_TIME, JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

const localStorageData = localStorage.getItem(VIDEOPLAYER_CURRENRT_TIME);

if (localStorageData) {
  const currentTime = JSON.parse(localStorageData);
  player.setCurrentTime(currentTime.seconds);
}
