var homeTab = document.getElementsByClassName('#home-tab');

function handleClick(event) {
  //   console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  //   console.log(event.target.classList);

  if (homeTab.classList[1] === 'clicked') {
    homeTab.classList.remove('clicked');
  } else {
    for (var i = 0; i < homeTab.length; i++) {
      homeTab[i].classList.remove('clicked');
    }

    homeTab.classList.add('clicked');
  }
}

function init() {
  for (var i = 0; i < homeTab.length; i++) {
    homeTab[i].addEventListener('click', handleClick);
  }
}

init();

// const homeTab = document.querySelector('#home-tab');
// const CLICKED_CLASS = 'clicked';
// function handleClick() {
//   const hasClass = homeTab.classList.contains(CLICKED_CLASS);
//   if (!hasClass) {
//     homeTab.classList.add(CLICKED_CLASS);
//   } else {
//     homeTab.classList.remove(CLICKED_CLASS);
//   }
// }

// homeTab.addEventListener('click', handleClick);

// function init() {
//   handleClick();
// }

// init();

// const profileTab = document.querySelector('#profile-tab');
// function handleClick() {
//   const hasClass = profileTab.classList.contains(CLICKED_CLASS);
//   if (!hasClass) {
//     profileTab.classList.add(CLICKED_CLASS);
//   } else {
//     profileTab.classList.remove(CLICKED_CLASS);
//   }
// }

// profileTab.addEventListener('click', handleClick);

// function init() {
//   handleClick();
// }

// init();
