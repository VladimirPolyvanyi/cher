//CONST LET
// let name = "John";
// let test;

// name = "Jack";

// console.log(name);

// const person = {
//   name: "John",
//   age: 33
// };

// //ARROW FUNC
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Brad");

// const fruits = ["Apples", "Oranges", "Grapes"];

// //FOREACH
// fruits.forEach((fruit, index) => console.log(fruit));

// //MAP
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

// console.log(singleFruit);

// //FILTER
// const people = [
//   { id: 1, name: "Karen" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Sharon" }
// ];

// const people2 = people.filter(person => person.id !== 2);

// console.log(people2);

// //SPREAD
// const arr = [1, 2, 3];
// const arr2 = [arr, 4];
// const arr3 = [...arr.filter(num => num !== 2)];

// console.log(arr3);

// const person1 = {
//   name: "Brad",
//   age: 36
// };

// const person2 = {
//   ...person1,
//   email: "brad@gmail.com"
// };

// console.log(person2);

// //DESTRUCTURING
// const profile = {
//   name: "John Doe",
//   adress: {
//     street: "40 Main St",
//     city: "Boston"
//   },
//   hobbies: ["movies", "music"]
// };

// console.log(profile.name);

// //CLASSES
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age}`;
//   }
// }

// const person1 = new Person("John", 24);
// const person2 = new Person("Sara", 23);

// console.log(person2.greet());

// //SUBCLASSES
// class Customer extends Person {
//   constructor(name, age, balance) {
//     super(name, age);
//     this.balance = balance;
//   }

//   info() {
//     return `${this.name}(${this.age}) owes ${this.balance}`;
//   }
// }

// const cutomer1 = new Customer("Kevin", 32, 300);

// console.log(cutomer1.info());

// //MODULES

// //file 1 (file1.js)
// export const name = 'Jeff';
// export const nums = [1,2,3];
// export default Person;        //export class

// // file 2 (file2.js)
// import {name, nums} from './file1';
// import Person from './file1';
