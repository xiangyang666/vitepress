import{_ as s,o as n,c as a,V as l}from"./chunks/framework.6038b03e.js";const C=JSON.parse('{"title":"工院派大星-后端","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/工院派大星-后端.md","lastUpdated":1689329354000}'),p={name:"frontEnd/工院派大星-后端.md"},o=l(`<h1 id="工院派大星-后端" tabindex="-1">工院派大星-后端 <a class="header-anchor" href="#工院派大星-后端" aria-label="Permalink to &quot;工院派大星-后端&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 简单的写一下需求：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 前端：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *         </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 后端：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 数据库里的字段（快递订单）：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 当前订单的数据id（递增的）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单ID</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单号</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单创建时间（下单时间）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单支付时间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单支付代码（id：支付订单号）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 用户id（可有可无）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 发布者名字</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 发布者头像</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 发布者电话</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员的性别限制</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 起点</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 终点</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 取件码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 取件码的截屏有关信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单备注</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 期望送达时间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 快递数量</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 快递大小（小|中|大）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单小费</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单总金额</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员id</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员名字</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员头像</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员电话</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员接单时间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 配送员完成时间（由配送员点击完成）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 订单状态（-1用户取消了订单  0已发布（待接单）  1已接单（待骑手完成|派送中） 2已完成交易）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 收货码（骑手必须拿到用户的取件码才可以完成订单）（防止配送员半路不想去了）       </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *      注意：收货码是用户创建订单的时候生成的（供配送员使用）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">前端：</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chooseImage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">chooseImageRes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">chooseImageRes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uploadFile</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://zxycode.loca.lt/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//仅为示例，非真实的接口地址</span></span>
<span class="line"><span style="color:#F07178;">                fileType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">uploadFileRes</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">uploadFileRes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">urlList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">uploadFileRes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showToast</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传成功！</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">后端：</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">koa-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> multer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@koa/multer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 路径前缀</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// router.prefix(&quot;/api&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> storage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> multer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">diskStorage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//配置图片上传的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">destination</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cb</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">cb</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">public/uploads/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//注意路径必须存在</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//图片上传完成重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cb</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 获取后缀名</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// var fileFormat = file.originalname.split(&#39;.&#39;);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// cb(null, Date.now() + &quot;.&quot; + fileFormat[fileFormat.length - 1]);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// cb(null, file.fieldname + &#39;-&#39; + Date.now() + &#39;.jpg&#39;); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">formatTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFullYear</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMonth</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDate</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">// 获取年月日</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">cb</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">formatTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)    </span><span style="color:#676E95;font-style:italic;">// 设置文件名</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//加载配置</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> upload </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">storage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> storage </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> upload</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">single</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// console.log(&#39;ctx：&#39;, ctx.request.file.filename)  // 文件名</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:4000/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filename</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ctx.request.file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filename</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">//返回在线图片url地址</span></span>
<span class="line"><span style="color:#F07178;">      message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传成功</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">204</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">上传失败</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> router</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,4),e=[o];function t(c,r,y,F,D,i){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{C as __pageData,f as default};
