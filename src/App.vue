<template>
  <div id="app">
    <Carousel />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue';

export default {
  name: 'App',
  components: {
    Carousel
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>