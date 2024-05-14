---
title: 旋转数组
---
# 旋转数组
[视频链接](https://www.bilibili.com/video/BV1eq4y1A73T/?spm_id_from=333.337.search-card.all.click&vd_source=745d1e6dc172f4afa9af1af10c052b04)

> 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

```js
/**
 * 示例1：
    输入: nums = [1,2,3,4,5,6,7], k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右轮转 1 步: [7,1,2,3,4,5,6]
    向右轮转 2 步: [6,7,1,2,3,4,5]
    向右轮转 3 步: [5,6,7,1,2,3,4]
*/
```

## 方法一
**循环：每次取出数组的最后一位（pop），然后插入到数组的最前面（unshift）**

**这里的k值可能比数组的长度大（假如数组长度为7, k为3）**

**翻转的次数为：3 % 7 = 3   翻转3次**
```js
  let rotate = function (nums, k) {
    // 算出需要旋转多少次
    const step = k % nums.length

    for(let i=0; i<step; i++) { // 循环step次
      const last = nums.pop() // 每循环一次将最后一个数组元素添加到last
      nums.unshift(last)  // 将last添加到nums的开头
    }

    return nums // 返回结果
  }
```

## 方法二
**slice() -> 不改变数组本身**
```js
  var rotate = function(nums, k) {
    // 得到需要翻转的次数
    const step = k % nums.length

    return nums.slice(-step).concat(nums.slice(0, nums.length - step))
  };
```

## 方法三
**splice() -> 改变数组本身**
```js
  var rotate = function(nums, k) {
    // 得到需要翻转的次数
    const step = k % nums.length

    return nums.splice(-step).concat(nums)
  };
```
