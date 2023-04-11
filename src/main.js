import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import request from './utils/request'
const app = createApp(App)
app.use(ElementPlus)
app.config.globalProperties.$request = request
app.use(router).mount('#app')
console.log("环境变量",
    import.meta.env);