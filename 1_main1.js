// 'use strict'

{
  let name = 'ellie'
  console.log(name)
  name = 'rename'
  console.log(name)
  var age = 3
}
console.log(name)
console.log(age)

const canRead = true
const texts = 3 < 1; // false 
console.log(`value: ${canRead}, type: ${typeof canRead}`)

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)  // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol2}`)

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; 
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + '4'
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' * 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' - '5'
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);

text = 'hello'
console.log(text.charAt(0))
text = 8;
// console.log(text.charAt(0)) // Error

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}
ellie.age = 21

// let (r,w)
// const (r)
// premitive => 값이 메모리에 저장 
// objeft => ref 가 메모리에 저장 :: Mutable data types

// 4. operator, if, for loop 


// Function
// Default parameters 
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!')


// Rest parameters ==> "배열 형태로 전달"
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg)
  }

  args.forEach( arg => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


// Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let cilldMessage = 'hello';
  }
  // console.log(childMessage);
}
// console.log(message)  // not defined
printMessage();


// Return a value :: return undefined


// Early return, early exit
// "bad"
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic..
  }
}
// "good"
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}


// Function expression
const print = function () { // anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();


// Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer == 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log('yes!')
};
const printNo = function () {
  console.log('no!')
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
console.log(add(1, 3));
const simpleMultply = (a, b) => {
  return a * b
};
console.log(simpleMultply(1, 3));

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})()


// Class --> Object
// 속성 (fields) / 행동 (methods) 
// 캡슐화 / 상속 / 다양성
// class : template, declare once, no data in
// object : instance of a class, created many times, data in


// Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}
// Object 생성
const ellies = new Person('ellies', 20);
console.log(ellies.name);
console.log(ellies.age);
ellies.speak();


// Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// Fields (public, private) --> 쓸려면 바벨이용
class Experiment {
  publicField = 2;
  #privateField = 0;  // class 내부에서만 접근 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined


// Static properties and methods --> 클래스 자체에 연결 (클래스 이름을 이용해 호출)
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);  // Dream Coding
Article.printPublisher();        // Dream Coding


// Inheritance 상속 & 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {}
class Triangle extends Shape { // 오버라이딩
  draw() {
    super.draw();
    console.log('삼각형')
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `오버라이딩내용`
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// Class checking: instanceOf
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);   // false
console.log(triangle instanceof Triangle);   // true
console.log(triangle instanceof Shape);      // true
console.log(triangle instanceof Object);     // true
console.log(triangle.toString());            // [object Object] --(오버라이딩)--> 오버라이딩내용



// JavaScript MDN Reference page 
// ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// Literals and properties
// Object 
// object = { key : value };
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax
function prints(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie3 = { name: 'ellie', age: 4 };
prints(ellie3);
ellie3.hasJob = true;
console.log(ellie3.hasJob);
delete ellie3.hasJob;
console.log(ellie3.hasJob);

// Computed properties
console.log(ellie3.name);   // 코딩할 때 출력 값을 알때
console.log((ellie3['name'])); // key should be always string  // 실시간으로 원하는 값 받아올때
ellie3['hasJob'] = true;
console.log(ellie3.hasJob);

function printValue(obj, key) { // key 값을 코딩 순간 모를 때 (key의 값을 나중에 받아와야 할때)
  // console.log(obj.key); // ---> undefined
  console.log(obj[key]); // --> 정상 출력
}
printValue(ellie3, 'name');
printValue(ellie3, 'age');


// Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('ellie5', 30);
console.log(person4);
function makePerson(name, age) {
  return {
    name,
    age
  };
}
const person5 = new Person3('elli6', 30);
// Constructor Function
function Person3(name, age) {
  // this = {} (생략)
  this.name = name;
  this.age = age;
  // return this;
}


// in operator: property existence check (key in obj)
console.log('name' in ellie3); // true
console.log('age' in ellie3); // true
console.log('random' in ellie3); // false
console.log(ellie3.random); // undefined


// for..in vs for..of
// for (key in obj)
console.clear();
for (key in person1) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for(value of array) {
  console.log(value);
}


// Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 =  {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 값 덮어 쓴다
console.log(mixed.color);
console.log(mixed.size);



console.clear();
// Array.js
// 배열 (Array개념과 APIs)
// 자료구조
// JavaScript === aynalmically typed language 
// 검색 / 정렬 / 삽입 / 삭제
// 자료구조와 알고리즘 --> 효율적인 알고리즘 적용 - 상황에 따른 알고리즘 선택

// 1. Declaration (선언)
const arr1 = new Array();
const arr2 = [1, 3];

// 2. Index position
const fruits = ['사과', '바나나', '수박'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looging over an array
// print all fruits
// a. fro
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (index, fruit, array) {
  console.log('start');
  console.log(fruit, index, array);
})
fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach( fruit => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('apple','banana');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('토마토', '오이');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 배열의 길이가 길수록 작업량 많아서 느려진다.

// splice: remove an item by index position
fruits.push('야자수','복숭아');
console.log(fruits);
// fruits.splice(1); // 인덱스번호부터 나머지 모두 제거
fruits.splice(1, 1);  // 인텍스번호, 삭제할 갯수
console.log(fruits);
fruits.splice(1, 2,'사과1', '사과2'); // 1번 인덱스에서 2개 삭제하고 그 자리에 과일1, 과일2 넣어줌
console.log(fruits);

// combine two arrays
const fruits2 = ['과일1', '과일2'];
const newFruits = fruits.concat(fruits2)
console.log(newFruits);

// 5. Searching
// find the index
console.clear()
console.log(fruits);
console.log(fruits.indexOf('과일1'));
console.log(fruits.indexOf('과일2'));

// includes
console.log(fruits.includes('사과')); // true
console.log(fruits.includes('박스')); // false
console.log(fruits.indexOf('박스')); // -1

// lastIndexOf
fruits.push('사과7');
fruits.push('사과7');
fruits.push('사과7');
console.log(fruits);
console.log(fruits.indexOf('사과7')); // 4
console.log(fruits.lastIndexOf('사과7')); // 6 (맨 마지막 넣은 사과1)


// //////////////// Quiz
// 1. make a string out of an array
const fruits1 = ['apple', 'banana', 'orange'];
const result = fruits.join(':\t ');
console.log(result);
const result2 = fruits.join(','); // 구분자를 넣어서 string으로 만들어  (기본값 ,)
console.log(result2);

// 2. make an array out of a tring
{
  const fruits = ' 일, 이, 삼, 사, 오';
  const result = fruits.split(','); // 구분자 생략하면 전체가 하나로 생성됨
  console.log(result);
  const result2 = fruits.split(',', 2)  // ','로 구분하고 2개만 
  console.log(result2);
}

// 3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result3 = array.reverse(); // array배열 자체도 바꿔구 바꾼값을 리턴
  console.log(result3);
  console.log(array); 
}

// 4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);  // 배열자체수정
  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5]
}
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 필요한 부분만 가져욤
  console.log(result); // [3, 4, 5]
  console.log(array);  // [1, 2, 3, 4, 5]
}

