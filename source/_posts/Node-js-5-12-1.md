---
title: Node.js.5.12.1
date: 2022-05-12 19:58:52
cover: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuiprogrammer.com%2Fassets%2Fimages%2Fslides%2Fui%2Fslide-5.jpg&refer=http%3A%2F%2Fuiprogrammer.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654957483&t=33ebe3a13fac654eac97d848127a8c3c
tags:
    - Node.js
    - 前端
categories:
  - [前端]
  - [Node.js]
---
## 2.fs 文件系统模块

### 2.1 什么是 fs 文件系统模块

fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
例如：
+ fs.readFile() 方法，用来读取指定文件中的内容
+ fs.writeFile() 方法，用来向指定的文件中写入内容
如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它：
```
const fs =require( 'fs ')
---
```
<!-- more -->
---

### 2.2 读取指定文件中的内容

1. fs.readFile() 的语法格式
使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：
```
fs.readFile(path[, options], callback)
```
参数解读：
+ 参数1：必选参数，字符串，表示文件的路径。
+ 参数2：可选参数，表示以什么编码格式来读取文件。
+ 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。
2. fs.readFile() 的示例代码
以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值：
```
const fs = require('fs')
fs.readFile('../code/files/1.txt', 'utf8', (err, data_str) => {
    console.log(err);
    console.log(data_str);
})
```
3. 判断文件是否读取成功
可以判断 err 对象是否为 null，从而知晓文件读取的结果：
```
const fs = require( 'fs ')
fs.readFile( ' .ifiles/1.txt",'utf8", function(err, result) {
    if (err) {
return console.log('文件读取失败! ' + err.message)}
console.log('文件读取成功,内容是:' t result)})
```

### 2.3 向指定的文件中写入内容

1. fs.writeFile() 的语法格式
使用 fs.writeFile() 方法，可以向指定的文件中写入内容，语法格式如下：
参数解读：
```
fs.writeFile(file, data[, options], callback)
```
+ 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
+ 参数2：必选参数，表示要写入的内容。
+ 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
+ 参数4：必选参数，文件写入完成后的回调函数。
2. fs.writeFile() 的示例代码
向指定的文件路径中，写入文件内容：
```
const fs = require('fs')
fs.writeFile("../code/files/1.txt", 'hello Node.js', err => {
    console.log(err);
})
```
3. 判断文件是否写入成功
可以判断 err 对象是否为 null，从而知晓文件写入的结果：
```
const fs = require('fs')

fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})
```

### 2.5 练习 - 考试成绩整理
使用 fs 文件系统模块，将素材目录下成绩.txt文件中的考试数据，整理到成绩-ok.txt文件中。
**核心实现步骤**
① 导入需要的 fs 文件系统模块
② 使用 fs.readFile() 方法，读取素材目录下的 成绩.txt 文件
③ 判断文件是否读取失败
④ 文件读取成功后，处理成绩数据
⑤ 将处理完成的成绩数据，调用 fs.writeFile() 方法，写入到新文件 成绩-ok.txt 中
```
// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件的内容
fs.readFile('../素材/成绩.txt', 'utf8', function(err, dataStr) {
  // 3. 判断是否读取成功
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  // console.log('读取文件成功！' + dataStr)

  // 4.1 先把成绩的数据，按照空格进行分割
  const arrOld = dataStr.split(' ')
  // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace('=', '：'))
  })
  // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
  const newStr = arrNew.join('\r\n')

  // 5. 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
  fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
    if (err) {
      return console.log('写入文件失败！' + err.message)
    }
    console.log('成绩写入成功！')
  })
})
```

### 2.6 fs 模块 - 路径动态拼接的问题
在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题。
原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。
解决方案：在使用 fs 模块操作文件时，直接提供完整的路径，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。
```
const fs = require('fs')

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
/* fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
}) */

// 移植性非常差、不利于维护
/* fs.readFile('C:\\Users\\escook\\Desktop\\Node.js基础\\day1\\code\\files\\1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
}) */

// __dirname 表示当前文件所处的目录
// console.log(__dirname)

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

```
---
