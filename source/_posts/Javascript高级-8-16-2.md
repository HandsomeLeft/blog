---
title: Javascript高级.8.16.2
date: 2022-08-16 19:49:24
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
  - ES6
  - 前端
categories:
  - [前端]
  - [ES6]
---

## 事件循环-微任务-宏任务

如果在执行 JavaScript 代码的过程中，有异步操作呢？
中间我们插入了一个 setTimeout 的函数调用；
这个函数被放到入调用栈中，执行会立即结束，并不会阻塞后续代码的执行；
但是事件循环中并非只维护着一个队列，事实上是有两个队列：

<!-- more -->

宏任务队列（macrotask queue）：ajax、setTimeout、setInterval、DOM 监听、UI Rendering 等  
微任务队列（microtask queue）：Promise 的 then 回调、 Mutation Observer API、queueMicrotask()等  
那么事件循环对于两个队列的优先级是怎么样的呢？  
1.main script 中的代码优先执行（编写的顶层 script 代码）；  
2.在执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行  
也就是宏任务执行之前，必须保证微任务队列是空的；  
如果不为空，那么就优先执行微任务队列中的任务（回调）；

宏任务队列

- 定时器
- ajax
- DOM 操作
  微任务队列
- promise.then()

**在执行任何的宏任务之前，都需要先保证微任务队列都已经被清空**

下面这串代码 await 后面的代码会被当做在 promise.then()里面执行，因此会被放在微任务中执行

```javascript
async function foo() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ceaser");
    }, 5000);
  });
  console.log("后面的代码");
}

foo();
```
