<template>  
 <div class="loginy">
      
    <el-header height="12vh">
      <!--                  <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->

      <img src="/src/assets/logo.png" style="width:13%"/>

    </el-header>

   <div class="login-dl">
    <div class="login-container">
  
     <!-- 扫码登录内容 -->  
     <p style="font-size: 20px;">请使用微信扫码登录</p>  
     <a :href="wechatLoginUrl" target="_blank">
      <img src="https://res.wx.qq.com/connect/zh_CN/htmledition/images/qrcode/qrcode_default.png" alt="微信扫码登录" />
    </a>
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
    <div class="link-container">  
  <a href="#" class="left-link">忘记密码</a>  
  <a href="#" class="right-link">找回密码</a>  
</div>  
  
  </div>  
</div>
 </div>
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      activeTab: 1,
      wechatLoginUrl: "", // 控制显示哪个登录方式的索引  
    };  
  },  
 
  mounted() {
    // 生成微信扫码登录链接
    this.wechatLoginUrl ='http://localhost:5173//wechat/login';
  }
}
</script>  
  
<style scoped>  
body, html {  
  height: 100%;
  margin: 0;  
  overflow: hidden;
}  

  
.loginy {  
  background-image: url('@/assets/background/bg04.jpg');   
  background-size: cover;  
  background-repeat: no-repeat;   
  background-attachment: fixed;  
}

.el-header {
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100vw;
  box-shadow: 0 1vh 1vw rgba(0, 0, 0, 0.1); /* 轻微的阴影效果提升层次感 */
}
.login-dl{
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 88vh;
  
}
.login-container {    
  width: 270px; /* 稍微增宽以容纳更多内容 */  
  height: 350px;
  border: 1px solid #ccc;  
  padding: 30px;
  border-radius: 6px; /* 添加圆角 */  
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);  
  background-color: #f9f9f9c8; /* 浅灰色背景 */  
  text-align: center;
  z-index: 1;
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
   color: #426169;
  border-bottom: 2px solid #426169;  
  font-weight: bold; /* 加粗字体 */ 
}  
  
.login-tabs button:hover {  
  color:#426169; /* 鼠标悬停时颜色变深 */
}  
  
.login-form {  
  margin-top: 20px;
  z-index: 1;
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
  background-color: #426169bf;
  color: white;  
  font-size: 14px;  
  cursor: pointer;  
  transition: background-color 0.3s ease;  
}  
  
.login-form button:hover {  
  background-color:#559a75;   
    height: auto;
}
.link-container {  
  display: flex;  
  justify-content: space-between;   
  align-items: center;   
  padding: 10px;  
  background-color: #f0f0f000; 
}  
  
.left-link, .right-link {  
  text-decoration: none; 
  color: #426169; 
  font-size: 15px;
}  
</style>