import { createApp } from 'vue'  
import ElementPlus from 'element-plus'  
import 'element-plus/dist/index.css'  
import App from './App.vue'  
import { createRouter, createWebHistory } from 'vue-router'  
// 假设 Login 组件位于 src/views/Login.vue  
import Login from '@/router/views/login.vue'
import Home from '@/components/Container.vue'   
import Register from '@/router/views/Register.vue'
  
const app = createApp(App)  
  
// 路由配置  
const routes = [  
    {  
        path: '/',  
        name: 'Home',  
        component: Home ,// 当访问根路径时，显示 Home 组件  
      meta: { title: '首页' }  
      }, 
  {  
    path: '/login',  
    name: 'login',  
    component: Login  ,
    meta: { title: '用户登陆' } 
  }  , 
  {  
    path: '/Register',  
    name: 'Register',  
    component: Register ,
    meta: { title: '用户注册' } 
  }  
  // 可以添加更多路由...  
]  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes // 使用上面定义的 routes 数组  
})  
  
router.beforeEach((to, from, next) => {  
  if (to.meta && to.meta.title) {  
    document.title = to.meta.title  
  }  
  next()  
})
// 使用 ElementPlus 插件  
app.use(ElementPlus)  
  
// 如果需要使用路由，也需要在 app 实例上使用路由  
app.use(router)  
  
// 全局属性设置（已保留）  
app.config.globalProperties.BASE_SWITCH_TIME = 120  
app.config.globalProperties.GOODS_SWITCH_TIME = 15  
  
// 挂载应用  
app.mount('#app')