// 5. find a student with the scroe 90
{
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 90),
    new Student('E', 18, true, 88)
  ];
  const result = students.find(function(student, index) {
    console.log(student, index);
    return student.score === 90;
  });
  console.log(result);
  const result2 = students.find((student) => student.age === 40);
  console.log(result2);

// 6. make an array of enrolled students
  const result6 = students.filter((student) => student.enrolled);
  console.log(result6);

// 7. make an array containing only the students' scores
  const result7 = students.map((student) => student.score * 2); // 원하는 데이터를 다른 값으로 변경
  console.log(result7);

// 8. check if there is a student with the score lower than 50
  let result8 = students.some((student) => student.score < 50); // 하나라도 있으면 true
  console.log(result8); // true

  result8 = students.every(student => student.score > 40);
  console.log(result8); // true
  result8 = students.every(student => student.score >= 50);
  console.log(result8); // false

// 9. compute students' average scroe
  let result9 = students.reduce((prev, curr) => { // reduceRight(뒤에서부터 적용)
    console.log('---------------');
    console.log('prev: ',prev);
    console.log("curr: ", curr);
    return prev + curr.score;  // 리턴값을 해줘야 다음 prev에 전달된다. (누적값계산가능)
  }, 0); // 시작값 0으로 설정
  console.log(result9); // 배열을 돌면서 값을 누적

  result9 = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result9);
  console.log(result9 / students.length) // 평균값

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
  let result10 = students.map(student => student.score);
  console.log(result10); // [1, 2, 3, 4, 5]

  result10 = students.map(student => student.score).join();
  console.log(result10);
  
  result10 = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join()
  console.log(result10);

// 11. sorted in ascending order
  let result11 = students
    .map(student => student.score)
    .sort((a, b) => a - b)    // 큰값부터 :: students.sort((a, b) => b - a)
    .join();
  console.log(result11); // 45,80,88,90,90
}



console.clear();
// 서버 통신의 시작
// JSON (JavaScript Object Notation) :: key & value
// XML

// AJAX (Asynchronus JavaScript And XML)
// XHR (XMLHttpRequest)
// fetch() API :: ie(x)

// JSON
// Client <--- {key:value} ---> Server
// object  serialize ----->   string(JSON)
// object  <--- deserialize   string(JSON)
{
  // 1. Object to JSON
  // stringfy(obj)
  let json = JSON.stringify(true);
  console.log(json);

  json = JSON.stringify(['apple', 'banana']);
  console.log(json);  // JSON type : "" 사용값으로 변환

  const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"),
    jump: () => {
      console.log(`${name} can jump`);
    },
  };

  json = JSON.stringify(rabbit);
  console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2.."} :: 함수 / 심볼 제거됨

  json = JSON.stringify(rabbit, ['name', 'color']);
  console.log(json); // {"name":"tori","color":"white"} :: 해당하는 프로퍼티만 전환
  
  json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, vlaue: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;
  });
  console.log(json);


  // 2. JSON to Object
  // parse(json)
  json = JSON.stringify(rabbit);
  // const obj = JSON.parse(json);
  const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, vlaue: ${value}`);
    // return value;
    return key === 'birthDate' ? new Date(value) : value;
  });
  console.log(obj);

  rabbit.jump();
  // obj.jump(); :: Error

  console.log(rabbit.birthDate.getDate());
  // console.log(obj.birthDate.getDate()); :: Error (return값 수정 전)
  console.log(obj.birthDate.getDate());
  console.log(obj.birthDate); // string
}



console.clear()
// 비동기 처리의 시작 콜백 이해하기 (async)
// Callback
// 콜백지옥

// 1. callback
// 2. promise
// 3. async / await






