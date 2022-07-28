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
<!-- more -->

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
  //当一个函数返回值为任何值的时候，这个函数就是void类型，这个也可以不写
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

类型断言
```typescript
//通过类型断言可以将一个普遍的类型转成一个具体的类型
const el = document.getElementById('ceaser') as HTMLImageElement
el.src = 'url'
```
非空类型断言  ! (放在可能为空的变量后面，告诉编译器这个值不可能为空)


可选链
```typescript
console.log(obj.friend?.age);

```

!!和??
```typescript
!!就是转成boolean
??（空值合并操作符）
let meassgae: string|null = null
const content = meassgae ?? '出现null就用我'
```

字面量类型
```typescript
let num: 123 = 123
let num2: 'ceaser' = 'ceaser'
//字面量类型和联合类型结合才有意义
```

函数类型
()=>void
()=>number

可选类型必须写在必选类型的后面


函数重载

