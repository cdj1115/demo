<template>
  <div class="carousel">
    <!-- 轮播图 -->
    <div class="carousel-images" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- 遍历图片数组，生成图片 -->
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Image">
    </div>
    <!-- 上一张按钮 -->
    <button class="carousel-control prev" @click="prevSlide">Prev</button>
    <!-- 下一张按钮 -->
    <button class="carousel-control next" @click="nextSlide">Next</button>
    <!-- 轮播图指示器 -->
    <div class="carousel-indicators">
      <!-- 遍历图片数组，生成指示器 -->
      <span v-for="(indicator, index) in images" :key="index" :class="{ active: currentIndex === index }" @click="moveToIndex(index)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 图片数组
const images = [
  '/src/assets/images/image1.jpg',
  '/src/assets/images/image2.jpg',
  '/src/assets/images/image3.jpg',
  
];

// 当前图片索引
const currentIndex = ref(0);

// 下一张图片
function nextSlide() {
  currentIndex.value++;
  if (currentIndex.value >= images.length) {
    currentIndex.value = 0; // 回到第一张图片
  }
}

// 上一张图片
function prevSlide() {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    currentIndex.value = images.length - 1; // 回到最后一张图片
  }
}

// 移动到指定索引的图片
function moveToIndex(index) {
  currentIndex.value = index;
}

// 自动播放
let autoPlayInterval;

// 组件挂载时开始自动播放
onMounted(() => {
  autoPlayInterval = setInterval(nextSlide, 2000);
});

// 组件卸载时停止自动播放
onUnmounted(() => {
  clearInterval(autoPlayInterval);
});
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel img {
  width: 100%;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #000;
}
</style>