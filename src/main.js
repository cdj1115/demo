import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
// vue3和vue2区别有哪些
// 1.按需引入 全量引入 
// 2.推荐的API风格不一样 vue2是选项式API vue3是组合式API
// 3.vue3组件的template中不需要唯一的根节点
