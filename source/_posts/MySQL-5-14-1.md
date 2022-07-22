---
title: MySQL.5.14.1
date: 2022-05-14 13:47:10
cover: https://img2.baidu.com/it/u=458110348,3069595978&fm=253&fmt=auto&app=138&f=PNG?w=950&h=500
tags:
    - Node.js
    - 数据库
    - 前端
categories:
  - [前端]
  - [Node.js]
  - [数据库]
---
## 1. 数据库的基本概念
### 1.1 什么是数据库
数据库（database）是用来组织、存储和管理数据的仓库。
当今世界是一个充满着数据的互联网世界，充斥着大量的数据。数据的来源有很多，比如出行记录、消费记录、
浏览的网页、发送的消息等等。除了文本类型的数据，图像、音乐、声音都是数据。
为了方便管理互联网世界中的数据，就有了数据库管理系统的概念（简称：数据库）。用户可以对数据库中的数
据进行新增、查询、更新、删除等操作。
<!-- more -->

### 1.2 常见的数据库及分类
市面上的数据库有很多种，最常见的数据库有如下几个：
+ MySQL 数据库（目前使用最广泛、流行度最高的开源免费数据库；Community + Enterprise）
+ Oracle 数据库（收费）
+ SQL Server 数据库（收费）
+ Mongodb 数据库（Community + Enterprise）
其中，MySQL、Oracle、SQL Server 属于传统型数据库（又叫做：关系型数据库 或 SQL 数据库），这三者的
设计理念相同，用法比较类似。
而 Mongodb 属于新型数据库（又叫做：非关系型数据库 或 NoSQL 数据库），它在一定程度上弥补了传统型
数据库的缺陷。

### 1.3 传统型数据库的数据组织结构
数据的组织结构：指的就是数据以什么样的结构进行存储。
传统型数据库的数据组织结构，与 Excel 中数据的组织结构
比较类似。
因此，我们可以对比着 Excel 来了解和学习传统型数据库的
数据组织结构。
1. Excel 的数据组织结构
每个 Excel 中，数据的组织结构分别为工作簿、工作表、数据行、列这 4 大部分组成。
① 整个 Excel 叫做工作簿
② users 和 books 是工作表
③ users 工作表中有 3 行数据
④ 每行数据由 6 列信息组成
⑤ 每列信息都有对应的数据类型
2. 传统型数据库的数据组织结构
在传统型数据库中，数据的组织结构分为数据库(database)、数据表(table)、数据行(row)、字段(field)这 4 大部分组成。
① 数据库类似于 Excel 的工作簿
② 数据表类似于 Excel 的工作表
③ 数据行类似于 Excel 的每一行数据
④ 字段类似于 Excel 的列
⑤ 每个字段都有对应的数据类型
3. 实际开发中库、表、行、字段的关系
① 在实际项目开发中，一般情况下，每个项目都对应独立的数据库。
② 不同的数据，要存储到数据库的不同表中，例如：用户数据存储到 users 表中，图书数据存储到 books 表中。
③ 每个表中具体存储哪些信息，由字段来决定，例如：我们可以为 users 表设计 id、username、password 这 3 个
字段。
④ 表中的行，代表每一条具体的数据。
---

## 2. 安装并配置 MySQL

### 2.2 MySQL 在 Mac 环境下的安装
在 Mac 环境下安装 MySQL 的过程比 Windows 环境下的步骤简单很多：
① 先运行 mysql-8.0.19-macos10.15-x86_64.dmg 这个安装包，将 MySQL Server 安装到 Mac 系统
② 再运行 mysql-workbench-community-8.0.19-macos-x86_64.dmg 这个安装包，将可视化的 MySQL 
Workbench 工具安装到 Mac 系统
具体的安装教程，可以参考 素材 -> MySQL for Mac ->安装教程 - Mac系统安装MySql -> README.md

### 2.3 MySQL 在 Windows 环境下的安装
在 Windows 环境下安装 MySQL，只需要运行 mysql-installer-community-8.0.19.0.msi 这个安装包，就能一次
性将 MySQL Server  和 MySQL Workbench 安装到自己的电脑上。
具体的安装教程，可以参考 素材 -> MySQL for Windows ->安装教程 - Windows系统安装MySql -> README.md 

