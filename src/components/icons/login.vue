<template>  
  <div class="login-container">  
    <h2>登录方式</h2>  
  
    <!-- 手机验证登录 -->  
    <div class="login-method">  
      <h3>手机验证登录</h3>  
      <input type="text" placeholder="请输入手机号码" v-model="phone" />  
      <button @click="sendVerificationCode">发送验证码</button>  
      <input type="text" placeholder="请输入验证码" v-model="verificationCode" disabled />  
      <button @click="loginByPhone">登录</button>  
    </div>  
  
    <!-- 扫码登录 -->  
    <div class="login-method">  
      <h3>扫码登录</h3>  
      <div v-if="!qrCodeUrl" class="qr-code-placeholder">  
        <p>请使用手机APP扫描二维码登录</p>  
        <button @click="generateQRCode">生成二维码</button>  
      </div>  
      <div v-else>  
        <img :src="qrCodeUrl" alt="QR Code" />  
        <p>请使用手机APP扫描上方二维码登录</p>  
      </div>  
    </div>  
  
    <!-- 用户名密码登录 -->  
    <div class="login-method">  
      <h3>用户名密码登录</h3>  
      <input type="text" placeholder="请输入用户名" v-model="username" />  
      <input type="password" placeholder="请输入密码" v-model="password" />  
      <button @click="loginByUsername">登录</button>  
    </div>  
  </div>  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      phone: '',  
      verificationCode: '',  
      qrCodeUrl: null,  
      username: '',  
      password: '',  
    };  
  },  
  methods: {  
    sendVerificationCode() {  
      // 这里应该是调用后端API发送验证码到手机  
      // 示例中仅打印日志  
      console.log('发送验证码到手机:', this.phone);  
      // 假设验证码发送后，启用验证码输入框  
      this.verificationCode = ''; // 清空验证码输入框  
      // 实际应用中，你可能需要设置一个定时器来启用验证码输入框  
    },  
    generateQRCode() {  
      // 这里应该是调用后端API生成二维码，并返回URL  
      // 示例中仅模拟一个URL  
      this.qrCodeUrl = 'https://example.com/qrcode.png';  
    },  
    loginByPhone() {  
      // 验证手机号和验证码，然后调用后端API进行登录  
      console.log('使用手机号和验证码登录:', this.phone, this.verificationCode);  
    },  
    loginByUsername() {  
      // 验证用户名和密码，然后调用后端API进行登录  
      console.log('使用用户名和密码登录:', this.username, this.password);  
    },  
  },  
};  
</script>  
  
<style scoped>  
.login-container {  
  max-width: 400px;  
  margin: 50px auto;  
  padding: 20px;  
  border: 1px solid #ccc;  
  border-radius: 8px;  
}  
  
.login-method {  
  margin-bottom: 20px;  
}  
  
.qr-code-placeholder {  
  text-align: center;  
}  
  
img {  
  max-width: 100%;  
  height: auto;  
  display: block;  
  margin: 10px auto;  
}  
</style>