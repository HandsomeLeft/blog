// function foo() {
//     console.log(this);
// }
// foo.call("aaa")
// foo.apply('aaa')
// foo.bind('aaa')();
// [1,2,3].forEach(function(item) {
//     console.log(item,this.id);
// }, { id: 100 });
// var test_data = () => 'aa'
// var test=test_data()
// console.log(test);

//柯里化
// function log_time(time,type,message) {
//     console.log(`[${time.getHours()}:${time.getMinutes()}]+${type}+${message}`);
// }
// log_time(new Date, 'DEBUG', '监测到')


// var log_time_new = time => type => message => {
//     console.log(`[${time.getHours()}:${time.getMinutes()}]+${type}+${message}`);
// }
// log_time_new(new Date)('err')('监测到')

// var log_time_new_one = log_time_new(new Date)

//组合函数
// function double(data) {
//     return data*2
// }
// function square(data) {
//     return data**2
// }
// console.log(square(double(10)));

// function compose(m, n) {
//     return function (data) {
//         return n(m(data))
//     }
// }
// var new_fn = compose(double, square)
// console.log(new_fn(10));

// Object.defineProperty方法
// var obj = {
//     name: 'ceaser',
//     age:21
// }
// //第三个参数属性描述符是一个对象，用来配置，默认值都是false
// Object.defineProperty(obj, "height", {
//     value: 1.75,
//     configurable: false, //在别处不可删除，不可修改，
//     enumerable: false, //不可枚举，看不到
//     writable:false //不可修改
// })
// console.log(obj);

// var obj = {
//     name: 'ceaser',
//     age: 21,
//     _height:1.75
// }
// Object.defineProperty(obj, "height", {
//     configurable: true,
//     enumerable: true,
//     get: function (value) {
//         foo()
//         return this._height
//     },
//     set: function (value) {
//         bar()
//         this._height=value
//     }
// })
// obj.height=1.76
// console.log(obj.height);
// console.log(obj._height);

// function foo() {
//     console.log('获取了一次height的值');
// }
// function bar() {
//     console.log('修改了一次height的值');
// }

//构造函数
// function person(name,age,height,address) {
//     this.name = name
//     this.age=age
//     this.height = height
//     this.address = address
//     this.eating = function () {
//         console.log(this.name+'在吃东西');
//     }
//     console.log('person在调用');
// }
// // console.log(new person('ceaser', 21, 1.75, '成都'));


// // var foo_func = new person('ceaser', 21, 1.75, '成都').eating
// // foo_func()
// // new person('ceaser', 21, 1.75, '成都').eating()
// // new person('ceaser', 21, 1.75, '成都')
// Object.defineProperty(person.prototype, 'address', {
//     enumerable:true
// })
// console.log(person.prototype);

// console.log(person.prototype.constructor);

//构造函数+原型高级写法
// function Person(name,age,height) {
//     this.name = name
//     this.age = age
//     this.height = height
// }
// Person.prototype.eating = function () {
//     console.log('我是eating');
//     console.log(this.name+'在eating');
// }
// Object.defineProperty(Person.prototype, 'running', {
//     value: function () {
//         console.log('我是running');
//     },
//     enumerable: true,
//     configurable: true,
//     writable:true
// })
// var foo = new Person('ceaser', 21, 1.75)
// var foo_two = new Person('nike',25,2.11)
// console.log(foo);
// console.log(foo.__proto__);
// foo.eating()
// foo_two.eating()
// foo_two.running()


//第一种继承的实现
// function Person() {
//     this.eating = function () {
//         console.log('我在eating');
//     }
// }
// Person.prototype.running = function () {
//     console.log('我是running');
// }
// Object.defineProperty(Person.prototype, 'foo', {
//     value: '我是foo',
//     enumerable:true
// })
// function Student(name,age) {
//     this.name = name
//     this.age = age
// }

// Student.prototype = new Person()

// var ceaser = new Student('ceaser', 21)
// ceaser.eating()
// ceaser.running()
// console.log(ceaser.foo);


//第二种继承
// function Person(name,age) {
//     this.name = name
//     this.age = age
// }
// Object.defineProperty(Person.prototype, 'eating', {
//     value: function () {
//         console.log(this.name + '我是eating');
//     }
// })
// function Student(name,age) {
//     Person.call(this,name,age)
// }

// Student.prototype = new Person()

// var stu1 = new Student('ceaser', 21)
// var stu2 = new Student('james', 21)
// console.log(stu1);
// console.log(stu2);
// stu1.eating()
// stu2.eating()

// let names = ['tom', 'jeeeee','jerry', 'john', 'Christina','jeeee']
// let n1 = names.find(function (item) {
//     return item.length>4
// })
// console.log(n1);

//用class创建对象
// class Person {
//     constructor(name,age,address){
//         this.name = name
//         this.age = age
//         this.address = address
//     }
//     eating() {
//         console.log(this.name +'在eating');
//     }

// }

// class Student extends Person {
//     constructor(name, age, sno) {
//         super(name, age)
//         this.sno = sno
//     }
// }
// var stu1 = new Student('ceaser', 21)

// console.log(stu1);

//创建类继承自内置类
// let data = ['ceaser', 'age']
// for (let i = 0 ; i<data.length; i++){
//     console.log(data[i]);
// }
// console.log(...data);
// function foo(data) {
//     data.push(...data)
// }
// foo(data)
// console.log(data);

//获取原型所有属性
// class Person1 {

// }
// let names = ['abc','cba','bca']
// var Person = class {
//   constructor(name,age){
//     this.name=name,
//     this.age=age,
//     this.address='成都市'
//   }
//   eating(){
//     console.log();
//   }
//   running(){
//     console.log();
//   }
//   get address(){
//     console.log('拦截访问操作');
//     return this._address
//   }
//   set address(new_address){
//     this._address=new_address
//   }
//   static random_person(){
//     let name_index = Math.floor(Math.random() * names.length)
//     let name = names[name_index]
//     let age = Math.floor(Math.random() * 100)
//     return new Person(name,age)
//   }
// }

// let p1 = new Person('ceaser',30)
// const p2 = Person.random_person()
// console.log(p1);
// console.log(p2);

// console.log(Object.getOwnPropertyDescriptors(Person.prototype));

// const obj = {
//     name:'ceaser',
//     age:21
// }
// const obj_proxy = new Proxy(obj,{
//     has(target,key){
//         console.log(`监听到了对象${target}的${key}的in操作`);
//         return key in target
//     }
// })
// console.log('name' in obj_proxy);

//promise
// function request_data(url){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         if (url==='ceaser') {
//             //成功
//             let data = 1
//             resolve(data)
//         } else {
//             //失败
//             let data = 0
//             reject(data)
//         }
//         }, 3000);
//     })
// }

// request_data('ceaser').then((res) => { console.log('成功',res); }).catch((err) => { console.log('失败',err); })

//可迭代对象
// const iterable_obj = {
//     names:['aaa','bbb','ccc'],
//     [Symbol.iterator]: function(){
//         let index = 0
//         return {
//             next: ()=>{
//                 if(index < this.names.length){
//                     return {done:false , value:this.names[index++]}
//                 } else {
//                     return {done:true , value:undefined}
//                 }
//             }
//         }
//     }
// }

// for(let i of iterable_obj){
//     console.log(i);
// }


//async await
async function foo() {
    console.log('begin');
    console.log('middle');
    console.log('end');
}

//async函数的返回值一定是一个promise

const promise = foo()

promise.then(res => {
    console.log(res);//因为foo函数没写返回值，默认就是返回一个undefined
})