### 3.1 使用 MySQL Workbench 管理数据库
1. 连接数据库
3. 创建数据库
4. 创建数据表
DataType 数据类型：
① int 整数
② varchar(len) 字符串
③ tinyint(1) 布尔值
字段的特殊标识：
① PK（Primary Key）主键、唯一标识
② NN（Not Null）值不允许为空
③ UQ（Unique）值唯一
④ AI（Auto Increment）值自动增长
5. 向表中写入数据

### 3.2 使用 SQL 管理数据库
1. 什么是 SQL
SQL（英文全称：Structured Query Language）是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让
我们以编程的形式，操作数据库里面的数据。
三个关键点：
① SQL 是一门数据库编程语言
② 使用 SQL 语言编写出来的代码，叫做 SQL 语句
③ SQL 语言只能在关系型数据库中使用（例如 MySQL、Oracle、SQL Server）。非关系型数据库（例如 Mongodb）
不支持 SQL 语言
2. SQL 能做什么
① 从数据库中查询数据
② 向数据库中插入新的数据
③ 更新数据库中的数据
④ 从数据库删除数据
⑤ 可以创建新数据库
⑥ 可在数据库中创建新表
⑦ 可在数据库中创建存储过程、视图
⑧ etc...
3. SQL 的学习目标
重点掌握如何使用 SQL 从数据表中：
查询数据（select） 、插入数据（insert into） 、更新数据（update） 、删除数据（delete）
额外需要掌握的 4 种 SQL 语法：
where 条件、and 和 or 运算符、order by 排序、count(*) 函数
1. 语法
SELECT 语句用于从表中查询数据。执行的结果被存储在一个结果表中（称为结果集）。语法格式如下：
注意：SQL 语句中的关键字对大小写不敏感。SELECT 等效于 select，FROM 等效于 from。
2. SELECT * 示例
我们希望从 users 表中选取所有的列，可以使用符号 * 取代列的名称，示例如下：
3. SELECT 列名称 示例
如需获取名为 "username" 和 "password" 的列的内容（从名为 "users" 的数据库表），请使用下面的 SELECT 语句：
```
select username,password from my_dm_01.users
```

### 3.4 SQL 的 INSERT INTO 语句
1. 语法
INSERT INTO 语句用于向数据表中插入新的数据行，语法格式如下：
```
insert into my_dm_01.users (username,password) values ('sada','1314215')
```
2. UPDATE 示例 - 更新某一行中的一个列
把 users 表中 id 为 7 的用户密码，更新为 888888。示例如下：

```
update my_dm_01.users set password='88888888' where id=4
```
3. UPDATE 示例 - 更新某一行中的若干列
把 users 表中 id 为 2 的用户密码和用户状态，分别更新为 admin123 和 1。示例如下：
```
update my_dm_01.users set password='88888888',status='0' where id=4
```
2. DELETE 示例
从 users 表中，删除 id 为 4 的用户，示例如下：
```
delete from my_dm_01.users where id =4
```

### 3.7 SQL 的 WHERE 子句
1. 语法
WHERE 子句用于限定选择的标准。在 SELECT、UPDATE、DELETE 语句中，皆可使用 WHERE 子句来限定选择的标准。
```
-- 演示 where 子句的使用
-- select * from users where status=1
-- select * from users where id>=2
-- select * from users where username<>'ls'
-- select * from users where username!='ls'
```

### 3.8 SQL 的 AND 和 OR 运算符
1. 语法
AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来。
AND 表示必须同时满足多个条件，相当于 JavaScript 中的 && 运算符，例如 if (a !== 10 && a !== 20)
OR 表示只要满足任意一个条件即可，相当于 JavaScript 中的 || 运算符，例如 if(a !== 10 || a !== 20)
2. AND 运算符示例
使用 AND 来显示所有 status 为 0，并且 id 小于 3 的用户：
```
-- 使用 AND 来显示所有状态为0且id小于3的用户
-- select * from users where status=0 and id<3
```
2. OR 运算符示例
使用 OR 来显示所有 status 为 1，或者 username 为 zs 的用户：
```
-- 使用 or 来显示所有状态为1 或 username 为 zs 的用户
-- select * from users where status=1 or username='zs'
```

