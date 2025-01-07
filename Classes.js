//Exercise 1 Easy level
/*class Person{
  static count = 0;
  constructor(name, age){
    this.name = name;
    this.age = age;
    Person.count++;
  }
  greet(){
    console.log(`Hello, welcome ${this.name}!`);
  }
  static PersonCount(){
    return Person.count;
  }
}

class Student extends Person{
  constructor(name, age, grade){
    super(name, age);
    this.grade = grade;
  }
  study(){
    console.log(`${this.name} is studying at ${this.grade}`);
  }
}


const sakaWalker = new Student("Johnson" , 23 ,"High School");
console.log(sakaWalker.name);
console.log(sakaWalker.age);
console.log(sakaWalker.study());
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);


console.log(Person.PersonCount()); */

//Exercise 2 Medium level

/*class shape{
  
  calculateArea(){
    return 0;
  }

 /* static SumOfAreas(){
    let shapes = ["Circle" , "Rectangle"];
    let sum = 0;
    for(let i = 0 ; i< shapes.length ; i++){
      sum += shapes[i].calculateArea();
      console.log(sum) ;
    }
  }*/

  


/*class Circle extends shape{
  constructor(radius){
    super();
    this.radius = radius;
  }
  calculateArea(){
  return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends shape{
  constructor(length, width){
    super();
    this.length = length;
    this.width = width;
  }
  calculateArea(){
    return this.length * this.width ;
  }
}

const shape1 = new Rectangle(24,34);
console.log(shape1.calculateArea());

const shape2 = new Circle(12);

console.log(shape2.calculateArea()); */

console.log(process.env.PWD);