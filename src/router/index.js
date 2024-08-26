import { createRouter, createWebHistory } from 'vue-router'  
import Home from '../App.vue'  
import Login from '../components/login.vue'  
import Register from '../components/Register.vue'  
  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: Home  
  },  
  {  
    path: '/login',  
    name: 'Login',  
    component: Login  
  },  
  {  
    path: '/register',  
    name: 'Register',  
    component: Register  
  }  
  // 其他路由...  
]  
  
const router = createRouter({  
  history: createWebHistory(process.env.BASE_URL),  
  routes  
})  
  
export default router