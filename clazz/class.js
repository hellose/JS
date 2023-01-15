class Person {
    constructor(name) {
      this.name = name;
    }
    //Person클래스의 메서드
    getName() {
      return this.name;
    }
  }
  
  //class도 function의 일부일 뿐이다.
  console.log(typeof Person); //function
  
  let john = new Person("John Doe");
  
  //prototypal inheritance 확인
  console.log(john instanceof Person); // true
  console.log(john instanceof Object); // true
  