### 3.9 SQL 的 ORDER BY 子句
1. 语法
ORDER BY 语句用于根据指定的列对结果集进行排序。
ORDER BY 语句默认按照升序对记录进行排序。
如果您希望按照降序对记录进行排序，可以使用 DESC 关键字。
2. ORDER BY 子句 - 升序排序
对 users 表中的数据，按照 status 字段进行升序排序，示例如下：
```
-- 对users表中的数据，按照 status 字段进行升序排序
-- select * from users order by status
```
3. ORDER BY 子句 – 降序排序
对 users 表中的数据，按照 id 字段进行降序排序，示例如下：
```
-- 按照 id 对结果进行降序的排序  desc 表示降序排序   asc 表示升序排序（默认情况下，就是升序排序的）
-- select * from users order by id desc
```
4. ORDER BY 子句 – 多重排序
对 users 表中的数据，先按照 status 字段进行降序排序，再按照 username 的字母顺序，进行升序排序，示例如下：
```
-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序
-- select * from users order by status desc, username asc
```

### 3.10 SQL 的 COUNT(*) 函数
1. 语法
COUNT(*) 函数用于返回查询结果的总数据条数，语法格式如下：
2. COUNT(*) 示例
查询 users 表中 status 为 0 的总数据条数：
```
-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量
-- select count(*) from users where status=0
```
2. 使用 AS 为列设置别名
如果希望给查询出来的列名称设置别名，可以使用 AS 关键字，示例如下：
```
-- 使用 AS 关键字给列起别名
-- select count(*) as total from users where status=0
-- select username as uname, password as upwd from users
```
---

## 4. 在项目中操作 MySQL

### 4.1 在项目中操作数据库的步骤
① 安装操作 MySQL 数据库的第三方模块（mysql）
② 通过 mysql 模块连接到 MySQL 数据库
③ 通过 mysql 模块执行 SQL 语句

### 4.2 安装与配置 mysql 模块
1. 安装 mysql 模块
mysql 模块是托管于 npm 上的第三方模块。它提供了在 Node.js 项目中连接和操作 MySQL 数据库的能力。
想要在项目中使用它，需要先运行如下命令，将 mysql 安装为项目的依赖包：
```
npm install mysql
```
2. 配置 mysql 模块
在使用 mysql 模块操作 MySQL 数据库之前，必须先对 mysql 模块进行必要的配置，主要的配置步骤如下：
```
cosnt mysql = require('mysql')
const db = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_dm_01'
})
```
3. 测试 mysql 模块能否正常工作
调用 db.query() 函数，指定要执行的 SQL 语句，通过回调函数拿到执行的结果：
```
// 测试 mysql 模块能否正常工作
db.query('select 1', (err, results) => {
  //mysql 模块工作期间报错了
  if(err) return console.log(err.message)
  //能够成功的执行 SQL 语句
  console.log(results)
}) 
```

### 4.3 使用 mysql 模块操作 MySQL 数据库
1. 查询数据
查询 users 表中所有的数据：
```
// 查询 users 表中所有的数据
/* const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
  // 查询数据失败
  if (err) return console.log(err.message)
  // 查询数据成功
  // 注意：如果执行的是 select 查询语句，则执行的结果是数组
  console.log(results)
}) */
```
2. 插入数据
向 users 表中新增数据， 其中 username 为 Spider-Man，password 为 pcc321。示例代码如下：
```
// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123
/* const user = { username: 'Spider-Man', password: 'pcc123' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 执行 SQL 语句失败了
  if (err) return console.log(err.message)
  // 成功了
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log('插入数据成功!')
  }
}) */
```
3. 插入数据的便捷方式
向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
```
// 演示插入数据的便捷方式
/* const user = { username: 'Spider-Man2', password: 'pcc4321' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users set ?'
// 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  }
}) */
```
4. 更新数据
可以通过如下方式，更新表中的数据：
```
// 演示如何更新用户的信息
/* const user = { id: 6, username: 'aaa', password: '000' }
// 定义 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
  if (results.affectedRows === 1) {
    console.log('更新成功')
  }
}) */
```
5. 更新数据的便捷方式
更新表数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速更新表数据：
```
// 演示更新数据的便捷方式
/* const user = { id: 6, username: 'aaaa', password: '0000' }
// 定义 SQL 语句
const sqlStr = 'update users set ? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('更新数据成功')
  }
}) */
```
6. 删除数据
在删除数据时，推荐根据 id 这样的唯一标识，来删除对应的数据。示例如下：
```
// 删除 id 为 5 的用户
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
  if (results.affectedRows === 1) {
    console.log('删除数据成功')
  }
}) */
```
7. 标记删除
使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除。
当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删除掉，而是执行了 UPDATE 语句，将这条数据对应
的 status 字段标记为删除即可。
```
// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
```
---

