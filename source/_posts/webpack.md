---
title: 什么是webpack？
date: 2022-04-22 20:19:12
tags: Vue.js
---
![](img/webpack/webpack.png)
从本质上来讲，webpac是一个现代的JavaScript应用的静态打包工具。  
从两个点来解释上面这句话：**模块**和**打包**。
<!-- more -->
对于一个完整的项目，相关的文件一定不止只有简单的html，css，js文件，不可能一次性的直接将所有文件放在服务器上，此时需要对这些文件进行统一的打包，解析。
我们在通过模块化开发完成项目后，还需要处理模块间的各种依赖，并且将其进行整合打包。  
**webpack其中一项功能就是处理模块间的各种依赖关系。**
## 什么是模块化？

### 1.ES6写法
### 在a文件导出
```
var name = '小明';
var age = 18;
var flag = true;
function sum(num1, num2) {
    console.log(num1+num2);
}
if (flag) {
    sum(20,30)
}

export {
    flag,
    sum
}
```
---
### 在b文件导入
```
import { flag,sum } from "./aaa.js";

if (flag) {
    console.log('flag接受到了');
    console.log(sum(1,3));
}
```
---
### 2.CommonJS写法
### 在a文件导出
```
function add(num1,num2) {
    return(num1+num2)
}
function mul(num1,num2) {
    return num1*num2
}

module.exports = {
    add,
    mul
}
```
### 在b文件导入
```
const { add, mul } = require('./mathtools.js')

console.log(add(1, 2));
console.log(mul(1, 2));
```
---

## 打包如何理解？
就是将webpack中各种资源模块进行打包合并成一个或多个包。
在打包的过程中，还可以对资源进行处理，比如压缩图片，将scss转换成css，将typescript转换成JavaScript等操作。
## 怎么使用webpack？
在控制台输入命令
`webpack ./src/main.js ./dist/main.js`
### 进阶用法
### 1.
新建配置文件 `webpack.config.js`
在通过`npm init`新建包管理文件`package.json`
在`webpack.config.js`下配置如下代码
```
const path=require('path')
module.exports = {
    entry: './src/main.js',   //入口
    output: {
        path: path.resolve(__dirname, 'dist'),   //__dirname来自node环境自带path包，是读取当前路径功能（这也是现在需要包管理文件的原因），resolve这个api是用于字符串拼接
        filename:'main.js'    //出口
    }
}
```
这样后直接运行webpack，便能根据配置文件自动去生成。
### 2.
在包管理文件的`"scripts"`的这个对象，写下`"build": "webpack"`
这样在终端输入`npm run build`也可以，并且这样还会首先去找局部的包，而不是全局的。