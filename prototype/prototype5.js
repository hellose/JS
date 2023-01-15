//Object.create(프로토타입이될 객체, 생성될객체에 프로퍼티가 옮겨질 객체) method

let person = {
    name: "John Doe",
    greet: function () {
      return "Hi, I'm " + this.name;
    },
  };
  
  //teacher객체의 프로토타입 객체 -> person객체
  // let teacher = Object.create(person);
  
  let teacher = Object.create(person, {
    name: { value: "Sehyun Choi" },
    teach: {
      value: function (subject) {
        return "I can teach " + subject;
      },
    },
  });
  
  console.log(teacher.name);
  console.log(teacher.greet());
  console.log(teacher.teach("student"));
  
  console.log(Object.getPrototypeOf(teacher) === person);
  