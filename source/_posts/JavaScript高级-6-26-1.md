---
title: JavaScript高级.6.26.1
date: 2022-06-26 11:41:42
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## ES6类的使用
我们会发现，按照前面的构造函数形式创建 类，不仅仅和编写普通的函数过于相似，而且代码并不容易理解。
在ES6（ECMAScript2015）新的标准中使用了class关键字来直接定义类；
但是类本质上依然是前面所讲的构造函数、原型链的语法糖而已；
所以学好了前面的构造函数、原型链更有利于我们理解类的概念和继承关系；
 那么，如何使用class来定义一个类呢？
 <!-- more -->

### class定义类的方式
可以使用两种方式来声明类：类声明和类表达式；

```javascript
class Person {

}
let names = ['abc','cba','bca']
var Person = class {
  constructor(name,age){
    this.name=name,
    this.age=age,
    this.address='成都市'
  }
  eating(){
    console.log();
  }
  running(){
    console.log();
  }
  get address(){
    console.log('拦截访问操作');
    return this._address
  }
  set address(new_address){
    this._address=new_address
  }
  static random_person(){
    let name_index = Math.floor(Math.random() * names.length)
    let name = names[name_index]
    let age = Math.floor(Math.random() * 100)
    return new Person(name,age)
  }
}

let p1 = new Person('ceaser',30)
const p2 = Person.random_person()

console.log(Object.getOwnPropertypeDescriptors(Person.prototype));
```

## 类中实现继承
前面我们花了很大的篇幅讨论了在ES5中实现继承的方案，虽然最终实现了相对满意的继承机制，但是过程却依然
是非常繁琐的。
在ES6中新增了使用extends关键字，可以方便的帮助我们实现继承：
```javascript
class Person {
  constructor(name,age){
    this.name=name
    this.age=age
  }
  eating(){
    console.log('eating');
  }
}

class Student extends Person {
  constructor(name,age,sno){
    super(name,age)
    this.sno = sno
  }
  //重写eating
  person_method_new(){
    super.eating()
    console.log('调完父类的eating再调');
  }
}

const p1 = new Student('ceaser',21,'agg')
p1.eating()
```
