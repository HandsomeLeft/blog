---
title: JavaScript高级.6.25.2
date: 2022-06-25 21:54:44
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## 面向对象的原型链和继承实现
面向对象有三大特性：封装、继承、多态
封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程；
继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）；
多态：不同的对象在执行时表现出不同的形态；
 那么这里我们核心讲继承。
 那么继承是做什么呢？
 <!-- more -->
继承可以帮助我们将重复的代码和逻辑抽取到父类中，子类只需要直接继承过来使用即可。
 那么JavaScript当中如何实现继承呢？
不着急，我们先来看一下JavaScript原型链的机制；
再利用原型链的机制实现一下继承；

### 原型链的继承
```javascript

//第一种继承的实现
function Person() {
    this.eating = function () {
        console.log('我在eating');
    }
}
Person.prototype.running = function () {
    console.log('我是running');
}
Object.defineProperty(Person.prototype, 'foo', {
    value: '我是foo',
    enumerable:true
})
function Student(name,age) {
    this.name = name
    this.age = age
}

Student.prototype = new Person()

var ceaser = new Student('ceaser', 21)
ceaser.eating()
ceaser.running()
console.log(ceaser.foo);
```
此方法有严重弊端:
1、很多继承来的属性无法打印
2、由于都是指针指向propertype，改变一处对象的值，其他对象也会一起改变
3、不好传递参数

### 借用构造函数继承
```javascript
//第二种继承
function Person(name,age) {
    this.name = name
    this.age = age
}
Object.defineProperty(Person.prototype, 'eating', {
    value: function () {
        console.log(this.name + '我是eating');
    }
})
function Student(name,age) {
    Person.call(this,name,age)
}

Student.prototype = new Person()
Student.prototype = Object.create(Person.prototype)

var stu1 = new Student('ceaser', 21)
var stu2 = new Student('james', 21)
console.log(stu1);
console.log(stu2);
stu1.eating()
stu2.eating()
```

### 一些方法的额外补充
1、Object.create()
```javascript
var obj = {
  name:'ceaser',
  age:21
}
var new_obj = Object.create(obj)
//这样obj变成了new_obj的__proto__
```
2、obj.hasOwnProperty()
看自身有没有这个属性
3、instanceof方法
console.log(stu instanceof Student)
