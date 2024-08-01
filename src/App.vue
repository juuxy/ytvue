<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import Container from "@/components/Container.vue";

import bg1 from '@/assets/background/bg-1.jpg';
import bg2 from '@/assets/background/bg-2.jpeg';
import bg3 from '@/assets/background/bg-3.jpg';
import bg4 from '@/assets/background/bg-4.png';
import bg5 from '@/assets/background/bg-5.jpeg';

const backgroundImages = [bg1, bg2, bg3, bg4, bg5];
const currentIndex = ref(0);
const nextIndex = ref(1);

const backgroundImage = ref(backgroundImages[currentIndex.value]);
const nextBackgroundImage = ref(backgroundImages[nextIndex.value]);
const opacity = ref(1);

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    nextIndex.value = (currentIndex.value + 1) % backgroundImages.length;
    nextBackgroundImage.value = backgroundImages[nextIndex.value];
    opacity.value = 0; // 开始淡出

    setTimeout(() => {
      currentIndex.value = nextIndex.value;
      backgroundImage.value = nextBackgroundImage.value;
      opacity.value = 1; // 开始淡入
    }, 500); // 过渡时间和 CSS transition 保持一致
  }, 5000); // 每5秒切换一次
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div id="app" >
    <div class="background-layer" :style="{ opacity: opacity, backgroundImage: `url(${backgroundImage})` }"></div>
    <Container></Container>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  height: 95vh;
  width: 95vw;
  font-family: "思源黑体", serif;
  overflow: hidden;
}

#app {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  /* 避免突兀的白色背景 */
/*  background: linear-gradient(to bottom, rgba(114, 166, 90, 0), rgba(0, 0, 0, 0.5)) no-repeat fixed center;
  transition: opacity 1s ease-in-out;  过渡效果 */
}

.container {
  position: relative;
  z-index: 1; /* 确保容器内容在背景层之上 */
  overflow: hidden;
}

.all{
  overflow: hidden;
}

* {
  box-sizing: border-box; /* 包含边框和内边距 */
}

body {
  overflow: hidden; /* 隐藏滚动条 */
}
</style>
