//Exercises on Promise

// Promise to check for a even

let num = 2;

function myExecutor(resolve,reject){
  if(num % 2 == 0){
    resolve("The number is even");
  }else{
    reject("The number is odd");
  }
}

function isEven(){
  return new Promise(myExecutor);
}

let myNumberisEven = isEven();
console.log(myNumberisEven);

