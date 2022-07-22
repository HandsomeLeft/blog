---
title: JavaScript高级.6.25.1
date: 2022-06-25 11:21:11
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## 原型和函数原型
### 认识构造函数
我们先理解什么是构造函数？
构造函数也称之为构造器（constructor），通常是我们在创建对象时会调用的函数；
在其他面向的编程语言里面，构造函数是存在于类中的一个方法，称之为构造方法；
但是JavaScript中的构造函数有点不太一样；
 JavaScript中的构造函数是怎么样的？
构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别；
那么如果这么一个普通的函数被使用new操作符来调用了，那么这个函数就称之为是一个构造函数；
 那么被new调用有什么特殊的呢？
 <!-- more -->
---
如果一个函数被使用new操作符调用了，那么它会执行如下操作：
1. 在内存中创建一个新的对象（空对象）；
2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；（后面详细讲）；
3. 构造函数内部的this，会指向创建出来的新对象；
4. 执行函数的内部代码（函数体代码）；
5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；
```
//构造函数
function Person(name,age,height,address) {
    this.name = name
    this.age=age
    this.height = height
    this.address = address
    this.eating = function () {
        console.log(this.name+'在吃东西');
    }
    console.log('Person在调用');
}
console.log(new Person('ceaser', 21, 1.75, '成都'));

// var foo_func = new Person('ceaser', 21, 1.75, '成都').eating
// foo_func()
// new Person('ceaser', 21, 1.75, '成都').eating()
// new Person('ceaser', 21, 1.75, '成都')
```

### 对象的原型
JavaScript当中每个对象都有一个特殊的内置属性 [[prototype]]，这个特殊的对象可以指向另外一个对象。
 那么这个对象有什么用呢？
当我们通过引用对象的属性key来获取一个value时，它会触发 [[Get]]的操作；
这个操作会首先检查该属性是否有对应的属性，如果有的话就使用它；
如果对象中没有改属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性；
 那么如果通过字面量直接创建一个对象，这个对象也会有这样的属性吗？如果有，应该如何获取这个属性呢？
答案是有的，只要是对象都会有这样的一个内置属性；
 获取的方式有两种：
方式一：通过对象的 __proto__ 属性可以获取到（但是这个是早期浏览器自己添加的，存在一定的兼容性问
题）；
方式二：通过 Object.getPrototypeOf 方法可以获取到；

每个对象都有一个__proto__ 属性，构造函数有一个prototype属性,当我们new的时候，prototype便会指向__proto__
函数的显示原型，对象是隐式原型
```
//构造函数+原型高级写法
function Person(name,age,height) {
    this.name = name
    this.age = age
    this.height = height
}
Person.prototype.eating = function () {
    console.log('我是eating');
    console.log(this.name+'在eating');
}
Object.defineProperty(Person.prototype, 'running', {
    value: function () {
        console.log('我是running');
    },
    enumerable: true,
    configurable: true,
    writable:true
})
var foo = new Person('ceaser', 21, 1.75)
var foo_two = new Person('nike',25,2.11)
console.log(foo);
console.log(foo.__proto__);
foo.eating()
foo_two.eating()
foo_two.running()
```