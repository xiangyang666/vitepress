---
title: Vue工程化
---
# Vue工程化开发

``` js
 // 快速生成代码片段（配置文件）
https://snippet-generator.app/
```

# Vue CLI：Vue.js 开发的标准工具（脚手架）

**具体步骤**

第一步（仅第一次执行）：全局安装@vue/cli

``` javascript
//完整写法
npm install -global @vue/cli
//简写
npm i -g @vue/cli
```

第二步：切换到你的创建项目的目录，然后使用命令创建项目

``` javascript
vue create 项目名称

//例如：vue create my_project
```

第三步：启动项目

``` javascript
npm run serve
```



**备注：**

1.如出现下载缓慢你可以配置npm淘宝镜像：==npm config set registry==

​	http://registry.npm.taobao.org

2.Vue脚手架隐藏了所有项目webpack相关配置，若想==查看==具体的webpack配置，请执行：==vue-inspect>output.js==

#### 脚手架文件结构

``` javascript
|—— node_modules
|——public
|	|—— favicon.icn:页签图标
|	|—— index.html:主页面
|—— src
|	|——assets：存放静态资源
|	|	|__ logo.png
|	|——	component：存放组件
|	|	|__ HelloWorld.vue组件
|	|—— App.vue: 汇总所有组件
|	|—— main.js: 入口文件
|—— .gitignore: git版本管制忽略的配置
|—— babel.config.js：babel的配置文件
|—— package-lock.json：包版本控制文件
|—— package.json：应用包配置文件
|—— README.md：应用描述文件
```

#### Vue.config.js配置

> 使用Vue.inspect > output.js可以查看到Vue脚手架的默认配置
>
> 使用vue.config.js可以对脚手架进行个性化定制，详细可参考：https://cli.vuejs.org/z

# css中找assets文件夹中的图片（等资源）

``` css
// 要在路径前面加上一个 ~ 符号
.container {
	background-image: url(~@/assets/login_bg1.jpg);
}
```



# ref属性

1.被用来给元素或子组件注册引用信息（id的替代者）

2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）

3.使用方式

​	打标识：==<h1 ref="xxx">......</h1>==   或   ==<School ref="xxx"></school>==

​	获取：==this.$refs.xxx==

``` javascript
//结构
<template>
  <!-- 外边必须包裹一个容器 -->
  <div>
    <h1 ref='title'>大家好，我叫{{name}}</h1>
    <button ref='btn' @click="showDOM">点我输出上方的DOM元素</button>
    <School  ref="sch" />
  </div>
</template>

//交互
import School from './components/School'
export default {
  name: 'App',
  components: {
    School
  },
  data() {
    return {
      name: '张三'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title) // 真实DOM元素
      console.log(this.$refs.btn)  // 真实DOM元素
      console.log(this.$refs.sch) //School组件的实例对象 (vc)  vc ==> VueComponent
    }
  }
}
```



# props配置

功能：让组件接受外部传过来的数据

​	（1）传递数据：

​			<Demo name="xxx" />		//name是自己起的名字     xxx是要传递数据的名字

​	（2）接受数据：

​			第一种方式（只接收）：

​				props:['name']

​			第二种方式（限制类型）：

​				props:{

​						name:String

​				}

​			第三种方式（限制类型、限制必要性、指定默认值）

​				props:{

​					name:{

​						type:String,	//类型

​						required:true	//必传性

​						default：'张三'	//默认值

​					}

​				}

**备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需要确实修改，那么请复制props的内容到data中一份，然后去修改data中的数据(可以把props的值转存到data中，因为data中的数据都是可读的，可写的)**

