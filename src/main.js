import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import config from './config'
const app = createApp(App)
app.use(ElementPlus)
axios.get(config.mockApi + '/login').then((res) => {
    console.log("111", res);
})
app.use(router).mount('#app')
console.log("环境变量",
    import.meta.env);