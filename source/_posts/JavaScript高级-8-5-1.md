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

### async中使用await关键字
```javascript
function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(222);
    }, 2000);
  });
}

async function foo() {
  //await后面一般是返回一个表达式这个表达式一定要返回一个promise
  //await函数的返回值一定是这个对应的promise resolve后的结果
  const res = await request();
  console.log(res);
}
```
```javascript
function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('err');
    }, 2000);
  });
}

async function bar() {
    const res1 = await request()
}
bar().catch(err => {
    console.log(err);
})
```