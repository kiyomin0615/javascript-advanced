// 숫자, 문자열, 불리언, undefined, null은 원시(primitive) 타입
// 원시 타입은 스택 메모리에 저장된다
// 객체, 배열(=객체), 함수(=객체)는 참조(refernce) 타입
// 참조 타입은 힙 메모리(+스택 메모리)에 저장된다
const hobbies = ["sports", "cooking"];

hobbies.push("reading");

console.log(hobbies); // ["sports", "cooking", "reading"]

const person1 = { age: 32 };

function getAdultYearsByReference(person) {
    person.age -= 18;
    return p.age;
}

// call by reference
// 원본 전달
console.log(getAdultYears(person)); // 14

const person2 = { age: 32 };

function getAdultYearsByValue(age) {
    age -= 18;
    return age;
}

// call by value
// 복사본 전달
console.log(getAdultYearsByValue(person2.age)) // 14