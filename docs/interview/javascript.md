---
title: JavaScript
---

# JavaScript

## 若想要 a == 1 && a == 2 && a == 3 成立，a = ?

**简单来说，a 等于多少的时候，a == 1 && a == 2 && a == 3 返回 true**

```js
let a = {
  value: 1, // 初始值1
  valueOf: function () {
    // 重写valueOf
    return this.value++; // 返回value值，并自增1
  },
};

console.log(a == 1 && a == 2 && a == 3);
```

## js 的设计模式？

## var let const 区别

## 什么是闭包？

视频链接：https://www.bilibili.com/video/BV1mG411h7aD/?p=106&spm_id_from=pageDriver&vd_source=745d1e6dc172f4afa9af1af10c052b04

> 闭包就是能访问到外部函数作用域中变量的函数
>
> 1. 什么时候使用？
>
>    当我们需要隐藏一些不希望被别人访问的内容时就可以使用闭包了
>
> 2. 构成闭包的要件？
>
>    - 函数的嵌套
>    - 内部函数要引用外部函数中的变量
>    - 内部函数要作为返回值返回

> 函数在作用域，在函数创建时就已经确定了（词法作用域）
>
>     	和调用的位置无关
>
> 闭包原理：闭包利用的就是词法作用域

> 闭包的生命周期：
>
> 1. 闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包
> 2. 在内部函数丢失时销毁（内部函数被垃圾回收了，闭包才会消失）
>
> 注意事项：
>
> - 闭包只要用来隐藏一些不希望被外部访问的内容
>
>       	这就意味着闭包需要占用一定的内存空间
>
> - 相交于类来说，闭包比较浪费内存空间（类可以使用原型而闭包不能）
>
>       	需要执行次数较少时，使用闭包
>      	
>       	需要大量创建实例时，使用类（类就是this比较麻烦）

```js
// 需求：创建一个函数每次调用时，打印第几次调用了，第一次调用打印1，第二次调用打印2，以此类推...

function fn() {
  let num = 0; // 位于函数作用域

  return () => {
    num++;
    console.log(`这是第 ${num} 次调用 fn() 函数`);
  };
}
let count = fn();
count(); // 这是第 1 次调用 fn() 函数
count(); // 这是第 2 次调用 fn() 函数
count(); // 这是第 3 次调用 fn() 函数
```

## 什么是防抖？

> pink 老师讲的防抖与节流：https://www.bilibili.com/video/BV1dv4y117mY/?spm_id_from=333.337search-card.all.clickvd_source=745d1e6dc172f4afa9af1af10c052b04

> 用户触发事件过于频繁，只要最后一次事件的操作
>
> 通过 setTimeout 的方式，在一定的时间间隔内，将多次触发变成一次触发
>
> 记忆方法：从头开始

>     	使用场景：
>
>     1. 输入框搜索输入
>     2. 文本编辑器实时保存

```js
function debounce(fun, delay) {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fun.call(context, args);
    }, delay);
  };
}
```

## 什么是节流？

> 控制高频事件执行次数(多少秒之内只执行一次)
>
> 记忆方法：不要打断我

>     	应用场景：
>
>     1. 高频事件  例如：快速点击、鼠标滑动、resize事件、scroll事件
>     2. 下拉加载
>     3. 视频播放记录时间等

```js
function throttle(fn, delay) {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      setTimeout(() => {
        fn.call(context, args);
        flag = true;
      }, delay);
    }
    flag = false;
  };
}
```

## [宏任务与微任务](https://www.bilibili.com/video/BV1Av411n77n/?spm_id_from=333.337.search-card.all.click)

- 宏任务：计时器、Ajax、读取文件
- 微任务：Promise.then

**执行顺序**

1. 同步程序
2. process.nextTick
3. 微任务
4. 宏任务
5. [setImmediate](https://blog.csdn.net/weixin_47450807/article/details/124098448)

```js
setImmediate(() => {
  console.log(1)
})

console.log(2)

setTimeout(() => {
  console.log(3)
}, 0)

setTimeout(() => {
  console.log(4)
}, 100)

console.log(5)

new Promise((reslove) => {
  console.log(6)
  reslove()
}).then(() => {
  console.log(7)
})

process.nextTick(() => {
  console.log(8)
})

// 执行结果：
2、5、6、8、7、3、1、4
```

## 怎么查找两个数组的交集

## 遍历数组的方法，哪个可以跳出循环，哪个效率最高

## 图标跟随鼠标移动怎么实现

## 说一下 this

## 怎么阻止默认事件

## 怎么阻止事件冒泡

## 数组常用方法

## 数组去重知道哪些方法

## 字符串操作方法

## 怎么判断一个数是不是素数，逻辑怎么写？

> 什么是素数：https://www.108hei.com/archives/5196

## const 定义对象里面的属性值能不能修改？为什么？

## 对同步和异步的理解

## 常见的宏任务，微任务？

## 怎么判断两个数组相等？

## es6 遍历数组的方法？

# Promise

## promise 捕获错误的方式

## 异步任务有哪些

## 两个异步请求数据操作怎么合并

## promise 有几种状态，会不会改变

## async 和 await 解决了什么问题？
