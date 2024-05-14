---
title: Promise
---
# Promise

# 1. 为什么需要Promise

> 需求

通过ajax请求id，再根据id请求用户名，再根据用户名获取email

> 回调地狱

在回调地狱中嵌套回调

Promise解决了回调地狱

# 2.Promise的基本使用

Promise是一个构造函数，通过new关键字实例化对象

> 语法

``` js
new Promise((resolve, reject) => {})
```

+ Promise接受一个函数作为参数
+ 在参数函数中接受两个形参
  + resolve；成功函数
  + rejec；失败函数

> promise实例

promise实例有两个属性

+ state：状态
+ result：结果

## 1）promise的状态

第一种状态：pending（装备，待解决，进行中）

第二种状态：fulfilled（已完成，成功）

第三种状态：rejected（已拒绝，失败）

## 2）promise状态的改变

通过调用resolve()和reject()改变当前promise对象的状态

> 示例

``` js
let p = new Promise((resolve, reject) => {
    // resolve(): 调用函数，使当前promise对象的状态改成fulfilled
    resolve()
})

console.log(p)
```

> 示例

``` js
let p = new Promise((resolve, reject) => {
    // resolve(): 调用函数，使当前promise对象的状态改成fulfilled
    // reject();  调用函数，使当前promise对象的状态改成rejected
    reject();
})

console.log(p)
```

+ resolve(): 调用函数，使当前promise对象的状态改成fulfilled
+ reject():  调用函数，使当前promise对象的状态改成rejected

**注意：Promise状态的改变是一次性的(第一次修改的什么状态结果就是什么状态)**

## 3）promise的结果

> 示例

``` js
const p = new Promise((resolve, reject) => {
    const success = "成功的结果";
    const fail = "失败的结果";
	
    // 通过调用resolve，传递参数，改变 当前promise对象的 结果
    resolve(success)
    // reject(fail)
})

console.log(p);
```

# 3 Promise的方法

## 1) then方法

``` js
let p = new Promise((resolve, reject) => {
    resolve("成功的结果！")
    // reject('失败的结果！')
})

// then方法函数
// 参数1：是一个函数(接受一个形参，形参就是状态成功的值)
// 参数2：是一个函数 (接受一个形参，形参就是状态失败的值)

p.then((value) => {
    // 当promise的状态是fulfilled时，执行
    console.log(value);
}, (err) => {
    // 当promise的状态是rejected时，执行
    console.log(err)
})
```

+ 在then方法的参数函数中，通过形参使用promise对象的结果



> Promise的状态不改变，就不执行then里的方法

``` js
new Promise((resolve, reject) => {

}).then((value) => {
    console.log('成功！')
}, (reason) => {
    console.log('失败！')
})
```



> 在then方法中，通过return将返回的promise实例改为fulfilled状态

``` js
// 如果Promise的状态不改变，then里的方法就不会执行
const p = new Promise((resolve, reject) => {
    resolve()
})

const t = p.then((value) => {
    console.log('成功！')
	// 使用return可以将t实例的状态改为fulfilled
    return 'javaScript'

}, (reason) => {
    console.log('失败！')
})

t.then((value) => {
    console.log('成功2', value)
}, (reason) => {
    console.log('失败2', reason)
})
```



> 如果在then方法中，出现代码错误，会将返回的promise实例改为rejected状态

``` js
const p = new Promise((resolve, reject) => {
    resolve()
})

const t = p.then((value) => {
    console.log('成功！')

    console.log(张向阳)	// 这行代码出错

}, (reason) => {
    console.log('失败！')
})

t.then((value) => {
    console.log('成功2', value)
}, (reason) => {
    console.log('失败2', reason)
})
```





















