// 매개변수에 기본 값(default) 설정
// 기본 값이 설정된 매개변수는 선택적(optional)
// 기본 값이 설정되지 않은 매개변수는 선택적이 아니다(non-optional)
// 기본 값이 설정된 매개변수(optional)는 뒤에 위치해야 한다
// 기본 값이 설정되지 않은 매개변수(non-optional)는 앞에 위치해야 한다
function greetUser(greetingPrefix, userName="user") {
    // 템플릿 리터럴(Template Literals)
    // 문자열 내부에 동적인(dynamic) 데이터를 삽입할 수 있다
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser("Hi", "Kiyomin"); // Hi Kiyomin!
greetUser("Hello"); // Hello user!



// function sumUp(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(sumUp(3, 4)); // 3 + 4 + undefined === NaN

function sumUpByArray(numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

let arr = [1, 5, 10, 11];
console.log(sumUpByArray()); // 27

// 하지만 함수 호출할 때 배열을 사용할 수 없다면?

// rest 연산자
// 매개변수가 받는 값의 개수에 제한이 없어진다
// 함수를 호출하면서 매개변수에 전달되는 값은 자동으로 배열로 합쳐진다
// 따라서 for-of문 사용 가능
function sumUpByRest(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUpByRest(1, 5, 10, 11, 20, 31)); // 78


// spread 연산자
// 배열의 모든 요소를 나눠서 전달한다
// 객체의 모든 키-값 쌍을 나눠서 전달한다
sumUpByRest(...arr); // sumUpByRest(1, 5, 10, 11);



// 함수는 객체다!
const person = {
    name: "Kiyomin",
    age: 28
};

console.log(person.name);
console.log(person.age);

// 함수 객체(sumUpByArray)에 프로퍼티(someProperty) 생성 및 값 할당
sumUpByArray.someProperty = "we can do this, of coure, we usually do not";
