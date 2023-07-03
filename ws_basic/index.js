// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 웹 서버가 실행될 포트를 정의합니다.
const port = 3000;

// HTTP GET 요청을 루트('/') 경로에 대해 처리합니다. 
// 브라우저에서 http://localhost:3000 으로 접속하면 이 부분이 실행됩니다.
app.get('/', (req, res) => {
  // 응답으로 'Hello World!' 문자열을 전송합니다.
  res.send('Hello World!');
});

// 지정된 포트(port 변수)에서 웹 서버를 실행합니다.
app.listen(port, () => {
  // 콘솔에 아래의 메시지를 출력합니다.
  console.log(`Server listening at http://localhost:${port}`);
});
