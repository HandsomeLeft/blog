---
title: JavaScript高级.8.5.1
date: 2022-08-05 19:52:37
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## async-await-js线程
```javascript
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
```