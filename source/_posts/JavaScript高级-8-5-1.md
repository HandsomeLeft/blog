---
title: JavaScript高级.8.5.1
date: 2022-08-05 19:52:37
cover: https://img2.baidu.com/it/u=557819644,2340142626&fm=253&fmt=auto&a=138&f=JEG?w=1000&h=500
tags:
  - ES6
  - 前端
categories:
  - [前端]
  - [ES6]
---

## async-await-js 线程

```javascript
async function foo() {
  console.log("begin");
  console.log("middle");
  console.log("end");
}

//async函数的返回值一定是一个promise

const promise = foo();

promise.then((res) => {
  console.log(res); //因为foo函数没写返回值，默认就是返回一个undefined
});
```

### async 中使用 await 关键字

```javascript
function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(222);
    }, 2000);
  });
}

async function foo() {
  //await后面一般是返回一个表达式这个表达式一定要返回一个promise
  //await函数的返回值一定是这个对应的promise resolve后的结果
  const res = await request();
  console.log(res);
}
```

```javascript
function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("err");
    }, 2000);
  });
}

async function bar() {
  const res1 = await request();
}
bar().catch((err) => {
  console.log(err);
});
```

### 复习 promise

1、then 方法本身也是有返回值的，它的返回值是 promise
如果返回的是一个普通值，那么这个普通的值被作为一个新的 promise 的 resolve 值

<!-- more -->

```javascript
promise
  .then((res) => {
    return "aaaaa"; //这里aaaaa会被promise包裹，作为resolve的值，会返回一个promise
  })
  .then((res) => {
    //这里是新的promise对应的then
    //如果没有返回值，那么其实也会返回undefined，也能生成一个promise
  });
```

2、如果返回一个 promise
那么 promise 由传入的这个 promise 决定

```javascript
promise
  .then((res) => {
    return 111;
  })
  .catch((err) => {});
```

注意这个 catch 还是指向的是第一个 promise，但是如果第一个 promise 没异常，其实还是会指向第二个 promise

.finally()没有参数，但不管怎么样一定会被执行

### 复习迭代器和生成器

```javascript
const names = ["abc", "cba", "nba"];
let index = 0;
const name_iterater = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: false, value: undefined };
    }
  },
};

console.log(name_iterater.next());
console.log(name_iterater.next());
console.log(name_iterater.next());
console.log(name_iterater.next());
console.log(name_iterater.next());
```

将 names，index，和迭代器放在同一个对象中，就叫可迭代对象

```javascript
const iterable_obj = {
  names: ["abc", "cba", "nba"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: false, value: undefined };
        }
      },
    };
  },
};

const iterator1 = iterable_obj[Symbol.iterator]();

console.log("bbb", iterator1);

console.log(iterable_obj[Symbol.iterator]().next());
console.log(iterable_obj[Symbol.iterator]().next());
console.log(iterable_obj[Symbol.iterator]().next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
```

for of 只能遍历可迭代对象
**_箭头函数体内的 this 对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。该函数所在的作用域指向的对象_**

只要是可迭代对象就可以 for of ，展开语法，解构赋值

但是对象也可以展开语法，解构赋值，但是这是在 es9 中新增的特性，实现原理不是迭代器

### 生成器

生成器也是一个函数，实现了控制函数暂停执行 11

```javascript
//生成器函数
function* foo() {
  console.log("开始");

  const n1 = 123;
  console.log(n1);
  yield;

  const n2 = 234;
  console.log(n2);
  yield;
}

const generator = foo();
generator.next();
generator.next();
```

在生成器函数中，return 是特殊的 yield,后面的语句也不会执行
next 方法也可以传递参数

```javascript
function* foo() {
  console.log("开始");

  const n1 = 123;
  console.log(n1);
  const n = yield n1;

  const n2 = 234 * n;
  console.log(n2);
  yield n2;
}

const generator = foo();
console.log(generator.next());
console.log(generator.next(10));
console.log(generator.next());
```

### 用生成器的用法写迭代器

//迭代器

```javascript
function create_iterator(err) {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}

const arr = ["abc", "cba", "nba"];
const arr_iterator = create_iterator(arr);
console.log(arr_iterator.next());
console.log(arr_iterator.next());
console.log(arr_iterator.next());
console.log(arr_iterator.next());
```

**迭代器是一个对象，里面有一个 next 函数**

```javascript
function* create_iterator(arr) {
  let index = 0;
  for (const item of arr) {
    yield item;
  }
  // yield arr[index++]
  // yield arr[index++]
  // yield arr[index++]
}

const arr = ["abc", "cba", "nba", "bbc"];
const arr_iterator = create_iterator(arr);
console.log(arr_iterator.next());
console.log(arr_iterator.next());
console.log(arr_iterator.next());
console.log(arr_iterator.next());
```

### 异步代码的处理方案

```javascript
function quest(mes, handle1, handle2) {
  if ((mes = "ceaser")) {
    const message = "ceaser come on";
    handle1(message);
  } else {
    handle2("err");
  }
}
```

高级方案

```javascript
function request_data(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}

function* get_data() {
  const res1 = yield request_data("ceaser");
  const res2 = yield request_data(res1 + "bbb");
  const res3 = yield request_data(res2 + "ccc");
  console.log(res3);
}

const generator = get_data();
generator.next().value.then((res) => {
  generator.next(res).value.then((res) => {
    generator.next(res).value.then((res) => {
      generator.next(res);
    });
  });
});
```

终极方案

```javascript
function request_data(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}
async function get_data() {
  const res1 = await request_data("ceaser");
  const res2 = await request_data(res1 + "bbb");
  const res3 = await request_data(res2 + "ccc");
  console.log(res3);
}
get_data();
```
