---
title: 删除排序数组中的重复项
---
# 删除排序数组中的重复项

> 要求返回新数组的长度



### 方法一
``` js
function removeDuplicates(nums) {
  let i = 0

  for (; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(1, i)
      i--
    }
  }

  return i
}
```

### 方法二
**双指针法**

[视频教程](https://www.bilibili.com/video/BV17441127WD/?spm_id_from=333.337.search-card.all.click&vd_source=745d1e6dc172f4afa9af1af10c052b04)
``` js
function removeDuplicates(nums) {
  let child = 0, father = 0

  for (; father<nums.length; father++) {
    if (nums[child] !== nums[father]) {
      child++
      nums[child] = nums[father]
    }
  }

  return child + 1
}