// object literal 내부에 getter, setter 선언

// 사용시 함수 처럼 ()를 붙이면 안되고 프로퍼티 방식으로 사용해야함

// getter만 존재하고 setter가 없는 상태에서 setter사용
// 일반모드 -> 무시됨
// 엄격모드 -> 에러발생

let person = {
    firstName: "sehyun",
    lastName: "choi",
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log("원본: ", person);
  
  // fullName()아님 -> fullName으로 프로퍼티 방식사용
  console.log(person.fullName);
  
  console.log("getter호출 결과: ", person);
  
  // setter가 없기 때문에 무시됨 (엄격모드에서는 에러 발생)
  person.fullName = "gildong hong";
  
  console.log("setter호출 결과: ", person);
  