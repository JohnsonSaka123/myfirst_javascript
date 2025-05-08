/*let x = 23;
console.log(x);*/

//let myNumber = 100; // camelcase way of naming a variable

//Interaction
/*let myQuestion = prompt("How old are you" , "");

if (myQuestion > 20){
    alert("You are mature");
}else {
    alert("You're young");
}*/

// result of a prompt is a string


//functions 
/*function mySum ( x , y){
    return x + y ;

};


let addition = mySum(2,3);
console.log(addition);*/  //function declaration

//function expression 

/*let sum = function (a , b){
    let result = a+b;
    return result ;
};

console.log(sum(2,3)); */

/*let sum = ( a , b) => {
    return a + b ;
};*/

//javascript objects 
/*let salaries  = {
    John: 100,
    Ann: 160,
    Pete: 130
};*/

//let sum = salaries.John + salaries.Ann + salaries.Pete;
//console.log(sum);

/*let sum = 0;

for (let key in salaries){
    sum = sum + salaries[key];
};

console.log(sum);*/

/*let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(menu){
    for(let key in  menu){
        if(type0f(menu[key])== 'number'){
            menu[key] = menu[key] * 2;
        }
    }
};*/




/*console.log(018 == '018');
console.log(017 == '017');

*/
// Undefined 

/*let myName = null;
console.log(myName);*/

/*function func(){

}

console.log(func())
*/




/*if (x){

}else {
    x
}

console.log(x) */



/*console.log(undefined ==NaN);*/

//console.log("Hello world");

/*const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

const numbers = [1, 2, 3, 4, 5];

//getting the name and city from the user object
console.log(user.name);
console.log(user.address.city);

const updatedUser = {
    ...user,
    isAdmin : true
}

console.log(updatedUser);*/

/*function sum(x,y){
    return x+y;
}
console.log(sum(3,4));*/

/*const grades = [ 1, 2, 3];
grades.forEach((grade) => {
    console.log(grade);
})*/

/*const names = ["walker" , "lucille"] ;

const toUpperCase = names.map((name) => {
    return name.toUpperCase();
})

console.log(toUpperCase);

const numbers = [ 1, 3, 10, 38 , 56,78];

const greater = numbers.filter((number) =>{
    return number > 10 ;
});

console.log(greater);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const match = users.find((user) =>{
    return user.id == 2 ;
})
console.log(match) */

const fruits = ["mango", "orange", "banana"];

const toBig = fruits.forEach((fruit) => console.log(fruit.toLowerCase()));

console.log(toBig);

