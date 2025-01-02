//Exercise 1 Easy level
class Person{
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


console.log(Person.PersonCount());