//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//await

// await expression

// 1. expression
// Promise 또는 Thenable객체

// 2. await
// Promise를 기다린 후, 이행된 결과를 얻는다.
// async함수 내부 또는 모듈의 top level에서만 사용할 수 있다.
// Promise 또는 Thenable객체가 reject되면 Exception을 던진다.
// await의 사용은 감싸고 있는 promise가 완료될때까지 async함수를 중단시킨다.
// await의 return값 : promise의 fullfilled된 값

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
  });
  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  return result;
}

console.log(f().then((value) => console.log(value)));
