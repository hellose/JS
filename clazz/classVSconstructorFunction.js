//todo
// https://www.javascripttutorial.net/es6/javascript-class/


//1. 생성자 함수는 함수 선언식으로 hoisting되지만 class는 hoisting되지 않음
//let hyun = new Person('hyun');

class Person {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }
  
  //2. 클래스 내부의 코드는 자동으로 strict mode에서 실행됨. 이러한 행동들을 변경시킬 수 없음
  
  