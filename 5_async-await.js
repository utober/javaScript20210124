// async & await
// clear style of using promise

// 1. promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs....
    // return 'ellie';
    resolve('promise');
  });
}
  // resolve 없는 상태 : PromiseState : "pending"
  // resolve : PromiseState : "fulfilled"   &  PromiseResult : "elllie"

  const user = fetchUser(); 
  user.then(console.log);
  console.log("user: ", user);


// 2. async
async function fetchUser2() {
  return 'async';
}

const user2 = fetchUser2();
user2.then(console.log);
console.log("user2: ", user2);


// 3. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나'
}

// 콜백지옥과 비슷
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log)


// 4. useful Promise API
function pickAllFruits() {
  return  Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log)

// 먼저 받은값 전달
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);


