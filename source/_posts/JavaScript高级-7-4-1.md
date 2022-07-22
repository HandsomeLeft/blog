---
title: JavaScript高级.7.4.1
date: 2022-07-04 19:22:16
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## Proxy-Reflect-响应式原理
我们先来看一个需求：有一个对象，我们希望监听这个对象中的属性被设置或获取的过程
通过我们前面所学的知识，能不能做到这一点呢？
<!-- more -->
其实是可以的，我们可以通过之前的属性描述符中的存储属性描述符来做到；
监听对象的操作
左边这段代码就利用了前面讲过的 Object.defineProperty 的存储属性描述符来对
属性的操作进行监听。
但是这样做有什么缺点呢？
首先，Object.defineProperty设计的初衷，不是为了去监听截止一个对象中
所有的属性的。
我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强
行将它变成了数据属性描述符。
其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么
Object.defineProperty是无能为力的。
所以我们要知道，存储数据描述符设计的初衷并不是为了去监听一个完整的对
象
```javascript
const obj = {
    name:'ceaser',
    age:18
}

Object.defineProperty(obj,'name',{
    get(){
        console.log('name被访问了');
    }
    set(){
        console.log('name被设置了');
    }
})

console.log(obj.name);
obj.name='bob'
```

### Proxy的基本使用
 在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的：
也就是说，如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（Proxy对象）；
之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作；
 我们可以将上面的案例用Proxy来实现一次：
首先，我们需要new Proxy对象，并且传入需要侦听的对象以及一个处理对象，可以称之为handler；
 const p = new Proxy(target, handler)
其次，我们之后的操作都是直接对Proxy的操作，而不是原有的对象，因为我们需要在handler里面进行侦听；

最基本用法
```javascript
//最基本用法
const obj = {
    name:'ceaser',
    age:18
}
const obj_proxy = new Proxy(obj,{

})
console.log(obj_proxy.name);
obj_proxy.age = 21
console.log(obj);
```
```javascript
//13种捕获器
const obj = {
    name:'ceaser',
    age:18
}
const obj_proxy = new Proxy(obj,{
    get(target,key){
        retrun target[key]
    }
    set(target,key,new_value){
        target[key]=new_value
    }
})
console.log(obj_proxy.name);
obj_proxy.age = 21
console.log(obj);
```
Proxy其他捕获器
```javascript
//Proxy其他捕获器
//监听in的捕获器
//监听删除的捕获器
const obj = {
    name:'ceaser',
    age:21
}
const obj_proxy = new Proxy(obj,{
    has(target,key){
        console.log(`监听到了对象${target}的${key}的in操作`);
        retrun key in target
    },
    deleteProperty(target,key){
        delete target[key]
    }
})

console.log('name' in obj_proxy);
delete obj_proxy.name
```

Proxy函数对象的监听
```javascript
function foo() {
    console.log('foo');
}
const foo_proxy = new Proxy(foo,{
    apply(target,this,arg){
        console.log(`${target}被调用`);
        return target.apply(this,arg)
    }
    construct(target,arg){
        console.log('被new调用');
    }
})
foo_proxy.apply({},['abc','cba'])
new foo_proxy()
```
getPrototypeOf和obj._proto_一样

### Reflect的使用
Reflect也是ES6新增的一个API，它是一个对象，字面的意思是反射。
那么这个Reflect有什么用呢？
它主要提供了很多操作JavaScript对象的方法，有点像Object中操作对象的方法；
比如Reflect.getPrototypeOf(target)类似于 Object.getPrototypeOf()；
比如Reflect.defineProperty(target, propertyKey, attributes)类似于Object.defineProperty() ；
如果我们有Object可以做这些操作，那么为什么还需要有Reflect这样的新增对象呢？
这是因为在早期的ECMA规范中没有考虑到这种对 对象本身 的操作如何设计会更加规范，所以将这些API放到了Object上面；
但是Object作为一个构造函数，这些操作实际上放到它身上并不合适；
另外还包含一些类似于 in、delete操作符，让JS看起来是会有一些奇怪的；
所以在ES6中新增了Reflect，让我们这些操作都集中到了Reflect对象上；
Reflect也是13中捕获方法或Proxy一一对应

//Reflect的基本用法
```javascript
const obj = {
    name:'ceaser',
    age:18
}
const obj_proxy = new Proxy(obj,{
    get(target,key){
        retrun Reflect(target,key)
    }
    set(target,key,new_value){
        Reflect.set(target,key,new_value) //这个还会返回一个布尔告诉你有没有设置成功
    }
})
console.log(obj_proxy.name);
obj_proxy.age = 21
console.log(obj);
```

//第三个参数receiver的用法
```javascript
const obj = {
    _name:'ceaser',
    get name(){
        console.log(this._name);
    }
    set name(new_name){
        this._name = new_name
    }
}
const obj_proxy = new Proxy(obj,{
    get(target,key,receiver){
        console.log('get被调用',key);
        retrun Reflect.get(target,key,receiver)
    }
})
console.log(obj_proxy.name);
```

### 什么是响应式？
我们先来看一下响应式意味着什么？我们来看一段代码：
有一个初始化的值，有一段代码使用了这个值；
那么在m有一个新的值时，这段代码可以自动重新执行；
上面的这样一种可以自动响应数据变量的代码机制，我们就称之为是响应式的。
```javascript
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend()

function watchFn(fn) {
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

watchFn(function() {
  const newName = objProxy.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
})

watchFn(function() {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

objProxy.name = "kobe"
objProxy.name = "james"
objProxy.name = "curry"

objProxy.age = 100

```