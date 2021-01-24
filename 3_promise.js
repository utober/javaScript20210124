'use strict'
// Promise is a JavaScript object for asynchronou operation.
// (1) state (2) producer vs consumer
// state: pending => fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically. 
const promise = new Promise((resolve, reject) => {
  // doing some haevy work(network, read files) :: async
  // console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // callback 함수 호출 후 값 'ellie' 전달
    // reject(new Error('no network'));
  }, 2000);
}); // Promise가 만들어지는 순간 통신 시작. (불필요한 통신 가능)

// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('finally: 마지막에 무조건 호출');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    })
  })
  .then(num => console.log(num));

console.clear()
// 5. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
    console.log('getHen......실행')
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    setTimeout(() => reject(new Error(`Error! ${hen} => 달걀`)))
    console.log('getEgg ........ 실행');
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    console.log('cook.......... 실행');
  });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal))

// 생략가능
getHen()
.then(getEgg)
.catch(error => {
  return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log)

// 인라인 (가독성 안 좋음)
// getHen().then(getEgg).then(cook).then(console.log);


