let person = {
  name: "John Doe",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

let teacher = {
  teach: function (subject) {
    console.log("I can teach " + subject);
  },
};

teacher.teach("student");

//prototype inheritance 변경
//In JavaScript, we say that the teacher object inherits the methods and properties of the person object. And this kind of inheritance is called prototypal inheritance.
teacher.__proto__ = person;

console.log(teacher.name);
teacher.greet();
