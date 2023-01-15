import { message, setMessage } from "./greeting.js";
console.log(message); // 'Hi'

//import한것으로 간접적으로 바꾸는 것은 ok

//1. js가 ex2_greeting으로가서 setMessage호출 후 message 변경
//2. imported된 message바인딩에 변경이 자동으로 반영됨
setMessage("Hello");

console.log(message); // 'Hello'
