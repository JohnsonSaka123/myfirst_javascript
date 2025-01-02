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

/* let numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube)
console.log(squares);
console.log(cubes)
function square(elements){
    return Math.pow(elements,2);
}

function cube(elements){
    return Math.pow(elements,3); 
} */

// examples to test my knolwedge on callbacks

/*function greetUser(name, callback){
    callback(name);
}

function sayHello(name){
    console.log(`Hello, ${name}!`);
}

greetUser("Johnson" , sayHello); */


/*let numbers = [1,2,3,4,5];

function squares(elements){
    console.log(Math.pow(elements,2));
}

numbers.forEach(squares);


function displayMessage(){
    console.log("Hello, World!");
    
}

setTimeout(displayMessage,2);

function sayName(name,cb){
    cb(name);
}

function pronounceName(name){
    console.log(`Your name is ${name}`);
}

sayName("Johnson" , pronounceName);*/

/*const Button = document.getElementById("myButton");

Button.addEventListener("click" , () => {
    alert("You clicked a button");
});


const paragraph = document.getElementById("hoverText");

paragraph.addEventListener("mouseover" , () => {
    paragraph.style.color = "blue";
});

paragraph.addEventListener("mouseout" , ()=>{
    paragraph.style.color = "black";
});*/

/*let Input = document.getElementById("input");
let Output = document.getElementById("output");

/*Input.addEventListener("keyup" , ()=> {
    Output.textContent = `Hello , ${Input.value}!`;
});

Input.addEventListener("keydown" , (event)=> {
    Output.textContent = `You pressed : ${event.key}`;
});*/

// map()

/*let map = new Map()

map.set("1" , "str1"); // string key
map.set(1, "num1"); // numeric key
map.set(true , "bool1"); // boolean key
//console.log(map.get("1"));
//console.log(map.has("1"));

//console.log(map.set("2" , "num2"));
console.log(map.clear());
//console.log(map);
console.log(map.size);*/

//Using objects as keys for maps

/*let john = {name : "John"};

let visitsCountMap = new Map();

visitsCountMap.set(john , 123);

console.log(visitsCountMap.get(john));*/

// chaining

/*let map = new Map();

map.set("1" , "str1")
    .set(2 , "num1")
    .set(true , "bool1");

console.log(map.size);*/

//Iteration over Map
/*let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

for (let vegetables of recipeMap.keys()){
    console.log(vegetables); // logs out the keys i.e cumcumber, tomatoes and onion to the console.
}

for (let amount of recipeMap.values()){
    console.log(amount); // logs out the values i.e 500, 350 , 50 to the console.
}

for (let entry of recipeMap.entries()){
    console.log(entry); // logs out the key value pairs to the console.
}
*/

/*let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));
//console.log(map);


let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

console.log(prices);*/

//let arr = ["apple" , "orange" , "pawpaw"];

/*function unique(arr){
    return Array.from(new Set(arr));
}

console.log(unique(arr));


function aclean(arr){
    return 
}*/

/*let map = new Map();
map.set(1, "one")
    .set(2, "two")
    .set(3, "three");
*/
//console.log(map.get(2)); // prints the value of the key two

//console.log(map.has(4));

//map.delete(1);
//console.log(map);


//iterating over a map
/*let personal = new Map();

personal.set("name" , "John")
.set("age" , 25)
.set("city" , "New York");

for (let details of personal.entries()){
    console.log(details);
} */

//using object as keys
/*const obj1 = { id: 1, name: "Alice" };
const obj2 = { id: 2, name: "Bob" };
let myMap = new Map();
myMap.set(obj1 , "Developer")
.set(obj2 , "Designer");

for (let values of myMap.values()){
    console.log(values);
}*/


/*let map = new Map();

map.set("a" , 1)
.set("b" , 2)
.set("c" , 3);

for (let values of map.entries()){
    console.log(values);
}*/

// functions as values

/*let myMap = new Map();
myMap.set(1, ()=> "Function1")
.set(2, ()=> "Function2");

console.log(myMap.get(1)());
console.log(myMap.get(2)()); */

// Merging two maps
/*let map1 = new Map();
map1.set("x" , 10)
    .set("y" , 20);

let map2 = new Map();
map2.set("y" , 40)
    .set("z" , "50")

const mergedMap = new Map([...map1,...map2]);

console.log(mergedMap);*/

//the map method .map()

/*const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
console.log(squares);

function square(element){
    return Math.pow(element,2);
}*/

/*const students = ["Walker" , "Lucy" , "Prince"];

 const UPPERCASE = students.map(upperCase);
 console.log(UPPERCASE);

 const LOWERCASE = students.map(lowerCase);
 console.log(LOWERCASE);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}*/


/*let numbers = [1,2,3,4,5];

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
} */

//Object oriented programming
// using the this function 
/*const person1 = {
    name : "Walker",
    favFood : "Waakye",
    sayHello : function(){console.log(`Hello, I'm ${this.name}.`);},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`);}
}
person1.eat();*/

//using constructor
/*function Car(make, model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive ${this.model}`)}
}

const car1 = new Car("Ford" , "Mustang" , 2024 ,"red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive() */

//classes in javascript

/*class Product{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05 ;
const product1 = new Product("Shirt" , 19.99);
product1.displayProduct();

const total = product1.calculateTotal(0.05);
console.log(`Total price(with tax): $${total.toFixed(2)}`);
*/

// static keyword

/*class Mathutil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI* radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(10));
console.log(Mathutil.getCircumference(10));
console.log(Mathutil.getArea(10)); */

// another example
/*class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello , my username is ${this.username}`);
    }
}

const user1 = new User("Walker");
const user2 = new User("John");
const user3 = new User("James");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount(); */

class Surgeon{
  constructor(name,department ,remainingVacationDays){
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero" , "Cardiovascular");

const surgeonJackson = new Surgeon("Ruth Jackson" , "Orthopedics");

console.log(surgeonRomero.name);
console.log(surgeonRomero.department);
surgeonRomero.takeVacationDays(5);
console.log(surgeonRomero.remainingVacationDays);