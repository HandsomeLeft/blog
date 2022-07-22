---
title: JavaScrit高级.6.24.2
date: 2022-06-24 14:43:21
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## 纯函数-柯里化实现-组合函数

### 纯函数
 函数式编程中有一个非常重要的概念叫纯函数，JavaScript符合函数式编程的范式，所以也有纯函数的概念；
 在react开发中纯函数是被多次提及的；
 比如react中组件就被要求像是一个纯函数（为什么是像，因为还有class组件），redux中有一个reducer的概念，也
是要求必须是一个纯函数；
 所以掌握纯函数对于理解很多框架的设计是非常有帮助的；
 纯函数的维基百科定义：
 <!-- more -->
 在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数：
**此函数在相同的输入值时，需产生相同的输出。**
 函数的输出和输入值以外的其他隐藏信息或状态无关，也和由I/O设备产生的外部输出无关。
 该函数不能有语义上可观察的函数副作用，诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容等。
 当然上面的定义会过于的晦涩，所以我简单总结一下：
 确定的输入，一定会产生确定的输出；
 函数在执行过程中，不能产生副作用；
 ---
  那么这里又有一个概念，叫做副作用，什么又是副作用呢？
副作用（side effect）其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一
些其他的副作用；
在计算机科学中，也引用了副作用的概念，表示在执行一个函数时，除了返回函数值之外，还对调用函数产生
了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储；
 纯函数在执行的过程中就是不能产生这样的副作用：
***副作用往往是产生bug的 “温床”。***
```
var name = ['abc','bca','cba']
var new_name = name.slice(0,3)
console.log(new_name)
var new_name_two = name.splice(2)
console.log(new_name_two)
console.log(name)
```
slice就是这样一个传函数（输入一样，输出也一样，并且没有修改全局变量和其他地方）
splice因为会将我们的name修改，因此不是纯函数

### 柯里化
 柯里化也是属于函数式编程里面一个非常重要的概念。
 我们先来看一下维基百科的解释：
在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化；
是把接收多个参数的函数，变成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参
数，而且返回结果的新函数的技术；
柯里化声称 “如果你固定某些参数，你将得到接受余下参数的一个函数”；
 维基百科的结束非常的抽象，我们这里做一个总结：
只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数；
这个过程就称之为柯里化；
```
//柯里化
function log_time(time,type,message) {
    console.log(`[${time.getHours()}:${time.getMinutes()}]+${type}+${message}`);
}
log_time(new Date, 'DEBUG', '监测到')


var log_time_new = time => type => message => {
    console.log(`[${time.getHours()}:${time.getMinutes()}]+${type}+${message}`);
}
log_time_new(new Date)('err')('监测到')

var log_time_new_one = log_time_new(new Date)
```
***因为柯里化，我们可以对我们的函数进行一些定制化***

### 手写柯里化
时间2：19：20

### 组合函数
组合（Compose）函数是在JavaScript开发过程中一种对函数的使用技巧、模式：
比如我们现在需要对某一个数据进行函数的调用，执行两个函数fn1和fn2，这两个函数是依次执行的；
那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复；
那么是否可以将这两个函数组合起来，自动依次调用呢？
这个过程就是对函数的组合，我们称之为 组合函数（Compose Function）；
```
//组合函数
function double(data) {
    return data*2
}
function square(data) {
    return data**2
}
console.log(square(double(10)));

function compose(m, n) {
    return function (data) {
        return n(m(data))
    }
}
var new_fn = compose(double, square)
console.log(new_fn(10));
```
#### 封装高端组合函数
02:57:54