<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: [String]
  }, btns: {
    type: [Array]
  }
});

</script>

<template>
  <el-text type="primary" tag="p" class="tem-title">{{ props.title }}</el-text>
  <div class='btns'>
    <div class="ico" v-for="item in props.btns" :key="item.imageSrc">
      <img class="imag":src="item.imageSrc" alt="Logo" >
      <p class="desc">{{ item.desc }}</p>
    </div>
  </div>

</template>

<style scoped>
.btns {
  display: flex;
  justify-content: left;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  color: #426169d2;
  font-weight: bold;
  padding-left: 0vw

 }

.ico{
  background-color: #394867;
  border-radius: 2vh;
  margin: 2vh;
  width: 10vh;
  height: 10vh;
  margin-top: 0vh
}
.ico:hover{
  background-color: #39486751;
}
.imag{
  width: 5vh;
  padding: 0.8vh;
}
.desc{
  color: aliceblue;
  margin-top: 0vh;
  font-size: 1.6vh
  
}
.tem-title {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 3vh;
  font-weight: bold;
  padding: 2vh;
  color: #283a3fd2;
  width: 88%;
  /* background:linear-gradient(to right,#ffffffc0,#d7e8df00) ; */
  border-top-left-radius:5vh ;
}
</style>