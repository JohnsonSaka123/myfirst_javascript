/*const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Promise 
// the executor function
function myExecutor(resolve, reject){
  if (inventory.sunglasses > 0){
    resolve('Sunglasses order processed!');
  }else {
    reject('That item is sold out.');
  }
}

function orderSunglasses(){
  return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();
console.log(orderPromise);

*/

//Uisng node setTimeout function 

//setTimeout(callback, timeout(in milliseconds))

function sayHello(){
  console.log("Hello string!");
}

setTimeout(sayHello , 3000);