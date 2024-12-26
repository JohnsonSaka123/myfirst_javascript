//objects references 

/*let user = {
    name : "Johnson"
};*/

/*let user = {name : "Johnson"};

let admin = user;

admin.name = "Pete";
console.log(user.name);*/

/*let a = {};
let b = {} ;
console.log( a == b);*/

/*let user = {
    name : "Johnson",
    age : 23
};

let clone = {};

for (let key in user){
    clone[key] = user[key]; // copies the object propeties to the clone object
};

clone.name = "Peter";
console.log(clone);*/

//object methods 

// a function that is a property of an object is it's method.

/*let user = {
    name : "Walker",
    age : 30 
};*/

/*user.sayHi = function (){
    console.log("Hello!");
};
user.sayHi();*/

/*function sayHi(){
    console.log("Hello!");
};

user.sayHi = sayHi;

user.sayHi();*/

// template literal

/*let string1 = 'Hello';
let string2 = 'Walker';

let greetings = `${string1} ${string2}` ;
console.log(greetings);*/


/*function myGreeting(name,salutation= "Hello"){
    console.log(`${salutation} ${name}`);
}

myGreeting("Walker");*/

// spread operator
/*let numbers = [1,2,3,4,5];

let minnum = Math.min(...numbers)
console.log(minnum);*/

// with strings 

/*let name = "Walker";
let letters = [...name].join(".");
console.log(letters);*/

// can be used to combine two arrays

/*let fruits = ["apple" , "orange"];
let vegetables = ["carrot" , "beetroot"];

let food =[...fruits , ...vegetables , "egg" , "milk"];
console.log(food);*/

// callbacks 

/*function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

function displayResult(sum){
    document.getElementById("head-el").textContent = sum;
}

sum(5,10 , displayResult);*/


//foreach(callback)

/*let numbers = [1,2,3,4,5]

numbers.forEach(double);
numbers.forEach(display);
function double (element, index,array){
    (array[index] = element * 2);
}

function display(elements){
    console.log(elements);
}*/


/*let fruits = [ "mango", "orange", "pawpaw"];

fruits.forEach(display);

function display(elements){
    let bigger = elements.toUpperCase();
    console.log(bigger);
}*/

let numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube)
console.log(squares);
console.log(cubes)
function square(elements){
    return Math.pow(elements,2);
}

function cube(elements){
    return Math.pow(elements,3); 
}
