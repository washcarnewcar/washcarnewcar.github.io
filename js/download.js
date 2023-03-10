'use strict';

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

// arrow up 버튼 클릭했을 때 home으로 올라가기
const receivingNews = document.querySelector('#btn-News');
receivingNews.addEventListener('click', () => {
  scrollIntoView('#receivingNews');
});

const tell = document.querySelector('#receivingNews');
const tellHeight = tell.getBoundingClientRect().height;

// arrow up 버튼 스크롤 될 때 생성
const arrowUp = document.querySelector('#arrow-up');
document.addEventListener('scroll', () => {
  if (
    window.scrollY > homeHeight / 2 &&
    window.scrollY < homeHeight / 2 + 2290
  ) {
    arrowUp.classList.add('visible');
  } else if (window.scrollY > tellHeight) {
    arrowUp.classList.remove('visible');
  } else if (window.scrollY < tellHeight / 2) {
    arrowUp.classList.remove('visible');
  }
});
// arrow up 버튼 클릭했을 때 home으로 올라가기
arrowUp.addEventListener('click', () => {
  scrollIntoView('#receivingNews');
});

// btnGuest 버튼 클릭했을 때 home으로 올라가기
const btnGuest = document.querySelector('#home-tab');
btnGuest.addEventListener('click', () => {
  scrollIntoView('#home-tab-pane');
});
// btnOwner 버튼 클릭했을 때 home으로 올라가기
const btnOwner = document.querySelector('#profile-tab');
btnOwner.addEventListener('click', () => {
  scrollIntoView('#profile-tab-pane');
});

// pop-up 버튼 스크롤 될 때 생성
const tabContent = document.querySelector('#myTabContent');
const tabContentHeight = tabContent.getBoundingClientRect().height;
const popUp = document.querySelector('#pop-up');
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (
    window.scrollY > tabContentHeight / 2 &&
    window.scrollY < homeHeight / 2 + 2290
  ) {
    popUp.classList.add('visible');
  } else if (window.scrollY > tellHeight) {
    popUp.classList.remove('visible');
  } else if (window.scrollY < tabContentHeight / 2) {
    popUp.classList.remove('visible');
  }
});
// Btn_PopUp 버튼 클릭했을 때 home으로 올라가기
const Btn_PopUp = document.querySelector('#btn-pop-up');
Btn_PopUp.addEventListener('click', () => {
  scrollIntoView('#receivingNews');
  popUp.classList.add('close');
});
// btnClose 버튼 스크롤 될 때 생성
const btnClose = document.querySelector('#btn-close');
btnClose.addEventListener('click', () => {
  popUp.classList.add('close');
});

//스무스하게 스크롤을 하게 하고 / 스크롤을 하기 위해선 필요한 존재
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  const header = document.querySelector('.header');
  const navTabs = document.querySelector('.nav-tabs');
  const offset =
    scrollTo.offsetTop - header.offsetHeight - navTabs.offsetHeight;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}
