// new Promise의 executor함수는 동기
// then, catch, finally <- 해당 Promise가 완료되면 호출
// setTimeout <- 비동기

let promise1 = new Promise((resolve, reject) => {
  //1
  console.log("promise1 executor start");
  setTimeout(() => {
    //7
    console.log("promise1 setTimeout 3000");
    const result = 1;
    //8
    console.log("promise1 resolve value ", result);
    resolve(1);
  }, 10000);
  //2
  console.log("promise1 executor end");
});

let promise2 = promise1.then((value) => {
  //9
  console.log("promise1.then start");
  const result = value * 2;
  //10
  console.log("promise1.then return ", result);
  //Promise를 리턴하지 않은 경우 -> 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환
  return result;
});

let promise3 = promise2.then((value) => {
  //11
  console.log("promise2.then start");
  const temp = new Promise((resolve, reject) => {
    //12
    console.log("new promise executor start");
    setTimeout(() => {
      //14
      console.log("new promise setTimeout 2000");
      const result = value * 2;
      //15
      console.log("new promise resolve ", result);
      resolve(result);
    }, 10000);
  });
  //13
  console.log("promise2.then middle");
  return temp;
});

//3
console.log("check promise1: ", promise1);
//4
console.log("check promise2: ", promise2);
//5
console.log("check promise3: ", promise3);

setTimeout(() => {
  //16
  console.log("check promise1: ", promise1);
  //17
  console.log("check promise2: ", promise2);
  //18
  console.log("check promise3: ", promise3);
}, 25000);

//6
console.log("last code in js file");
