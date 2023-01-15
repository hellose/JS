//생성자함수 - 모든 객체는 생성자 함수로부터 생성된다.

//new 생성자함수()시 주석의 코드가 들어간다.
function Person() {
    // this = {};
    console.log("생성자 함수 내부에서 this출력", this);
    this.prop = "prop";
    // return this;
  }
  
  // 테스트1 - 함수의 일반호출 vs new를붙여호출
  
  // 일반호출
  // Person(); //일반 함수로 동작하며 this는 window를 가리킨다.
  // console.log(prop); //전역변수 prop
  
  // new를붙여호출
  // let person = new Person(); //함수 내부에 주석의 코드가 삽입되며 this는 Person객체를 가리킨다.
  // console.log(person.prop);
  
  // 테스트2 - 생성자 함수의 명시적 리턴
  
  // primitive타입 리턴(무시되고 생성된 객체가 리턴됨)
  function FuncReturnPrimitive() {
    this.testProperty = "test property";
    return 1;
  }
  
  // 객체 리턴(대체되어 리턴됨)
  function FuncReturnObject() {
    this.testProperty = "test property";
    return { testProperty: "헬로" }; //object literal로 만든 객체가 대체되어 리턴됨
  }
  
  // console.log(new FuncReturnPrimitive());
  // console.log(new FuncReturnObject());
  
  // 테스트3 - es6의 new.target을 통해 일반호출인지 생성자함수(new)호출인지 확인
  function Constructor() {
    if (new.target) {
      console.log("new를 사용해 호출");
    } else {
      console.log("일반 함수로 호출");
    }
  }
  
  // let t = new Constructor();
  // t = Constructor();
  