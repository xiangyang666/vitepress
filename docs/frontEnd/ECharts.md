---
title: ECharts
---
# ECharts

## 一个基于 JavaScript 的开源可视化图表库

> ### 官方网址：https://echarts.apache.org/zh/index.html

# 配置对象

> ### https://echarts.apache.org/zh/option.html#title

# 快速上手

> ### 	https://echarts.apache.org/handbook/zh/get-started/

## 柱状图

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #box{
      width:700px;
      height:400px;
    }
  </style>
</head>
<body>
  <!-- 步骤2：准备一个呈现图表的盒子 -->
  <div id="box"></div>
</body>
<!-- 步骤1：引入echarts.js文件 -->
<script src="./lib/echarts.min.js"></script>
<script>
  // 步骤3：初始化echarts实例对象
  // 参数，DOM，决定图表最终呈现的位置
  let mEcharts = echarts.init(document.querySelector('#box'))

  // 步骤4：准备配置项
  // 指定图表的配置项和数据
  let option = {
    xAxis: {    // 直角坐标系 grid 中的 x 轴
      type: 'category',  // 类目轴
      data: ['怡宝','向阳','李白','韩信']   // 数据
    },
    yAxis: {    // 直角坐标系 grid 中的 y 轴
      type: 'value'   // 数值轴，适用于连续数据。
    },
    series: [  // 系列
      {
        type: 'bar', // 柱状图
        name: '体育', // 系列名称
        data: [78, 67, 89, 34]   // 数据
      }
    ]  
  }

  // 步骤5：将配置项设置给echarts实例对象
  // 使用刚指定的配置项和数据显示图表。
  mEcharts.setOption(option)
</script>
</html>
```



## 饼图

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #container{
      width:500px;
      height:500px;
    }
  </style>
</head>
<body>
  <div id="container"></div>
</body>
<script src="./lib/echarts.min.js"></script>
<script>
  let mCharts = echarts.init(document.querySelector('#container'))
  // pieData就是需要设置给饼图的数据，数组，数组中包含一个有一个的对象，每个对象中，需要有name和value
  let pieData = [
    {
      name: '京东',
      value: 2345
    },
    {
      name: '拼多多',
      value: 3456
    },
    {
      name: '7号店',
      value: 945
    },
    {
      name: '话费',
      value: 214
    },
    {
      name: '伙食',
      value: 2461
    }
  ]

  let option = {
    series: [
      {
        type: 'pie',
        data: pieData
      }
    ]
  }

  mCharts.setOption(option)
</script>
</html>
```

