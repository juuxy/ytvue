<script setup lang="ts">

import ButtonList from "@/components/buttonList.vue";
import times from "@/components/antv/getdate.vue"
import UnderMap from "@/components/underMap.vue";
import {ref} from "vue";
import rcpq from "@/assets/btn/rcpq02.svg";
import rsdl from "@/assets/btn/rsdl01.svg";
import ks from "@/assets/btn/ks02.svg";
import lgsc from "@/assets/btn/lgsc02.svg";
import zp from "@/assets/btn/zp02.svg";
import px from "@/assets/btn/px02.svg";
import wbfw from "@/assets/btn/wbfw02.svg";
import gjrc from "@/assets/btn/gjrc02.svg";
import rsda from "@/assets/btn/rsda02.svg";


// 云才出山
const yccsBtns = ref([
  {
    imageSrc: rcpq,
    desc: '人才派遣',
  },
  {
    imageSrc: wbfw,
    desc: '外包服务',
  },
  {
    imageSrc: gjrc,
    desc: '国际人才',
  },
  {
    imageSrc: rsdl,
    desc: '人事代理',
  },
  {
    imageSrc: zp,
    desc: '招聘服务',
    url: "https://www.ynhrkf.com"
  },
  {
    imageSrc: lgsc,
    desc: '零工市场',
  },
  {
    imageSrc: ks,
    desc: '考试服务',
  },
  {
    imageSrc: px,
    desc: '培训服务',
  },
  {
    imageSrc: rsdl,
    desc: '人事代理',
  },

  {
    imageSrc: rsda,
    desc: '人事档案'
  }

]);

import yqgk from "@/assets/btn/yqgk02.svg";
import zs from "@/assets/btn/zs02.svg";
import sthb from "@/assets/btn/sthb02.svg";
import yqdt from "@/assets/btn/yqdt02.svg";
import jyxc from "@/assets/btn/jyxc02.svg";
// 人力资源产业园
const rlzyBtns = ref([
  {
    imageSrc: yqgk,
    desc: '园区概况',
  },
  {
    imageSrc: zs,
    desc: '招商',
  },
  {
    imageSrc: sthb,
    desc: '生态伙伴',
  },
  {
    imageSrc: yqdt,
    desc: '园区动态',
  },
  {
    imageSrc: jyxc,
    desc: '建言献策',
  },
])

import zbyw from "@/assets/btn/zbyw02.svg";
import wljs from "@/assets/btn/wljs02.svg";
import fycc from "@/assets/btn/fycc02.svg";
import chwl from "@/assets/btn/chwl02.svg";
// y云品出滇
const ypcd = ref([
  {
    imageSrc: zbyw,
    desc: '直播业务',
  },
  {
    imageSrc: wljs,
    desc: '文旅介绍',
  },
  {
    imageSrc: fycc,
    desc: '非遗传承',
  },
  {
    imageSrc: chwl,
    desc: '吃喝玩乐',
  },

])
import qyjs from "@/assets/btn/qyjs02.svg";
import djyl from "@/assets/btn/djyl02.svg";
import zgzj from "@/assets/btn/zgzj02.svg";
import BlockStackBarChart from "@/components/antv/blockStackBarChart.vue";
import G2LineAi from "@/components/antv/g2LineAi.vue";

const gyytrl = ref([
  {
    imageSrc: qyjs,
    desc: '企业介绍',
  },
  {
    imageSrc: djyl,
    desc: '党建引领',
  },
  {
    imageSrc: zgzj,
    desc: '职工之家',
  },


])

