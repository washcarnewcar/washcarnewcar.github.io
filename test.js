const googleSpreadsheet = require('google-spreadsheet');

// Google APIs 페이지에서 생성한 서비스 계정 키의 JSON 파일을 배치한다.

const creds = require('.//api/washcarnewcar-5a955e6f1916.json');

// 작업을 수행할 Google Spreadsheet 문서의 ID값

const doc = new googleSpreadsheet(
  'https://docs.google.com/spreadsheets/d/1Fr0wQIG6soL2X_0U4G_kKb1Y43-FFRVNP9FZow0YZNs/edit?usp=sharing'
);

doc.useServiceAccountAuth(creds, function (err) {
  doc.getInfo(function (err, info) {
    // 해당 시트의 정보가 info에 담겨있다.

    // console.log(info);

    console.log('구글 시트의 제목  : ' + info.title);

    console.log('구글 시트의 URL  : ' + info.id);

    console.log('마지막으로 업데이트된 날짜 및 시간  : ' + info.updated);

    console.log('스프레드시트의 생성자 아이디  : ' + info.author.name);

    console.log('스프레드시트의 생성자 메일주소  : ' + info.author.email);
  });
});
