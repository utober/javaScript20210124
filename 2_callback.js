'use strict'
// 비동기 처리의 시작 콜백 이해하기 (async)
// Callback
// 콜백지옥

// 1. callback
// 2. promise
// 3. async / await

// JavaScript is synchronous.
// Execute the code block by orger after hoistion.
// hoisting: var, function declaration

// 1. 동기와 비동기
console.log('1');
// setTimeout(function(){  // 브라우저에게 요청 보냄. 
//   console.log('2')
// }, 1000);
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 2. 콜백 마지막 정리
// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWidthDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWidthDelay(() => console.log('async callback'), 2000);

// 3. 콜백 지옥 체험
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin '});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// (1) id, password  
// (2) login
// (3) roll
// (4) 사용자 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error)
      }
    );
  },
  error => {console.log(error)}
  );

  // 4. 콜백 체인의 문제점
  