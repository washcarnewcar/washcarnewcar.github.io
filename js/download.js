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

// 맨 위에 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
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
  scrollIntoView('#myFormGuest');
});

//손님님이신가요? 클릭 시 pop-up, arrow-up 존재
const btnGuest = document.querySelector('#home-tab');
btnGuest.addEventListener('click', () => {
  scrollIntoView('#home-tab-pane');
  // Btn_PopUp.addEventListener('click', () => {
  //   scrollIntoView('#myFormGuest');
  // });
  // receivingNews.addEventListener('click', () => {
  //   scrollIntoView('#myFormGuest');
  // });
  // arrowUp.addEventListener('click', () => {
  //   scrollIntoView('#myFormGuest');
  // });
  document.addEventListener('scroll', () => {
    if (
      window.scrollY > homeHeight / 2 + 600 &&
      window.scrollY < homeHeight / 2 + 2290
    ) {
      arrowUp.classList.add('visible');
      popUp.classList.add('visible');
    }
    //  else if (
    //   window.scrollY > tabContentHeight / 2 &&
    //   window.scrollY < homeHeight / 2 + 8750
    // ) {
    //   popUp.classList.add('visible');
    // }
    else if (window.scrollY > tellHeight) {
      arrowUp.classList.remove('visible');
      popUp.classList.remove('visible');
    } else if (window.scrollY < tellHeight / 2) {
      arrowUp.classList.remove('visible');
      popUp.classList.remove('visible');
    }
  });
  // 맨 위에 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
  const receivingNews = document.querySelector('#btn-News');
  receivingNews.addEventListener('click', () => {
    scrollIntoView('#receivingNews');
  });
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
    scrollIntoView('#receivingNews');
  });
  // Btn_PopUp 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
  const Btn_PopUp = document.querySelector('#btn-pop-up');
  Btn_PopUp.addEventListener('click', () => {
    scrollIntoView('#receivingNew');
    popUp.classList.add('close');
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
});

// arrow up 버튼 스크롤 될 때 생성
const arrowUpOwner = document.querySelector('#arrow-up-owner');

//사장님이신가요? 클릭 시 pop-up, arrow-up 존재
const btnOwner = document.querySelector('#profile-tab');
btnOwner.addEventListener('click', () => {
  scrollIntoView('#profile-tab-pane');
  // Btn_PopUp.addEventListener('click', () => {
  //   scrollIntoView('#myFormOwner');
  // });
  // receivingNews.addEventListener('click', () => {
  //   scrollIntoView('#myFormOwner');
  // });
  // arrowUp.addEventListener('click', () => {
  //   scrollIntoView('#myFormOwner');
  // });

  document.addEventListener('scroll', () => {
    if (
      window.scrollY > homeHeight / 2 + 600 &&
      window.scrollY < homeHeight / 2 + 3750
    ) {
      arrowUp.classList.add('visible');
      popUp.classList.add('visible');
    }
    //  else if (
    //   window.scrollY > tabContentHeight / 2 &&
    //   window.scrollY < homeHeight / 2 + 8750
    // ) {
    //   popUp.classList.add('visible');
    // }
    else if (window.scrollY > tellHeight) {
      arrowUp.classList.remove('visible');
      popUp.classList.remove('visible');
    } else if (window.scrollY < tellHeight / 2) {
      arrowUp.classList.remove('visible');
      popUp.classList.remove('visible');
    }
  });
  // 맨 위에 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
  const receivingNews = document.querySelector('#btn-News');
  receivingNews.addEventListener('click', () => {
    scrollIntoView('#receivingNewsOwner');
  });
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
    scrollIntoView('#receivingNewsOwner');
  });
  // Btn_PopUp 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
  const Btn_PopUp = document.querySelector('#btn-pop-up');
  Btn_PopUp.addEventListener('click', () => {
    scrollIntoView('#receivingNewsOwner');
    popUp.classList.add('close');
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
});

// pop-up 버튼 스크롤 될 때 생성
const tabContent = document.querySelector('#myTabContent');
const tabContentHeight = tabContent.getBoundingClientRect().height;
const popUp = document.querySelector('#pop-up');
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (
    window.scrollY > tabContentHeight / 2 + 100 &&
    window.scrollY < homeHeight / 2 + 2290
  ) {
    popUp.classList.add('visible');
  } else if (window.scrollY > tellHeight) {
    popUp.classList.remove('visible');
  } else if (window.scrollY < tabContentHeight / 2) {
    popUp.classList.remove('visible');
  }
});

// Btn_PopUp 버튼 클릭했을 때 전화번호 입력 부분으로 내려가기
const Btn_PopUp = document.querySelector('#btn-pop-up');
Btn_PopUp.addEventListener('click', () => {
  scrollIntoView('#myFormOwner');
  popUp.classList.add('close');
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
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  const header = document.querySelector('.header');
  const navTabs = document.querySelector('.nav-tabs');
  const offset =
    scrollTo.offsetTop - header.offsetHeight - navTabs.offsetHeight;
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

  fetch(
    //'/'을 기점으로 테이블이 만들어짐
    'https://verdant-cable-380008-default-rtdb.asia-southeast1.firebasedatabase.app/Guest/landing.json',
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

//전화번호 데이터 파이어베이스에 저장하는 코드
const formOwner = document.getElementById('myFormOwner');
formOwner.addEventListener('submit', function (event) {
  event.preventDefault();
  const formOwnerData = new FormData(formOwner);
  const toDay = new Date();
  const timeStamp = toDay.toLocaleString();
  formOwnerData.append('timeStamp', timeStamp);

  const data = JSON.stringify(Object.fromEntries(formOwnerData));
  // data.timestamp = timestamp;
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  fetch(
    'https://verdant-cable-380008-default-rtdb.asia-southeast1.firebasedatabase.app/Owner/landing.json',
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
