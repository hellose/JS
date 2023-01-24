// Web api, EventLoop, Callback Queue 참고
// https://chanyeong.com/blog/post/44

function testFunction() {
  //setTimeout이 web api쪽으로 보내지고 testFunction은 끝난것으로 간주되어 call stack에서 빠진다.
  //2초 대기 후 Callback Queue로 보내지고, call stack이 비워져있을 때 Callback Queue의 맨 앞에 해당하는 것부터 실행된다.
  setTimeout(() => console.log("출력"), 2000);
}

testFunction();
//alert 호출 후 창을 닫지 않으면 call stack이 비워지지 않으므로 setTimeout에 해당하는 코드도 실행되지 않는다.
alert("alert");
