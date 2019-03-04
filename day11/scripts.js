const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// hook up the events

/**
 * 1.点击video 暂停/开始播放    更新button样式
 * 2.点击播放按钮 暂停/开始播放 更新button样式
 * 3.点击音量和播放速度条 更新音量和播放速度
 * 4.点击skip，快进或者后退
 */

function handlePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleRangeChange(e) {
  console.log(e.target.value);
  video[e.target.name] = e.target.value;
}

function handleSkip() {
  video.currentTime += parseInt(this.dataset.skip);
}

let rangeMouseDown = false;
video.addEventListener('click', handlePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', handlePlay);
skipButtons.forEach((button) => button.addEventListener('click', handleSkip));
ranges.forEach((range) => {
  range.addEventListener('click', handleRangeChange);
  range.addEventListener(
    'mousemove',
    (e) => rangeMouseDown && handleRangeChange(e),
  );
  range.addEventListener('mousedown', () => (rangeMouseDown = true));
  range.addEventListener('mouseup', () => (rangeMouseDown = false));
  range.addEventListener('mouseleave', () => (rangeMouseDown = false));
});

/**
 * 1. 点击progress bar 跳转到相应的进度, 更新进度条的样式
 */
function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + '%';
}

function updateTime(e) {
  const updateTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = updateTime;
}

video.addEventListener('timeupdate', handleProgress);

let mouseDown = false;
progress.addEventListener('click', updateTime);
progress.addEventListener('mousemove', (e) => mouseDown && updateTime(e));
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
progress.addEventListener('mouseleave', () => (mouseDown = false));
