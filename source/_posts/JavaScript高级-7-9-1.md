---
title: JavaScript高级.7.9.1
date: 2022-07-09 21:23:17
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---

## Promise的使用和手写Promise
在ES6出来之后，有很多关于Promise的讲解、文章，也有很多经典的书籍讲解Promise
虽然等你学会Promise之后，会觉得Promise不过如此，但是在初次接触的时候都会觉得这个东西不好理解；
 那么这里我从一个实际的例子来作为切入点：
我们调用一个函数，这个函数中发送网络请求（我们可以用定时器来模拟）；
如果发送网络请求成功了，那么告知调用者发送成功，并且将相关数据返回过去；
如果发送网络请求失败了，那么告知调用者发送失败，并且告知错误信息；
<!-- more -->

异步请求的处理方式
```javascript
function request_data(url){
    setTimeout(() => {
        if (url==='ceaser') {
            //成功
            return 1
        } else {
            //失败
            return 0
        }
    }, 3000);
}

request_data('ceaser')
//显然这个函数无法拿到我们return的值
```

**Promise就是来解决这样一个问题**
我们来看一下Promise的API是怎么样的：
Promise是一个类，可以翻译成 承诺、许诺 、期约；
当我们需要给予调用者一个承诺：待会儿我会给你回调数据时，就可以创建一个Promise的对象；
在通过new创建Promise对象时，我们需要传入一个回调函数，我们称之为executor
这个回调函数会被立即执行，并且给传入另外两个回调函数resolve、reject；
当我们调用resolve回调函数时，会执行Promise对象的then方法传入的回调函数；
当我们调用reject回调函数时，会执行Promise对象的catch方法传入的回调函数；
```javascript

class Person {
    constructor(callback){
        let foo = function(){

        }
        let bar = function(){

        }
        callback(foo,bar)
    }
}

const p = new Person((foo,bar)=>{
    foo()
    bar()
})

//传入的这个函数就是reslove和reject
const promise = new Promise(()=>{
    console.log('promise传的回调函数会立即被执行');
})


```
使用promise对上述代码的重构
```javascript
function request_data(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        if (url==='ceaser') {
            //成功
            let data = 1
            resolve(data)
        } else {
            //失败
            let data = 0
            reject(data)
        }
        }, 3000);
    })
}

request_data('ceaser').then((res) => { console.log('成功',res); }).catch((err) => { console.log('失败',err); })
```

```javascript
new Promise((resolve,reject)=>{
    //成功
    resolve()
    //失败
    reject()
}).then(res=>{

}).catch(err=>{

})

```