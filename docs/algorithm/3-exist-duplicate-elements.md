---
title: 存在重复元素
---
# 存在重复元素
> 给你一个整数数组nums。如果任一值在数组中出现至少两次，返回`true`;如果数组中每个元素互不相同 ，返回`false`

示例 1：

输入：nums = [1,2,3,1]
输出：true
示例 2：

输入：nums = [1,2,3,4]
输出：false
示例 3：

输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true

## 方法一
```js
let containsDuplicate = function (nums) {
  // 对数组去重
  let res = Array.from(new Set(nums))
  // 去重后的数组跟传进来的数组长度进行对比，如果res长度不等于nums长度，则说明有重复元素，反之
  if (res.length !== nums.length) {
    return true
  }
  return false
}
```