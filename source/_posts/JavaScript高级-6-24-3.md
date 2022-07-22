---
title: JavaScript高级.6.24.3
date: 2022-06-24 21:20:25
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## wite-eval-严格模式-面向对象
### with语句
with语句 扩展一个语句的作用域链。
```
var name = 'nike'
var info = {name:'caeaser'}
with(info){
    console.log(name)
}
```
**不建议使用with语句，因为它可能是混淆错误和兼容性问题的根源。**
<!-- more -->

### eval函数的使用
eval是一个特殊的函数，它可以将传入的字符串当做JavaScript代码来运行。
 不建议在开发中使用eval：
eval代码的可读性非常的差（代码的可读性是高质量代码的重要原则）；
eval是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能会造成被攻击的风险；
eval的执行必须经过JS解释器，不能被JS引擎优化；
```
var data = 'console.log('eval')'
eval(data)
```

### 严格模式
 在ECMAScript5标准中，JavaScript提出了严格模式的概念（Strict Mode）：
严格模式很好理解，是一种具有限制性的JavaScript模式，从而使代码隐式的脱离了 ”懒散（sloppy）模式“；
支持严格模式的浏览器在检测到代码中有严格模式时，会以更加严格的方式对代码进行检测和执行；
 严格模式对正常的JavaScript语义进行了一些限制：
严格模式通过 抛出错误 来消除一些原有的 静默（silent）错误；
严格模式让JS引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）；
严格模式禁用了在ECMAScript未来版本中可能会定义的一些语法；
这里我们来说几个严格模式下的严格语法限制：
JavaScript被设计为新手开发者更容易上手，所以有时候本来错误语法，被认为也是可以正常被解析的；
但是这种方式可能给带来留下来安全隐患；
在严格模式下，这种失误就会被当做错误，以便可以快速的发现和修正；

1. 无法意外的创建全局变量
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
3. 严格模式下试图删除不可删除的属性
4.严格模式不允许函数参数有相同的名称
5. 不允许0的八进制语法
6. 在严格模式下，不允许使用with
7. 在严格模式下，eval不再为上层引用变量
8. 严格模式下，this绑定不会默认转成对象


## JavaScript面向对象
JavaScript其实支持多种编程范式的，包括函数式编程和面向对象编程：
JavaScript中的对象被设计成一组属性的无序集合，像是一个哈希表，有key和value组成；
key是一个标识符名称，value可以是任意类型，也可以是其他对象或者函数类型；
如果值是一个函数，那么我们可以称之为是对象的方法；
 如何创建一个对象呢？
 早期使用创建对象的方式最多的是使用Object类，并且使用new关键字来创建一个对象：
这是因为早期很多JavaScript开发者是从Java过来的，它们也更习惯于Java中通过new的方式创建一个对象；
 后来很多开发者为了方便起见，都是直接通过字面量的形式来创建对象：
这种形式看起来更加的简洁，并且对象和属性之间的内聚性也更强，所以这种方式后来就流行了起来；
### 对属性操作的控制
在前面我们的属性都是直接定义在对象内部，或者直接添加到对象内部的：
但是这样来做的时候我们就不能对这个属性进行一些限制：比如这个属性是否是可以通过delete删除的？这个
属性是否在for-in遍历的时候被遍历出来呢？
 如果我们想要对一个属性进行比较精准的操作控制，那么我们就可以使用属性描述符。
通过属性描述符可以精准的添加或修改对象的属性；
属性描述符需要使用 **Object.defineProperty** 来对属性进行添加或者修改；

数据属性描述符
```
// Object.defineProperty方法
var obj = {
    name: 'ceaser',
    age:21
}
//第三个参数属性描述符是一个对象，用来配置，默认值都是false
Object.defineProperty(obj, "height", {
    value: 1.75,
    configurable: false, //在别处不可删除，不可修改，
    enumerable: false, //不可枚举，看不到
    writable:false //不可修改
})
console.log(obj);
```
存取属性描述符
```
var obj = {
    name: 'ceaser',
    age: 21,
    _height:1.75
}
Object.defineProperty(obj, "height", {
    configurable: true,
    enumerable: true,
    get: function (value) {
        foo()
        return this._height
    },
    set: function (value) {
        bar()
        this._height=value
    }
})
obj.height=1.76
console.log(obj.height);
console.log(obj._height);

function foo() {
    console.log('获取了一次height的值');
}
function bar() {
    console.log('修改了一次height的值');
}
```
