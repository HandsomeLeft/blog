---
title: JavaScript高级.7.31.1
date: 2022-07-31 18:56:52
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---

## 前端模块化
早期没有模块化带来了很多的问题：比如命名冲突的问题
 当然，我们有办法可以解决上面的问题：立即函数调用表达式（IIFE）
IIFE (Immediately Invoked Function Expression)
但是，我们其实带来了新的问题：
<!-- more -->
第一，我必须记得每一个模块中返回对象的命名，才能在其他模块使用过程中正确的使用；
第二，代码写起来混乱不堪，每个文件中的代码都需要包裹在一个匿名函数中来编写；
第三，在没有合适的规范情况下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况；
所以，我们会发现，虽然实现了模块化，但是我们的实现过于简单，并且是没有规范的。
我们需要制定一定的规范来约束每个人都按照这个规范去编写模块化的代码；
这个规范中应该包括核心功能：模块本身可以导出暴露的属性，模块又可以导入自己需要的属性；
JavaScript社区为了解决上面的问题，涌现出一系列好用的规范，接下来我们就学习具有代表性的一些规范。
没
**说白了比如在html文件里面通过script src导入js文件，所有文件都暴露在一个作用域里面，造成命名冲突，因此之前都是包在函数中**
### commonJS
**导出 exports**
```javascript
exports.name = 'ceaser'
exports.age = 21

```
**导入 require**
```javascript
const { name,age } = require('./foo') //require其实就是返回了一个exports的对象，然后做了一个解构
```

### es module
**导出 export**
```javascript
export {
    name,
    age,
    say_hello
}//或者

export default function(){
    console.log(111)
}
```

**导入 import from**
```javascript
import {name,age,say_hello} from './foo.js'
//或者
import foo from './foo.js'
````
