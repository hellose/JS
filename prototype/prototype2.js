function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hi i m ${this.name}`);
};

let p1 = new Person("choi");

//shdowing
p1.greet = function () {
  console.log("Hello");
};

p1.greet();