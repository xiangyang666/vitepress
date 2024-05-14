---
title: "javaScript技巧"
---

# javaScript 技巧

**什么是JSDoc？**

> JSDoc 是 DocBlock 的 JavaScript 实现，DocBlock 是一种用于各种编程语言（包括 PHP、Ruby 和 Python）的文档方法

> 更多信息：https://jsdoc.app/index.html#block-tags

``` js
// 例如：
// 使用 JSDoc 标签来描述您的代码：
/**
 * @description 两数之和
 * @param  {Number} num1 要添加的第一个数字
 * @param  {Number} num2 要添加的第二个数字
 * @return {Number}      总数
 */
function add(num1, num2) {
  return num1 + num2
}
```

``` js
// 防抖
/**
 * @param {Function} fn 目标函数
 * @param {Number} delay 延迟时间
 * @param {Boolean} immediate 是否立即触发
 * @return {Function}
*/
function debouncePlus(fn, delay = 500, immediate) {
  let timer = null
  return function() {
    let that = this
    let args = arguments
    if (timer) clearTimeout(timer)
    if (immediate) {  // 立即执行
      let callNow = !timer
      if (callNow) fn.apply(that, args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    } else {  // 非立即执行
      timer = setTimeout(() => {
        fn.apply(that, args)
      }, delay)
    }
  }
}
```



## 1. 字符串和数组的方法

### 字符串

#### length

 返回字符串的长度

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

#### charCodeAt( )

 返回字符串第一个字符的 Unicode 编码(H 的 Unicode 值)

 参数：字符串的索引

```js
let str = "javaScript";

str.charCodeAt(3); // 97
```

#### concat( )

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

#### indexOf( )

 方法可返回某个指定的字符串值在字符串中首次出现的位置。（如果没有找到匹配的字符串则返回 -1）

 **注意：** indexOf() 方法区分大小写。

 参数：

 参数 1：规定需检索的字符串值。(字符串类型)

 参数 2：可选的整数参数。规定在字符串中开始检索的位置。（省略就从 0 开始）

```js
let str = "javaScript";

str.indexOf("a"); // 1
```

#### includes( )

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

#### replace( )

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

#### slice(start, end)

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

// 获取包含 从第二个元素开始的所有元素的子数组
var arr = [1, 2, 3, 4, 5];
arr.slice(1); //[2,3,4,5]
```

#### split( )

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

#### substr( )

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

#### substring()

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

#### trim( )

 方法用于删除字符串的**头尾空白符**，空白符包括：空格、制表符 tab、换行符等其他空白符等。

 方法不会改变原始字符串。

 方法不适用于 null, undefined, Number 类型。

```js
let str = " java Script ";

str.trim(); // java Script
```

### 数组

#### length

 返回数组元素的个数。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.length; // 4
```

#### join( )

 将数组转化为字符串

 参数：可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.join("&"); // 西游记&水浒传&三国演义&红楼梦
```

#### unshift( )

 向数组开头添加元素

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.unshift("node.js"); // 再次输出arr,  ['node.js', '西游记', '水浒传', '三国演义', '红楼梦']
```

#### push( )

 向数组末尾添加元素

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.push("JavaScript"); // 再次输出arr,  ['西游记', '水浒传', '三国演义', '红楼梦', 'JavaScript']
```

#### shift( )

 删除数组中的第一个

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.shift(); // 再次输出arr， ['水浒传', '三国演义', '红楼梦']
```

#### pop( )

 删除最后一个数组元素

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.pop(); // 再次输出arr,  ['西游记', '水浒传', '三国演义']
```

#### indexOf( )

 返回数组中某个指定的元素位置（没有找到就返回-1）

 参数：

 参数 1：必须。查找的元素。

 参数 2：可选的整数参数。规定在数组中开始检索的位置。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.indexOf("水浒传"); // 1    因为'水浒传'的索引为1      没有找到就返回-1
```

#### includes( )

 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];

arr.includes("水浒传"); // true   因为'水浒传'的索引为1    没有找到返回false
```

#### isArray( )

 用于判断一个对象是否为数组。

```js
let arr = ["西游记", "水浒传", "三国演义", "红楼梦"];
let str = "javaScript";

Array.isArray(arr); // true
Array.isArray(str); // false
```

#### reverse( )

 用于颠倒数组中元素的顺序。

```js
let arr = ["1", "2", "3", "4"];

