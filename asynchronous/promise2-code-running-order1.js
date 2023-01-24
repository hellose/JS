// new Promise의 executor에서 바로 resolve한 경우 then이 바로 호출되나? 아님

let promise1 = new Promise((resolve, reject) => {
  resolve("promise1");
});

let promise2 = promise1.then((value) => {
  //2
  console.log("promise1.then received value ", value);
});

//1
console.log("last code in js file");
