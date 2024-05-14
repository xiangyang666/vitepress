---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "诗仙博客"
  text: "I love vue.js"
  tagline: "程序员：跟我聊技术我可就不困了！"
  image:
    # src: https://xiangyang666.gitee.io/vuepress/images/logos.jpg
    src: /images/undraw_online_stats_0g94.svg
    alt: Vitepress
    width: 300
  actions:
    - theme: brand
      text: 🎒每天一道面试题
      link: /interview/index
    - theme: alt
      text: ⚡每天一道算法
      link: /algorithm/index

features:
  - icon: 💡
    title: 3年后的水平
    details: 前端程序员面试对面试官说：根据你自己的水平对我提问就行了。
  - icon: 📦
    title: 致自己
    # details: 你是一名大专生，你的目标是升本和考上研究生，而不是纠结一个未来和你毫无关联的人到底喜不喜欢你。
    details: 男人不能没有钱。
  - icon: 🎉
    title: 我为什么不谈恋爱了？
    details: 首先：别人不瞎……。其次：别人脑子没病。最后：我有自知之明。
    # details: 首先：别人不瞎……。其次：别人脑子没病。最后：我有自知之明。
---

<!-- 🛠️ -->
<!-- 自定义组件 -->
<script setup>
import home from './src/components/home.vue';
</script>

<home />
