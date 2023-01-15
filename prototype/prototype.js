//프로토타입 기본 개념(참조방법)

//함수
function Person(name) {
  this.name = name;
}

//생성자 함수에서 프로토타입 객체 참조시 -> prototype
//생성자 함수를 통해 만들어진 객체에서 프로토타입 객체 참조시 -> __proto__

//함수에서 프로토타입 객체 참조법
let personPrototype = Person.prototype;
console.log("Person프로토타입 객체:", personPrototype);

//프로토타입 객체에서 함수 참조법
let personFunction = personPrototype.constructor;
console.log("Person함수:", personFunction);

//상위 프로토타입 객체 참조법
let parentPrototype = personPrototype.__proto__;
console.log("Person프토토타입의 상위프로토타입 객체:", parentPrototype);

//객체에서 프로토타입 객체 참조법
let person = new Person("choi");

let personPrototypeVerify = person.__proto__;
console.log("Person프로토타입 객체:", personPrototypeVerify);

//production code에서 __proto__ 사용x
//대신에 Object.getPrototypeOf(객체) 사용
let personPrototypeVerify2 = Object.getPrototypeOf(person);
console.log("Person프로토타입 객체:", personPrototypeVerify2);

//Object.getPrototypeOf 사용불가능시
let personPrototypeVerify3 = person.constructor.prototype;
console.log("Person프로토타입 객체:", personPrototypeVerify3);