## 5. 前后端的身份认证

### 5.1 Web 开发模式
目前主流的 Web 开发模式有两种，分别是：
① 基于服务端渲染的传统 Web 开发模式
② 基于前后端分离的新型 Web 开发模式
1. 服务端渲染的 Web 开发模式
服务端渲染的概念：服务器发送给客户端的 HTML 页面，是在服务器通过字符串的拼接，动态生成的。因此，客户端不
需要使用 Ajax 这样的技术额外请求页面的数据。代码示例如下：
2. 服务端渲染的优缺点
优点：
① 前端耗时少。因为服务器端负责动态生成 HTML 内容，浏览器只需要直接渲染页面即可。尤其是移动端，更省电。
② 有利于SEO。因为服务器端响应的是完整的 HTML 页面内容，所以爬虫更容易爬取获得信息，更有利于 SEO。
缺点：
① 占用服务器端资源。即服务器端完成 HTML 页面内容的拼接，如果请求较多，会对服务器造成一定的访问压力。
② 不利于前后端分离，开发效率低。使用服务器端渲染，则无法进行分工合作，尤其对于前端复杂度高的项目，不利于
项目高效开发。
3. 前后端分离的 Web 开发模式
前后端分离的概念：前后端分离的开发模式，依赖于 Ajax 技术的广泛应用。简而言之，前后端分离的 Web 开发模式，
就是后端只负责提供 API 接口，前端使用 Ajax 调用接口的开发模式。
4. 前后端分离的优缺点
优点：
① 开发体验好。前端专注于 UI 页面的开发，后端专注于api 的开发，且前端有更多的选择性。
② 用户体验好。Ajax 技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新。
③ 减轻了服务器端的渲染压力。因为页面最终是在每个用户的浏览器中生成的。
缺点：
① 不利于 SEO。因为完整的 HTML 页面需要在客户端动态拼接完成，所以爬虫对无法爬取页面的有效信息。（解决方
案：利用 Vue、React 等前端框架的 SSR （server side render）技术能够很好的解决 SEO 问题！）
5. 如何选择 Web 开发模式
不谈业务场景而盲目选择使用何种开发模式都是耍流氓。
+ 比如企业级网站，主要功能是展示而没有复杂的交互，并且需要良好的 SEO，则这时我们就需要使用服务器端渲染；
+ 而类似后台管理项目，交互性比较强，不需要考虑 SEO，那么就可以使用前后端分离的开发模式。
另外，具体使用何种开发模式并不是绝对的，为了同时兼顾了首页的渲染速度和前后端分离的开发效率，一些网站采用了
首屏服务器端渲染 + 其他页面前后端分离的开发模式。

### 5.2 身份认证
1. 什么是身份认证
身份认证（Authentication）又称“身份验证”、“鉴权”，是指通过一定的手段，完成对用户身份的确认。
+ 日常生活中的身份认证随处可见，例如：高铁的验票乘车，手机的密码或指纹解锁，支付宝或微信的支付密码等。
+ 在 Web 开发中，也涉及到用户身份的认证，例如：各大网站的手机验证码登录、邮箱密码登录、二维码登录等。
2. 为什么需要身份认证
身份认证的目的，是为了确认当前所声称为某种身份的用户，确实是所声称的用户。例如，你去找快递员取快递，你要怎
么证明这份快递是你的。
在互联网项目开发中，如何对用户的身份进行认证，是一个值得深入探讨的问题。例如，如何才能保证网站不会错误的将
“马云的存款数额”显示到“马化腾的账户”上。
3. 不同开发模式下的身份认证
对于服务端渲染和前后端分离这两种开发模式来说，分别有着不同的身份认证方案：
① 服务端渲染推荐使用 Session 认证机制
② 前后端分离推荐使用 JWT 认证机制

