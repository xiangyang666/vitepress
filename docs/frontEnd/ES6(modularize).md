---
title: ES6模块化
---
# 1.什么是ES6模块化规范

ES6模块化规范是浏览器端与服务器端通用的模块化开发规范。它的出现极大的降低了前端开发的模块化学习的成本，

开发者不再需要额外学习AMD、CMD、或commonJS等模块化规范



ES6模块化规范的定义：

+ 每个js文件都是一个独立的模块
+ 导入其他模块成员使用import关键字
+ 向外共享模块成员使用export关键字



# ES6模块化的基本语法：

ES6的模块化只要包含如下3种用法：

1.默认导出与默认导入

2.按需导出与按需导入

3.直接导出并执行模块中的代码



## 1.默认导出

语法：export   default   默认导出的成员

``` js
let name = '张三'
let age = 18
function show() {
  console.log('你好')
}

//默认导出(导出想要的数据)
export default {
  name,
  show
}
```

## 默认导入

语法：import   接受的名称   from   '模块标识符(路径或者包的名字)'

``` js
//用个有意义的名字进行接受
import info from './01.默认导出.js'

console.log(info)
```



**默认导出的注意事项**

​		每个模块中，值允许使用唯一的一次export  default，否则会报错！

**默认导入的注意事项**

​		默认导入的接受名称可以是任意名称，只要是合法的成员名称即可：

``` js
// m1 是合法的名称
import m1 from './01_es6.js'

// 123m 不是合法的名称，因为成员名称不能一数字开头
import 123m from './01_es6.js'
```



## 2.按需导出

语法：export  按需导出的成员

``` js
// 向外按需导出变量 name
export let name = '张三'
// 向外按需导出变量 age
export let age = 18
// 向外按需导出方法 say
export function say() {
  console.log('hello world!')
}
```

按需导入

语法：import  { name, age }  from  '模块标识符'

``` js
import {name, age, say} from './03.按需导出.js'

console.log(name)	//输出张三
console.log(age)	//输出18
console.log(say)	//打印输出 [Function: say]
```

**按需导出与按需导入的注意事项**

1. 每个模块中可以使用多次按需导出
2. 按需导入的成员必须和按需导出的名称保持一致
3. 按需导入时，可以使用 as 关键字进行重命名
4. 按需导入可以和默认导入一起使用

``` js
// as 关键字使用 (重命名)后使用
import { name as str1, age, say } from './es6.js'

// 按需导入可以和默认导入一起使用 (以逗号分隔)
import info, { name, age, say } from './es5.js'
```



## 3.直接导入并执行模块中的代码

如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员。此时，可以直接导入并执行模块代码，示例代码如下：

``` js
// 05.直接导入并执行模块中的代码.js 文件
for(let i = 1; i < 7; i++) {
  console.log('循环了' + i + '次')
}

// 06.test_05.js 文件
import './05.直接导入并执行模块中的代码.js' 

//控制台输出的结果：
// 循环了1次
// 循环了2次
// 循环了3次
// 循环了4次
// 循环了5次
// 循环了6次
```

