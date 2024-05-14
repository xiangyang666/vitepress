---
title: Vue基础
---
# Vue.js

---

​		官网：[Vuejs.org](https://cn.vuejs.org/)

​		Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## vue的特点

+ 采用组件化模式，提高代码复用性、且让代码更加维护。
+ 声明式编码，让编码人员无需直接操作DOM，提高开发效率。
+ Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统



## 初识Vue

+ 想要Vue工作，就必须创建一个Vue实例，且要传入一个配置对象

```javascript
// html代码
//准备好一个容器
<div id="root">
    <h1>这是我对Vue说的话：【【 message 】】</h1>
</div>

//js代码
//创建Vue实例
new Vue({
    el: '#root', //el用于指定当前实例为哪个容器服务，值通常为css选择器字符串
    data: {	//data中用于存储数据，数据供el所指定的容器去使用。
        message: 'Hello World' 
    }
})
```

+ root容器中的代依旧遵循html代码规范,只不过混入了一些Vue的语法
+ root容器里的代码统称为【Vue模板】
+ Vue实例和容器是一一对应的
+ 真实开发中中有一个Vue实例，并且会配合着组件一起使用
+ 【【xxx】】中的xxx要写js表达式，且xxx可以自动读取data中的所有属性
+ 一旦data中的数据发生变化，那么页面中用到该数据的地方也会自动更新

**注：Vue.config.productionTip  =  false   //阻止 vue 在启动时生成生产提示**



## Vue模板语法有2大类

​	**1.插值语法：**

​			功能：用户解析标签提内容

​			写法：【【xxx】】,xxx是js表达式，且可以直接读取到data中的所有属性

​	**2.指令语法：**

​			功能：用于解析标签（包括：标签属性、标签体内容、绑定事件......）

​			==v-bind==指令：动态绑定属性

``` javascript
//html
<div id="root">
//插值语法
<h1>一句话：【【 message 】】</h1>
<!-- 动态绑定标签属性 -->
 <a v-bind:href="url">百度一下001</a>
<a :href="url">百度一下002</a>
</div>

//js
new Vue({
    el: '#root',
    data: {
        message: 'Hello World',
        url: 'https://www.baidu.com'
    }
})
```



## Vue数据绑定

+ .**Vue中有2种数据绑定的方式：**

  1.单项数据绑定(v-bind):  数据只能从data流向页面

  2.双向数据绑定(**==v-model==**): 数据不仅能从data流向页面，还可以从页面流向data

  ​	**备注：**

  ​			1.双向绑定一般应用在表单类元素上（如：input、select等）

  ​			2.**==v-model:value==**  可以简写为   **==v-model==**，因为v-model默认收集的就是value值




``` javascript
//html
<div id="root">
    <!-- 普通写法 -->
    单向数据绑定：<input type="text" v-bind:value="name" /> <br />
    双向数据绑定：<input type="text" v-model:value="name" />
    <hr>
    <!-- 简写方式 -->
    单向数据绑定：<input type="text" :value="name" /> <br />
    双向数据绑定：<input type="text" v-model="name" />
  </div>
//js
new Vue({
    el: '#root',
    data: {
        name: 'vue.js' //数据
    }
})
```





## el与data的两种写法

**1.el有两种写法**

+ (1) new Vue时候配置el属性
+ (2) 先创建vue实例，随后再通过vm.$mount('#root')指定el的值

**2.data有两种写法**

+ (1) 对象式
+ (2) 函数式

**3.一个重要原则：**

+ 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了

``` javascript
//html
<div id="root">
    <h1>名字：【【name】】</h1>
	<h1>年龄：【【age】】</h1>
</div>

//js
//第一种方式
new Vue({
    //第一种el
    el: '#root',
    //对象式
    data: {
    	name: '张三',
    	age: 18
   }
})
//第二种方式
new Vue({
    data:function() {
        return {
            name: '张三'，
            age：18
        }
    }
}).$mount('#root')
```



## 理解MVVM

![](https://img-blog.csdnimg.cn/20190218151740267.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNzYxNTkx,size_16,color_FFFFFF,t_70)

**MVVM模型**

  		1. M: 模型(Model):  data中的数据
  		2. V:  视图(View):  模板代码
  		3. VM：视图模型(ViewModel): Vue实例

**观察发现：**

​	1.data中的所有属性，最后都出现在了vm身上。

​	2.vm身上所有的属性  及  Vue原型上所有属性，在Vue模板中都可以直接使用





## 事件处理

#### **1.事件的基本使用**

**1.使用==v-on：xxx==	或	==@xxx==绑定事件，其中xxx是事件名(要触发什么事件：如click，moveover...)**

> 全写方式	v-on：xxx

``例如： <button v-on:click="hander"></button``

> 简写形式	@xxx

``例如： <button @click="hander"></button``

**2.事件的回调需要配置在methods对象中，最终会在vm上**

**3.methods中的配置的函数，不要用箭头函数！否则this就不是vm了**

**4.methods中的配置的函数，都是被Vue所管理的函数，this的指向是vm  或  组件实例对象**

**5.@click="hander"	和	@click="hander($event)"    效果一样，但后者可以传参**



```javascript
//html
<div id="root">
    <h1>你的名字是：【【name】】</h1>
	<button v-on:click="showInfo1">全写形式--按钮</button>
	<button @click="showInfo2($event,666)">简写形式--按钮</button>
</div>

//js
new Vue({
    el: '#root',
    data: {
        name: 'Vue.js'
    },
    methods: {
        showInfo1() {
            alert("你的名字为：" + this.name)
        },
        showInfo2(e,number) {
            console.log('你的名字为：' + this.name + '\n' + '传入的数字为：' + number)
            console.log(e)
        }
    }
})
```



#### 2.事件修饰符

+ prevent: 阻止默认事件 (常用)
+ stop: 阻止事件冒泡 (常用)
+ once：事件只触发一次 (常用)
+ capture: 使用事件的捕获模式
+ self：只有event.target是当前操作的元素时才能触发事件
+ passive: 事件的默认行为为立即执行，无需等待事件回调执行完毕

```javascript
//html
<div id="root">
    <!-- prevent: 阻止默认事件 (常用) -->
    <a :href="url" @click.prevent="showInfo">去百度一下吗？</a>
    <!-- stop: 阻止事件冒泡 (常用) -->
    <div class="box" @click="hander">
      爸爸
      <div class="son" @click.stop="hander">儿子</div>
    </div>
    <!-- once：事件只触发一次 (常用) -->
    <button @click.once="clickOnce">按钮点击只触发一次</button>
    <!-- capture: 使用事件的捕获模式 -->
    <div class="box" @click.capture="hander02(1)">
      box01爸爸
      <div class="son" @click="hander02(2)">box02儿子</div>
    </div>
    <!-- self：只有event.target是当前操作的元素时才能触发事件 -->
    <div class="box" @click.self="hander03">
      box01爸爸
      <div class="son" @click="hander03">box02儿子</div>
    </div>
    <!-- passive: 事件的默认行为为立即执行，无需等待事件回调执行完毕 -->
</div>

//js
new Vue({
    el: '#root',
    data: {
      url: 'http://www.baidu.com'
    },
    methods: {
      showInfo() {
        console.log("阻止事件默认行为了")
      },
      hander() {
        console.log(" 阻止事件冒泡了")
      },
      clickOnce() {
        console.log("我只触发一次")
      },
      hander02(number) {
        console.log(number)
      },
      hander03() {
        console.log('haha')
      }
    }
 })
```

#### 3.键盘事件

**1.Vue中常见的按键别名：**

+ enter ---》回车
+ delete ---》删除
+ esc ---》退出
+ backspace ---》退格
+ space ---》空格
+ tab ---》换行
+ 上 ---》 up
+ 下 ---》 down
+ 左 ---》 left
+ 右 ---》 right

``` javascript
//html
<input type="text" @keydown.enter="hander">
<input type="text" @keydown.delete="hander">
<input type="text" @keydown.down="hander">
    
//js
new Vue({
    el: '#root',
    methods: {
        hander(e) {
            console.log(e.target.value) //在控制台打印值（按下指定键的前提下）
        }
    }
})
```



**2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名和小写）**

```javascript
<input type="text" @keydown.caps-lock="hander">  //这样写才会触发，否则不行
```



**3.系统修饰符（用法特殊）：ctrl、alt、shift、meta(win键)**

​		**(1).配合keyup使用：按下修饰键的同时、再按下其他键，随后释放其他键，事件才会触发**

​		**(2).配合keydown使用：正常触发事件。**

``` javascript
<input type="text" @keyup.ctrl="hander">  //只有在使用keyup才会出现这种情况
```



**4.也可以使用keyCode去指定具体的按键（不推荐）**

``` javascript
<input type="text" @keyup.13="hander">  //不推荐
```



**5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名**

``` javascript
//进行使用
<input type="text" @keyup.zxyhuiche="hander">
//进行配置
Vue.config.keyCodes.zxyhuiche = 13  //13表示的是回车的按键码
```



**注意：**

``` javascript
//1.事件修饰可以连续写
<div click="handle">
    <a @click.stop.prevent="handle" href="http://www.baidu.com"></a>
</div>

//2.也可以单独按键连续写触发单个事件
<input type="text" @keyup.ctrl.s="handle" />
```



## 计算属性(computed)

1.定义：要用的属性不存在，要通过已有的属性计算得来。

2.原理：底层借助了Object.defineproperty方法提供的getter和setter。

3.get函数什么时候执行？

+ 初次读取时会执行一次
+ 当依赖的数据发生变化改变时会被再次调用

4.优势：与methods实现对比，内部有缓存机制（复用），效率更高，调试方便

5.备注：

​	1.计算属性最终会出现在vm上，直接读取使用即可

​	2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生变化

``` javascript
//html
<div id="root">
    姓：<input type="text" v-model="firstName" /> <br><br>
    名：<input type="text" v-model="lastName" /> <br><br>
    全名：<span>【【 fullName 】】</span>
</div>

//js
const vm = new Vue({
    el: "#root",
    data: {
      firstName: '张',
      lastName: '三'
    },
    //完整写法
    computed: {
      fullName: {
        get() {
          console.log('get被调用了')
          console.log(this) //此处this是vm
          return this.firstName + '-' + this.lastName
        },
        //set什么时候调用，当fullName被修改时，
        set(value) {
          console.log("set",value)
          const arr = value.split('-')
          this.firstName = arr[0]
          this.lastName = arr[1]
        }
      }
    }
 })
```



**计算属性简写方式**

``` javascript
//html
<div id="root">
    姓：<input type="text" v-model="firstName" /> <br><br>
    名：<input type="text" v-model="lastName" /> <br><br>
    全名：<span>【【 fullName 】】</span>
</div>

//js
const vm = new Vue({
    el: "#root",
    data: {
      firstName: '张',
      lastName: '三'
    },
    //简写 ---- 只有在读取计算属性是才能简写，不考虑修改是推荐使用简写属性
    computed: {
      fullName() {
          console.log('get被调用了')
          console.log(this) //此处this是vm
          return this.firstName + '-' + this.lastName
      }
    }
 })
```



## 监视属性(watch)

绑定事件补充：

``` vue
//绑定事件的时候， @xxx='yyy'  yyy可以是一些简单的语句
//例如
<button @click="isHot = !isHot">切换天气</button> //语句的意思是取反
```

---

1.当监听的属性变化的时，回调函数自动调用，进行相关操作

2.监视的属性必须存在，才能进行监视!!!

3.监视的两种方式：

​		(1)new Vue时传入watch配置

​		(2)通过vm.$watch监视

``` javascript
//html
<div id="root">cd
    <h1>今天天气很【【 weather 】】</h1>
    <button @click="changeWeather">切换天气</button>
</div>

//js
const vm = new Vue({
    el: "#root",
    data: {
      isHot:true
    },
    computed: {
      weather() {
        return this.isHot ? '炎热' : '凉爽'
      }
    },
    methods: {
      changeWeather() {
        this.isHot = !this.isHot
      }
    },
    //第一种方式
    watch: {
        // 'isHot':{...}  //isHot是要监视的属性
    	isHot: { //这里的isHot(你可以写成用引号包裹起来，不包裹也行，通常不写双引号)
     		immediate: true,//初始化时让handler调用一下(页面一加载就会被调用)
    		//handler什么时候调用？当监视的属性(这里是isHot)发生变化时调用一下
    		handler(newValue,oldvalue) {
        		console.log('isHot改变了',newValue,oldvalue)
       		}
      	 }
     }
  })
//第二种方式
//这里isHot必须写引号
vm.$watch('isHot',{
    immediate: true,
    handler(newValue,oldvalue) {
      console.log('isHot改变了',newValue,oldvalue)
    }
})
```

##### 深度监视

​	1.Vue中的watch默认不监视对象内部值的改变(一层)

​	2.配置deep：true可以监视对象内部值改变（多层）

备注：

​	1.Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以

​	2.使用watch时候根据数据的具体结构，决定是否采用深度监视

``` java
//html
<h1>【【number.a】】</h1>
<button @click="number.a++">递增+1</button>
    
//js
data: {
    number: {
        a: 1,
        b: 2
    }
},
watch: {
    number: {
        deep: true,//开启深度监视
        immediate: true,//初始化时让handler调用一下(页面一加载就会被调用)
        handler() {//当监视的属性发生变化时调用一下
            console.log("number中的属性改变了")
        }
    }
}
```

##### 监视属性的简写形式

``` javascript
//前提：不需要 immediate 和 deep 属性时才能使用简写形式
//简写形式
watch: {
    isHot(newValue,oldvalue) {
        console.log('isHot改变了',newValue,oldvalue)
    }
}

//简写形式
vm.$watch('isHot',function(newValue,oldvalue) {
    console.log('isHot改变了',newValue,oldvalue)
})
```

##### computed和watch之间的区别：

​	**1.computed能完成的watch都能完成。**

​	**2.watch能完成的功能，computed不一定能完成，例如：watch能进行异步操作**

两个重要的原则：

+ 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
+ 所有不被Vue管理的函数，（定时器的回调函数，Ajax的回调函数等），就好写成箭头函数，这样this的指向才是vm 或 组件实例对象

**案例：用监视属性实现姓名案例**

``` javascript
//html
<div id="root">
    姓：<input type="text" v-model="firstName" /> <br><br>
    名：<input type="text" v-model="lastName" /> <br><br>
    全名：<span>【【 fullName 】】</span>
</div>

//js
const vm = new Vue({
    el: "#root",
    data: {
      firstName: '张',
      lastName: '三',
      fullName: '张-三'
    },
    watch: {
      firstName(newValue) {
        setTimeout(() => { //可以使用异步编程,computed就不行
          this.fullName = newValue + "-" + this.lastName
        },1000) 
      },
      lastName(newValue) {
        this.fullName = this.firstName + '-' + newValue
      }
   }
})
```

## 绑定样式

​		**1.class样式**

​				写法：class=“xxx”  xxx可以是字符串、对象、数组

​						字符串写法适用于：类名不确定，要动态获取

​						对象写法适用于：要绑定多个样式，个数不确定，名字也不确定

​						数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用

​		2.style样式

​						:style="{fontSize: xxx}" 其中xxx是动态的

​						:style="[a,b]"  其中a,b是样式对象

``` javascript
//css
<style>
    *{
      padding: 0;
      margin: 10px;
      box-sizing: border-box;
    }
    /* 默认 */
    .default{
      height:200px;
      width:520px;
      border:1px solid red;
    }
    /* 开心 */
    .happy{
      background-image: linear-gradient(to right,red,rgb(250, 35, 99),yellow);
    }
    /* 悲伤 */
    .sad{
      border:5px solid #ccc;
      background-image: linear-gradient(to right,rgb(21, 255, 0),rgb(35, 207, 250),rgb(10, 10, 10));
    }

    .active01{
      font-size:40px;
    }
    .active02{
      color:rgb(253, 0, 0);
    }
    .active03{
      background-color: #696565;
    }
</style>

//html
 <div id="root">
    <!--绑定class样式---字符串写法，适用于：样式的类名不确定，需要动态指定 -->
    <div class="default" :class="mood"><h1>【【message】】</h1></div>

    <!--绑定class样式---数组写法，适用于要绑定的样式不确定，名字也不确定 -->
    <div class="default" :class="classArr"><h1>【【message】】</h1><button @click="changeMood">点我切换随机样式</button></div>
    
    <!--绑定class样式---对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态确定用不用-->
    <div class="default" :class="classObj"><h1>【【message】】</h1></div>
  
    <!--绑定style样式---对象写法-->
    <div class="default" :style="styleObj"><h1>【【message】】</h1></div>

    <!-- 绑定style样式---数组写法-->
    <div class="default" :style="styleArr"><h1>【【message】】</h1></div>
</div>

//js
new Vue({
    el: '#root',
    data: {
      //消息
      message: 'hello world',
      //字符串写法绑定class样式
      mood: 'happy',
      //数组写法绑定class样式
      // classArr: ['active01','active02','active03'],
      classArr: '',
      //对象写法绑定class样式
      classObj: {
        sad: true,
        active02: false
      },
      //对象写法绑定style样式
      styleObj: {
        backgroundColor: 'aqua',
        color: 'red'
      },
      //数组写法绑定style样式
      styleArr: [
        {
          fontSize:'40px',
          color:'red'
        },
        {
          backgroundColor: 'yellow'
        }
      ]
    },
    methods: {
      //随机样式
      changeMood() {
        const arr = ['active01','active02','active03']
        const index = Math.floor(Math.random() * 3)
        this.classArr = arr[index]
      }
    }
 })
```

## 条件渲染

**1.v-if**

写法：

+ v-if="表达式"
+ v-else-if="表达式"
+ v-else

适用于：切换频率较低的场景。

特点：不展示的DOM元素直接被移除

注意：v-if可以和v-else-if、v-else一起使用，但要求结构不能被”打断“



**2.v-show**

写法：v-show="表达式"

适用于：切换频率较高的场景。

特点：不展示的DOM未被移除，仅仅是使用样式隐藏掉了(display:none)



**3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到**



``` javascript
//html
<div id="root">
    <!-- 使用v-show做条件渲染 -->
    <h2 v-show="isShow">欢迎你来学习【【name】】</h2>
    <h2 v-show='1 === 1'>欢迎你来学习【【name】】</h2>

    <!-- 使用v-if做条件渲染 -->
    <h2 v-if="true">你好</h2>
    <h2 v-if="1 !== 1">你好</h2>

    <!-- v-if和v-else-if -->
    <h1>【【number】】</h1>
    <button @click="number++">切换框架</button>
    <h1 v-if="number === 1">Angular</h1>
    <h1 v-else-if="number === 2">React</h1>
    <h1 v-else-if="number === 3">Vue</h1>
    <h1 v-else>默认值：没有对应的框架</h1>

    <!-- v-if和template的配合使用 -->
    <!-- template不会再页面渲染出来，只是个占位符 -->
    <!-- template只能和v-if结合使用，跟v-show使用无效 -->
    <template v-if="number === 1">
      <h1>1号选手</h1>
      <h1>2号选手</h1>
      <h1>3号选手</h1>
    </template>
</div>

//js
new Vue({
    el: '#root',
    data:{
      name: '前端',
      //是否显示(true显示，false隐藏)
      isShow: true,
      number: 0
   }
})
```





## 列表渲染

**v-for指令**

​		1.用于展示列表数据

​		2.语法：v-for="(item,index) in xxx" :key="yyy"  

​				//  item表示遍历的每一项  index表示索引值    xxx表示要遍历的属性值   yyy表示要遍历的每个元素的唯一标识

​		3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

``` javascript
//html
<div id="root">
    <!-- 遍历数组 -->
    <ul>
      <li v-for="(item,index) in persons" :key="item.id">
        【【index+1】】号选手，叫【【item.name】】,今年【【item.age】】了
      </li>
    </ul>

    <!-- 遍历对象 -->
    <ul>
      <li v-for="(item,key) in obj" :key="key">
        【【key】】---【【item】】
      </li>
    </ul>

    <!-- 遍历字符串 -->
    <ul>
      <li v-for="(item,index) in str" :key="item.index">
        【【index】】--【【item】】
      </li>
    </ul>

    <!-- 遍历指定次数 -->
    <ul>
      <li v-for="(item,index) in 3" :key="item.index">
        【【index】】---【【item】】
      </li>
    </ul>

  </div>

//js
new Vue({
    el: '#root',
    data: {
      //数组
      persons: [
        {id:1,name:"张三",age:18},
        {id:2,name:"李四",age:21},
        {id:3,name:"王五",age:13}
      ],
      //对象
      obj: {
        name: '孙悟空',
        age: 99999,
        gender: '男',
        car: '兰博基尼大牛',
        property: "1000亿"
      },
      //字符串
      str: '我是中国人！'
    }
 })
```



### key的作用与原理

面试题：react、vue中的key有什么作用：

1.虚拟DOM中的key的作用：

​	key是虚拟DOM对象的标识，当数据发生变化时，vue会根据【新数据】生成【新的虚拟DOM】

​	随后vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

2.对比规则：

​	（1）旧虚拟DOM中找到了与新虚拟DOM相同的key

+ 若虚拟DOM中的内容没变，直接使用之前的真实DOM！
+ 若虚拟DOM中的内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM

​	（2）旧虚拟DOM中未找到与新虚拟DOM相同的key

+ 创建新的真实DOM，随后渲染到页面

3.用index作为key可能会引发的问题：

+ 若对数据进行：逆序操作、逆序删除等破坏顺序操作：

  ​	会产生没有必要的真实DOM更新  ==》 界面效果没问题，但效率低

+ 如果结构中包含输入类的操作：

  ​	会产生错误的DOM更新 ==》界面有问题

4.开发中如何选择key？

​	1.最好使用每条数据的唯一标识作为key，比如id，手机号，邮箱，身份证，学号等唯一值

​	2.如果不存在对数据的逆序添加，逆序删除等破坏顺序操作，仅用于渲染列表用于展示

​	  使用index作为key也是没有问题的

### Vue监视数据的原理：

**1.Vue会监视data中所有层次的数据**

**2.如何监测对象中的数据？**

​		通过setter实现监视，且要在new Vue时就传入要监测的数据

​		（1）对象中后追加的属性，Vue默认不会响应式处理

​		（2）如需给后添加的属性做响应式，请使用如下API：

​				Vue.set(target,propertyName/index,value) 或

​				vm.$set(target,propertyName/index,value) 

**3.如何监测数组中的数据？**

​		通过包裹数组更新元素的方法实现，本质就是做了两件事：

​		（1）调用原生对应的方法对数组进行更新

​		（2）重新解析模板，进行更新界面

**4.在Vue修改数组中的某个元素一定要用如下方法：**

​	1.使用这些API：push(),pop(),shift(),unshift(),splice(),sort(),reverse()

​	2.Vue.set() 或 vm.$set()

**特别注意：Vue.set 和 vm.$set  不能给vm  或  vm跟数据对象，添加属性！！！**



## 收集表单数据

若：<input type="text" /> ,则v-model收集的是value值，用户输入的就是value值

若：<input type="radio" />,则v-model收集的value值，且要给标签配置value值

若：<input type="checkbox" />

​	1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​	2.配置input的value属性：

​		（1）v-model的初始值是非数组，那么收集的就是checked（勾选 or  未勾选，是布尔值）

​		（2）v-model的初始值是数组，那么收集的就是value组成的数组

备注：v-mode的三个修饰符

+ lazy：失去焦点再收集数据
+ number：输入字符串转为有效的数字
+ trim：输入首尾空格过滤

``` javascript
//html
<div id="root">
    <form @submit.prevent="submit">
      账号：<input type="text" v-model="userInfo.account" /> <br/><br/>
      密码：<input type="password" v-model.number="userInfo.passWord" /> <br/><br/>
      性别：
      男<input type="radio" name="sex" value="male" v-model="userInfo.gender" />
      女<input type="radio" name="sex" value="female" v-model="userInfo.gender" /><br/><br/>
      爱好：
      写代码<input type="checkbox" value="code" v-model="userInfo.hobby" />
      吃饭<input type="checkbox" value="eat" v-model="userInfo.hobby" />
      听音乐<input type="checkbox" value="listen Music" v-model="userInfo.hobby" /> <br/><br/>
      所属城市：
      <select v-model="userInfo.city">
        <option value="default">请选择城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="shenzheng">深圳</option>
        <option value="xian">西安</option>
      </select> <br/><br/>
      其他信息：
      <textarea v-model="userInfo.other"></textarea> <br/><br/>
      <input type="checkbox" v-model="userInfo.accept">阅读并接受<a href="http://www.baidu.com">《用户协议》</a><br/><br/>
      <button>提交</button>
    </form>
</div>

//js
new Vue({
    el: '#root',
    data: {
      //用户数据
      userInfo: {
        //账号
        account: '',
        //密码
        passWord: '',
        //性别
        gender: 'male',
        //爱好
        hobby: [], //一定要是数组
        //城市
        city: 'default',
        //其他信息
        other: '',
        //接受
        accept: ''
      }
    },
    methods: {
      submit() {
        console.log(JSON.stringify(this.userInfo))
      }
    }
})
```



## 过滤器

定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）

语法：

​	1.注册过滤器：Vue.filter(name,callback) 或 new Vue(filters:{})

``` javascript
//全局注册
Vue.filter(name,callback)

//局部注册
filters: {
    name(value) {
        return value....  //对数据进行操作
    }
}
```

2.使用过滤器：【【 xxx | 过滤器名字 】】 或  v-bind:属性 = ”xxx | 过滤器名字“ (过滤属性用的少)

**备注：**

1.过滤器也可以接受参数、多个过滤器也可以串联

例如：

``` javascript
<h1>【【name | getsplice | toFixed】】<h1/>
```



2.并没有改变原本的数据，是产生新的对应的数据

``` javascript
//html
<div id="root">
    <h1>现在的时间戳：【【time】】</h1>
    <!-- 时间过滤 -->
    <h2>格式化后的时间：【【time | format】】</h2>
    <!-- 传参 -->
    <h2>格式化传参后的时间：【【time | format('YYYY年MM月DD日')】】</h2>
    <!-- 属性过滤 -->
    <h2 :name="message | mySplice">helloworld</h2>
    <!-- 金额过滤 -->
    <h2>本次消费：【【price | tofixed】】</h2>
</div>

//js
//注：toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。

  //全局过滤器
  Vue.filter('tofixed',function(value) {
    return value.toFixed(2)
  })

  new Vue({
    el: '#root',
    data: {
      //当前时间戳
      time: Date.now(),
      message: 'hello ',
      price: 1499.78617
    },
    //局部过滤器
    filters: {
      format(val,str='YYYY-MM-DD HH:mm:ss') {
        return dayjs(val).format(str)
      },
      mySplice(val) {
        return val + 'javascript'
      }
    }
 })
```



## 内置指令

#### v-text

+ 作用：向其所在的节点中渲染文本内容

+ 与插值语法的区别：v-text会替换掉节点中的内容，【【xxx】】则不会

``` javascript
//html
<div id="root">
    <h1>【【message】】</h1>
    <h1 v-text="message">再此处写内容无效(不会展示到页面)</h1>
</div>

//js
new Vue({
    el: '#root',
    data: {
      message: 'hello world'
    }
 })
```



#### ==v-html==

+ 作用：向指定节点中渲染包含html结构的内容
+ 与插值语法的区别：
  + v-html会替换掉节点中的所有内容，【【xxx】】则不会
  + v-html可以识别html结构
+ 严重注意：v-html有安全性问题！！！
  + 在网站上动态渲染任意HTML是非常危险的，容易导致xss攻击
  + 一定要在可信的内容上使用v-html，永不要用在用户提交内容上！

``` javascript
//html
<div id="root">
    <h1>【【message】】</h1>
    <h1 v-html="message">再此处写内容无效</h1>
</div>

//js
new Vue({
    el: '#root',
    data: {
      message: '<h1>我是h1标签</h1>'
    }
 })
```



#### ==v-cloak==

(没有值)

+ 本质是一个特殊的属性，Vue实例创建完毕并接管容器后，会删除v-cloak属性
+ 使用css配合v-cloak可以解决网速慢时页面展示出【【xxx】】的问题

``` javascript
//css
<style>
    [v-cloak]{
      display:none;
    }
</style>

//html
<div id="root">
    <h1 v-cloak>【【message】】</h1>
</div>

//js
new Vue({
    el: '#root',
    data: {
      message: '你好，我...'
    }
 })
```



#### ==v-once==

+ v-once所在节点在初次动态渲染后，就视为静态内容了。
+ 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

``` javascript
//html
<div id="root">
    <h1 v-once>初始化值：【【num】】</h1>
    <h1>递增后值：【【num】】</h1>
    <button @click="num++">num++</button>
</div>

//js
new Vue({
    el: '#root',
    data: {
      num: 1
   }
})
```



#### ==v-pre==

+ 跳过其所有节点的编译过程
+ 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

``` javascript
//html
<div id="root">
    <h1 v-pre>初始化值：【【num】】</h1>
    <h1 v-pre>递增后值：【【num】】</h1>
    <button v-pre @click="num++">num++</button>
</div>

//js
new Vue({
    el: '#root',
    data: {
      num: 1
   }
})
```

![屏幕截图 2022-01-24 153456](H:\张向阳综合文件\Vue.js\0基础学Vue\屏幕截图 2022-01-24 153456.png)

## 自定义指令

一、定义语法：

​	（1）局部指令

```  javascript
//函数式
new Vue({
    directives:{
        指令名：回调函数
    }
})

//对象式
new Vue({
    directives{
    	指令名：配置对象
	}
})
```

​	（2）全局指令

``` javascript
//函数式   directive 不加 s
Vue.directive('指令名'，回调函数)

//对象式
Vue.directive('指令名',配置对象)
```

二、配置对象中常用的3个回调：

+ bind：指令与元素成功绑定时调用
+ inserted：指令所在元素被插入页面时调用
+ updata：指令所在模板结构被重新解析时调用

三、备注

+ 指令定义时不加v-，但使用时要加v-
+ 指令名如果是多个单词，要使用kebad-case命名方式(例如：v-big-text),不要用camelCase命名(例如：v-bigNumber)

``` javascript
//html
<div id="root">
    <h1>当前数为：<span>【【num】】</span></h1>
    <h1>当前书翻10倍后：<span v-big="num"></span></h1>
    <button @click="num++">num++</button>
    <hr>
    <input type="text" v-fbind="num">
</div>

//js
//directives(指令) 配置项
directives: {
    //函数式
	// big函数什么时候调用？
	//   1.指令与元素成功绑定时（一上来）
	//   2.指令所用到的数据发生更新时
	big(elememt,binding) {
	    console.log('v-big指令执行了')
    elememt.innerText = binding.value * 10
	},
	//对象式
	fbind: {
	    //指令与元素成功绑定时（一上来）
	    bind(elememt,binding) {
	      elememt.value = binding.value
 	   },
 	   //指令所在元素被插入页面时
  	   inserted(elememt,binding) {
  	  	  elememt.focus()
	    },
    //指令所在的模板被重新解析时
	    update(elememt,binding) {
	      elememt.value = binding.value
	    }
	}
}

//全局指令
//directive 不加 s
//全局自定义组件(对象式)
  Vue.directive('fbind',{
    //指令与元素成功绑定时（一上来）
    bind(elememt,binding) {
      elememt.value = binding.value
    },
    //指令所在元素被插入页面时
    inserted(elememt,binding) {
      elememt.focus()
    },
    //指令所在的模板被重新解析时
    update(elememt,binding) {
      elememt.value = binding.value
    }
  })

//全局组件(函数式)
  Vue.directive('big',function(elememt,binding){
    console.log('v-big指令执行了')
    elememt.innerText = binding.value * 10
  })
```



## 生命周期

+ 又名：生命周期回调函数、生命周期函数、生命周期钩子
+ 是什么：Vue在关键时刻帮我们调用一些特殊名称的函数
+ 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的
+ 生命周期函数中的this指向是vm  或  组件实例对象

**常用的生命周期钩子**

​	1.mounted：发送Ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】

​	2.beforeDestroy：清楚定时器、解绑自定义事件、取消订阅消息等【首尾工作】

**关于销毁Vue实例**

​	1.销毁后借助vue开发者工具看不到任何信息

​	2.销毁会自定义事件会失效，但原生DOM事件依然有效

​	3.一般不会再beforeDestroy操作数据，因为即便操作数据，也不会再触发F更新流程了

<!-- <img src="G:\张向阳综合文件\Vue.js\0基础学Vue\生命周期-解释版.png" alt="生命周期-解释版" style="zoom: 80%;" /> -->

``` javascript
//html
<div id="root">
    <h1>当前的数值为：【【number】】</h1>
    <button @click="add">number+1</button>
    <button @click="bye">销毁组件实例</button>
</div>

//js
new Vue({
      el: '#root',
      data: {
        number: 1
      },
      methods: {
        add() {
          console.log('你好，我是原生DOM事件，我销毁不了，我还在呢')
          this.number++
        },
        bye() {
          this.$destroy()
        }
      },
      beforeCreate() {
        console.log("现在还不能使用data中的数据",this.number)
      },
      created() {
        console.log("现在可以使用data中的数据,但组件的模板结构尚未生成",this.number)
      },
      beforeMount() {
        console.log('beforeMount',this.number)
      },
      mounted() {
        console.log('mounted',this.number)
      },
      beforeUpdate() {
        console.log('beforeUpdate',this.number)
      },
      updated() {
        console.log('updated',this.number)
      },
      beforeDestroy() {
        console.log('beforeDestroy',this.number)
      },
      destroyed() {
        console.log('destroyed',this.number)
      }
    })
```



## Vue组件化编程

**组件**

1.理解：用来实现局部(特定)功能效果的代码集合(html/css/js/image)

2.为什么：一个界面的功能很复杂

3.作用：复用编码、简化项目编码、提高运行效率

**组件化**

当应用的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用

#### 非单页面组件

Vue中使用组件的三大步骤：

​	一、定义组件（创建组件）

​	二、注册组件

​	三、使用组件（写组件标签）

``` javascript
//html
<div id="root">
    <!-- 3.使用组件 -->
    <student></student>
	<school></school>
  </div>
  <hr>
  <div id="root2">
    <!-- 使用全局组件 -->
    <school></school>
    <school></school>
</div>

//js
//这里的是局部组件
//1.创建组件
  const student = Vue.extend({
    template: `
      <div>
        <h1>这是我的名字：【【name】】,我今年【【age】】了</h1>
        <button @click="hanler">点我弹出我的名字</button>  
      </div>
    `,
    data() {
      return {
        name: 'Tom',
        age: 18
      }
    },
    methods: {
      hanler() {
        alert('你好，我叫' + this.name)
      }
    }
  })

  new Vue({
    el: '#root',
    //2.注册局部组件
    components: {
      student   // 相当于--> student: student
    }
 })

//1.创建组件
  const school = Vue.extend({
    template: `
      <div>
        <h1>我的学校是：【【school】】</h1>
        <h1>欢迎到我们的学校参观!</h1>  
      </div>
    `,
    data() {
      return {
        school: '西安附中81路'
      }
    }
  })
  
//注册全局组件
Vue.component('school',school) //第一个参数是组件的名字，第二个参数是创建组件时的名字
new Vue({
    el: '#root2',
  })
```

一、如何定义一个组件?

​	使用Vue.extend(options)创建，其中options 和 new Vue(options)时传入的那个options几乎一样，但也有点区别：

​	区别如下：

​			1.el不要写，为什么？———最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。

​			2.data必须写成函数，为什么？———避免组件被复用时，数据存在引用关系。

​	备注：使用template可以配置组件结构

二、如何注册组件？

​	1.局部注册：靠new Vue的时候传入components选项

​	2.全局注册：靠Vue.component('组件名',组件)

三、编写组件标签：

​	<school></school>



## 关于不同版本的Vue：

1.Vue.js与vue.runtime.xxx.js的区别：

​	（1）vue.js是完整版的Vue，包含：核心功能+模板解析器

​	（2）vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器

2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement

函数去指定具体内容。
