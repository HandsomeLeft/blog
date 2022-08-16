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
宏任务队列  
+ 定时器
+ ajax
+ DOM操作
微任务队列
+ promise.then()  

**在执行任何的宏任务之前，都需要先保证微任务队列都已经被清空**  


下面这串代码await后面的代码会被当做在promise.then()里面执行，因此会被放在微任务中执行
```javascript
async function foo() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ceaser");
    },5000)
  })
  console.log('后面的代码');
}

foo()
```

