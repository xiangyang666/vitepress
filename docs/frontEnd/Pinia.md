---
title: Pinia
---
# Pinia

> 一个全新的用于Vue的状态管理库
>
> 下一代版本的Vuex，也就是Vuex 5.0
>
> Pinia已经纳入官方账户下了。github/vuejs/pinia

# Vue3 演示

## 1. 安装

``` bash
npm install pinia
```

## 2. main.js

``` js
import { createApp } from 'vue'
import App from './App.vue'
// 1.
import { createPinia } from 'pinia'

const app = createApp(App)

// 2.创建 Pinia 实例
const pinia = createPinia()

// 3.挂载到 Vue 根实例
app.use(pinia)

app.mount('#app')

```

## 3. store/index.js

``` js
import { defineStore } from "pinia";

// 1.定义并导出容器
export const useMainStore = defineStore('main', {
  /**
   * 类似组件的 data，用于存储全局状态的
   * 1. 必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2. 必须是箭头函数
  */
  state: () => {
    return {
      count: 1
    }
  },

  /**
   * 类似于组件的 computed，用于封装计算属性，有缓存的功能
  */
  getters: {

  },

  /**
   * 类似于组件的 methods，封装业务逻辑，修改 state
  */
  actions: {

  }
})
```

## 4. App.vue组件中

``` vue
<template>
  <h1>Pinia基本使用</h1>
  <p>count: {{ app.count }}</p>
</template>

<script setup>
 // 1,
import { useMainStore } from '@/store';
// 2,
const app = useMainStore()
// 3,使用
console.log(app.count)
</script>

<style lang="less" scoped>

</style>

```



# Vue2 演示

### 1. 安装

``` bash
npm install pinia
或
yarn add pinia
```

### 2. main.js

``` js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入Pinia
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
// 创建 pinia 实例
const pinia = createPinia()

new Vue({
  router,
  // 注意同一个 `pinia` 实例可以在多个 Vue 应用程序中使用
  // 同一个页面
  // 挂载到vue根实例
  pinia,
  render: h => h(App)
}).$mount('#app')

```

### 3. store / index.js

~~~ js
import { String } from 'core-js/web';
import { defineStore } from 'pinia'

// 1.定义并导出容器
// 参数1：容器的唯一ID，将来 pinia 会把所有的容器挂载到根容器
// 参数2：选项对象
export const useMainStore = defineStore('main', {
  /**
   * 类似于组件的 data，用来存储全局状态的
   * 1. 必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
   * 2. 必须是箭头函数,这是为了更好的 TS 类型推导
  */
  state: () => {
    return {
      count: 0,
      message: 'Hello world!'
    }
  },

  /**
   * 类似于组件的 methods, 封装业务逻辑，修改 state
  */
  actions: {
    // 注意：不能使用箭头函数定义 action，因为箭头函数绑定外部 this

    // 这个str形参是调用这个actions函数时传进来的
    changeStore(str) {
      // 这里可以通过 this 来访问state中的数据
      this.count += 2;
      this.message = str;

      // 简单的操作数据用这个
      // this.$patch({})

      // 复杂的操作数据用这个
      // this.$patch((state) => {})
    }
  },

  /**
   * 类似于组件的computed，用于封装计算属性，有缓存的功能
  */
  getters: {
    // 函数接收一个可选参数：state 状态对象
    // countPlus(state) {
    //   console.log('getters被调用了!,我是有缓存的所以我只会调用一次!');
    //   return state.count + 666;
    // },


    // 如果在getters中使用了 this 则必须手动指定返回值的类型，否则类型推导不出来(注意在TS中才会出现问题)
    countPlus() {
      console.log('getters被调用了!,我是有缓存的所以我只会调用一次!');
      return this.count + 55
    }
  },


})
~~~

### 4. components / Home.vue

~~~vue
<template>
  <div>
    <h1>我是Home组件</h1>
    <button @click="changeHandlerState">修改 count 数据</button>
    <hr />
    <h2>没有响应式：</h2>
    <h3>count的数据为：{{ count }}</h3>
    <h2>响应式：</h2>
    <h3>count的数据为：{{ count2 }}</h3>
    <h3>数据库的消息为: {{ message }}</h3>
    <hr />
    <h3>Getters数据</h3>
    <h3>countPlus的数据为：{{ countPlus }}</h3> 
    <h3>countPlus的数据为：{{ countPlus }}</h3> 
    <h3>countPlus的数据为：{{ countPlus }}</h3> 
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useMainStore } from "@/store/index.js";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    console.log(useMainStore())
  },
  computed: {
    count() {
      // 从 useMainStore 函数中解构出 count 数据
      // 这是有问题的，因为这样拿到的数据不是响应式的，是一次性的
      // Pinia 其实就是把 state 数据都做了 reactive 处理了
      const { count } = useMainStore();
      return count;
    },
    count2() {
      // 解决办法就是使用
      // 把解构出来的数据做 ref 响应式代理
      const { count } = storeToRefs(useMainStore())
      return count.value;
    },
    message() {
      return useMainStore().message
    },
    countPlus() {
      return useMainStore().countPlus
    }
  },
  methods: {
    // 改变数据的状态
    changeHandlerState() {
      const mainStore = useMainStore()

      // 方式一：最简单的方式就是这样
      // mainStore.count++
      // mainStore.message = '你好，世界!'


      // 方式二：如果需要修改多个数据，建议使用 $patch 批量更新
      // mainStore.$patch({
      //   count: mainStore.count += 3,
      //   message: '你好，世界!'
      // })


      // 方式三：更好的批量更新的方式：$patch 一个函数
      // mainStore.$patch((state) => {
      //   state.count += 5;
      //   state.message = '你好，Vuejs/Pinia'
      // })


      // 方式四：逻辑比较多的时候可以封装到 actions 做处理
      mainStore.changeStore('欲拔山兮气一概是')
    }
  }
};
</script>

<style lang="less" scoped>
</style>
~~~