arr.reverse(); // ['4', '3', '2', '1']
```

#### sort()

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



---

### 1. 实现洗牌函数（随机打乱数组）

```js
// html
<h1>原数组：<span class="t1"></span></h1>
<h1>随即后的数组：<span class="t2"></span></h1>

// js
function $(ele) {
    return document.querySelector(ele)
}
function getRandomBumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function shuffle(arr) {
    // 以新的数组对象，返回数组中被选中的元素。
    let _arr = arr.slice();
    for (let i=0; i<_arr.length;i++) {
        let j = getRandomBumber(0, i)
        const temp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = temp;
    }
    return _arr;
}

// 运用方法
let arr = ['1','2','3','4','5']
// 原数组
$('.t1').innerHTML = arr;
// 洗牌后数组
$('.t2').innerHTML = shuffle(arr);
```

## 2. 获取元素样式值

```js
/*
    getComputedStyle(element) 方法即可
    element：需要获取样式的元素
*/
```

## 3. JS 判断元素 动画是否执行完成

```js
var ele = document.getElementById("box");
onclick;
ele.addEventListener("animationend", function () {
  //当前绑定的元素 动画执行完毕时，便会回调此方法
});
```

## 4. 设置网页页签图标

```css
<link rel="icon" href="图片路径"></link>
```

## 5. 生产环境下屏蔽浏览器控制台输出

（禁止在控制台上显示内容）

```js
// 在部署到生产环境之前，在js文件开头加上
window.console = {
  log: function () {},
};
// 简写：
window.console = {
  log() {},
};

// 又或者：
// 开发
let DEV = "devlopment";
// 生产
let PRD = "production";
(function (eniroment) {
  if (eniroment === DEV) return;
  if (eniroment === PRD) {
    window.console = {
      log: function () {},
      dir: function () {},
      info: function () {},
      debug: function () {},
      warn: function () {},
      error: function () {},
      time: function () {},
      timeEnd: function () {},
    };
  }
})(PRD);
```

## 6. 滚动条与进度条联动

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style type="text/css">
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 3000px;
        width: 100%;
      }
      .box {
        height: 1px;
        width: 0%;
        background-color: #0fb3fb;
        position: fixed;
        top: 0;
        left: 0;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
  <script type="text/javascript">
    // 滚动条滚动事件
    window.onscroll = function () {
      // 获取滚动条的垂直位置
      let scrollTop = Math.ceil(document.documentElement.scrollTop);
      // 整个html页面高度(减去滚动条的高度) =  body的高度 - 窗口的文档显示区的高度
      let maxScrollTop = document.body.offsetHeight - window.innerHeight;
      // 百分比 =  获取滚动条的垂直位置 / 整个html页面高度 * 100
      let percent = (scrollTop / maxScrollTop) * 100 + "%";
      // 赋值
      document.querySelector(".box").style.width = percent;
    };
    // percent：百分比
  </script>
</html>
```

注：**文档显示区的高度就是滚动条的高度(window.innerHeigth)**

## 7. 数字千分位分隔

//例如：传入 139999999999 ===》139,999,999,999

```js
function format(n) {
  let num = n.toString();
  let len = num.length;
  if (len <= 3) {
    //最少三位以上
    return num;
  } else {
    let temp = "";
    let remainder = len % 3;
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        "," +
        num.slice(remainder, len).match(/\d{3}/g).join(",") +
        temp
      );
    } else {
      // 3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
    }
  }
}
```

## 8. 数组扁平化

( 数组里嵌套数组，然后这里有些数组里又嵌套数组 ( 将这些合并返回一个一维数组 ) )

```js
// Array.isArray() 用于确定传递的值是否是一个 Array。
function flatten(arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
```

## 9. 数组去重

```js
// 第一种
function unique(arr) {
  return Array.from(new Set(arr));
}
// 第二种
function unique(arr) {
  return [...new Set(arr)];
}
// 第三种
function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      //没有找到
      result.push(arr[i]);
    }
  }
  return result;
}
// 第四种
function unique(arr) {
  // 先将数组的元素进行排序(将相同的数组元素排列到一起)
  arr = arr.sort();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
// 第五种
function unique(arr) {
  arr.filter((item, index, arrs) => {
    return arrs.indexOf(item) == index;
  });
}
// 第六种
function unique(arr) {
  let result = [];
  arr.forEach((item) => {
    // 如果（result）数组中找不到传入的每一项则就将传入的push到result中
    // 数组不包含此项则推入到result中
    // 或者!result.includes(item)
    if (result.indexOf(item) == -1) {
      result.push(item);
    }
  });
  return result;
}
```

