const title = document.querySelector('#home-tab');
const CLICKED_CLASS = 'clicked';
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

title.addEventListener('click', handleClick);

function init() {
  handleClick();
}

init();