``` javascript
//其他组件引入Student组件
<Student :age='56'></Student>
<Student name="马化腾" :age="45"></Student>

//Student中
<template>
  <div>
    <h1>欢迎来到:{{schoolName}}城堡</h1>
    <hr>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gender}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="add">age++</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      schoolName: '卡布奇洛',
      //将外界传入的值赋值给data，然后修改data中的数据就能改props里的值了
      myAge: this.age
    }
  },
  //修改值，并同步到页面上
  methods: {
    add() {
      this.myAge++
    }
  },
  // 数组写法
  // props: ['name','age','gender']

  // 对象写法
  props: {
    name: {
      type: String, //字符串类型
      default: '未知'  //默认值
    },
    gender: {
      type: String,	//字符串类型
      default: '女' //默认值
    },
    age: {
      type: Number, //类型
      required:true //必传项
    }
  }
}
</script>
```



# mixin混入

**功能：可以把多个组件共用的配置提取成一个混入对象**

使用方式：

​	第一步定义混入，例如：

​		{

​			data(){......}

​			methods: {......}

​			......

​		}

​	第二步使用混入，例如：

​		（1）全局混入：Vue.mixin(xxx)

​		  (2)  局部混入：mimix:['xxx']

``` javascript
//School组件
<template>
  <div>
    <h1>我叫{{name}},我是来学习Vue的</h1>
    <button @click="showName">点我可以打招呼哦</button>
  </div>
</template>
<script>
//导入mixin.js
import {mixin} from '../mixin'
export default {
  name: 'School',
  data() {
    return {
      name: '张三'
    }
  },
  //使用mixin
  mixins: [mixin]
}
</script>

//Student组件
<template>
  <div>
    <h1>我叫{{name}},我是来学习Vue的</h1>
    <button @click="showName">点我可以打招呼哦</button>
  </div>
</template>
<script>
//导入mixin.js
import {mixin} from '../mixin'
export default {
  name: 'School',
  data() {
    return {
      name: '王五'
    }
  },
  //使用mixin
  mixins: [mixin]
}
</script>

//这两个组件都需要showName方法，写在mixin.js中
//mixin.js
//分别暴露
export const mixin = {
  methods: {
    showName() {
      alert('你好我叫' + this.name)
    }
  }
}
```

``` javascript
//注意在全局混入中,不需要再组件里导入了，直接就在组件的vc上了，自动调用，因为mixin已是全局混入了
//main.js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

import {mixin} from './mixin'
Vue.mixin(mixin)

//创建vm
new Vue({
  el: '#app',
  render: h => h(App)
})
```



# scoped样式

**作用：让样式再局部生效，防止冲突**

写法：<style **scoped**>...... 《/style>

---

/deep/

当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到/deep/

``` javascript
/deep/ h1{
    color:red;
    font-size:18rpx;
}
```





# 总结TodoList案例：

1.组件化编码流程：

​	（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突

​	（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用：

​			1）一个组件再用：放在组件自身即可

​			2）一些组件在用：放在他们共同的父组件上（==状态提升==）

​	（3）实现交互：从绑定事件开始

2.props适用于:

​	（1）父组件==》子组件 通信 

​	（2）子组件==》父组件 通信（要求父先给子一个函数）

3.使用v-model要切记:v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。



# webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API：

   1. ```xxxxxStorage.setItem('key', 'value');```
      		该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

   2. ```xxxxxStorage.getItem('person');```

      ​		该方法接受一个键名作为参数，返回键名对应的值。

   3. ```xxxxxStorage.removeItem('key');```

      ​		该方法接受一个键名作为参数，并把该键名从存储中删除。

   4. ``` xxxxxStorage.clear()```

      ​		该方法会清空存储中的所有数据。

4. 备注：

   1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
   2. LocalStorage存储的内容，需要手动清除才会消失。
   3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
   4. ```JSON.parse(null)```的结果依然是null。

# JSON

- JSON 指的是 JavaScript 对象表示法（**J**ava**S**cript **O**bject **N**otation）
- JSON 是轻量级的文本数据交换格式

## JSON.stringify()      ===>    将 JavaScript 对象转换为字符串

## JSON.parse()     ===>      将数据转换为 JavaScript 对象

