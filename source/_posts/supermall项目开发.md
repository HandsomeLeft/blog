---
title: supermall项目开发
date: 2022-05-02 18:48:30
cover: https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg
tags:
    - Vue.js
    - 前端
categories:
  - [项目开发]
  - [Vue.js]
---
### 1.划分目录结构
当你通过脚手架搭建完项目框架后，第一件需要做的就是划分目录结构，这是一个需要养成的良好习惯，通常我们只会在src文件夹里面划分。除了默认的components和assets文件夹我们需要添加network文件夹，在其中开发我们所有网络请求的代码；添加router文件夹，里面是我们和路由跳转相关的代码；添加store文件夹，在里面开发复杂组件间数据通讯的Vuex代码；添加views文件夹，这是