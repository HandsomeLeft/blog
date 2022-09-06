"use strict";

const { log } = require("console");

// let num: number = 123
// num = 222
exports.__esModule = true;
// let num2: number = 0b111 //二进制
// let num3: number = 0o456//八进制
// let flag: boolean = true
// flag = 20 > 30
// const foo: number | string | boolean = 321
// class Person {
//     name: string
//     age:number
//     constructor(name:string,age:number) {
//         this.name = name
//         this.age = age
//     }
// }
// const p = new Person('ceaser',21)
// console.log(p.name);
// console.log(p.age);
// class Person {
//   name: string = "";
//   age: number = 0;
//   constructor(name: string, age: number) {
//     (this.name = name), (this.age = age);
//   }
//   eating() {
//     console.log("eating");
//   }
// }
// class Student extends Person {
//   sno: number = 0;
//   constructor(name: string, age: number) {
//     super(name, age); //super用来调用父类的构造器
//   }
//   eating(): void {
//     console.log(" student eating"); //eating方法的重写，会覆盖掉分类的方法，但是也可以在内部使用super来调用
//     super.eating();
//   }
//   studying(): void {
//     console.log("studying");
//   }
// }
// const p1 = new Student("ceaser", 21);
// console.log(p1);
// p1.eating();
// class Animal {
//   action() {
//     console.log("animal running");
//   }
// }
// class Dogs {
//   action() {
//     console.log("dog running");
//   }
// }
// class fish {
//   action() {
//     console.log("fish swimming");
//   }
// }
// function foo(animal: Animal[]) {
//   animal.forEach((item) => {
//     item.action();
//   });
// }
// foo([new Dogs(), new fish()]);
// class Person {
//   private name: string = "";//private关键字的变量只能在内部调用
//   get_name() {
//     console.log(this.name);
//   }
// }
// class Person {
//   private _name: string = "";
//   get name() {
//     return this._name;
//   }
//   set name(new_name) {
//     this._name = new_name;
//   }
// }
// const n1 = new Person();
// n1.name = "ceaser";
// console.log(n1.name);
// class Person {
//   static time: string = "20:00";
// }
// console.log(Person.time);
// function sum<T>(num1: T): T {
//   return num1;
// }
// sum<number>(2);
// sum<{ name: string }>({ name: "ceaser" });
// sum<any[]>(["ceaser", 21]);
// interface Ifoo<T, E> {
//   name: T;
//   age: E;
// }
// const p: Ifoo<string, number> = { name: "ceaser", age: 21 };
// class Point<T> {
//   x: T;
//   y: T;
//   z?: T;
//   constructor(x: T, y: T, z?: T) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
// }
// const n = new Point(1, 2, 3);
// const n2 = new Point<number>(1, 2, 3);
// console.log(n);
// interface ILength {
//     length: number
// }
// function foo<T extends ILength>(arg: T) {
//     return arg.length
// }
// foo('123')
// function passwordStrength(pwd) {
//   var value = 0;
//   if (/[a-zA-Z+]/g.test(pwd)) {
//     value++;
//   }
//   if (/[0-9]/g.test(pwd)) {
//     value++;
//   }
//   if (/[a-zA-Z0-9]/g.test(pwd)) {
//     value++;
//   }
//   if (/[-`=\\;',./~!@#$%^&*()_+|{}:"<>?]+/g.test(pwd)) {
//     value++;
//   }
//   return value;
// }
// console.log(passwordStrength("C1,"));
console.log(/[-`=\\;',./~!@#$%^&*()_+|{}:"<>?]+/g.test("c1,"));
