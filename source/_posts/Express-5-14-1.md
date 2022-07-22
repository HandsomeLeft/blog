---
title: Express.5.14.1
date: 2022-05-14 13:24:17
cover: https://img0.baidu.com/it/u=4167579769,1935795913&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=249
tags:
    - Node.js
    - Express
    - 前端
categories:
  - [前端]
  - [Node.js]
  - [Express]
---

## 4. 使用 Express 写接口

### 4.1 创建基本的服务器
```
const express = require('express')
const app = express()
app.listen(80,()=>{
    console.log('服务器启动在http://127.0.0.1')
})
```
<!-- more -->

### 4.2 创建 API 路由模块
```
const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0 表示处理成功，1 表示处理失败
    msg: 'GET 请求成功！', // 状态的描述
    data: query, // 需要响应给客户端的数据
  })
})
```
4.3 编写 GET 接口
```
const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0 表示处理成功，1 表示处理失败
    msg: 'GET 请求成功！', // 状态的描述
    data: query, // 需要响应给客户端的数据
  })
})
```

### 4.5 CORS 跨域资源共享
1. 接口的跨域问题
刚才编写的 GET 和 POST接口，存在一个很严重的问题：不支持跨域请求。
解决接口跨域问题的方案主要有两种：
① CORS（主流的解决方案，推荐使用）
② JSONP（有缺陷的解决方案：只支持 GET 请求）
2. 使用 cors 中间件解决跨域问题
cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。
使用步骤分为如下 3 步：
① 运行 npm install cors 安装中间件
② 使用 const cors = require('cors') 导入中间件
③ 在路由之前调用 app.use(cors()) 配置中间件
3. 什么是 CORS
CORS （Cross-Origin Resource Sharing，跨域资源共享）由一系列 HTTP 响应头组成，这些 HTTP 响应头决定
浏览器是否阻止前端 JS 代码跨域获取资源。
浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器配置了 CORS 相关的 HTTP 响应头，
就可以解除浏览器端的跨域访问限制。
4. CORS 的注意事项
① CORS 主要在服务器端进行配置。客户端浏览器无须做任何额外的配置，即可请求开启了 CORS 的接口。
② CORS 在浏览器中有兼容性。只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了 CORS 的服
务端接口（例如：IE10+、Chrome4+、FireFox3.5+）。
