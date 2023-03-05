'use strict';

//넷바 색상 변경
// let :변하는 상수 | const :변하지 않는 상수
const navbar = document.querySelector('.header');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('#ffffff');
  } else {
    navbar.classList.remove('#ffffff');
  }
});

//home 투명도 조절
const home = document.querySelector('.main_visual');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

document.addEventListener('scroll', function () {
  var currentScrollValue = document.documentElement.scrollTop;
  console.log('currentScrollValue is ' + currentScrollValue);
});

// arrow up 버튼 스크롤 될 때 생성
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// arrow up 버튼 클릭했을 때 home으로 올라가기
arrowUp.addEventListener('click', () => {
  scrollIntoView('#receivingNews');
});

//스무스하게 스크롤을 하게 하고 / 스크롤을 하기 위해선 필요한 존재
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