## 10. charAt()

方法可返回指定位置的字符

```js
let str = "zhangxiangyang";
str = str.charAt(1);
console.log(str); // h
```

## 11. 生成随机字符串

```js
function randomString(len) {
  let chars = "0123456789abcdefhijkmnprstwxyzABCDEFGHJKMNPQRSTWXYZ";
  let strLen = chars.length;
  let ramdomStr = "";
  for (let i = 0; i < len; i++) {
    ramdomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return ramdomStr;
}
```

```js
// 例如
// 每次页面刷新都会随机6位的字符串
console.log(randomString(6)); //6nnQ7C iBjKCB PCzX7m
```

## 12. 字符串首字母大写

```js
function firstLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

## 13. 手机号中间四位变成 \*

```js
function telFormat(tel) {
  tel = String(tel);
  return tel.substring(0, 3) + "****" + tel.substring(7);
}
```

## 14. 校验是否为中文

```js
function haveCNChars(value) {
  return /^[\u4ee00-\u9fa5]$/.test(value);
}
```

## 15. 校验是否为正确格式的邮箱

```js
function isEmail(value) {
    1524187180@qq.com
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
}
```

## 16. 校验是否为中国大陆手机号

```js
function isTel(value) {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());
}
```

## 17. 判断是移动还是 PC 设备

```js
function isMobile() {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
    )
  ) {
    return "移动端"; //mobile
  }
  return "PC端"; //desktop
}
```

## 18. 从接口请求数据(图片)

**说明：如果请求的图片加载不出来就加载 404 图片**

```js
// url参数是请求的图片地址
function loadImage(url) {
  let img = new Image();
  return Promise((reslove, reject) => {
    img.src = url;
    document.body.appendChild(img);
    img.onload = function () {
      reslove("loading is success!"); // 成功
    };
    img.onerror = function () {
      img.src = `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qdxw.net%2Fmoban_upload%2F2016061456672305.jpg
&refer=http%3A%2F%2Fwww.qdxw.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652313912&t=535a3b7dcb6f97a50cd448c12690328f`;
      reject("loadin is fail"); //失败
    };
  });
}

loadImage(
  "https://img1.baidu.com/it/u=1609678384,586780938&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
).then(
  (result) => {
    console.log("请求成功！");
  },
  (error) => {
    console.log("请求失败！");
  }
);
```

## 19. 返回顶部（带有动画）

```js
function animationBackScrollTop() {
  let timer = null;
  clearInterval(timer);
  timer = setInterval(function () {
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timer);
    } else {
      document.documentElement.scrollTop =
        document.documentElement.scrollTop - 30;
    }
  }, 10);
}
```

## 20. 带有样式的控制台打印

```js
/*
	注：必须带 %c
	然后在第二个引号中写上对应的样式即可
	
	每一个%c后面是一条字符串，也对应一个样式（样式统一写在最后面）
	注：控制台只能输出一段话（用一个单引号），如果要给一句话需要分配需要分配多个样式就是每一句话之前添加一个 %c
*/

// 示例代码
console.log(
  "%c百度2022校园招聘简历投递：https://talent.baidu.com/external/baidu/campus.html",
  "color:red;"
);
console.log(
  // 这里只有一段话，却分成了两句话，所以下面有两个样式（控制对应各自的每一句话）
  "%cvue-devtools%cDetected Vue v2.6.14",
  "color:#fff;background-color:#35495e;border-radius:3px 0 0 3px;padding:1px 5px;",
  "color:#fff;background-color:#41b883;border-radius:0px 3px 3px 0;padding:1px 5px;"
);
```

## 21. 当前时间

```js
function nowtime() {
  let now = new Date();
  let year = now.getFullYear();
  let mouth = now.getMonth() + 1;
  let date = now.getDate() >= 10 ? now.getDate() : "0" + now.getDate();
  let hour = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
  let min = now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
  let sec = now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
  return `${year}年${mouth}月${date}日${hour}:${min}:${sec}`;
}
```

## 22. 阻止冒泡事件

```js
function stopPropagation(e) {
  let e = e || window.event;
  if (e.stopPropagation) {
    e.stopPropagation(); // W3c阻止冒泡方法
  } else {
    e.cancelBubble = true; // IE阻止冒泡方法
  }
}
```

## 23. 防抖函数

```js
// 防抖：用户触发事件过于频繁，只要最后一次事件的操作
// 通过setTimeout的方式，在一定的时间间隔内，将多次触发变成一次触发

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

