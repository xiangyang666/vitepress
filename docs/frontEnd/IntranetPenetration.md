---
title: "内网外射"
---

# 内网外射（把本地的一个端口映射为一个外网地址）

## 将本地项目的项目放到外网来运行

举例：自己写好的 api 接口，vue 项目，node 文件......就能让外网的访问了

国内免费的方法：[natapp](https://natapp.cn/)

## 以这个简单的 api 接口为例（首先要保证这个端口的服务已启动）

```js
const express = require("express");

const app = express();

app.get("/api/login", (req, res) => {
  res.send({
    code: 200,
    message: "hello world",
  });
});

app.listen(8080, () => {
  console.log("express server running...");
});
```

```js
// 本地项目中安装
npm i localtunnel
作用：
	1. 启动项目
    	npm localtunnel --port 8080     // 后面的为端口号为项目的端口号
	2. 然后终端会给你个url地址直接访问就行（域名是随机生成的）
    	如果想自定义域名可以这样设置
        npm localtunnel --port 8080 --subdomain zxycode    // --subdomain 后面的值就是自定义的域名

// 在全局安装一个localtunnel插件
npm i -g localtunnel
作用：
	// 全局安装的话可以这样启动
		lt --port 8080
		lt --port 8080 --subdomain zxycode
```

```js
// 以上面的项目为例（全局启动为例并自定义端口号）
// 这是发送给你的 网址  https://zxycode.loca.lt/
// 访问自己的写的api接口（网站后加上接口地址就可以了）

https://zxycode.loca.lt/api/login
```

如果你改了项目代码需要重新执行一下

`lt --port 8080 --subdomain zxycode`

### 家人们，现在你是不是成功了，哈哈，是不是很简单!
