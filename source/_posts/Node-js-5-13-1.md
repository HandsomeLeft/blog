---
title: Node.js.5.13.1
date: 2022-05-13 20:21:23
cover: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuiprogrammer.com%2Fassets%2Fimages%2Fslides%2Fui%2Fslide-5.jpg&refer=http%3A%2F%2Fuiprogrammer.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654957483&t=33ebe3a13fac654eac97d848127a8c3c
tags:
    - Node.js
    - 前端
categories:
  - [前端]
  - [Node.js]
---
## 1. 模块化的基本概念

### 1.1 什么是模块化
1. 现实生活中的模块化
2. 编程领域中的模块化
编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。
把代码进行模块化拆分的好处：
① 提高了代码的复用性
② 提高了代码的可维护性
③ 可以实现按需加载
<!-- more -->

### 1.2 模块化规范
模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。
例如：
+ 使用什么样的语法格式来引用模块
+ 在模块中使用什么样的语法格式向外暴露成员
模块化规范的好处：大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，
利人利己。
---
## 2. Node.js 中的模块化

### 2.1 Node.js 中模块的分类
Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：
+ 内置模块（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）
+ 自定义模块（用户创建的每个 .js 文件，都是自定义模块）
+ 第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）

## 2.2 加载模块
使用强大的 require() 方法，可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。例如：
```
// 1．加载内置的fs 模块
const fs = require( "fs ')
// 2．加载用户的自定义模块
const custom = require( ' ./ custom.js ')
// 3.加载第三方模块(关于第三方模块的下载和使用，会在后面的课程中进行专门 的讲解)
const moment = require( " moment ' )
```
注意：使用 require() 方法加载其它模块时，会执行被加载模块中的代码。

### 2.3 Node.js 中的模块作用域
1. 什么是模块作用域
和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块
作用域。
2. 模块作用域的好处
防止了全局变量污染的问题

