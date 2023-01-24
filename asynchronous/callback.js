//함수의 인자로 함수를 넘기는 경우를 callback이라고 한다.

function positivePredicate(item) {
  if (item > 0) {
    return true;
  } else {
    return false;
  }
}

function negativePredicate(item) {
  if (item < 0) {
    return true;
  } else {
    return false;
  }
}

function filteringArray(arr, callback) {
  const filteredArray = [];
  for (item of arr) {
    if (callback(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
}

let arr = [1, -2, 3, 0, -7, 8];
let filtered;

//filteringArray의 callback으로 양수체크 함수전달
filtered = filteringArray(arr, positivePredicate);
console.log(filtered);

//filteringArray의 callback으로 음수체크 함수전달
filtered = filteringArray(arr, negativePredicate);
console.log(filtered);