# 组件的自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

   1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```

   2. 第二种方式，在父组件中：

      ```javascript
      <Demo ref="demo"/>
      ......
      mounted(){
         this.$refs.xxx.$on('atguigu',this.test)
      }
      ```

   3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('atguigu',数据)```		

5. 解绑自定义事件```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

``` javascript
//App组件
<Student @handleName="getStudentName" @demo="m1" />

methods: {
    getStudentName(name,...params) {
      console.log('App接受到了学生名字',name,params)//可以接受多个参数
      this.stuName = name //赋值操作
    },
    m1() {
      console.log('App触发了')
    }
  },
    
//Student组件
<button @click="sendStudentName">将学生姓名发送给App组件</button>
<button @click="Unbundl">解绑自定义事件</button>

export default {
  name: 'Student',
  data() {
    return {
      studentName: '张某某同学'
    }
  },
  methods: {
    sendStudentName() {
      this.$emit('handleName',this.studentName,1,2,3,4,5,6)//可以传递多个参数
      this.$emit('demo')
    },
    Unbundl() {
      //this.$off('handleName') //解绑一个自定义事件
      //this.$off(['handleName','demo']) //解绑多个自定义事件
      this.$off() //解绑Student组件实例上所有自定义事件
    }
  }
}
```



# 全局事件总线（GlobalEventBus）

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：

   1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```

4. 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。

``` javascript
// 需求：将Student组件的学生名字传给School组件并展示 (两个组件的关系的兄弟关系)
//main.js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  }
}).$mount('#app')

//School组件
<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <button @click="xx">将学校名发送给Student兄弟组件</button>
</div>
</template>
<script>
export default {
  data() {
    return {
      name: '未知'
    }
  },
  methods: {
    demo(name) {
      console.log('接收到Student组件的数据了',name)
      this.name = name
    }
  },
  mounted() {
    this.$bus.$on('getName',this.demo)  //School是接受方，所以要自定义一个事件
  }
}
</script>
//Student组件
<template>
  <div>
    <button @click="hh">发送数据姓名给School兄弟组件</button>
  </div>
</template>
<script>
export default {
  name: 'Student',
  data() {
    return {
      studentName: '张同学',
    }
  },
  methods: {
    hh() {
      this.$bus.$emit('getName',this.studentName)  //发送方发送数据
    }
  }
}
</script>
```



