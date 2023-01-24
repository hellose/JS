//비동기 작업시 결과를 리턴하지 않고 받은 객체 주소값을 통해 객체 작업을 하는 로직쪽으로 작성필요!

//downloadPictureThenProcessPicture - 네트워크를 통해 사진 다운로드 작업 진행
//callback - 다운로드 후 사진 처리 작업 함수
function downloadPictureThenProcessPicture(url, pictureObj, callback) {
    setTimeout(() => {
      
      // 받은 객체 주소값을 통해 작업을 해야함
      pictureObj.type = "jpg";
      pictureObj.resolution = "1920 x 1240";

      // 아래와 같은 경우 전혀 다른 객체 작업이 되므로 잘못된 로직 작성이 됨
      // pictureObj = { type: "jpg", resolution: "1920 x 1240" };

      console.log(`download ${url} complete`);
  
      if (!callback) {
        return;
      }
  
      callback(pictureObj);
    }, 1000);
  }
  
  //processPicture - 사진 처리 작업 함수
  function processPicture(pictureObj) {
    console.log("process picture");
    pictureObj.resolution = "800 x 600";
  }
  
  //다운로드 받은 사진을 담을 변수
  let picture = {};
  
  // 다운로드 후 후처리 작업 없을 경우
  // downloadPictureThenProcessPicture("http://test.com/image/test.jpg", picture);
  
  // 다운로드 후 후처리 작업 존재
  downloadPictureThenProcessPicture("http://test.com/image/test.jpg", picture, processPicture);
  
  console.log("before downloaded: ", picture);
  
  //3초 뒤 picture 값 확인
  setTimeout(() => console.log("after downloaded and processing:", picture), 3000);
  