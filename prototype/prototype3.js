//class 사용이전
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
  
  let p1 = new Person("John", "Doe");
  let p2 = new Person("Jane", "Doe");
  
  console.log(p1.getFullName());
  console.log(p2.getFullName());
  
  //ES6의 class로 변경
  class PersonTwo {
    //생성자 함수
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    //프로토타입 객체의 메서드
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  let p3 = new PersonTwo("John", "Doe");
  let p4 = new PersonTwo("Jane", "Doe");
  
  console.log(p3.getFullName());
  console.log(p4.getFullName());
  