---
title: Node.js.5.12.2
date: 2022-05-12 21:35:29
cover: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuiprogrammer.com%2Fassets%2Fimages%2Fslides%2Fui%2Fslide-5.jpg&refer=http%3A%2F%2Fuiprogrammer.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654957483&t=33ebe3a13fac654eac97d848127a8c3c
tags:
    - Node.js
    - 前端
categories:
  - [前端]
  - [Node.js]
---
## 3. path 路径模块
### 3.1 什么是 path 路径模块
path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理
需求。
例如：
+ path.join() 方法，用来将多个路径片段拼接成一个完整的路径字符串
+ path.basename() 方法，用来从路径字符串中，将文件名解析出来
如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如下的方式先导入它：
```
const path = require('path')
```
<!-- more -->
### 3.2 路径拼接
1. path.join() 的语法格式
使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：
```
path.join([ . . .paths])
```
参数解读：
+ ...paths <string> 路径片段的序列
+ 返回值: <string>
2. path.join() 的代码示例
```
const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)  // \a\b\d\e

fs.readFile(__dirname + '/files/1.txt')
```
使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串：
注意：今后凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理。不要直接使用 + 进行字符串的拼接。

### 3.3 获取路径中的文件名
1. path.basename() 的语法格式
使用 path.basename() 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：
```
path.basename(path[ , ext])
```
参数解读：
+ path <string> 必选参数，表示一个路径的字符串
+ ext <string> 可选参数，表示文件扩展名
+ 返回: <string> 表示路径中的最后一部分
2. path.basename() 的代码示例
使用 path.basename() 方法，可以从一个文件路径中，获取到文件的名称部分：
```
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)
```

### 3.4 获取路径中的文件扩展名
1. path.extname() 的语法格式
使用 path.extname() 方法，可以获取路径中的扩展名部分，语法格式如下：
```
path.extname(path)
```
参数解读：
+ path <string>必选参数，表示一个路径的字符串
+ 返回: <string> 返回得到的扩展名字符串
2. path.extname() 的代码示例
使用 path.extname() 方法，可以获取路径中的扩展名部分：
```
const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)
```

### 3.5 综合案例 - 时钟案例
1. 案例要实现的功能
将素材目录下的 index.html 页面，
拆分成三个文件，分别是：
+ index.css
+ index.js
+ index.html
并且将拆分出来的 3 个文件，存
放到 clock 目录中。
2. 案例的实现步骤
① 创建两个正则表达式，分别用来匹配 style 和 script 标签
② 使用 fs 模块，读取需要被处理的 HTML 文件
③ 自定义 resolveCSS 方法，来写入 index.css 样式文件
④ 自定义 resolveJS 方法，来写入 index.js 脚本文件
⑤ 自定义 resolveHTML 方法，来写入 index.html 文件
3. 步骤1 - 导入需要的模块并创建正则表达式
```
// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
```
3. 步骤2 - 使用 fs 模块读取需要被处理的 html 文件
```
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取HTML文件失败！' + err.message)
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})
```
3. 步骤3 – 自定义 resolveCSS 方法
```
// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
    if (err) return console.log('写入 CSS 样式失败！' + err.message)
    console.log('写入样式文件成功！')
  })
}
```
3. 步骤4 – 自定义 resolveJS 方法
```
// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则，提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr)
  // 4.3 将提取出来的内容，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
    console.log('写入 JS 脚本成功！')
  })
}
```
3. 步骤5 – 自定义 resolveHTML 方法
```
// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}
```
**4. 案例的两个注意点**
① fs.writeFile() 方法只能用来创建文件，不能用来创建路径
② 重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容
