import{_ as s,c as a,o as n,V as p}from"./chunks/framework.6038b03e.js";const d=JSON.parse('{"title":"uniapp","description":"","frontmatter":{},"headers":[],"relativePath":"base/uniapp.md","lastUpdated":null}'),l={name:"base/uniapp.md"},e=p(`<h1 id="uniapp" tabindex="-1"><a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noreferrer">uniapp</a> <a class="header-anchor" href="#uniapp" aria-label="Permalink to &quot;[uniapp](https://uniapp.dcloud.net.cn/)&quot;">​</a></h1><h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><blockquote><p><code>uni-app</code> 是一个使用 <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a> 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。</p></blockquote><blockquote><p><code>uni-app</code>一套代码，运行到多个平台</p></blockquote><p><strong>一个 uni-app 工程，就是一个 Vue 项目</strong></p><h1 id="目录结构" tabindex="-1"><a href="https://uniapp.dcloud.net.cn/tutorial/project.html" target="_blank" rel="noreferrer">目录结构</a> <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;[目录结构](https://uniapp.dcloud.net.cn/tutorial/project.html)&quot;">​</a></h1><p>一个uni-app工程，默认包含如下目录及文件：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">┌─uniCloud              云空间目录，阿里云为uniCloud</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">aliyun</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">腾讯云为uniCloud</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">tcb</span></span>
<span class="line"><span style="color:#A6ACCD;">│─components            符合vue组件规范的uni</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">app组件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─comp</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue         可复用的a组件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─utssdk                存放uts文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─pages                 业务页面文件存放的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─index</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue       index页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─list</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue        list页面</span></span>
<span class="line"><span style="color:#A6ACCD;">├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此</span></span>
<span class="line"><span style="color:#A6ACCD;">├─uni_modules           存放[uni_module](</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">uni_modules)。</span></span>
<span class="line"><span style="color:#A6ACCD;">├─platforms             存放各平台专用页面的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├─nativeplugins         App原生语言插件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─nativeResources       App端原生资源目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─android            Android原生资源目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├─hybrid                App端存放本地html文件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├─wxcomponents          存放小程序组件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├─unpackage             非工程代码，一般存放运行或发行的编译结果</span></span>
<span class="line"><span style="color:#A6ACCD;">├─AndroidManifest</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml   Android原生应用清单文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js               Vue初始化入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue               应用配置，用来配置App全局样式以及监听 应用生命周期</span></span>
<span class="line"><span style="color:#A6ACCD;">├─manifest</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json         配置应用名称、appid、logo、版本等打包信息</span></span>
<span class="line"><span style="color:#A6ACCD;">├─pages</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json            配置页面路由、导航条、选项卡等页面类信息</span></span>
<span class="line"><span style="color:#A6ACCD;">└─uni</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scss              这里是uni</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">app内置的常用样式变量</span></span></code></pre></div><h1 id="设置底部tab栏" tabindex="-1"><a href="https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar" target="_blank" rel="noreferrer">设置底部tab栏</a> <a class="header-anchor" href="#设置底部tab栏" aria-label="Permalink to &quot;[设置底部tab栏](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)&quot;">​</a></h1>`,9),o=[e];function t(c,r,i,A,C,u){return n(),a("div",null,o)}const y=s(l,[["render",t]]);export{d as __pageData,y as default};
