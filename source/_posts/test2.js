// const promise = new Promise((resolve, reject) => {
//     resolve()
// })

// const iterator = {
//   next: function () {
//     return { done: true, value: 123 };
//   },
// };

// const names = ["abc", "cba", "nba"];
// let index = 0;
// const name_iterater = {
//   next: function () {
//     if (index < names.length) {
//       return { done: false, value: names[index++] };
//     } else {
//       return { done: true, value: undefined };
//     }
//   },
// };

// console.log(name_iterater.next());
// console.log(name_iterater.next());
// console.log(name_iterater.next());
// console.log(name_iterater.next());
// console.log(name_iterater.next());

// console.log("----------------");

// const iterable_obj = {
//   names1: ["abc", "cba", "nba"],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.names1.length) {
//           return { done: false, value: this.names1[index++] };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//   },
// };

// const iterator1 = iterable_obj[Symbol.iterator]();

// console.log("bbb", iterator1);

// console.log(iterable_obj[Symbol.iterator]().next());
// console.log(iterable_obj[Symbol.iterator]().next());
// console.log(iterable_obj[Symbol.iterator]().next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());

// for (item of iterable_obj) {
//   console.log(item);
// }

// console.log("-----");
// const obj = {
//   namee: 1,
//   foo() {
//     console.log(this.namee);
//   },
// };
// obj.foo();

// function bar() {
//   let z = 001;
//   return {
//     bar1: () => {
//       console.log(this.z);
//     },
//   };
// }
// z=3
// const aa = bar();
// aa.bar1();
//箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。

//生成器函数
// function* foo() {
//   console.log('开始');

//   const n1 = 123
//   console.log(n1);
//   yield

//   const n2 = 234
//   console.log(n2);
//   yield
// }

// const generator = foo()
// generator.next()
// generator.next()
// generator.next()

// function* foo() {
//   console.log("开始");

//   const n1 = 123;
//   console.log(n1);
//   const n = yield n1;

//   const n2 = 234 * n;
//   console.log(n2);
//   yield n2;
// }

// const generator = foo();
// console.log(generator.next());
// console.log(generator.next(10));
// console.log(generator.next());

// function create_iterator(arr) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

// const arr = ["abc", "cba", "nba"];
// const arr_iterator = create_iterator(arr);
// console.log(arr_iterator.next());
// console.log(arr_iterator.next());
// console.log(arr_iterator.next());
// console.log(arr_iterator.next());

// function* create_iterator(arr) {
//   let index = 0;
//   for (const item of arr) {
//     yield item;
//   }
//   // yield arr[index++]
//   // yield arr[index++]
//   // yield arr[index++]
// }

// const arr = ["abc", "cba", "nba", "bbc"];
// const arr_iterator = create_iterator(arr);
// console.log(arr_iterator.next());
// console.log(arr_iterator.next());
// console.log(arr_iterator.next());
// console.log(arr_iterator.next());

// function quest(mes, handle1, handle2) {
//   if ((mes = "ceaser")) {
//     const message = "ceaser come on";
//     handle1(message);
//   } else {
//     handle2("err");
//   }
// }

// function request_data(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(url);
//     }, 2000);
//   });
// }

// function* get_data() {
//   const res1 = yield request_data("ceaser");
//   const res2 = yield request_data(res1 + "bbb");
//   const res3 = yield request_data(res2 + "ccc");
//   console.log(res3);
// }

// const generator = get_data();
// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       generator.next(res)
//     })
//   });
// });

// async function get_data() {
//   const res1 = await request_data("ceaser");
//   const res2 = await request_data(res1 + "bbb");
//   const res3 = await request_data(res2 + "ccc");
//   console.log(res3);
// }
// get_data();


// async function foo() {
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ceaser");
//     },5000)
//   })
//   console.log('后面的代码');
// }

// foo()

// let foo = ['abc','cba','bba']
// const iterator = foo[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function foo(){
    var bar = 0
}
foo()
console.log(bar);