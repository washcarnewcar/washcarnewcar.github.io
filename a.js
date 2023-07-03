//좌우슬라이딩
setInterval(function () {
  $('#slide1>ul').delay(2500);
  $('#slide1>ul').animate({ marginLeft: '-1200px' });
  $('#slide1>ul').delay(2500);
  $('#slide1>ul').animate({ marginLeft: '-2400px' });
  $('#slide1>ul').delay(2500);
  $('#slide1>ul').animate({ marginLeft: '0px' });
});

//상하슬라이딩
setInterval(function () {
  $('#slide2>ul').delay(2500);
  $('#slide2>ul').animate({ marginTop: '-300px' });
  $('#slide2>ul').delay(2500);
  $('#slide2>ul').animate({ marginTop: '-600px' });
  $('#slide2>ul').delay(2500);
  $('#slide2>ul').animate({ marginTop: '0px' });
});

//페이드인 페이드아웃

$('#slide3>ul>li').hide();
$('#slide3>ul>li:first-child').show();

setInterval(function () {
  $('#slide3>ul>li:first-child')
    .fadeOut()
    .next()
    .fadeIn()
    .end(1000)
    .appendTo('#slide3>ul');
}, 3000);
