# [SVN](https://www.bilibili.com/video/BV1k4411m7mP?p=1&vd_source=745d1e6dc172f4afa9af1af10c052b04)

> svn 集中式管理代码的工具

1. SVN 是什么?
   - 代码版本管理工具
     它能记住你每次的修改
   - 查看所有的修改记录
   - 恢复到任何历史版本
   - 恢复已经删除的文件
2. SVN 跟 Git 比，有什么优势
   - 使用简单，上手快
   - 目录级权限控制，企业安全必备
   - 子目录 Checkout，减少不必要的文件检出
3. 主要应用
   - 开发人员用来做代码的版本管理
   - 用来存储一些重要的文件，比如合同
   - 公司内部文件共享，并且能按目录划分权限
4. SVN 仓库
   - 推荐: svnbucket.com，SVN 桶
   - 现在最好用的 SVN 服务
5. 安装 SVN 客户端
   - TortoisesVN
   - Cornstone

> svn 文件冲突问题

![](./image/svn%E6%96%87%E4%BB%B6%E5%86%B2%E7%AA%81%E9%97%AE%E9%A2%98.png)

## 分支

- 什么时候需要分支？

 隔离线上版本和开发版本

 大功能开发，你想影响到其他人，自己独立开个分支去开发

- SVN 经典目录结构
  - trunk ----------主干
  - branches-----分支
  - tags-------标记、标签

