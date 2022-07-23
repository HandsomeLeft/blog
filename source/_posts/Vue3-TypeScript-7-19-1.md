---
title: Vue3+TypeScript.7.19.1
date: 2022-07-19 20:43:41
cover: https://img2.baidu.com/it/u=3648235042,1573336415&fm=253&fmt=auto&app=138&f=PNG?w=888&h=500
tags:
    - TypeScript
    - 前端
    - Vue
categories:
  - [前端]
  - TypeScript
---

## 计算属性-watch-综合案例

浅拷贝，深拷贝用json方法和lodash库可以解决
v-model使用v:bind和@input可以实现

子传父利用 子emit一个事件，然后父@该事件就可以了

### 变量的定义
number
```typescript
let num: number = 123
num = 222

let num2: number = 0b111 //二进制
let num3: number = 0o456//八进制
```

boolean
```typescript
let flag: boolean = true
flag = 20>30
```

string
```typescript
let message: string = 'hello TS'
const name = 'ceaser'
```

array
**确定一个事实：names是一个数组类型，但是数组中存放的是什么类型的元素喃？**
```typescript
const names: Array<string> = [] //这种写法不推荐 jsx有冲突
const names2: string[] = []
```

object
```typescript
const obj = {
  name: 'ceaser',
  age: 21
}
console.log(obj.name);
```

undefined+null
```typescript
let n1: null = null
let n2: undefined = undefined
```

any
```typescript
let measssage: any = 'hello world'
measssage = 123
message = true
```

void
```typescript
function foo(num1:number): void {
  console.log(num1);
  //当一个函数没有返回值的时候，这个函数就是void类型，这个也可以不写
}
```

never
```typescript
function foo():never {
  while(true){

  }
  //表示永远不会发生值的类型，当一个函数永远不会有返回值，或者处于死循环，或者不等于任何值
  应用场景,让一个函数可以再增加参数的时候，提醒必须根据这个参数去写对应函数

}
```

tuple(元组)
```typescript
//允许多种元素的组合
const info: [string,number,number] = ['why',21,18]
```

函数类型:(new_state: any) => void

对象类型&可选类型
```typescript
function bar(obj:{x:number,y:string,z?:number}){
  console.log(obj.x);
}
bar({x:123,y'ceaser',z:321})
```

联合类型
```typescript
const foo: number|string|boolean = 123
```
可选类型其实就是联合类型|undefined

类型别名
```typescript
type my_type = number|string
const foo: my_type = 123
```