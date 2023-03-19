// 객체 리터럴 생성
// 객체에 대한 묘사(프로퍼티, 메소드)를 수동으로 직접 해야한다
const job1 = {
    // 객체 묘사
    title: "Developer",
    location: "Seoul",
    salary: 30
};

const job2 = {
    // 객체 묘사
    title: "Developer",
    location: "Seoul",
    salary: 300
};
const job3 = {
    // 객체 묘사
    title: "Developer",
    location: "Seoul",
    salary: 500
};

console.log(job1);
console.log(job2);
console.log(job3);



// Date: 자바스크립트 내장 클래스(class) 또는 내장 생성자 함수(constructor function)
// new Date(): 현재 날짜와 시간에 대한 정보를 갖고 있는 객체 생성
console.log(new Date());

// 클래스(=생성자 함수)를 기반으로 객체를 생성할 수 있다
// 생성한 객체를 자동으로 묘사하는 설계도(blueprint)
class Job {
    // 클래스와 이름이 같은 생성자 함수
    constructor(jobTitle, place, salary) {
        // 일반적으로 프로퍼티를 생성한다
        // let 키워드를 사용하지 않는다
        // 생성할 (예정인) 객체를 this 키워드로 참조한다
        this.title = jobTitle; // title 프로퍼티 생성
        this.location = place; // location 프로퍼티 생성
        this.salary = salary; // salary 프로퍼티 생성
    }

    // 일반적으로 메소드는 생성자 함수 바깥에서 생성한다
    // function 키워드를 사용하지 않는다
    describe() {
        // (이미) 생성된 객체를 this 키워드로 참조한다
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);
    }
}

// 클래스(=생성자 함수)를 통해 객체 생성
const developer1 = new Job("Developer", "Seoul", 30);
const developer2 = new Job("Developer", "Sokcho", 300);
const developer3 = new Job("Developer", "Pusan", 500);

console.log(developer1.title);
console.log(developer2.location);
console.log(developer3.salary);

developer1.describe();



// 구조분해 할당(Destructuring Assignment)
// '구조(structure)'라는 단어는 '집합, 정리정돈'과 동일한 뜻이다
const input = ["Kiyomin", "Ku"];
const firstName = input[0];
const lastName = input[1];

// 배열의 구조분해 할당
// input 배열은 사라지지 않는다
const [ first, last ] = input; // const first = input[0]; const last = input[1];

// 객체의 구조분해 할당
// job 객체는 사라지지 않는다
const job = { title: "Developer", location: "Seoul" };
// 객체의 프로퍼티와 동일한 이름의 변수(상수)를 사용하면 자동으로 구조분해 할당을 처리한다
// 객체의 프로퍼티와 동일한 이름의 변수(상수)를 다시 수동으로 이름 변경 가능
const { title } = job; // 프로퍼티와 동일한 이름의 변수(상수)
const { location: myLocation } = job; // 프로퍼티와 동일한 이름의 변수(상수)를 다시 수동으로 이름 변경