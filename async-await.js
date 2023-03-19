const fs = require("fs");
const promises = require("fs/promises");

// 1. async
// async 함수는 자동으로 promise 리턴한다
async function readFile() {
  // 2. await
  // promise를 리턴하는 async 함수에 사용 가능
  // sync 함수'처럼' 동작한다
  // 내부적으로는 여전히 then() 함수가 동작한다
  try {
    const fileData = await promises.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }
  
  console.log("File parsing done! by promise");
  console.log(fileData.toString());
  console.log("Hi there!");
}

readFile();