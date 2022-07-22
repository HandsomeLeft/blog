---
title: JavaScript高级.6.21.2
date: 2022-06-21 21:05:48
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500
tags:
    - ES6
    - 前端
categories:
  - [前端]
  - [ES6]
---
## 闭包的定义-理解-内存模型-内存泄漏
### js闭包的使用
**在js中函数是可以作为函数参数来使用的，并且在底层它传的是函数的内存地址**
 在JavaScript中，函数是非常重要的，并且是一等公民：
那么就意味着函数的使用是非常灵活的；
函数可以作为另外一个函数的参数，也可以作为另外一个函数的返回值来使用；
 自己编写高阶函数
 使用内置的高阶函数
#### 先介绍一些高阶函数
<!-- more -->
```
var nums = [10,5,11,100,55]
var new_nums=nums.filter((item,index,arr)=>{
    return item % 2 === 0
})   //(传参的函数需要返回一个boolean)
```

```
//map:映射
var nums2 = [10,5,11,100,55]
var new_num=nums2.map((item,index,arr)=>{
    return item * 10
})
```
```
//forEach:迭代
nums2.forEach((item,index,arr)=>{
   console.log(item)
})
```
```
nums2.forEach((item,index,arr)=>{
   console.log(item)
})
```
```
var friends = [
   {name: "why", age: 18},
   {name: "kobe", age: 40},
   {name: "james", age: 35},
   {name: "curry", age: 30},
 ]

 var findFriend = friends.find(function(item) {
   return item.name === 'james'
 })
 console.log(findFriend)

var friendIndex = friends.findIndex(function(item) {
  return item.name === 'james'
})
// console.log(friendIndex)
```

在预编译的时候，在堆内存中 函数本体+它的上级作用域链会一直存在，只是具体的函数对象在调用函数的时候才会生成，不调用函数的时候便会自动销毁。