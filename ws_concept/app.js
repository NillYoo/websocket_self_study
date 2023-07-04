// 'express' 모듈을 불러와 HTTP 서버 생성을 준비
const express = require('express');
// 'ws' 모듈에서 Server 클래스를 불러와 WebSocket 서버 생성을 준비
const { Server } = require('ws');
// 'path' 모듈을 불러와 파일 경로를 처리하는데 사용
const path = require('path');

// express 애플리케이션을 생성
const app = express();

// 루트 URL('/')에 대한 HTTP GET 요청이 오면 index.html 파일을 응답으로 보냄
app.get('/', (req, res) => {
  // 현재 디렉토리의 index.html 파일을 응답으로 보냄
  res.sendFile(path.join(__dirname + '/index.html'));
});

// 3001 포트에서 HTTP 서버를 실행
// 이 서버는 웹 브라우저에서 'http://localhost:3001'으로 접속하면 index.html 페이지를 보여주게 됨
const server = app.listen(3001, () => {
  console.log('HTTP server listening at http://localhost:3001');
});

// ws.Server 객체를 생성하여 WebSocket 서버를 만들고, 이전에 만든 HTTP 서버에 연결
// 이렇게 하면 같은 포트에서 HTTP와 WebSocket 연결을 모두 처리할 수 있음
const wss = new Server({ server });

// WebSocket 서버에서 클라이언트의 연결이 이루어질 때마다 'connection' 이벤트가 발생하고,
// 이 이벤트에 대응하는 처리를 정의
wss.on('connection', ws => {
  // 클라이언트로부터 메시지가 오면 'message' 이벤트가 발생하고, 이 이벤트에 대응하는 처리를 정의
  // 이때 받은 메시지는 콘솔에 출력
  ws.on('message', message => {
    console.log('Received: %s', message);
  });

  // WebSocket 연결이 성립되면, 클라이언트에게 'Hello, WebSocket!' 메시지를 보냄
  ws.send('Hello, WebSocket!');
});
