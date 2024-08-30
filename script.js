const progressInput = document.getElementById('progress-value');
const animateToggle = document.getElementById('animate-toggle');
const hideToggle = document.getElementById('hide-toggle');
const progressVisual = document.querySelector('.progress__visual');

const updateVisualState = () => {
  if (hideToggle.checked) {
    progressVisual.classList.add('progress__visual--hidden');
    progressVisual.classList.remove('progress__visual--normal', 'progress__visual--animated');
  } else if (animateToggle.checked) {
    progressVisual.classList.add('progress__visual--animated');
    progressVisual.classList.remove('progress__visual--normal', 'progress__visual--hidden');
  } else {
    progressVisual.classList.add('progress__visual--normal');
    progressVisual.classList.remove('progress__visual--animated', 'progress__visual--hidden');
  }
};

const updateProgressBar = (value) => {
  const maxOffset = 283;
  const offset = maxOffset - (value / 100) * maxOffset;
  progressVisual.querySelector('.progress__indicator').style.strokeDashoffset = offset;
};

