//Objects 

let myObject = {};//Object literal syntax

let myUser = new Object();//Object constructor


/*let user = {
    name : "Walker",
    surname : "Johnson",
    age :  30
};

console.log(user.age);

// add another key-value pair to the existing object

user.city = "New York";

console.log(user.city);
*/

//How to get those flags

//let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

//let descriptor = Object.getOwnPropertyDescriptor(user, "name");

//console.log(descriptor);

//using getters and setters
// get and set;

// let obj ={
//     get propName(){},
//     set propName(value){}
// };

let user = {
    name : "Johnson",
    surname : "Walker",

    get fullname(){
        return this.name + " " + this.surname;
    },

    set fullname(value){
        [this.name , this.surname] = value.split(" ");
    }
};


user.fullname = "Lucy Dumordzi";
console.log(user.fullname);