### 2.4 向外共享模块作用域中的成员
1. module 对象
在每个 .js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息，打印如下：
---
Module {
  id: '.',
  path: 'C:\\Users\\ceaser\\Desktop\\up_station\\node.js—资料\\day2\\code',
  exports: {},
  filename: 'C:\\Users\\ceaser\\Desktop\\up_station\\node.js—资料\\day2\\code\\10.演示module对象.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\ceaser\\Desktop\\up_station\\node.js—资料\\day2\\code\\node_modules',
    'C:\\Users\\ceaser\\Desktop\\up_station\\node.js—资料\\day2\\node_modules',
    'C:\\Users\\ceaser\\Desktop\\up_station\\node.js—资料\\node_modules',
    'C:\\Users\\ceaser\\Desktop\\up_station\\node_modules',
    'C:\\Users\\ceaser\\Desktop\\node_modules',
    'C:\\Users\\ceaser\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
---
2. module.exports 对象
在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象
3. 共享成员时的注意点
使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。
```
// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)

const username = 'zs'

module.exports.username = username
exports.age = 20
exports.sayHello = function() {
  console.log('大家好！')
}

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
```
4. exports 对象
由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。默认情况
下，exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准。
4. exports 和 module.exports 的使用误区
时刻谨记，require() 模块时，得到的永远是 module.exports 指向的对象
---

## 3. npm与包

### 3.1 包
1. 什么是包
Node.js 中的第三方模块又叫做包。
就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同。
2. 包的来源
不同于 Node.js 中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，免费供所有人使用。
注意：Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用。
3. 为什么需要包
由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低。
包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率。
包和内置模块之间的关系，类似于 jQuery 和 浏览器内置 API 之间的关系。
4. 从哪里下载包
国外有一家 IT 公司，叫做 npm, Inc. 这家公司旗下有一个非常著名的网站： https://www.npmjs.com/ ，它是全球最
大的包共享平台，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心！
到目前位置，全球约 1100 多万的开发人员，通过这个包共享平台，开发并共享了超过 120 多万个包 供我们使用。
npm, Inc. 公司提供了一个地址为 https://registry.npmjs.org/ 的服务器，来对外共享所有的包，我们可以从这个服务
器上下载自己所需要的包。
注意：
+ 从 https://www.npmjs.com/ 网站上搜索自己所需要的包
+ 从 https://registry.npmjs.org/ 服务器上下载自己需要的包
5. 如何下载包
npm, Inc. 公司提供了一个包管理工具，我们可以使用这个包管理工具，从 https://registry.npmjs.org/ 服务器把需要
的包下载到本地使用。
这个包管理工具的名字叫做 Node Package Manager（简称 npm 包管理工具），这个包管理工具随着 Node.js 的安
装包一起被安装到了用户的电脑上。
大家可以在终端中执行 npm -v 命令，来查看自己电脑上所安装的 npm 包管理工具的版本号：

### 3.2 npm 初体验
1. 格式化时间的传统做法
① 创建格式化时间的自定义模块
② 定义格式化时间的方法
③ 创建补零函数
④ 从自定义模块中导出格式化时间的函数
⑤ 导入格式化时间的自定义模块
⑥ 调用格式化时间的函数
```
// 1. 定义格式化时间的方法
function dateFormat(dtStr) {
  const dt = new Date(dtStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义补零的函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}

const TIME = require('./15.dateFormat')

// 调用方法，进行时间的格式化
const dt = new Date()
// console.log(dt)
const newDT = TIME.dateFormat(dt)
console.log(newDT)
```
2. 格式化时间的高级做法
① 使用 npm 包管理工具，在项目中安装格式化时间的包 moment
② 使用 require() 导入格式化时间的包
③ 参考 moment 的官方 API 文档对时间进行格式化
```
// 1. 导入需要的包
// 注意：导入的名称，就是装包时候的名称
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)
```
4. 初次装包后多了哪些文件
初次装包完成后，在项目文件夹下多一个叫做 node_modules 的文件夹和 package-lock.json 的配置文件。
其中：
node_modules 文件夹用来存放所有已安装到项目中的包。require() 导入第三方包时，就是从这个目录中查找并加载包。
package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。
注意：程序员不要手动修改 node_modules 或 package-lock.json 文件中的任何代码，npm 包管理工具会自动维护它们。
5. 安装指定版本的包
默认情况下，使用 npm install 命令安装包的时候，会自动安装最新版本的包。如果需要安装指定版本的包，可以在包
名之后，通过 @ 符号指定具体的版本，例如：
6. 包的语义化版本规范
包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0
其中每一位数字所代表的的含义如下：
第1位数字：大版本
第2位数字：功能版本
第3位数字：Bug修复版本
版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零。

### 3.3 包管理配置文件
npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。用来记录与项目有关的一些配置
信息。例如：
+ 项目的名称、版本号、描述等
+ 项目中都用到了哪些包
+ 哪些包只在开发期间会用到
+ 那些包在开发和部署时都需要用到
1. 多人协作的问题
整个项目的体积是 30.4M
第三方包的体积是 28.8M
项目源代码的体积 1.6M
遇到的问题：第三方包的体积过大，不
方便团队成员之间共享项目源代码。
解决方案：共享时剔除node_module
2. 如何记录项目中安装了哪些包
在项目根目录中，创建一个叫做 package.json 的配置文件，即可用来记录项目中安装了哪些包。从而方便剔除
node_modules 目录之后，在团队成员之间共享项目的源代码。
注意：今后在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中。
3. 快速创建 package.json
npm 包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建 package.json 这个包管理
配置文件：
npm init -y
注意：
① 上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。
② 运行 npm install 命令安装包的时候，npm 包管理工具会自动把包的名称和版本号，记录到 package.json 中。
4. dependencies 节点
package.json 文件中，有一个 dependencies 节点，专门用来记录您使用 npm install 
命令安装了哪些包。
5. 一次性安装所有的包
当我们拿到一个剔除了 node_modules 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。
否则会报类似于下面的错误：
5. 一次性安装所有的包
可以运行 npm install 命令（或 npm i）一次性安装所有的依赖包：
6. 卸载包
可以运行 npm uninstall 命令，来卸载指定的包：
注意：npm uninstall 命令执行成功后，会把卸载的包，自动从 package.json 的 dependencies 中移除掉。
7. devDependencies 节点
如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到 devDependencies 节点中。
与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。
您可以使用如下的命令，将包记录到 devDependencies 节点中：

### 3.5 包的分类
1. 项目包
那些被安装到项目的 node_modules 目录中的包，都是项目包。
项目包又分为两类，分别是：
+ 开发依赖包（被记录到 devDependencies 节点中的包，只在开发期间会用到）
+ 核心依赖包（被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到）
2. 全局包
在执行 npm install 命令时，如果提供了 -g 参数，则会把包安装为全局包。
全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules 目录下。
注意：
① 只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令。
② 判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可。

### 3.6 规范的包结构
在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构。
一个规范的包，它的组成结构，必须符合以下 3 点要求：
① 包必须以单独的目录而存在
② 包的顶级目录下要必须包含 package.json 这个包管理配置文件
③ package.json 中必须包含 name，version，main 这三个属性，分别代表包的名字、版本号、包的入口。
注意：以上 3 点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：
https://yarnpkg.com/zh-Hans/docs/package-json
