---
title: JavaScript高级.7.18.1
date: 2022-07-18 15:25:26
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---

## 迭代器-可迭代对象-生成器用法

### 什么是迭代器？
迭代器（iterator），是确使用户可在容器对象（container，例如链表或数组）上遍访的对象，使用该接口无需关心对象的内部实现细节。
 其行为像数据库中的光标，迭代器最早出现在1974年设计的CLU编程语言中；
 在各种编程语言的实现中，迭代器的实现方式各不相同，但是基本都有迭代器，比如Java、Python等；
 在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：
 迭代器协议定义了产生一系列值（无论是有限还是无限个）的标准方式；
 那么在js中这个标准就是一个特定的**next**方法；
 <!-- more -->
 **next方法**有如下的要求：
 一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：
 done（boolean）
 如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定 done 这个属性。）
 如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
 value
 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

 ```javascript
// 编写的一个迭代器
const iterator = {
  next: function() {
    return { done: true, value: 123 }
  }
}

// 数组
const names = ["abc", "cba", "nba"]

// 创建一个迭代器对象来访问数组
let index = 0

const namesIterator = {
  next: function() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next()) // { done: false, value: "nba" }
console.log(namesIterator.next()) // { done: true, value: undefined }
console.log(namesIterator.next()) // { done: true, value: undefined }
console.log(namesIterator.next()) // { done: true, value: undefined }
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
 ```


### 可迭代对象
但是上面的代码整体来说看起来是有点奇怪的：
我们获取一个数组的时候，需要自己创建一个index变量，再创建一个所谓的迭代器对象；
事实上我们可以对上面的代码进行进一步的封装，让其变成一个可迭代对象；
 什么又是可迭代对象呢？
它和迭代器是不同的概念；
当一个对象实现了iterable protocol协议时，它就是一个可迭代对象；
这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 Symbol.iterator 访问该属性；
 当我们要问一个问题，我们转成这样的一个东西有什么好处呢？
当一个对象变成一个可迭代对象的时候，进行某些迭代操作，比如 for...of 操作时，其实就会调用它的
@@iterator 方法；

```javascript
const iterable_obj = {
    names:['aaa','bbb','ccc'],
    [Symbol.iterator]: function(){
        let index = 0
        return {
            next: ()=>{
                if(index < this.names.length){
                    return {done:false , value:this.name[index++]}
                } else {
                    return {done:false , value:undefined}
                }
            }
        }
    }
}
```

### 可迭代对象的应用
事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象的：
String、Array、Map、Set、arguments对象、NodeList集合；
**那么这些东西可以被用在哪里呢？**
JavaScript中语法：for ...of、展开语法（spread syntax）、yield*（后面讲）、解构赋值（Destructuring_assignment）；
创建一些对象时：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable]);
一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable);
循环就是靠调用迭代器的next()


## 生成器
### 什么是生成器？
生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执
行等。
 平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。

 **生成器函数也是一个函数，但是和普通的函数有一些区别：**
首先，生成器函数需要在function的后面加一个符号：*
其次，生成器函数可以通过yield关键字来控制函数的执行流程：
最后，生成器函数的返回值是一个Generator（生成器）：
生成器事实上是一种特殊的迭代器；
MDN：Instead, they return a special type of iterator, called a Generator.

```javascript
function* foo() {
  console.log("函数开始执行~")

  const value1 = 100
  console.log("第一段代码:", value1)
  yield

  const value2 = 200
  console.log("第二段代码:", value2)
  yield

  const value3 = 300
  console.log("第三段代码:", value3)
  yield

  console.log("函数执行结束~")
}

// 调用生成器函数时, 会给我们返回一个生成器对象
const generator = foo()

// 开始执行第一段代码
generator.next()

// 开始执行第二端代码
console.log("-------------")
generator.next()
generator.next()
console.log("----------")
generator.next()
```

### 生成器函数的执行流程
```javascript
// 当遇到yield时候值暂停函数的执行
// 当遇到return时候生成器就停止执行
function* foo() {
  console.log("函数开始执行~")

  const value1 = 100
  console.log("第一段代码:", value1)
  yield value1

  const value2 = 200
  console.log("第二段代码:", value2)
  yield value2

  const value3 = 300
  console.log("第三段代码:", value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

// generator本质上是一个特殊的iterator
const generator = foo()
console.log("返回值1:", generator.next())
console.log("返回值2:", generator.next())
console.log("返回值3:", generator.next())
console.log("返回值3:", generator.next())

```