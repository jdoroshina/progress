const progressInput = document.getElementById('progress-value');
const animateToggle = document.getElementById('animate-toggle');
const hideToggle = document.getElementById('hide-toggle');
const progressVisual = document.querySelector('.progress__visual');

const updateVisualState = () => {
  const isHidden = hideToggle.checked;
  const isAnimated = animateToggle.checked;

  progressVisual.classList.toggle('progress__visual--hidden', isHidden);
  progressVisual.classList.toggle('progress__visual--animated', !isHidden && isAnimated);
  progressVisual.classList.toggle('progress__visual--normal', !isHidden && !isAnimated);

  progressVisual.setAttribute('aria-hidden', isHidden.toString());
};

const updateProgressBar = (value) => {
  const maxOffset = 283;
  const offset = maxOffset - (value / 100) * maxOffset;
  progressVisual.querySelector('.progress__indicator').style.strokeDashoffset = offset;
};

const handleProgressInput = (event) => {
  const value = Math.min(100, Math.max(0, event.target.value));
  updateProgressBar(value);
};

const handleToggleChange = () => {
  updateVisualState();
};

const initFormControls = () => {
  progressInput.addEventListener('input', handleProgressInput);
  animateToggle.addEventListener('change', handleToggleChange);
  hideToggle.addEventListener('change', handleToggleChange);

  updateProgressBar(progressInput.value);
  updateVisualState();
};

initFormControls();