### 5.3 Session 认证机制
1. HTTP 协议的无状态性
了解 HTTP 协议的无状态性是进一步学习 Session 认证机制的必要前提。
HTTP 协议的无状态性，指的是客户端的每次 HTTP 请求都是独立的，连续多个请求之间没有直接的关系，服务器不会
主动保留每次 HTTP 请求的状态。
2. 如何突破 HTTP 无状态的限制
对于超市来说，为了方便收银员在进行结算时给 VIP 用户打折，超市可以为每个 VIP 用户发放会员卡。
注意：现实生活中的会员卡身份认证方式，在 Web 开发中的专业术语叫做 Cookie。
3. 什么是 Cookie
Cookie 是存储在用户浏览器中的一段不超过 4 KB 的字符串。它由一个名称（Name）、一个值（Value）和其它几个用
于控制 Cookie 有效期、安全性、使用范围的可选属性组成。
不同域名下的 Cookie 各自独立，每当客户端发起请求时，会自动把当前域名下所有未过期的 Cookie 一同发送到服务器。
Cookie的几大特性：
① 自动发送
② 域名独立
③ 过期时限
④ 4KB 限制
4. Cookie 在身份认证中的作用
客户端第一次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的 Cookie，客户端会自动
将 Cookie 保存在浏览器中。
随后，当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的 Cookie，通过请求头的形式发送给
服务器，服务器即可验明客户端的身份。
5. Cookie 不具有安全性
由于 Cookie 是存储在浏览器中的，而且浏览器也提供了读写 Cookie 的 API，因此 Cookie 很容易被伪造，不具有安全
性。因此不建议服务器将重要的隐私数据，通过 Cookie 的形式发送给浏览器。
注意：千万不要使用 Cookie 存储重要且隐私的数据！比如用户的身份信息、密码等。
6. 提高身份认证的安全性
为了防止客户伪造会员卡，收银员在拿到客户出示的会员卡之后，可以在收银机上进行刷卡认证。只有收银机确认存在的
会员卡，才能被正常使用。
这种“会员卡 + 刷卡认证”的设计理念，就是 Session 认证机制的精髓。

### 5.5 JWT 认证机制
1. 了解 Session 认证的局限性
Session 认证机制需要配合 Cookie 才能实现。由于 Cookie 默认不支持跨域访问，所以，当涉及到前端跨域请求后端接
口的时候，需要做很多额外的配置，才能实现跨域 Session 认证。
注意：
+ 当前端请求后端接口不存在跨域问题的时候，推荐使用 Session 身份认证机制。
+ 当前端需要跨域请求后端接口的时候，不推荐使用 Session 身份认证机制，推荐使用 JWT 认证机制。
2. 什么是 JWT
JWT（英文全称：JSON Web Token）是目前最流行的跨域认证解决方案。
3. JWT 的工作原理
总结：用户的信息通过 Token 字符串的形式，保存在客户端浏览器中。服务器通过还原 Token 字符串的形式来认证用户的身份。
4. JWT 的组成部分
JWT 通常由三部分组成，分别是 Header（头部）、Payload（有效荷载）、Signature（签名）。
三者之间使用英文的“.”分隔，格式如下：
6. JWT 的三个部分各自代表的含义
JWT 的三个组成部分，从前到后分别是 Header、Payload、Signature。
其中：
+ Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
+ Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。
7. JWT 的使用方式
客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中。
此后，客户端每次与服务器通信，都要带上这个 JWT 的字符串，从而进行身份认证。推荐的做法是把 JWT 放在 HTTP 
请求头的 Authorization 字段中，格式如下：

### 5.6 在 Express 中使用 JWT
1. 安装 JWT 相关的包
运行如下命令，安装如下两个 JWT 相关的包：
其中：
+ jsonwebtoken 用于生成 JWT 字符串
+ express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
