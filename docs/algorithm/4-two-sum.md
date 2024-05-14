---
title: "两数之和"
---

# 两数之和

[视频链接](https://www.bilibili.com/video/BV1tu41167so/?spm_id_from=333.337.search-card.all.click&vd_source=745d1e6dc172f4afa9af1af10c052b04)

> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

示例 1：

输入：nums = [2,7,11,15], target = 9

输出：[0,1]

解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

## 1. 暴力破解法

- 使用一层循环，每次循环计算差值
- 通过 indexOf()方法判断，差值是否在数组中，
- 如果存在，则返回两个值得索引
- 如果不存在，则返回[]

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let diffIndex = nums.indexOf(diff);
    if (diffIndex !== -1 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return [];
};
```
