/*const myarr = [1,2,3,4,5,6 ,7,8,9,0];
let firstThree = myarr.slice(0,3);
let secondThree = myarr.slice(3,6);
let lastfour = myarr.slice(6,10);

console.log(firstThree.join(''));
console.log(secondThree.join(''));
console.log(lastfour.join(''));*/
//First solution but not accurate
/*function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
}

let PhoneNumber = createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

console.log(PhoneNumber);*/

//Original solution

/*function createPhoneNumber(numbers){
  let format = '(xxx) xxx-xxxx';

  for(let i=0; i<numbers.length; i++){
    format = format.replace('x' , numbers[i]);
  }
  return format;
}

let PhoneNumber = createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
console.log(PhoneNumber);*/


/*let value = 153;
let valueStr = `${value}`;
let sum = 0;*/
function narcissistic(value){
  let valueStr = `${value}`;
  let sum = 0;

  for(let i = 0 ; i < valueStr.length ; i++){
  let format = Math.pow(valueStr[i], valueStr.length)
  sum += format;
  }

  return sum;
}

let output = narcissistic(254);
console.log(output);

//console.log(valueStr[0]);
//console.log(valueStr.length);
