<template>  
<div class="login-dl">
   <div class="login-container">
  
     <!-- 扫码登录内容 -->  
     <p>请使用手机扫码登录</p>  
     <!-- 这里可以放置二维码图片 -->  
   </div>
  <div class="login-container">  
 
    <div class="login-tabs">    
      <button @click="activeTab = 1" :class="{ active: activeTab === 1 }">账号密码登录</button>  
      <button @click="activeTab = 2" :class="{ active: activeTab === 2 }">手机验证登录</button>  
    </div>  
 
    <div v-if="activeTab === 1" class="login-form">  
      <!-- 账号密码登录内容 -->  
      <input type="text" placeholder="用户名" />  
      <input type="password" placeholder="密码" />  
      <button>登录</button>  
    </div>  
    <div v-if="activeTab === 2" class="login-form">  
      <!-- 手机验证登录内容 -->  
      <input type="text" placeholder="手机号" />  

      <input type="text" placeholder="验证码" style="width: 43%;" />  
      <button style="width: 35%;margin-left: 10%;">发送验证码</button>  
      <button>登录</button>  
    </div>  
  </div>  
</div>
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      activeTab: 1, // 控制显示哪个登录方式的索引  
    };  
  },  
};  
</script>  
  
<style scoped>  
.login-dl{
  display: flex; /* 启用Flexbox */  
  justify-content: center; 
  margin:150px auto ;
}
.login-container {    
  width: 270px; /* 稍微增宽以容纳更多内容 */  
  height: 320px;
  border: 1px solid #ccc;  
  padding: 30px;
  border-radius: 6px; /* 添加圆角 */  
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);  
  background-color: #f9f9f9; /* 浅灰色背景 */  
}  
  
.login-tabs {  
  display: flex;  
  justify-content: space-around; /* 均匀分布按钮 */  
  margin-bottom: 10px;  
}  
  
.login-tabs button {  
  background-color: transparent;  
  border: none;  
  padding: 10px 10px;  
  cursor: pointer;  
  outline: none;  
  font-size: 16px;  
  color: #333;  
  transition: all 0.3s ease; /* 添加过渡效果 */  
}  
  
.login-tabs button.active {  
  color: #007bff; /* 蓝色激活状态 */  
  border-bottom: 2px solid #007bff;  
  font-weight: bold; /* 加粗字体 */  
}  
  
.login-tabs button:hover {  
  color: #0056b3; /* 鼠标悬停时颜色变深 */  
}  
  
.login-form {  
  margin-top: 20px;
}  
  
.login-form input[type="text"],  
.login-form input[type="password"] {  
  width: calc(100% - 30px); /* 减去padding */  
  padding: 15px;
  margin-top: 15px;  
  margin-bottom: 10px;  
  border: 1px solid #ccc;  
  border-radius: 4px;  
  font-size: 15px;  
}  
  
.login-form button {  
  width: 100%;  
  padding: 12px;  
  margin-top: 15px;
  border: none;  
  border-radius: 4px;  
  background-color: #007bff;  
  color: white;  
  font-size: 14px;  
  cursor: pointer;  
  transition: background-color 0.3s ease;  
}  
  
.login-form button:hover {  
  background-color: #0056b3; /* 鼠标悬停时背景色变深 */  
}  
</style>