# 消息订阅与发布（pubsub）

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 使用步骤：

   1. 安装pubsub：```npm i pubsub-js```

   2. 引入: ```import pubsub from 'pubsub-js'```

   3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
      }
      ```

   4. 提供数据：```pubsub.publish('xxx',数据)```

   5. 最好在beforeDestroy钩子中，用```PubSub.unsubscribe(pid)```去<span style="color:red">取消订阅。</span>



# nextTick

1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。



# vue脚手架配置代理

### 方法一

​	在vue.config.js中添加如下配置：

```js
devServer:{
  proxy:"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

### 方法二

​	编写vue.config.js配置具体代理规则：

```js
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,	//用于支持webscoket
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,	//用于支持webscoket
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。



# 插槽

1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式：

   1. 默认插槽：

      ```vue
      父组件中：
              <Category>
                 <div>html结构1</div>
              </Category>
      子组件中：
              <template>
                  <div>
                     <!-- 定义插槽 -->
                     <slot>插槽默认内容...</slot>
                  </div>
              </template>
      ```

   2. 具名插槽：

      ```vue
      父组件中：
              <Category>
                  <template slot="center">
                    <div>html结构1</div>
                  </template>
      			// v-slot:footer   简写：  #footer
                  <template v-slot:footer>
                     <div>html结构2</div>
                  </template>
              </Category>
      子组件中：
              <template>
                  <div>
                     <!-- 定义插槽 -->
                     <slot name="center">插槽默认内容...</slot>
                     <slot name="footer">插槽默认内容...</slot>
                  </div>
              </template>
      ```

   3. 作用域插槽：

      1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

      2. 具体编码：

         ```vue
         父组件中：
         		<Category>
         			<template scope="scopeData">
         				<!-- 生成的是ul列表 -->
         				<ul>
         					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
         				</ul>
         			</template>
         		</Category>
         
         		<Category>
         			<template slot-scope="scopeData">
         				<!-- 生成的是h4标题 -->
         				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
         			</template>
         		</Category>
         子组件中：
                 <template>
                     <div>
                         <slot :games="games"></slot>
                     </div>
                 </template>
         		
                 <script>
                     export default {
                         name:'Category',
                         props:['title'],
                         //数据在子组件自身
                         data() {
                             return {
                                 games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                             }
                         },
                     }
                 </script>
         ```

   

# Vuex

**Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享**



##  使用 Vuex 统一管理状态的好处

​	① 能够在 vuex 中集中管理共享的数据，易于开发和后期维护 

​	② 能够高效地实现组件之间的数据共享，提高开发效率 

​	③ 存储在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步



## 什么样的数据适合存储到 Vuex 中

**一般情况下，只有组件之间共享的数据，才有必要存储到 vuex 中；对于组件中的私有数据，依旧存储在组件 自身的 data 中即可。**



##  Vuex 的基本操作使用

#### 第一步：安装 vuex

``` js
npm install vuex --save
```

#### 第二步：导入vuex 包,并创建 store 对象

``` js
// 在store 文件夹 里面新建一个 index.js 文件（写入下面的代码）
// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 创建并默认暴露出 Store 对象
export default new Vuex.Store({
  // 准备state--->用于存储数据
  state: {
      
  },
  // 准备mutations--->用于操作数据（state）
  mutations: {
      
  },
  // 准备actions--->用于响应组件中的动作
  actions: {
      
  } 
})
```

#### 第三步：将 store 对象挂载到 vue 实例中

``` js
// main.js 文件中

// 1. 导入store文件
import store from './store/index.js'   // 后面的index.js可以省略

new Vue({
 el: '#app',
 render: h => h(app),
 // 将创建的共享数据对象，挂载到 Vue 实例中
 // 所有的组件，就可以直接从 store 中获取全局的数据了
 store
})
```



##  Vuex的核心概念

## State

作用：**State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。**

``` js
// 创建store数据源，提供唯一公共数据
export default new Vuex.Store({
  state: { 
    count: 0 	// 存储的数据
  }
})
```

组件访问 State 中数据的<span style="color:red;">第一种方式：</span>

``` js
this.$store.state.全局数据名称

// 例如：
<h1>这个数是: {{ $store.state.count }} </h1> 	//模板语法种不用加 this
```

组件访问 State 中数据的<span style="color:red;">第二种方式：</span>

``` js
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'

// 2. 将全局数据，映射为当前组件的计算属性
// 通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性：
computed: {
  ...mapState(['count'])
}
```



## Mutation

作用：**Mutation 用于变更 Store中 的数据。**

① 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。(不能直接操作this上store里的值进行操作)

 ② 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

``` js
 // store/index.js 中
 // 定义 Mutation
export default new Vuex.Store({
   state: {
    count: 0
   },
   mutations: {
     add(state) {
       // 变更状态
       state.count++
     }
   }
 })

// 组件中
// 触发mutation
 methods: {
   handle1() {
 	  // 触发 mutations 的第一种方式
 	  this.$store.commit('add')
 	}
 } 
```

**可以在触发 mutations 时传递参数：**

``` js
 // 定义Mutation
export default new Vuex.Store({
   state: {
     count: 0
   },
   mutations: {
     // 定义一个方法
     addN(state, value) {
       // 变更状态
       state.count += value
     }
   }
 })

// 组件中
// 触发mutation
methods: {
  handle2() {
    // 在调用 commit 函数，
    // 触发 mutations 时携带参数
    // commit 的作用，就是调用某个 mutation 里的函数
    this.$store.commit('addN', this.num)
  }
} 
```



this.$store.commit() 是触发 mutations 的第一种方式，触发 mutations 的<span style="color:red;">第二种方式：</span>

``` js
// 1. 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
// 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
 ...mapMutations(['add', 'addN'])
}
```



## Action

作用：**Action 用于处理异步任务。**

如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

``` js
 // 定义 Action
 export default new Vuex.Store({
 // ...省略其他代码
 mutations: {
   ADD(state) {
     state.count++
   }
 },
 actions: {
   addAsync(context,value) { //也可以传递参数
     setTimeout(() => {
       context.commit('ADD',value)
     }, 1000)
   } 
 }
}) 
 
  // 触发 Action
 methods: {
   handle() {
     // 触发 actions 的第一种方式
     this.$store.dispatch('addAsync',this.num)
   }
 } 
