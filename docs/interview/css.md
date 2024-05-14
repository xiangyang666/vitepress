---
title: css
---

# CSS

## 画一个三角形

```html
<div class="box"></div>
```

```css
.box {
  width: 0;
  height: 0;
  border: 100px solid transparent;
  border-bottom-color: red;
}
```

## flex 布局怎么把元素怎么放到右上角/右下角

## 点击高亮的选项卡怎么实现

## 怎么清除浮动

## div 怎么垂直水平居中

## 怎么画 0.5px 的线

## 说一下盒模型

> 可以认为每个 html 标签都是一个方块，然后这个方块又包了几个小方块，如果盒子一层层的包裹着，这就是所谓的盒模型

> 每个 HTML 元素都可以看作一个盒子，这个盒子由里到外由这个元素的内容 content 边框 border 内边距 padding 外边距 margin 组成

> 盒模型分为标准盒模型(W3C 标准盒模型)和 IE 盒模型(怪异盒模型)

1. 标准盒模型：

   - 属性 width、height、只包含内容 content，不包含 border 和 padding

   - 总宽度 = width + border + padding + margin

2. IE 盒模型：

   - 属性 width,height 包含 border 和 padding，指的是 content+padding+border

   - width 不是内容的宽度
   - width = content + 内边距 + 边框

> 正常情况默认是标准盒模型，但是我们可以通过 box-sizing 属性来指定盒模型类型。  
> 标准盒模型：box-sizing: content-box;  
> IE 盒模型：box-sizing: border-box;

## 为什么在标签上用用 style 写样式有弊？

## BFC 是什么？

`BFC`全称：`Block Formatting Context`， 名为 "块级格式化上下文"。

`W3C`官方解释为：`BFC`它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，`Block Formatting Context`提供了一个环境，`HTML`

简单来说就是，`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用`BFC`呢，`BFC`可以看做是一个`CSS`元素属性

### 怎样触发 BFC

这里简单列举几个触发`BFC`使用的`CSS`属性

- overflow: hidden
- display: inline-block
- position: absolute
- position: fixed
- display: table-cell
- display: flex
