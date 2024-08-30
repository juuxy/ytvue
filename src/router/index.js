// 引入 Vue Router 和创建路由的函数  
import { createRouter, createWebHistory } from "vue-router";  
  
// 导入路由组件  
import Login from "@/router/views/login.vue";
import Register from "./views/Register.vue";  
  
// 定义路由  
const routes = [  
  {  
    path: '/login',  
    name: 'Login',  
    component: Login  
  },  
  {  
    path: '/register', // 通常 URL 路径是小写的  
    name: 'Register',  
    component: Register  
  }  
];  
  
// 创建并导出路由实例  
// 注意：在 Vue 3 中，不需要全局安装 Vue Router  
export default createRouter({  
  history: createWebHistory(), // 使用 HTML5 历史模式（可选，默认是 hash 模式）  
  routes // （缩写）相当于 routes: routes  
});