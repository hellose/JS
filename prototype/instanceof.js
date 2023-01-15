function Person(name) {
    this.name = name;
  }
  
  Person.prototype.getName = function () {
    return this.name;
  };
  
  var john = new Person("John Doe");
  
  console.log(john instanceof Person); //true
  console.log(john instanceof Object); //true
  