## 24. 节流函数

```js
// 节流：控制高频事件执行次数(多少秒之内只执行一次)
// 方法1：
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


// 方法2：
function throttle(fn, wait) {
  let timeout; 
  return function () {
    if (!timeout) { 
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(this, arguments)
      }, wait)
    }
  }
}
```

## 25. 打乱数组

**利用内置`Math.random()`方法**

```js
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list.sort(() => {
  return Math.random() - 0.5;
})[
  // 输出（随机排列数组中的元素）（每次结果都不一样）
  (7, 2, 1, 6, 3, 8, 9, 5, 4)
][(1, 6, 7, 8, 4, 2, 5, 9, 3)];
```

## 26. 去除数字之外的所有字符

```js
let str = "XHR 12 Requ 34 est 56";
let result = str.replace(/\D/g, "");
console.log(result); // 123456
```

## 27. 反转字符串或者单词

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}
let str3 = "I love you";
let res = reverseString(str3); // uoy evol I
```

## 28. `===` 和 `==` 的区别

```js

==  ->   类型转换（浅比较）
===  ->   无类型转换（严格比较）

示例：
0 == false  // true
0 === false  // false
1 == '1'  // true
1 === '1'  // false
null == undefined  // true
null === undefined  // false
```

## 29. 解构赋值

```js
// 这是一个 '人' 的对象属性
const person = {
  name: "张三",
  age: 18,
  height: 1.88,
  hobby: ["运动", "写代码", "听音乐"],
};

// 从person中解构出来想要的数据（直接使用即可）
const { name, age, height, hobby } = person;

console.log(name); // 张三
console.log(age); // 18
console.log(height); // 1.88
console.log(hobby); // ['运动', '写代码', '听音乐']
```

## 30. 清空数组

```js
const arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr); // 0
```

## 31. 保留指定位小数

```js
const nums = 190.5635;
const newNums = Number(nums.toFixed(2)); //再将值转换为Number类型
console.log(newNums); // 190.56
```

## 32. do while 循环语句 与 while 循环语句的区别

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

## 33. 随机布尔值

```js
function randomBoolean() {
  return Math.random() < 0.5;
}
```

## 34. [时间戳格式化时间为几分钟前几天前](https://www.jianshu.com/p/ad6c8fa63360)

```js
// compare: 对比；对照
// 将时间转换成几天前，几个月前，几小时前等
formatDate(datetime) {
  const dateTimeStamp = datetime * 1000
  // 分
  const minute = 1000 * 60  // 把分，时，天，周，半个月，一个月用毫秒表示
  // 时
  const hour = minute * 60
  // 天
  const day = hour * 24
  // 周
  const week = day * 7
  // 半月
  const halfamonth = day * 15
  // 月
  const month = day * 30
  const now = new Date().getTime()  //获取当前时间毫秒
  const diffValue = now - dateTimeStamp  // 时间差（现在时间减去以前时间）

  if (diffValue < 0) {
    return '刚刚'
  }

  // 分
  const minC = diffValue / minute		// 计算时间差的分，时，天，周，月
  // 时
  const hourC = diffValue / hour
  // 天
  const dayC = diffValue / day
  // 周
  const weekC = diffValue / week
  // 月
  const monthC = diffValue / month

  // 初始化时间
  let result = ''

  if (monthC >= 1 && monthC <= 3) {
    result = " " + parseInt(monthC) + "个月前"
  } else if (weekC >=1 && weekC <= 3) {
    result = " " + parseInt(weekC) + "周前"
  } else if (dayC >= 1 && dayC <= 6) {
    result = " " + parseInt(dayC) + "天前"
  } else if (hourC >= 1 && hourC <= 23) {
    result = " " + parseInt(hourC) + "小时前"
  } else if (minC >= 1 && minC <= 59) {
    result = " " + parseInt(minC) + "分钟前"
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "刚刚"
  } else {
    const datetime = new Date()
    datetime.setTime(dateTimeStamp)

    // 年
    const Nyear = datetime.getFullYear()
    // 月
    const Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
    // 几号（今天）
    const Nday = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
    // 时
    const Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
    // 分
    const Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
    // 秒
    const Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()

    result = `${Nyear}-${Nmonth}-${Nday} ${Nhour}:${Nminute}:${Nsecond}`
  }

  return result

}
```
