'use strict';

//home 투명도 조절
const home = document.querySelector('.main_visual');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 맨 위에 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
const receivingNews = document.querySelector('#btn-News');
receivingNews.addEventListener('click', () => {
  scrollToIdDownHeaderAndTab('#receivingNews');
});

const tell = document.querySelector('#receivingNews');
const tellHeight = tell.offsetHeight;

// arrow up 버튼 스크롤 될 때 생성
const arrowUp = document.querySelector('#arrow-up');
document.addEventListener('scroll', () => {
  if (
    window.scrollY > homeHeight / 2 + 100 &&
    window.scrollY < homeHeight / 2 + 2290
  ) {
    arrowUp.classList.add('visible');
  } else if (window.scrollY > tellHeight) {
    arrowUp.classList.remove('visible');
  } else if (window.scrollY < tellHeight / 2) {
    arrowUp.classList.remove('visible');
  }
});
// arrow up 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
arrowUp.addEventListener('click', () => {
  scrollToIdDownHeaderAndTab('#receivingNews');
});

//손님님이신가요? 클릭 시 pop-up, arrow-up 존재
const btnGuest = document.querySelector('#home-tab');
btnGuest.addEventListener('click', () => {
  scrollToIdDownHeaderAndTab('#home-tab-pane');
});

// arrow up 버튼 스크롤 될 때 생성
const arrowUpOwner = document.querySelector('#arrow-up-owner');

//사장님이신가요? 클릭 시 pop-up, arrow-up 존재
const btnOwner = document.querySelector('#profile-tab');
btnOwner.addEventListener('click', () => {
  scrollToIdDownHeaderAndTab('#profile-tab-pane');
});

const popUp = document.querySelector('#pop-up');
const myTabContent = document.querySelector('#myTabContent');
const myTabContentHeight = myTabContent.offsetHeight;
const comment = document.querySelector('#comment');
const commentHeight = comment.offsetHeight;

const content = document.querySelector('.tab-content');
const contentHeight = content.offsetHeight;

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  // 손님이신가요? 를 선택했을 때
  if (btnGuest.classList.contains('active')) {
    // 표시되는 조건
    if (
      window.scrollY > homeHeight / 2 &&
      window.scrollY < homeHeight / 2 + 2290
    ) {
      // visible 클래스가 없을 때만 visible을 적용해줌
      if (!arrowUp.classList.contains('visible')) {
        arrowUp.classList.add('visible');
      }

      if (window.scrollY > contentHeight / 2 + 500) {
        if (!popUp.classList.contains('visible')) {
          popUp.classList.add('visible');
        }
      }
    }
    // 사라지는 조건
    else {
      if (arrowUp.classList.contains('visible')) {
        arrowUp.classList.remove('visible');
      }
      if (popUp.classList.contains('visible')) {
        popUp.classList.remove('visible');
      }
    }
  }
  // 사장님이신가요? 를 선택했을 때
  else if (btnOwner.classList.contains('active')) {
    if (
      window.scrollY > homeHeight / 2 &&
      window.scrollY < homeHeight / 2 + 3750
    ) {
      if (!arrowUp.classList.contains('visible')) {
        arrowUp.classList.add('visible');
      }
      if (window.scrollY > contentHeight / 2 + 700) {
        if (!popUp.classList.contains('visible')) {
          popUp.classList.add('visible');
        }
      }
    } else {
      if (arrowUp.classList.contains('visible')) {
        arrowUp.classList.remove('visible');
      }
      if (popUp.classList.contains('visible')) {
        popUp.classList.remove('visible');
      }
    }
  }
});

// Btn_PopUp 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
const Btn_PopUp = document.querySelector('#btn-pop-up');
Btn_PopUp.addEventListener('click', () => {
  scrollToIdDownHeaderAndTab('#receivingNews');
  popUp.classList.add('close');
});
// Btn_PopUp.addEventListener('click', () => {
//   scrollToIdDownHeaderAndTab('#receivingNews');
//   popUp.classList.add('close');
//   if (
//     window.scrollY > homeHeight / 2 + 100 &&
//     window.scrollY < homeHeight / 2 + 2290
//   ) {
//     arrowUp.classList.add('visible');
//   } else if (window.scrollY > tellHeight) {
//     arrowUp.classList.remove('visible');
//   } else if (window.scrollY < tellHeight / 2) {
//     arrowUp.classList.remove('visible');
//   }
// });

// btnClose 버튼 스크롤 될 때 생성
const btnClose = document.querySelector('#btn-close');
btnClose.addEventListener('click', () => {
  popUp.classList.add('close');
  // arrowUp.classList.remove('visible');
  // arrowUp.classList.add('visible2');
  if (
    window.scrollY > homeHeight / 2 + 100 &&
    window.scrollY < homeHeight / 2 + 2290
  ) {
    arrowUp.classList.add('visible');
  } else if (window.scrollY > tellHeight) {
    arrowUp.classList.remove('visible');
  } else if (window.scrollY < tellHeight / 2) {
    arrowUp.classList.remove('visible');
  }
});

//스무스하게 스크롤을 하게 하고 / 스크롤을 하기 위해선 필요한 존재
function scrollToIdDownHeader(selector) {
  const scrollTo = document.querySelector(selector);
  const header = document.querySelector('header');
  const offset = scrollTo.offsetTop - header.offsetHeight;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}

//탭 클릭시 navbar와 tabbar 길이 신경안쓰고 이동하게 하는 함수
function scrollToIdDownHeaderAndTab(selector) {
  const scrollTo = document.querySelector(selector);
  const header = document.querySelector('header');
  const tab = document.querySelector('#myTab');
  const offset = scrollTo.offsetTop - header.offsetHeight - tab.offsetHeight;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}

//전화번호 데이터 파이어베이스에 저장하는 코드
const formGuest = document.getElementById('myFormGuest');
formGuest.addEventListener('submit', function (event) {
  event.preventDefault();
  const formGuestData = new FormData(formGuest);
  const toDay = new Date();
  const timeStamp = toDay.toLocaleString();
  formGuestData.append('timeStamp', timeStamp);

  const data = JSON.stringify(Object.fromEntries(formGuestData));
  // data.timestamp = timestamp;
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let who = '';
  if (btnGuest.classList.contains('active')) who = 'Guest';
  else if (btnOwner.classList.contains('active')) who = 'Owner';

  fetch(
    //'/'을 기점으로 테이블이 만들어짐
    // `https://verdant-cable-380008-default-rtdb.asia-southeast1.firebasedatabase.app/${who}/landing.json`,
    `https://washcarnewcar-default-rtdb.firebaseio.com/${who}/landing.json`,
    {
      headers: myHeaders,
      method: 'POST',
      body: data,
    }
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      alert('성공적으로 제출되었습니다');
    })
    .catch((error) => console.log('error', error));
});
