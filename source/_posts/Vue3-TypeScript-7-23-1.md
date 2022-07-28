---
title: Vue3+TypeScript.7.23.1
date: 2022-07-23 16:29:03
cover: https://img2.baidu.com/it/u=3648235042,1573336415&fm=253&fmt=auto&app=138&f=PNG?w=888&h=500
tags:
  - TypeScript
  - 前端
  - Vue
categories:
  - [前端]
  - TypeScript
---

## TS 类的使用

```typescript
class Person {
  name: string;
  age: number; //在js中这个可以不写，但是在ts不行，ts很严格
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const p = new Person("ceaser", 21);
console.log(p.name);
console.log(p.age);
```

### 类的继承
初级版
```typescript
class Person {
    name: string = ''
    age: number = 0
     eating(){
        console.log('eating');
    }

}
class Student extends Person{
    sno: number = 0
    studying(){
        console.log('studying');
    }
}

```
进阶版
```typescript
class Person {
  name: string = "";
  age: number = 0;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  eating() {
    console.log("eating");
  }
}
class Student extends Person {
  sno: number = 0;
  constructor(name: string, age: number) {
    super(name, age); //super用来调用父类的构造器
  }
  eating(): void {
    console.log(" student eating"); //eating方法的重写，会覆盖掉分类的方法，但是也可以在内部使用super来调用
    super.eating();
  }
  studying(): void {
    console.log("studying");
  }
}

const p1 = new Student("ceaser", 21);
console.log(p1);
p1.eating();
```

### 多态
```typescript
class Animal {
  action() {
    console.log("animal running");
  }
}
class Dogs extends Animal {
  action() {
    console.log("dog running");
  }
}
class fish extends Animal{
  action() {
    console.log("fish swimming");
  }
}
function foo(animal: Animal[]) {
  animal.forEach((item) => {
    item.action();
  });
}
foo([new Dogs(), new fish()]);

```

### 类的成员修饰符
```typescript
class Person {
  private name: string = "";//private关键字的变量只能在内部调用
  get_name() {
    console.log(this.name);
  }
}
//protected就是可以在子类也可以访问
```

readonly修饰符顾名思义

### getter 和setter
```typescript
class Person {
  private _name: string = "";
  get name() {
    return this._name;
  }
  set name(new_name) {
    this._name = new_name;
  }
}
const n1 = new Person()
n1.name = 'ceaser'
console.log(n1.name);
```

### 类的静态成员
```typescript
class Person {
  static time: string = "20:00";
}
console.log(Person.time);
//可以直接调用不需要new
```

### 抽象类
抽象类无法new，但是可以继承

**如果子类有constructer，那么子类的constructer必须有super()**

## 接口
```typescript
iterface ISwim {
    swimming: () => void
}
```

## 泛型
### 认识泛型
在定义这个函数时候，我不决定这些参数的类型
而是让调用者以参数的形式告知，我这里的类型应该是什么
```typescript
function sum<T>(num1: T): T {
  return num1;
}
sum<number>(2);
sum<{ name: string }>({ name: "ceaser" });
sum<any[]>(["ceaser", 21]);
```
**你不传泛型的时候会推导成字面量类型**

### 泛型接口
```typescript
class Point<T> {
  x: T;
  y: T;
  z?: T;
  constructor(x: T, y: T, z?: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const n = new Point(1, 2, 3);
const n2 = new Point<number>(1, 2, 3);
console.log(n);
```

### 泛型继承
ts中泛型继承表示类型约束
```typescript
interface ILength {
    length: number
}

function foo<T extends ILength>(arg: T) {
    return arg.length
}

foo('123')
```