```

this.$store.dispatch() 是触发 actions 的第一种方式，触发 actions 的<span style="color:red;">第二种方式：</span>

``` js
// 1. 从 vuex 中按需导入 mapActions 函数
import { mapActions } from 'vuex'

//通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：
// 2. 将指定的 actions 函数，映射为当前组件的 methods 函数
methods: {
  ...mapActions(['addASync', 'addNASync'])
}

```



## Getter

作用：**Getter 用于对 Store 中的数据进行加工处理形成新的数据。**

① Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。 

② Store 中数据发生变化，Getter 的数据也会跟着变化。

``` js
 // 定义 Getter
 const store = new Vuex.Store({
   state: {
     count: 0
   },
   getters: {
     showNum: state => {
       return '当前最新的数量是【'+ state.count +'】'
     }
  }
 })

```



使用 getters 的第一种方式：

``` js
this.$store.getters.名称
```

使用 getters 的<span style="color:red;">第二种方式：</span>

``` js
import { mapGetters } from 'vuex'

computed: {
 ...mapGetters(['showNum'])
}
```



## 模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改```store.js```

   ```javascript
   const countAbout = {
     namespaced:true,//开启命名空间
     state:{x:1},
     mutations: { ... },
     actions: { ... },
     getters: {
       bigSum(state){
          return state.sum * 10
       }
     }
   }
   
   const personAbout = {
     namespaced:true,//开启命名空间
     state:{ ... },
     mutations: { ... },
     actions: { ... }
   }
   
   const store = new Vuex.Store({
     modules: {
       countAbout,
       personAbout
     }
   })
   ```

3. 开启命名空间后，组件中读取state数据：

   ```js
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

4. 开启命名空间后，组件中读取getters数据：

   ```js
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

5. 开启命名空间后，组件中调用dispatch

   ```js
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

6. 开启命名空间后，组件中调用commit

   ```js
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```

 ## 

# 路由

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。

### 1.基本使用

1. 安装vue-router，命令：```npm i vue-router```

2. 应用插件：```Vue.use(VueRouter)```

3. 编写router配置项:

   ```js
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
   	routes:[
           {
               path: '/',
               redirect: '/login'    // 重定项的意思是访问 / 的时候 定向到 /login
               component: Login
           },
   		{
   			path: '/about',
   			component: About
   		},
   		{
   			path:'/home',
   			component: Home
   		}
   	]
   })
   
   //暴露router
   export default router
   ```

