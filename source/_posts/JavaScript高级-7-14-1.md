---
title: JavaScript高级.7.14.1
date: 2022-07-14 20:55:02
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---

## 手写Promise的整个逻辑和Api

### then方法
then方法是Promise对象上的一个方法：它其实是放在Promise的原型上的 Promise.prototype.then
 then方法接受两个参数：
fulfilled的回调函数：当状态变成fulfilled时会回调的函数；
reject的回调函数：当状态变成reject时会回调的函数；

<!-- more -->

1、同一个的promise可以多次调用then方法，当resolve()被回调时，所有then方法都会被调用。
```javascript
const promise = new Promise((resolve,reject)=>{
    resolve()
})
promise.then(res=>{
    console.log('res1':res)
})
promise.then(res=>{
    console.log('res2':res)
})
promise.then(res=>{
    console.log('res2':res)
})
```

2、then方法传入的“回调函数”：可以有返回值
如果我们返回的是一个普通值，那么这个函数的值被作为一个新的promise的reslove值
```javascript
promise.then(res=>{
    return 'aaa'
}).then(res=>{
    console.log(res) //输出aaa
}) 
//等于
promise.then(res=>{
    return new Promise((resolve,reject)=>{
        resolve('aaa')
    })
}).then(res=>{
    console.log(res)
})
```
3、如果没有写返回值，then()函数会返回一个undefined

4、如果返回的是一个promise

5、如果返回的是一个对象，并且该对象实现了thenable(其实也会返回一个promise)
```javascript
promise.then(res=>{
    return {
        then(resolve,reject){
            resolve(22222)
        }
    }
}).then(res=>{
    console.log('res',res)
})
```


### catch方法
```javascript
const promise = new Promise((resolve,reject)=>{
    reject()
}).catch(()=>{

})
```
**catch方法其实是then的一种语法糖，then方法本来就可以接收两种回调**
**catch也有返回值，使用起来和在then里面没有区别，也是返回一个promise**


### final方法
```javascript
const promise = new Promise((resolve,reject)=>{
    reject()
}).catch(()=>{

}).finally(()=>{
    console.log('finally是一定会被调用，但它没有参数')
})
```



### all方法
```javascript
// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111)
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 3000);
})

// 需求: 所有的Promise都变成fulfilled时, 再拿到结果
// 意外: 在拿到所有结果之前, 有一个promise变成了rejected, 那么整个promise是rejected
Promise.all([p2, p1, p3, "aaaa"]).then(res => {
  console.log(res)
}).catch(err => {
  console.log("err:", err)
})

```

### allSettled方法
all方法有一个缺陷：当有其中一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态。
那么对于resolved的，以及依然处于pending状态的Promise，我们是获取不到对应的结果的；
 在ES11（ES2020）中，添加了新的API Promise.allSettled：
该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是reject时，才会有最终的状态；
并且这个Promise的结果一定是fulfilled的；
 我们来看一下打印的结果：
allSettled的结果是一个数组，数组中存放着每一个Promise的结果，并且是对应一个对象的；
这个对象中包含status状态，以及对应的value值；
```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => { resolve(1111) }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => { reject(2222) }, 2000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => { resolve(3333) }, 3000)
})
// HYPromise.all([p1, p2, p3]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

HYPromise.allSettled([p1, p2, p3]).then(res => {
  console.log(res)
})
```

### race方法


### any方法


## 手写Promise
。。。