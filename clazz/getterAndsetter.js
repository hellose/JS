//class 미사용

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// Person.prototype.setName = function (name) {
//   this.name = name;
// };

// let person = new Person("sehyun");
// console.log(person);

// es6이전
// class Person {
//   constructor(name) {
//     this.setName(name);
//   }
//   getName() {
//     return this.name;
//   }
//   setName(newName) {
//     newName = newName.trim();
//     if (newName === "") {
//       throw "The name cannot be empty";
//     }
//     this.name = newName;
//   }
// }

// let person = new Person("Jane Doe");
// console.log(person);

// es6이후
class Person {
    constructor(name) {
      this.name = name;
    }
    //let x = this.name 시 getter 메서드 호출됨
    get name() {
      return this._name;
    }
  
    //this.name = xxxx 시 setter 메서드 호출됨
    set name(newName) {
      newName = newName.trim();
      if (newName === "") {
        throw "The name cannot be empty";
      }
      this._name = newName;
    }
  }
  