// `ws` 모듈 불러오기
const WebSocket = require('ws');

// WebSocket.Server 생성자를 이용해 웹소켓 서버를 생성하고, 이를 'server' 변수에 할당
// 이 서버는 8080 포트에서 수신 대기중
const server = new WebSocket.Server({ port: 8080 });

// 'server'에 'connection' 이벤트 리스너를 추가
// 새로운 클라이언트가 서버에 연결되면 이 이벤트 리스너가 호출 됨
// 이때 콜백 함수의 첫 번째 인자 'ws'는 연결된 웹소켓을 나타냄
server.on('connection', ws => {
  // 각 웹소켓에 'message' 이벤트 리스너를 추가
  // 클라이언트가 메시지를 보내면 이 리스너가 호출 됨
  // 콜백 함수의 첫 번째 인자 'message'는 수신한 메시지를 나타냄
  ws.on('message', message => {
    // 콘솔에 수신한 메시지를 출력 함
    console.log('Received: %s', message);
  });

  // 클라이언트에게 'Hello, WebSocket!' 메시지를 보냄
  ws.send('Hello, WebSocket!');
});