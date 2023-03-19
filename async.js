// 비동기(asynchronous)
// 프로미스(promise)
// 비동기 에러 처리
const fs = require("fs");
const promises = require("fs/promises");

function readFile() {
  // 파일 읽기와 같은 작업은 시간을 많이 필요로 한다
  // 동기(synchronous)
  // 많은 시간을 필요로 하는 작업을 전부 기다리고 다음 작업을 진행
  // fileData = fs.readFileSync("data.txt"); // buffer 데이터

  // 비동기(asynchronous)
  // 많은 시간을 필요로 하는 작업을 기다리지 않고 '동시에' 다음 작업을 진행
  // 파일 읽기/쓰기, 데이터베이스 읽기/쓰기, HTTP 요청/응답 등은 많은 시간을 필요로 하는 작업이다
  fs.readFile("data.txt", function(error, fileData) {
    // 파일 읽기 작업이 끝나면 실행되는 콜백함수
    // error: 파일 읽기에 실패했을 때 에러에 대한 정보
    // fileData: 파일 읽기 작업이 끝났을 때, 해당 파일에 대한 정보
    if (error) {
      // handle this error
    }
    console.log("File parsing done! by callback");
    console.log(fileData.toString());
  });

  // 프로미스 객체 리턴
  // then(콜백함수);
  // 콜백함수는 파일 읽기(비동기) 작업이 끝나면/성공하면(then) 실행된다
  // fileData: 파일 읽기에 성공했을 때, 해당 파일에 대한 정보
  // catch(콜백함수);
  // 콜백함수는 파일 읽기(비동기) 작업이 실패하면(catch) 실행된다
  // error: 파일 읽기에 실패했을 때, 에러에 대한 정보
  promises.readFile("data.txt")
    .then(function(fileData) {
      console.log("File parsing done! by promise");
      console.log(fileData.toString());
    })
    .catch(function(error) {
      console.log(error);
    })

  console.log("Hi there!");
}

readFile();