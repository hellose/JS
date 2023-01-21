function Grand() {
  this.g = "Grand 객체 자신의 Property";
}

Grand.prototype.gMethod = function () {
  console.log("Grand 객체의 Prototype 객체 gMethod 프로퍼티");
};

function Parent() {
  this.p = "Parent 객체 자신의 Property";
}

Parent.prototype.pMethod = function () {
  console.log("Parent 객체의 Prototype 객체 pMethod 프로퍼티");
};
function Child() {
  this.g = "Child 객체 자신의 Property";
}

Child.prototype.cMethod = function () {
  console.log("Child 객체의 Prototype 객체 cMethod 프로퍼티");
};

//프로토타입 상속 구조 변경
Child.prototype.__proto__ = Parent.prototype;
Parent.prototype.__proto__ = Grand.prototype;

//테스트
const child = new Child();

console.log("child.c:", child.c);
console.log("child.cMethod:", child.cMethod);
//console.log("child.p:", child.p); //undefined <- Person prototype객체의 프로퍼티가 아니기 때문
console.log("child.pMethod:", child.pMethod);
console.log("child.gMethod:", child.gMethod);
