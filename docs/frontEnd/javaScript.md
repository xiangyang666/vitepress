---
title: JavaScript
---

# JavaScript

> JavaScript 作者：布兰登·艾奇（Brendan Eich，1960 年~）。

> JavaScript 是一种运行在客户端的脚本语言（Script 的意思是脚本）

# js 由三部分组成

- ECMAScript（js 的语言语法规范）
- DOM（Document Object Model）
- BOM（Browser Object Model）

# js 输入输出语句

```js
prompt(info)：浏览器弹出输入框，用户可以输入
alert(msg)：浏览器弹出警示框
console.log(msg)：浏览器控制台打印输出信息
```

# 变量是程序在内存中申请的一块用来存储数据的空间。

# js 的变量数据类型是只有程序在运行的过程中，根据等号右边的值来确定的

# JS 基础

## 数字型 Number

- Infinity 无穷大
- -Infinity 无穷小
- NaN 非数字

## isNaN()

用来判断一个变量是否为非数字的类型，返回 true 或 false

```js
// 如果是数字类型就返回false，否则返回true
console.log(isNaN("JavaScript")); // true
console.log(isNaN(1314)); // false
```

## 字符串型 String

## 因为 HTML 标签里的属性使用的是双引号，js 这里我们更<span style="color:red;">推荐使用单引号</span>

## js 字符串引号嵌套

### (遵循：外双内单，外单内双)

```js
const str = '我是一名"前端程序员"！';
```

## 字符串转义符

转义符都是 \ 开头的，常用的转义符及其说明如下：

| 转义符 | 解释说明                    |
| ------ | --------------------------- |
| \n     | 换行符，n 是 newline 的意思 |
| \\     | 斜杠 \                      |
| \'     | ‘ 单引号                    |
| \"     | " 双引号                    |
| \t     | tab 缩进                    |
| \b     | 空格，b 是 blank 的意思     |

## 如果一个变量声明未赋值 就是 undefined 未定义数据类型

### undefined 和 数字类型 相加 结果是 NaN

```js
console.log(undefined + 100); // NaN
```

## typeof 用来判断数据的数据类型的

```js
console.log(typeof "你好"); // string
console.log(typeof 18); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

### 注意：prompt() 取过来的值是字符串型的

## 前置递增：先自加，后运算

> 先自加再使用（记忆口诀：++在前 先加）

```js
let i = 1;
console.log(++i + 1); // 3
// 注意：i是2
// i先自加1，变成2之后，在和后面的1相加
```

## 后置递增：先原值运算，后自加

> 先使用再自加（记忆口诀：++在后 后加）

```js
let i = 1;
console.log(i++ + 1); // 2
// 注意：此时的i是1
// 先和1相加，先运算输出完毕后，i再自加是1
```

## 比较运算符

| 符号 | 作用 | 用法                                     |
| ---- | ---- | ---------------------------------------- |
| =    | 赋值 | 把右边给左边                             |
| ==   | 判断 | 判断两边值是否相等（注意此时有隐式转换） |
| ===  | 全等 | 判断两边的值和数据类型是否完全相同       |

## 逻辑运算符

**概念：逻辑运算符还用来进行布尔值的运算符，其返回值也是布尔值。后面开发经常用于多个条件的判断**

| 逻辑运算符 | 说明                   | 案例            |
| ---------- | ---------------------- | --------------- |
| &&         | “逻辑与”，简称“与” and | true && false   |
| \|\|       | “逻辑或”，简称“或” or  | true \|\| false |
| !          | “逻辑非”，简称“非” not | !true           |

### 逻辑非(!)也叫作<span style="color:red;">取反符</span>,用来取一个布尔值相反的值，如 true 的相反值是 false

```js
const str = !true;
console.log(str); // false
```

## 短路运算（逻辑中断）

短路运算的原理：当有多个表达式（值）时，左边的表达式可以确定结果时，就不再继续运算右边的表达式的值；

##### 1. 逻辑与

- 语法：<span style="color:red;">表达式 1 && 表达式 2</span>

- 如果表达式 1 的值为真，则返回表达式 2
- 如果表达式 1 的值为假的，则返回表达式 1

##### 2.逻辑或

- 语法：<span style="color:red;">表达式 1 || 表达式 2</span>
- 如果第一个表达式的值为真，则返回表达式 1
- 如果第一个表达式的值为假，则返回表达式 2

## 赋值运算符

**概念：用来把数据赋值给变量的运算符**

| 赋值运算符  | 说明                 | 案例                             |
| ----------- | -------------------- | -------------------------------- |
| =           | 直接赋值             | let userName = "张向阳"          |
| +=、-=      | 加、减一个数后再赋值 | let age = 10； age += 5； // 15  |
| \*=、/=、%= | 乘、除、取模后再赋值 | let age = 2； age \* = 5； // 10 |

## 运算符优先级

| 优先级 | 运算符     | 顺序            |
| ------ | ---------- | --------------- |
| 1      | 小括号     | （）            |
| 2      | 一元运算符 | ++ -- ！        |
| 3      | 算数运算符 | 先\* / % 后 + - |
| 4      | 关系运算符 | > >= < <=       |
| 5      | 相等运算符 | == != === !==   |
| 6      | 逻辑运算符 | 先 && 后 \|\|   |
| 7      | 赋值运算符 | =               |
| 8      | 逗号运算符 | ，              |

- 一元运算符里面的逻辑非优先级很好
- 逻辑与 比 逻辑或 优先级高

## 三元运算符

```js
// 语法：
条件表达式 ? 结果1 : 结果2;

