'use strict';

const loader = document.querySelector('.loading');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', () => {
  setTimeout(() => {
    //  <-* 로딩속도를 구현하기 위한 코드로 실제 적용시 제거

    loader.style.opacity = '0';
    html.style.overflow = 'auto'; //스크롤 방지 해제

    setTimeout(() => {
      loader.style.display = 'none';
    }, 400);
  }, 1000); // <-* 로딩속도 구현
});
