<template>
  <div id="app">
    <p class="text">{{ text }}<span class="we_chat" href="#">{{ weChat }}</span></p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const text = ref(`如有任何学习上的问题大家共同探讨。`)
const weChat = ref('微信：zxy7471082')
</script>

<style scoped>
#app {
  width: 100%;
}
.text {
  text-align: center;
  margin-top: 100px;
  font-size: 15px;
}
.we_chat {
  color: aqua;
}
.we_chat:hover {
  text-decoration:underline;
  cursor: pointer;
}
</style>
