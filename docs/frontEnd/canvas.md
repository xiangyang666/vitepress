---
title: canvas
---
# 什么是 canvas ？

Canvas API（画布）是在[HTML5](https://baike.baidu.com/item/HTML5/4234903?fromModule=lemma_inlink)中新增的标签用于在网页实时生成图像，并且可以操作图像内容，基本上它是一个可以用JavaScript操作的位图

Canvas 对象表示一个 HTML 画布元素 -《canvas》。它没有自己的行为，但是定义了一个 [API](https://baike.baidu.com/item/API/10154?fromModule=lemma_inlink) 支持脚本化客户端绘图操作。

# 1.理解canvas的x轴和y轴的坐标

https://www.modb.pro/db/418935

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20220616_51b3a818-ed5e-11ec-b28f-fa163eb4f6be.png)

# 2. 画直线



``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }
    #cvs {
      height: 500px;
      width: 500px;
      border: 2px solid #aaa;
      margin: 10px auto;
      /* 因为canvas是行内元素，所以display属性值为block就可以改为块级元素。 */
      display: block;
    }
  </style>
</head>
<body>
  <canvas id="cvs"></canvas>
  <script>
    // 1.获取画布
    const cvs = document.querySelector('#cvs')
    // 2.获取画布的上下文
    const ctx = cvs.getContext('2d');
    // 3.开始一条路径
    ctx.beginPath()
    // 4.确定起始点
    ctx.moveTo(50, 50)
    // 5.确定结束点
    ctx.lineTo(200, 50)

    /**
     * 在着色之前设置颜色和线宽
    */
    // 设置颜色
    ctx.strokeStyle = 'red'
    // 设置线条的粗细
    ctx.lineWidth = 5;


    // 6.着色
    ctx.stroke()
    // 7.结束路径
    ctx.closePath()
  </script>
</body>
</html>
```



