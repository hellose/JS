// 내부에 프로퍼티를 두고 해당 프로퍼티를 wrap하는 방식으로 getter,setter 사용
let user = {
  _password: "",

  get password() {
    return this._password;
  },

  set password(newPassword) {
    const satisfy = false;

    if (!this.isPossiblePassword(newPassword)) {
      alert("비밀번호 사용 불가");
      return;
    }

    this._password = newPassword;
  },

  isPossiblePassword(value) {
    // password validation
    if (value.length < 8) {
      return false;
    }
    return true;
  },
};

user.password = "1234";
