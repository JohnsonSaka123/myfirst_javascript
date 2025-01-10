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

/*function sayHello(){
  console.log("Hello string!");
}

setTimeout(sayHello , 3000);*/

/*function sleep(seconds){
  return new Promise(resolve => {
     setTimeout(() => {
      resolve();
      console.log("I'm asleep!");
  } , seconds * 3000);
  })
  
}
sleep(1)
.then((handleSuccess)=> {
  console.log("I woke up");
})
.catch((handleError) => {
  console.log("I couldn't wake up");
})

/*let myNum = 21;
console.log(myNum);*/

async function returnNumber() {
	return 123;
}
const promise = returnNumber();
   // ^? Promise<"pending">

   returnNumber()
   .then(num => console.log(num));