</script>
<template>

  <!-- top -->
  <el-container class="out_container">
    <el-header height="12vh">
      <!--                  <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->

      <img src="/src//assets/logo.png" style="width:13%"/>

      <div class="placeholder" style="flex: 1;"></div>
      <div
          style="display: flex;flex-direction: row ;justify-items: center;align-items: center;justify-content: space-around;height: 13vh;margin-right:2vw">
        <el-button class="bt1" type="primary">企业登录/注册</el-button>
        <el-button class="bt2" type="primary">个人登录/注册</el-button>
      </div>
    </el-header>
    <el-main class="el-main-flex">
      <!-- body -->
      <el-row class="el-main-flex">
        <el-col :span="8"
                class="body-col">
          <div class='template' style="height:60%">
            <el-carousel height="50vh">
              <el-carousel-item height="50vh">
                <block-stack-bar-chart></block-stack-bar-chart>
              </el-carousel-item>
              <el-carousel-item height="50vh">
                <g2-line-ai></g2-line-ai>
              </el-carousel-item>

            </el-carousel>

            <!--            <el-text type="primary" tag="p" class="tem-title">业务数字大屏</el-text>-->
            <!-- <button-list :title="'业务数字大屏'" :btns="yccsBtns"></button-list> -->
          </div>

          <!-- 新闻公告 -->
          <div class='template'
               style="height: 30%">


            <!-- 新闻公告 -->
            <el-text
                style="font-size: 3vh;text-align: left;font-weight: bold;color:black;">
              公 告
            </el-text>
            <div class="news-info">
              <p style="width: 75%;font-size: 1.2vw">云投人力成为工业和信息化部人...</p>
              <p style="width: 25%;font-size: 1.2vw">2024-07-07</p>
              <p style="width: 75%;font-size: 1.2vw">云南省2024年度灵活结业人员...</p>
              <p style="width: 25%;font-size: 1.2vw">2024-07-11</p>
              <p style="width: 75%;font-size: 1.2vw">园区经济筑基赋能|云投中心B3...</p>
              <p style="width: 25%;font-size: 1.2vw">2024-07-12</p>
            </div>
          </div>

        </el-col>
        <!-- li2 -->
        <el-col :span="8"
                class="body-col">
          <!--云才出山-->
          <div class='template' style="height: 55% ">
            <button-list :title="'云才出山'" :btns="yccsBtns"></button-list>
          </div>
          <div class='template' style="height: 35% ">
            <button-list :title="'人力资源产业园服务'" :btns="rlzyBtns"></button-list>
          </div>
        </el-col>

        <!-- li3 -->
        <el-col :span="8" class="body-col">
          <div class='template' style="height: 28%">
            <button-list :title="'云品出滇'" :btns="ypcd"></button-list>
          </div>
          <div class='template' style="height:28%">
            <button-list :title="'关于云投人力'" :btns="gyytrl"></button-list>
          </div>
          <div class="foot" style="height:34%">
            <img src="/src/assets/btn/gzh.png" style="width:20%"/>
            <img src="/src/assets/btn/dt.png" style="width:20%"/>
            <img src="/src/assets/btn//text.png" style="width:50%"/>
            <text style="color: aliceblue;font-size: 1.6vh;width: 100%">
              Copyright © 2015-2024 Powered By 云南人力资源开发有限责任公司 版权所有
              <times></times>
            </text>
          </div>

        </el-col>


      </el-row>
      <!--      &lt;!&ndash; 其他内容 &ndash;&gt;-->
      <!-- <div style="background-color: rgba(0, 0, 0, 0); height: 100%; z-index: 99; width: 65vw">
      <button-list></button-list> -->
      <!-- </div> -->


    </el-main>

    <!-- foot -->


  </el-container>


</template>


<style scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
}

/*占满全屏*/
.out_container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
}


/* .aside_main_footer_container {
  width: 100vw;
}

.main_footer_container {
  width: 100vw;
}

.aside_container {
  width: 18%;
} */

/* top */
.el-header {
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100vw;
  box-shadow: 0 1vh 1vw rgba(0, 0, 0, 0.1); /* 轻微的阴影效果提升层次感 */
}

.el-aside {
  background-color: #d7e8df;
  color: #333;

}


.el-main {
  color: #333;
  width: 100vw;
  --el-main-padding: 0.1vh;
}

/* .el-footer {
  height: 6vh;
  width: 100vw;
  background-color: #46505a;
  text-align: center;
  align-content: center;
  position: relative; /* 确保子元素相对于父元素定位

} */


/* li1 */
.template {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  border-radius: 5vh;
  background-color: #dce6e176;
  border: #2c3e5031 solid 0.1vw;
  text-align: center;
  width: 95%;
}

.template3 {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  border-radius: 5vh;
  background-color: #dce6e176;
  border: #2c3e5031 solid 0.1vw;
  text-align: center;
  margin-top: 1vh;
  width: 29vw;
  height: 55vh;

}

/* 业务数字大屏 */
.tem-title {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 3vh;
  font-weight: bold;
  width: 30vw;
  height: 3vh;
  padding: 1vh 1.5vw;
  background: linear-gradient(to right, #ffffffc0, #d7e8df00);
  border-top-left-radius: 5vh;

  color: #2c3e50;
}

/* 登录注册 */
.bt1 {
  width: 12vw;
  height: 6vh;
  font-size: 1.2vw;
  border-radius: 2vh;
  background-color: #394867;
  border: #2c3e50
}

.bt2 {
  width: 12vw;
  height: 6vh;
  font-size: 1.2vw;
  border-radius: 2vh;
  background-color: rgba(255, 255, 255, 0.727);
  color: #394867;
  border: #2c3e50
}

/* 公告表单 */
.news-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 25vh;
  width: 95%;
  border-bottom-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
  background-color: rgba(230, 231, 232, 0.864);
}


.foot {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
flex-wrap: wrap;
  text-align: center;
  width: 95%;
}


.el-carousel {
  height: 100%;
  width: 100%;
}

.el-carousel__item {
  height: 100%;
  width: 100%;
}

.el-carousel__container {
  height: 100%;
  width: 100%;
}

.body-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around
}

.col-flex {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
}


.el-main-flex {
  height: 88vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  width: 100%
}

</style>