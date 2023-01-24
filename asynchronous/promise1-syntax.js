// 1. Promise state
// pending -> fulfilled(성공)
// pending -> rejected(실패)

// 2. executor 함수 내부에서 작업의 내용을 작성
// new Promise(//executor함수);

// 3. executor함수의 두 파라메터는 convention으로 resolve, reject사용
// 작업 성공 -> 데이터를 resolve 함수의 인자로 넘겨 resolver 호출 -> Promise가 fulfilled상태로 변경됨
// 작업 실패 -> 에러를 reject 함수의 인자로 넘겨 reject 호출 -> Promise가 rejected상태로 변경됨
// resolve, reject 둘중 하나라도 호출하지 않으면 promise는 pending상태로 머물러있기 때문에 반드시 하나는 호출해야함

let promise = new Promise((resolve, reject) => {
  const count = 5000;
  let i = 1;
  while (i != count) {
    console.log("작업중");
    i++;
  }
  resolve("완료");
  // reject(new Error("에러"));
});

//아래의 콘솔 출력은 Promise가 끝난뒤 실행된다
console.log("콘솔");

// 4. Promise의 작업이 끝난 뒤 알림받기 finally, then
promise
  /*
    성공인지 실패인지 모르나 Promise가 끝나면 호출됨.
    then보다 먼저 호출된다.
    */
  .finally(() => {
    console.log("finally");
  })
  .then(
    /*
    성공시 호출되는 함수
    value : resolve시 넘겨준 데이터
    */
    (value) => {
      console.log("Promise성공 value: ", value);
    },
    /*
    실패시 호출되는 함수
    reason : reject시 넘겨준 에러
     */
    (reason) => {
      console.log("Promise실패 reason: ", reason);
    }
  );