4. 实现切换（active-class可配置高亮样式）--（这是声明式导航）

   ```vue
   <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置（路由匹配到的组件将渲染在这里）

   ```vue
   <router-view></router-view>
   ```

### 2.几个注意点

1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。

### 3.多级路由（多级路由）

1. 配置路由规则，使用children配置项：

   ```js
   routes:[
   	{
   		path:'/about',
   		component:About,
   	},
   	{
   		path:'/home',
   		component:Home,
   		children:[ //通过children配置子级路由
   			{
   				path:'news', //此处一定不要写：/news
   				component:News
   			},
   			{
   				path:'message',//此处一定不要写：/message
   				component:Message
   			}
   		]
   	}
   ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```

### 4.路由的query参数

1. 传递参数

   ```vue
   <!-- 跳转并携带query参数，to的字符串写法 -->
   <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
   				
   <!-- 跳转并携带query参数，to的对象写法 -->
   <router-link 
   	:to="{
   		path:'/home/message/detail',
   		query:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

2. 接收参数：

   ```js
   $route.query.id
   $route.query.title
   ```

### 5.命名路由

1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                            name:'hello' //给路由命名（在路由跳转时调用  this.$router.push('hello') ）
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
                  title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```

### 6.路由的params参数

1. 配置路由，声明接收params参数

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
   					name:'xiangqing',
   					path:'detail/:id/:title', //使用占位符声明接收params参数
   					component:Detail
   				}
   			]
   		}
   	]
   }
   ```

2. 传递参数

   ```vue
   <!-- 跳转并携带params参数，to的字符串写法 -->
   <router-link :to="/home/message/detail/666/你好">跳转</router-link>
   				
   <!-- 跳转并携带params参数，to的对象写法 -->
   <router-link 
   	:to="{
   		name:'xiangqing',
   		params:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

   > 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：

   ```js
   $route.params.id
   $route.params.title
   ```

### 7.路由的props配置

​	作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

### 8.```<router-link>```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```

### 9.编程式路由导航

1. 作用：不借助```<router-link> ```实现路由跳转，让路由跳转更加灵活

2. 具体编码：

   ```js
   //$router的两个API
   this.$router.push({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
   
   this.$router.replace({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
   this.$router.forward() //前进
   this.$router.back() //后退
   this.$router.go() //可前进也可后退
   ```

### 10.缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁。

2. 具体编码：

   ```vue
   // 缓存一个路由组件
   <keep-alive include="News">    // News为组件的名字（具体是每个组件的name属性里的(值)名字）
       <router-view></router-view>
   </keep-alive>
   
   // 缓存多个路由组件
   <keep-alive :include="['News', 'Message']">    // News为组件的名字（具体是每个组件的name属性里的(值)名字）
       <router-view></router-view>
   </keep-alive>
   ```

### 11.两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字：
   1. ```activated```路由组件被激活时触发。
   2. ```deactivated```路由组件失活时触发。

### 12.路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

3. 全局守卫:

   ```js
   //全局前置守卫：初始化时执行、每次路由切换前执行
   router.beforeEach((to,from,next)=>{
   	console.log('beforeEach',to,from)
   	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
   		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
   			next() //放行
   		}else{
   			alert('暂无权限查看')
   			// next({name:'guanyu'})
   		}
   	}else{
   		next() //放行
   	}
   })
   
   //全局后置守卫：初始化时执行、每次路由切换后执行
   router.afterEach((to,from)=>{
   	console.log('afterEach',to,from)
   	if(to.meta.title){ 
   		document.title = to.meta.title //修改网页的title
   	}else{
   		document.title = 'vue_test'
   	}
   })
   ```

4. 独享守卫:

   ```js
   beforeEnter(to,from,next){
   	console.log('beforeEnter',to,from)
   	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
   		if(localStorage.getItem('school') === 'atguigu'){
   			next()
   		}else{
   			alert('暂无权限查看')
   			// next({name:'guanyu'})
   		}
   	}else{
   		next()
   	}
   }
   ```

5. 组件内守卫：

   ```js
   //进入守卫前：通过路由规则，进入该组件时被调用
   beforeRouteEnter (to, from, next) {
   },
   //离开守卫后：通过路由规则，离开该组件时被调用
   beforeRouteLeave (to, from, next) {
   }
   ```

### 13.路由器的两种工作模式



1. 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3. hash模式：
   1. 地址中永远带着#号，不美观 。
   2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
   3. 兼容性较好。
4. history模式：
   1. 地址干净，美观 。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
