const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//bodyParser 미들웨어의 여러 옵션 중에 하나로 false 값일 시 node.js에 기본으로 내장된 queryString, true 값일 시 따로 설치가 필요한 npm qs 라이브러리를 사용한다.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const submittedData = req.body.data;
  console.log('Received data:', submittedData);
  res.redirect(`/index2.html?data=${encodeURIComponent(submittedData)}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//res.redirect() 메서드는 Express에서 사용되며, 클라이언트의 브라우저를 다른 URL로 리디렉션시키는 역할을 합니다.
///index2.html?data=${encodeURIComponent(submittedData)}:

// 리디렉션할 목적지 URL을 정의합니다. 이 URL은 /index2.html로 설정되며, ?data=${encodeURIComponent(submittedData)} 부분은 쿼리 문자열(query string)로, URL에 데이터를 추가합니다.
// data는 쿼리 문자열의 매개변수 이름이고, submittedData는 해당 매개변수의 값입니다. encodeURIComponent() 함수를 사용하여 데이터를 안전하게 URL 인코딩합니다.
//encodeURIComponent():
//encodeURIComponent() 함수는 특수 문자나 공백을 URL 안전한 형태로 인코딩하는 JavaScript 함수입니다. 이 함수를 사용하여 데이터를 URL에서 사용 가능한 형태로 변환합니다.