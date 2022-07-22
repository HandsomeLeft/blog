---
title: JavaScript高级.6.23.1
date: 2022-06-23 11:59:01
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## 闭包内存回收和this的四个绑定规则

### this在全局作用域下指向什么？
在全局作用域下this绑定的就是window node环境下绑定的是{}（一个空对象）
<!-- more -->

### 规则一：默认绑定
独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用
foo()
### 规则二：隐式绑定
也就是它的调用位置中，是通过某个对象发起的函数调用
obj.foo()
### 规则三：显式绑定
我们明确的绑定了this指向的对象，所以称之为 显示绑定
foo.call("call",20,30)
foo.apply("apply",[20,30])
```
function foo(){
    console.log('foo')
}
var new_foo=foo.bind("aaa")
new_foo()
```
### 规则四：new绑定