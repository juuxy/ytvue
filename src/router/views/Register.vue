<template>  
<div class="regist">
 
    <el-header height="12vh">
      <!--                  <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->

      <img src="/src/assets/logo.png" style="width:13%"/>

    </el-header>
<div class="registy">
	<div class="registration-form">  
	  <h1 style="text-align: center;font-size: 25px;">注册</h1>  
	  <form @submit.prevent="handleSubmit">  
		
		<div>  
		  <label for="phone">手机号:</label>  
		  <input id="phone" placeholder="请输入手机号" v-model="form.phone" type="phone" required>  
		</div>  
		<div>  
		  <label for="username">账号:</label>  
		  <input id="username" placeholder="请输入账号"  v-model="form.username" type="text" required>  
		</div>  
		<div>  
		  <label for="password">密码:</label>  
		  <input id="password" placeholder="请输入密码"  v-model="form.password" type="password" required>  
		</div>  
		<button>注  册</button>  
	  </form>  
	</div>
	</div>  
</div>
  </template>  
  
  <script>  
  import { ref } from 'vue';  
  
  export default {  
	name: 'RegistrationForm',  
	setup() {  
	  const form = ref({  
		phone: '',  
		username: '',  
		password: '',  
	  });  
  
	  const handleSubmit = () => {  
		// 在这里，你可能想要发送一个请求到后端API来注册用户  
		// 例如: axios.post('/register', form.value)  
		console.log('Form submitted:', form.value);  
	  };  
  
	  return {  
		form,  
		handleSubmit,  
	  };  
	},  
  };  
  </script>  
  
  <style scoped>  
  body, html {  
  height: 100%;
  margin: 0;  
  overflow: hidden;}  
  
  .regist{
	height:100%;
  background-image: url('/src/assets/background/bg04.jpg');   
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
  .registy{
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 88vh;
  }
  .registration-form {  
	background-color: #f9f9f9c8;
	width: 340px; /* 稍微增宽以容纳更多内容 */  
  height: 450px;
	padding: 30px;  
	border: 1px solid #ccc;  
	border-radius: 8px;  
  z-index: 1;
  }  
  .registration-form label {  
	display: block;  
	margin-bottom: 5px;  
	font-size: 18px;
  }  
  .registration-form button {  
  width: 100%;  
  padding: 12px;  
  margin-top: 25px;
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
  
  .registration-form input[type="phone"],  
  .registration-form input[type="text"],  
  .registration-form input[type="password"] {  
	width: calc(100% - 30px); /* 减去padding */  
  padding: 15px;
  margin-top: 15px;  
  margin-bottom: 10px;  
  border: 1px solid #ccc;  
  border-radius: 4px;  
  font-size: 15px;  
  }  
  </style>