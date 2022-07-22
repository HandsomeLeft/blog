---
title: JavaScript高级.6.21.1
date: 2022-06-21 19:07:41
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## 1、函数执行-作用域链-面试题-内存管理
### 对于这样一串代码
```
var message = "Hello JavaScript"

function foo(){
    console.log(message)
}

function bar(){
    var message = "Hello Bar"
    foo()
}

bar()
```
它的输出结果是什么？
<!-- more -->

你的第一想法是不是Hello Bar
但其实是Hello JavaScript
我们需要用到作用域链的话题去看待这个问题
在早期ECMA标准中
1、js引擎处理js代码的时候会现有一个函数调用栈（ECStack）
在这个调用栈中会有一个Global Object全局对象，开始编译上方代码的时候便会在这个GO里面添加上message：undefined，foo：0xa00（同时在内存堆空间存上这个函数本身+它的parent scope（此时它的父级作用域是GO）,Bar：0xb00（同时在内存堆空间存上这个函数本身+它的parent scope（此时它的父级作用域是GO））
2、编译完后，便开始执行代码，这个时候在函数调用栈中会有一个全局的执行上下文，在其中有一个VO的对象，此时这个VO就指向了GO，第一步就是将那个message赋值上"Hello JavaScript"，然后执行到了bar()。这个时候调用栈便会有一个函数执行上下文。其中的VO指向了AO，在这个AO里面也有一个函数的局部对象，然后添加上message：undefined，这个时候函数编译完message："Hello Bar"，开始执行foo（），这是foo的父级作用域是GO，当前GO下的message还是"Hellp JavaScript",所以最终答案是"Hello JavaScript"
***在函数中只有var，let，const 才会有AO这种局部对象的生成***

***a=10这种代码会将a加到全局对象中***

### 内存管理
不管什么样的编程语言，在代码的执行过程中都是需要给它分配内存的，不同的是某些编程语言需要我们自己手动的管理内存，某些编程语言会可以自动帮助我们管理内存