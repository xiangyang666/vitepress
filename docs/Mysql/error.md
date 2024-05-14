# 常见出现的问题

## mysql密码忘了怎么办？

1. 暂停服务

> net stop mysql

2. 打开D:\Software\MySql\my.ini文件

>添加`skip-grant-tables=1`这段代码（skip-grant-tables）
>
>注：可以不用密码就直接登录mysql

3. 