// 举例
const num = 10;
let num = num > 5 ? "正确" : "错误";
```

## 分支流程控制 switch 语句

**当需针对变量设置一系列的特定值的选项时，就可以使用 switch**

```js
switch (表达式) {
  case value1:
    // 只要 value1 满足表达式就会执行代码(这里面的)
    break;
  case value2:
    // 只要 value1 满足表达式就会执行代码(这里面的)
    break;
  default:
  // 表达式 不等于任何一个value时要执行的代码
}
```

```js
const num = 100;

switch (num) {
  case 13:
    console.log("值为13");
    break;
  case 100:
    console.log("值为100");
    break;
  default:
    console.log("值为999");
}

// 输出：
值为100;
```

<span style="color: red;">注意：</span>

- 表达式经常写成变量
- 表达式的值 和 case 里面的值相匹配的时候是 全等（===）必须是值和数据类型一致才可以 num === 1
- break 如果当前的 case 里面没有 break 则不会推出 switch 是继续执行下一个 case

## do while 循环语句 与 while 循环语句的区别

```js
/*
	do while循环 与 while循环非常相似，不同的是，
	区别：
		do while 循环会先执行循环中的代码，然后再对条件表达式进行判断。因此，无论条件表达式是真还是假，do while 循环都会至少执行一次，而 while 循环就			不行了，如果条件表达式为假直接退出 while 循环。
		
		while 循环在每次循环之前，会先对条件表达式进行求值，如果条件表达式的结果为 true，则执行{ }中的代码，如果条件表达式的结果为 false，则退出 while 		 循环，执行 while 循环之后的代码。
*/
```

**do while 语法：**

![http://c.biancheng.net/uploads/allimg/210923/151U41403-0.png](http://c.biancheng.net/uploads/allimg/210923/151U41403-0.png)

```js
do {
  // 要执行的代码
} while (条件表达式); // 不管条件表达式是否为真都会执行一次代码
```

**while 语法：**

![](http://c.biancheng.net/uploads/allimg/210923/1512103K7-0.png)

```js
while (条件表达式) {
  // 要执行的代码
}
// 例如
// 求1~100
let i = 1; // 从几开始
let sum = 0; // 总数
while (i <= 100) {
  sum += i; // 每执行一次代码就将i的值加到sum中
  i++; // 每循环一次i就加1
}
console.log(sum);
```

## continue 关键字

**退出本次（当前次的循环）继续执行剩余次数的循环**

```js
// 吃第二个包子的时候是坏的
for (let i = 1; i <= 3; i++) {
  if (i == 2) {
    continue; // 只要遇到 continue 就退出本次循环  直接跳到  i++
  }
  console.log(`我正在吃第${i}个包子`);
  // 打印结果：
  /**
    	我正在吃第1个包子
		我正在吃第3个包子
    */
}
```

## break 关键字

**退出整个循环**(后面都不会执行)

```js
for (let i = 1; i < 3; i++) {
  if (i == 2) {
    break;
  }
  console.log("我正在吃第" + i + "个包子");
  // 打印结果：
  /**
    	我正在吃第1个包子
    */
}
```

## break、continue、return 的区别

- break:结束当前的循环体（如 for、while）
- continue：跳出本次循环、继续执行下次循环（如 for、while）
- return：不仅可以退出循环，还能够返回 return 语句中的值，同时还可以结束当前的函数体内的代码

## 函数

### 1. 什么是函数？

**函数就是封装了一段可以被重复执行调用的代码块 目的：就是让大量代码重复使用！**

### 2. 函数的参数

```js
function 函数名(形参1， 形参2...) {

}
函数名(实参1， 实参2...)
```

### 函数形参和函数实参匹配问题

| 参数个数             | 说明                                 |
| -------------------- | ------------------------------------ |
| 实参个数等于形参个数 | 输出正确结果                         |
| 实参个数多于形参个数 | 只取到形参的个数                     |
| 实参个数小于形参个数 | 多的形参定义为 undefined，结果为 NaN |

```js
function getSum(num1, num2) {
  console.log(num1 + num2);
}
// 1.如果实参的个数和形参的个数一致 则正常输出的结果
getSum(1, 2); // 3
// 2.如果实参的个数多于形参的个数，  会取到形参的个数
getSum(1, 2, 3); // 3
// 3.如果实参的个数小于形参的个数，多余的形参定义为undefined  最终的结果就是 NaN
// 形参可以看做是不用声明的变量  num2 是一个变量但是没有接受值  结果就是undefined
getSum(1); // NaN
// 建议  我们尽量让实参的个数和形参相匹配
```

### 3. 函数 return 注意问题

- return 后面的代码都不会执行
- return 返回的结果是最后一个值（只能返回一个值），如果返回多个：利用数组或对象都行
- 如果函数中没有 return 值，那么则返回 undefined

## arguments

**只有函数才有 arguments 对象 而且是每个函数都内置好了 arguments**

```js
function fn() {
  console.log(arguments); // 里面存储了所有传递过来的实参
  console.log(arguments.length);
  console.log(arguments[2]);
  // 我们可以按照数组的方式便利arguments
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
```

## 伪数组 并不是真正意义上的数组（伪数组有以下特征）

- 具有数组的 length 属性
- 按照索引的方式进行存储的
- 它没有真正数组的一些方法 pop() push()等

## 作用域链

**内部函数访问外部函数的变量，采用的链式查找的方式来决定取哪个值 这种结构我们能称为作用域链**

## javaScript 预解析

**1. 我们 js 引擎运行 js 分为两步： 预解析 代码执行**

- 预解析 js 引擎会把 js 里面所有的 var 还有 function 提升到当前作用域的最前面
- 代码执行 按照代码书写的顺序从上往下执行

**2. 预解析分为 变量预解析（变量提升）和 函数预解析（函数提升）**

- 变量提升 就是把所有的变量声明提升到当前的作用域最前面 不提升赋值操作
- 函数提升 就是把所有的函数声明提升到当前作用域的最前面 不调用函数

# 内置对象

MDN 文档官方网址（可以查阅前端的知识）：https://developer.mozilla.org/zh-CN/

## Math（数学）对象

| 方法名         | 作用                           |
| -------------- | ------------------------------ |
| Math.PI        | 圆周率，约等于 3.1415926       |
| Math.abs(x)    | 返回一个数的绝对值             |
| Math.ceil(x)   | 返回一个数向上取整             |
| Math.floor(x)  | 返回一个数向下取整             |
| Math.max(x, y) | 返回数组中的最大值             |
| Math.min(x, y) | 返回数组中的最小值             |
| Math.random()  | 返回一个 0 到 1 之间的伪随机数 |
| math.round(x)  | 返回四舍五入的整数             |

## Date（日期）对象

```js
// 实例：
let time = new Date();
console.log(time.getDate()); // 返回当天是几号
console.log(time.getDay()); // 返回星期几（0代表星期天）
```

| 方法名                    | 作用                                     |
| ------------------------- | ---------------------------------------- |
| time.getDay()             | 返回一周中的第几天（0 代表星期天）       |
| time.getFullYear()        | 年                                       |
| time.getMonth()           | 月（0 代表一年中的第一月）               |
| time.getDate()            | 日（一月中的几号）                       |
| time.getHours()           | 时                                       |
| time.getMinutes()         | 分                                       |
| time.getSeconds()         | 秒                                       |
| time.getMilliseconds()    | 毫秒                                     |
|                           |                                          |
| time.getTime()            | 表示从 1970 年到现在的总毫秒数（时间戳） |
| Date.now()                | h5 新增的 获得总的毫秒数                 |
| time.toLocaleTimeString() |                                          |
|                           |                                          |
|                           |                                          |

## String（字符串）

**length 返回字符串的长度**

```js
let str = "javaScript";

str.length; // 10
```

#### charAt( )

 方法可返回指定位置的字符。

 参数：字符串的索引

```js
let str = "javaScript";

str.charAt(3); // a
```

##### charCodeAt( )

 返回字符串第一个字符的 Unicode 编码(H 的 Unicode 值)

 参数：字符串的索引

```js
let str = "javaScript";

str.charCodeAt(3); // 97
```

##### concat( )

 方法用于连接两个或多个字符串。

 参数：类型 String

```js
let str1 = "hello";
let str2 = "world";
let str3 = ",你好";
let str4 = "世界";

let result = str1.concat(str2);
console.log(result); // helloworld

let result2 = str1.concat(str2, str3, str4);
console.log(result2); // helloworld,你好世界
```

##### indexOf( )

 方法可返回某个指定的字符串值在字符串中首次出现的位置。（如果没有找到匹配的字符串则返回 -1）

 **注意：** indexOf() 方法区分大小写。

 参数：

 参数 1：规定需检索的字符串值。(字符串类型)

 参数 2：可选的整数参数。规定在字符串中开始检索的位置。（省略就从 0 开始）

```js
let str = "javaScript";

str.indexOf("a"); // 1
```

##### includes( )

 方法用于判断字符串是否包含指定的字符串。

 参数：

 参数：

 参数 1：必需，要查找的字符串。

 参数 2：可选，设置从那个位置开始查找，默认为 0。

```js
let str = "javaScript";

str.includes("java"); // true
str.includes("python"); // false
```

##### replace( )

 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的字符串。

 参数：

 参数 1：必需。规定字符串或要替换的模式的 RegExp 对象。

 参数 2：必需。一个字符串值。规定了替换文本或生成替换文本的函数。

```js
let str = "I Love You";
str.replace("Love", "Like"); // "I Like You"     (参数1是要替换的内容，参数2是要被替换后顶替的内容)

let str2 = "Mr Blue has a blue house and a blue car";
// 全局匹配blue，并且不区分大小写，都换成red
str2.replace(/blue/gi, "red"); // "Mr red has a red house and a red car"
```

##### slice(start, end)

 方法可**提取字符串**的某个部分，并以新的字符串返回被提取的部分。

 使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分（**开始索引，结束索引）**

**注意：start 参数字符串中第一个字符位置为 0, 第二个字符位置为 1, 以此类推，如果是负数表示从尾部截取多少个字符串，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。**

**end 参数如果为负数，-1 指字符串的最后一个字符的位置，-2 指倒数第二个字符，以此类推。**

 参数：

 参数 1：开始索引

 参数 2：结束索引（结果不包含）

```js
let str = "javaScript";

str.slice(0, 4); // java
```

##### split( )

 方法用于把一个字符串分割成字符串数组。（将字符串 ==》数组）

 参数：

 参数 1：以(字符串中的那个字符进行分割)（如果不传参的话就是一整个字符串）

 参数 2：限制返回的数组的最大长度。

```js
let str = "javaScript";

// 不传参
str.split(); // ["javaScript"]

// 空字符串
str.split(""); // ["j", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// 以 S 为分割（因为字符串中是有S的）
str.split("S"); // ['java', 'cript']

// 以 1 为分割（找不到的话就会把整个字符串转换为数组）
str.split("1"); // ['javaScript']
```

##### substr( )

 方法可在字符串中抽取从 _开始_ 下标开始的指定数目的字符。

 参数：

 参数 1： 必需。要抽取的子串的起始下标。必须是数值。

 **如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。**

 参数 2：可选。子串中的字符数（长度）。

```js
let str = "javaScript";

// 从索引4开始，截取6位
str.substr(4, 6); // Script

// 如果传递一个参数就将当前索引以后的都截取掉
str.substr(4); // Script
```

##### substring()

 方法用于**提取字符串**中介于两个指定下标之间的字符。

 参数：

 参数 1：必需。一个非负的整数

 参数 2：可选。一个非负的整数，如果省略该参数，那么返回的子串会一直到字符串的结尾。(不包括结尾索引的那一项)

```js
let str = "JavaScript";

// 2个参数
str.substring(0, 4); // Java

// 不传第二个参数
str.substring(4); // Script
```

##### trim( )

 方法用于删除字符串的**头尾空白符**，空白符包括：空格、制表符 tab、换行符等其他空白符等。

 方法不会改变原始字符串。

 方法不适用于 null, undefined, Number 类型。

```js
let str = " java Script ";

str.trim(); // java Script
```

## Array（数组）

##### length

 返回数组元素的个数。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.length; // 4
```

##### join( )

 将数组转化为字符串

 参数：可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.join("&"); // 西游记&水浒传&三国演义&红楼梦
```

##### unshift( )

 向数组开头添加元素

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.unshift("node.js"); // 再次输出arr,  ['node.js', '西游记', '水浒传', '三国演义', '红楼梦']
```

##### push( )

 向数组末尾添加元素

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.push("JavaScript"); // 再次输出arr,  ['西游记', '水浒传', '三国演义', '红楼梦', 'JavaScript']
```

##### shift( )

 删除数组中的第一个

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.shift(); // 再次输出arr， ['水浒传', '三国演义', '红楼梦']
```

##### pop( )

 删除最后一个数组元素

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.pop(); // 再次输出arr,  ['西游记', '水浒传', '三国演义']
```

##### indexOf( )

 返回数组中某个指定的元素位置（没有找到就返回-1）

 参数：

 参数 1：必须。查找的元素。

 参数 2：可选的整数参数。规定在数组中开始检索的位置。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.indexOf("水浒传"); // 1    因为'水浒传'的索引为1      没有找到就返回-1
```

##### includes( )

 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.includes("水浒传"); // true   因为'水浒传'的索引为1    没有找到返回false
```

##### isArray( )

 用于判断一个对象是否为数组。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];
let str = "javaScript";

Array.isArray(arr); // true
Array.isArray(str); // false
```

##### reverse( )

 用于颠倒数组中元素的顺序。

```js
let arr = ["1", "2", "3", "4"];

arr.reverse(); // ['4', '3', '2', '1']
```

##### sort()

 对数组的元素进行排序

 排序顺序可以是字母或数字，并按升序或降序。**默认排序顺序为按字母升序。**

 参数：可选。规定排序顺序。**必须是函数**。

```js
let arr = ["1", "2", "3", "4"];

arr.sort(); // ['1', '2', '3', '4']

arr.sort((a, b) => {
  return a - b; // 从小到大	 // ['1','2','3','4']
});

arr.sort((a, b) => {
  return b - a; // 从大到小   // ['4', '3', '2', '1']
});
```

## js 六大遍历方法

### 一张图看懂 js 数据迭代方法

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/434fa0fe7e51a69c7953f456d7290649~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

```js
// 示例数据
const shoppingCart = [
  {
    id: 1,
    goods: "thinkBook 16+",
    price: "6599",
  },
  {
    id: 2,
    goods: "联想小新 Pro 16",
    price: "5599",
  },
  {
    id: 3,
    goods: "机械革命 code01",
    price: "4999",
  },
  {
    id: 4,
    goods: "联想拯救者 Y9000 p",
    price: "8999",
  },
  {
    id: 5,
    goods: "Macbook 16寸",
    price: "18999",
  },
];
```

### forEach

 forEach() 用于遍历数组，无返回值，对原数组没有影响（不会改变原数组）<span style='color:red;'>(在 forEach 里面 return 不会终止迭代)</span>

- 参数一：item， 遍历的每一项
- 参数二：index，数组索引号
- 参数三：array，数组本身

```js
// 示例
let arr = [];

const app = shoppingCart.forEach((item, index, array) => {
  // 1、筛选出id大于等于2的数据，且id小于等于4，并返回到新数组中
  if (item.id >= 2 && item.id <= 4) {
    arr.push(item);
  }
});

console.log(arr);
/*
	[
      { id: 2, goods: '联想小新 Pro 16', price: '5599' },
      { id: 3, goods: '机械革命 code01', price: '4999' },
      { id: 4, goods: '联想拯救者 Y9000 p', price: '8999' }
    ]
*/
```

### map

map() 可以遍历数据<span style='color:red;'>处理数据</span>，返回处理之后的新数组（会改变原数组）

**map 也称为映射。映射是个术语，指两个元素的集之间元素相互“对应”的关系**

<span style='color:red;'>map 重点在于有返回值，forEach 没有返回值</span>

```js
shoppingCart.map((item, index, array) => {
  // 返回索引大于等于1的，且给进入if的每一项的goods（商品）前面都加上China
  if (index >= 1) {
    return (array[index].goods = `China ${item.goods}`);
  }
});

console.log(shoppingCart);
/*
	[
      { id: 1, goods: 'thinkBook 16+', price: '6599' },
      { id: 2, goods: 'China 联想小新 Pro 16', price: '5599' },
      { id: 3, goods: 'China 机械革命 code01', price: '4999' },
      { id: 4, goods: 'China 联想拯救者 Y9000 p', price: '8999' },
      { id: 5, goods: 'China Macbook 16寸', price: '18999' }
    ]
*/
```

### filter

filter() 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，<span style='color:red;'>主要用于筛选数组</span>，<span style='color:red;'>(在 filter 里面 return 不会终止迭代)</span>

- 注意它直接返回一个新数组

```js
const app = shoppingCart.filter((item, index, array) => {
  // 返回id大于1，且小于等于4的数组
  // filter只需要返回条件就行
  return item.id > 1 && item.id <= 4;
});

console.log(app);
/*
	[
      { id: 2, goods: '联想小新 Pro 16', price: '5599' },
      { id: 3, goods: '机械革命 code01', price: '4999' },
      { id: 4, goods: '联想拯救者 Y9000 p', price: '8999' }
    ]
*/
```

### some

some() 用于检测数组中的元素是否满足指定条件（some 只要有一个满足条件就为 true）

- 返回值是布尔值
- 方法会依次执行数组的每个元素
- 如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测
- 如果没有满足条件的元素，则返回 false

**some()和 every() 不会对空数组进行检测**

**some()和 every() 不会改变原始数组**

```js
const app = shoppingCart.some((item, index, array) => {
  // 检测是否有id等于3，且goods为 '机械革命 code01' 的那一项
  if (item.id == 3 && item.goods == "机械革命 code01") {
    console.log("找到了机械革命 code01");
    return true; // 找到了就停止迭代
  }
  // 这里只循环了两次。因为到第三次的时候已经找到满足条件的那一项了，在if中直接return true结束后面的迭代
  console.log(`循环了${index + 1}次！`);
});

console.log(app); // true
```

### every

every() 方法用于检测数组所有元素是否都符合指定条件（every 需要都满足才会返回 true）

- 返回值是布尔值
- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
- 如果所有元素都满足条件，则返回 true

```js
const app = shoppingCart.every((item, index, array) => {
  // 判断每一项的price是否大于等于1000
  return item.price >= 1000;
});

console.log(app); // true
```

### reduce

reduce() 返回累计处理的结果，经常用于求和等...

- 基本语法：

- ```js
  const arr = [1, 2, 3, 4, 5];
  ```

- ```js
  arr.reduce(() => {}, 初始值);
  ```

- ```js
  arr.reduce((上一次值, 当前值) => {}, 初始值);
  ```

```js
// 求和
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const app = arr.reduce((prev, current) => {
  return prev + current;
}, 0);

console.log(app); // 55
```

```js
// 需求：一个数组中判断是否有createBy， 如果没有 去除id和index， 将剩余参数取出 和 有createBy的对象一起放入新的数组
let arr = [
  { createBy: "", id: 001, index: 1, test1: "测试1", test2: "测试1" },
  { createBy: "", id: 002, index: 2, test1: "测试2", test2: "测试2" },
  { id: 0, index: 3, test1: "测试3", test2: "测试3" },
  { id: 0, index: 4, test1: "测试4", test2: "测试4" },
];

const app = arr.reduce((prev, current) => {
  const { createBy, id, index, ...rest } = current;
  const obj = createBy == undefined ? rest : { ...current };
  prev.push(obj);
  return prev;
}, []);

console.log(app);
/*
    [
      { createBy: '', id: 1, index: 1, test1: '测试1', test2: '测试1' },
      { createBy: '', id: 2, index: 2, test1: '测试2', test2: '测试2' },
      { test1: '测试3', test2: '测试3' },
      { test1: '测试4', test2: '测试4' }
    ]
*/
```

### reduce执行过程

1. 如果<span style='color:red;'>没有起始值</span>，则<span style='color:red;'>上一次值以</span>数组的<span style='color:red;'>第一数组元素的值</span>
2. 每一次循环，把<span style='color:red;'>返回值</span>给做为下一次循环的<span style='color:red;'>上一次值</span>
3. 如果<span style='color:red;'>有起始值</span>，则起始值做为<span style='color:red;'>上一次值</span>

# DOM

Document Object Model 文档对象模型

笔记：https://blog.csdn.net/qq_51246916/article/details/114665097

# BOM

Browser Object Model 浏览器对象模型

笔记：https://blog.csdn.net/qq_45911263/article/details/125977860

# js 获取元素位置系类

笔记：https://blog.csdn.net/weixin_43877799/article/details/122478495

# js 事件

笔记：https://blog.csdn.net/luojing0516/article/details/125523508
