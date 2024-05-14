---
title: css技巧
---

## 1.选中文字的时候操作的样式

```css
/*选中文字的时候操作的样式*/
h1::selection{
    background-color: red;
    color: #fff;
}	
```

## 2.操作首字母

```css
/*操作首字母*/
h1::first-letter{
    font-size:7rem;
}
```

## 3.CSS 变量

规范：

- 用两个“-”开头表示声明变量，如：--white-color: #fff;
- 用var(...)引用变量值，如：background: var(--white-color);

var() 函数用于插入 CSS 变量的值。语法如下：

```css
var(name, value)
name: 必需。变量名（以两条破折号开头）。
value: 可选。回退值（在未找到变量时使用）。
```

注释：**变量名称必须以两个破折号（--）开头，且区分大小写！**

```  css
// 1、定义全局变量
:root {
  --color: #ccc;
}

// 2、定义某元素下的变量
.container{
  --color: #ccc;
}

// 3、定义媒体查询下的变量
@media screen and (min-width: 1025px) { 
    :root { 
        --color: #ccc;
　　 }
}

// 使用：
div{
    // 使用全局变量（如果找不到的变量就，会默认会使用，第二个参数）
    background-color: var(--color, red);
}
```

## 4.flex 中列表最后一行元素左对齐

``` css
.box{
    width:500px;
    border: 1px solid #000;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.box div{
    width:30%;
    height:100px;
    text-align: center;
    line-height:100px;
    font-size:50px;
    margin-bottom:20px;
}
.box div:nth-child(even) {
    background-color: aqua;
}
.box div:nth-child(odd) {
    background-color: pink;
}

// 只需写这行代码就行
.box::after{
    content: "";
    width: 30%;
    height: 100px;
}
```

``` html
<div class="box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>
```

## 5.按钮涟漪效果

``` css
// css
/*按钮涟漪效果*/
.btn01{
    height:70px;
    width: 120px;
    font-size:30px;
    margin-top:20px;
    border-radius:10px;
    border-color:#000;
    cursor: pointer;
    background-color: #ef5858;
    color:#fff;
    position: relative;
}
.mask{
    width:0%;
    height:0%;
    background-color: #ccc;
    display: inline-block;
    border-radius:50%;
    position: absolute;
    left:50%;
    top:50%;
}
.btn01:hover .mask{
    animation:mask-1 .4s linear;
}
@keyframes mask-1{
    0%{
        width:1px;
        height:1px;
        opacity:1;
        transform: scale(0);
    }
    100%{
        width:1px;
        height:1px;
        opacity:0;
        transform: scale(100);
    }
}
// html
<button class="btn01">按钮1<span class="mask"></span></button>
```

## 6.box-shadow阴影

``` css
box-shadow: x偏移量 y偏移量 阴影模糊半径 阴影扩散半径 阴影颜色 位置
// 位置默认是外部(outset)不用写(写了整个效果完全消失)   内部：inset
// 颜色默认是 黑色(#000)

.box {
    box-shadow: 10px 10px 30px 5px #000;
}
```

## 7. 设置网页页签图标

``` js
<link rel="icon" href="图片路径"></link>
```

## 8. 删除输入框获取焦点时的黑色默认边框

``` css
.input {
    outline: none;
}
```

## 9. 纯css实现电梯导航

**通过锚点移动到指定的位置，只不过这样没有动画（要加上以下代码才有动画）**

``` css
html {
    /* 页面滚动条滑动 */
    scroll-behavior: smooth;
}
```

## 10.如何去除'input'标签输入的历史记录

``` html
<input autocomplete="off"></\input>

// off：表示关闭历史记录
   on：表示开启历史记录
```

## 11. 不展示背景颜色

``` css
div{
    background-color: unset;	// unset：不设置该属性
}
```

## 12. 将网页变成灰色

``` css
html{
    filter: grayscale(100%);	// 0~100控制灰度大小
}
```

## 13. 单行省略

https://blog.csdn.net/weixin_55472979/article/details/126421297

``` css
p {
    overflow: hidden;（文字长度超出限定宽度，则隐藏超出的内容）
    white-space: nowrap;（设置文字在一行显示，不能换行）
    text-overflow: ellipsis;（规定当文本溢出时，显示省略符号来代表被修剪的文本）
}
```



## 14. 两行省略

``` css
p {
  overflow: hidden;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
    
   -----------------------------------------------------------------------------------
   -webkit-line-clamp: 2;（用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性）
display: -webkit-box;（和 1 结合使用，将对象作为弹性伸缩盒子模型显示 ）
-webkit-box-orient: vertical;（和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 ）
overflow: hidden;（文本溢出限定的宽度就隐藏内容）
text-overflow: ellipsis;（多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本)		
}
```

## 15. 滚动条伪元素样式属性整合（自定义滚动条样式）

``` css
// 整个滚动条
::-webkit-scrollbar

// 滚动条滑动块
::-webkit-scrollbar-thumb

// 滚动条的上下按钮
::-webkit-scrollbar-button

// 除滑动块以外的滚动条部分
::-webkit-scrollbar-track-piece

// 横竖滚动条交界的角落区域
::-webkit-scrollbar-corner
```

## 16. 去除'textarea'标签右下角可伸缩三角标

``` css
textarea {
    resize: none;
}
```

## 17. 滚动条样式（scrollbar）

``` css
/* 滚动槽 */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0,0,0,0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}
```



