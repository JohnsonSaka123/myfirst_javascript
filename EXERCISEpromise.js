//Exercises on Promise

// Promise to check for a even

let num = 2;

/*function myExecutor(resolve,reject){
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
function handleSuccess(resolvedValue){
  console.log(resolvedValue);  //"The number is even"
}
function handleFailure(rejectedReason){
  console.log(rejectedReason);
}
isEven()
.then(handleSuccess)
.catch(handleFailure);
console.log(myNumberisEven); */

/*function isEven(){
  return new Promise((resolve,reject) => {
    if (num % 2 == 0){
      resolve("The number is even");
    }else{
      reject("The number is odd");
    }
  });
}

isEven()
.then((handleSuccess) => {console.log(handleSuccess)})
.catch((handleError)  => {console.log(handleError)});

let myNumberisEven = isEven();
console.log(myNumberisEven); */

/*let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); */

//Sequential API calls

function productsList(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Products List"),
      resolve(["Oil" , "Rice" , "Tomatoes"])}, 
      1000);
  });
}

function productDetails(product){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log(`Fetching details for ${product}`),
      resolve({name : product , price : Math.random() * 100}); 
      },
    1000);
  });
}

productsList()
.then((handleSuccess) => {console.log(handleSuccess);})
.catch((handleError) => {console.log(handleError);})

