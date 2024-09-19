
<script setup lang="ts">

import ButtonList from "@/components/buttonList.vue";
import times from "@/components/antv/getdate.vue"
import UnderMap from "@/components/underMap.vue";
import {computed, ref} from "vue";
import rcpq from "@/assets/btn/rcpq04.svg";
import rsdl from "@/assets/btn/rsdl04.svg";
import ks from "@/assets/btn/ks04.svg";
import lgsc from "@/assets/btn/lgsc04.svg";
import zp from "@/assets/btn/zp04.svg";
import px from "@/assets/btn/pxfw04.svg";
import wbfw from "@/assets/btn/wbfw04.svg";
import gjrc from "@/assets/btn/gjrc03.svg";
import rsda from "@/assets/btn/rsda04.svg";
import jnrd from "@/assets/btn/jnrd04.svg";
import zxyw from "@/assets/btn/zxyw.svg";

import g2Line from '@/components/antv/g2Line.vue';
import pie from '@/components/antv/pie.vue';
import chord from '@/components/antv/chord.vue';
import {onMounted, onUnmounted } from 'vue';  
  
const isMobile = ref(false);  
  
function updateMobileStatus() {  
  isMobile.value = window.innerWidth <= 768;  
}  
  
onMounted(() => {  
  window.addEventListener('resize', updateMobileStatus);  
  updateMobileStatus();  
});  
  
onUnmounted(() => {  
  window.removeEventListener('resize', updateMobileStatus);  
});  

const g2Views = [{
  name: "view1",
}, {
  name: "view2",
}, {
  name: "view3",
}, {
  name: "view4",
}]

const pieData = [
{ name: '农业', value: 30 },
  { name: '制造业', value: 20 },
  { name: '建筑业', value: 10 },
  { name: '批发和零售', value: 15 },
  { name: '服务业（包括旅游、教育、医疗等）', value: 25},
 
];

const pieData2 = [
  {name: '财务管理类', value: 22},
  {name: '纪检类', value:3.45},
  {name: '党群类', value: 3.45},
  {name: '行政管理类', value: 8.9},
  {name: '人力资源类', value: 8.9},
  {name: '投资管理类', value: 2.2},
  {name: '经营管理类', value: 7.5},
  {name: '市场拓展类', value: 8.45},
  {name: '法律合规类', value: 4.45},
  {name: '安全管理类', value: 1.45},
];

const chordData = [
  {
    source: '昆明',
    target: '曲靖',
    value: 30,
  },
  {
    source: '昆明',
    target: '大理',
    value: 80,
  },
  {
    source: '昆明',
    target: '丽江',
    value: 46,
  },
  {
    source: '昆明',
    target: '红河',
    value: 49,
  },
  {
    source: '昆明',
    target: '玉溪',
    value: 69,
  },
  {
    source: '昆明',
    target: '保山',
    value: 19,
  },
  {
    source: '曲靖',
    target: '红河',
    value: 62,
  },
  {
    source: '曲靖',
    target: '玉溪',
    value: 82,
  },
  {
    source: '曲靖',
    target: '大理',
    value: 16,
  },
  {
    source: '大理',
    target: '玉溪',
    value: 16,
  },
  {
    source: '丽江',
    target: '玉溪',
    value: 76,
  },
  {
    source: '丽江',
    target: '普洱',
    value: 24,
  },
  {
    source: '普洱',
    target: '昆明',
    value: 32,
  },
];

// 云才出山
const yccsBtns = ref([
  {
    imageSrc: rcpq,
    desc: '人才派遣',
    url: "https://www.hrwork.com/",
  },
  {
    imageSrc: wbfw,
    desc: '外包服务',
    url: "https://www.laofa.com/",
  },
  {
    imageSrc: gjrc,
    desc: '国际人才',
    url: "https://www.chuhaiyi.com/zh-CN/",
  },
  {
    imageSrc: rsdl,
    desc: '人事代理',
    url: "https://www.ysinc.com/product/ruzhitong",
  },
  {
    imageSrc: zp,
    desc: '招聘服务',
    url: "https://www.ynhrkf.com",
  },
  {
    imageSrc: lgsc,
    desc: '零工市场',
    url: "http://qyy-test.lirenkeji.com/#/login?redirect=/home/index",
  },
  {
    imageSrc: ks,
    desc: '考试服务',
    url: "http://www.kaoshitong.cn/",
  },
  {
    imageSrc: px,
    desc: '培训服务',
    url: "https://www.lebanban.com/mall/product/info",
  },
  {
    imageSrc: jnrd,
    desc: '技能认定',
    url: "http://www.kaoshitong.cn/",
  },
  
  {
    imageSrc: rsda,
    desc: '人事档案',
    url: "http://www.beidiaotong.cn/",

  },
  {
    imageSrc: zxyw,
    desc: '咨询业务',
    url: "https://www.ynhrs.com/ldcms/lianxiwomen.html",
  }

]);

import yqgk from "@/assets/btn/yqgk04.svg";
import zs from "@/assets/btn/zs04.svg";
import sthb from "@/assets/btn/sthb04.svg";
import yqdt from "@/assets/btn/yqdt04.svg";
import jyxc from "@/assets/btn/jyxc04.svg";
// 人力资源产业园
const rlzyBtns = ref([
  {
    imageSrc: yqgk,
    desc: '园区概况',
    url: "https://www.ynhrs.com/ldcms/xinwenzhongxin.html"
  },
  {
    imageSrc: zs,
    desc: '招商',
    url: "https://www.ynhrs.com/ldcms/hangyezixun.html"
  },
  {
    imageSrc: sthb,
    desc: '生态伙伴',
    url: "https://www.ynhrs.com/ldcms/shengtaihuoban.html"
  },
  {
    imageSrc: yqdt,
    desc: '园区动态',
    url: "https://www.ynhrs.com/ldcms/yuanqudongtai.html"
  },
  {
    imageSrc: jyxc,
    desc: '建言献策',
     url: "https://www.ynhrs.com/ldcms/lianxiwomen"
  },
])

//     <p style="width: 70%;font-size: 1.2vw">云投人力成为工业和信息化部人...</p>
// <p style="width: 25%;font-size: 1.2vw">2024-07-07</p>
//     <p style="width: 70%;font-size: 1.2vw">云南省2024年度灵活结业人员...</p>
// <p style="width: 25%;font-size: 1.2vw">2024-07-11</p>
//     <p style="width: 70%;font-size: 1.2vw">园区经济筑基赋能|云投中心B3...</p>
// <p style="width: 25%;font-size: 1.2vw">2024-07-12</p>
const news = ref([
  { title: "云投中心B3栋14F共享办公室等您来", date: "2024-08-22", url: "https://www.ynhrs.com/ldcms/hangyezixun/343.html" },
  { title: "云投人力劳务派遣怎么服务的？", date: "2024-07-11", url: "http://www.ynythr.com/ynhrkf/news/zyjnhcypi/15149ec7-98f3-450a-bb80-fe2e604fee64.htm" },
  { title: "云南外事服务中心“外事服务窗口”...", date: "2024-09-02" , url: "https://www.ynhrs.com/ldcms/yuanqudongtai/414.html"},
  { title: "云南省人力资源服务业发展研讨...", date: "2024-08-02", url: "https://www.ynhrs.com/ldcms/yuanqudongtai/350.html" },
  { title: "园区入驻企业招才纳贤", date: "2024-08-02", url: "https://www.ynhrs.com/ldcms/yuanqudongtai/349.html" },
  { title: "清凉的云南出圈 激发文旅消费新...", date: "2024-09-05", url: "https://www.ynhrs.com/ldcms/pinpaisheji/430.html" },
  { title: "云投人力创建申报的云南（昆明...", date: "2024-08-02", url: "https://www.ynhrs.com/ldcms/yuanqudongtai/347.html" },
]);

const startIndex = ref(0);

// 动态计算当前显示的新闻条目，确保始终有 3 个条目
const currentNews = computed(() => {
  const totalItems = news.value.length;
  return [
    news.value[startIndex.value % totalItems],
    news.value[(startIndex.value + 1) % totalItems],
    news.value[(startIndex.value + 2) % totalItems]
  ];
});

// 定时切换新闻条目
setInterval(() => {
  startIndex.value = (startIndex.value + 1) % news.value.length;
}, 1500);



import zbyw from "@/assets/btn/zbyw04.svg";
import wljs from "@/assets/btn/wljs04.svg";
import fycc from "@/assets/btn/fycc04.svg";
import chwl from "@/assets/btn/chwl04.svg";
import ytyx from "@/assets/btn/ytyx04.svg";
// y云品出滇
const ypcd = ref([
  {
    imageSrc: zbyw,
    desc: '直播业务',
    url: "https://www.ynhrs.com/ldcms/huacesheji.html",

  },
  {
    imageSrc: wljs,
    desc: '文旅介绍',
    url: "https://www.ynhrs.com/ldcms/pinpaisheji.html",

  },
  {
    imageSrc: fycc,
    desc: '非遗传承',
    url: "https://www.ynhrs.com/ldcms/feiyichuancheng.html",

  },
  {
    imageSrc: chwl,
    desc: '吃喝玩乐',

  },
  {
    imageSrc: ytyx,
    desc: '云投优选',

  },

])
import qyjs from "@/assets/btn/qyjs04.svg";
import djyl from "@/assets/btn/djyl04.svg";
import zgzj from "@/assets/btn/zgzj04.svg";
import BlockStackBarChart from "@/components/antv/blockStackBarChart.vue";
import G2LineAi from "@/components/antv/g2LineAi.vue";
import { removeDuplicateUniforms } from "@antv/l7";
import Loginbutton from "./icons/loginbutton.vue";
import Phone from "./icons/Phone.vue";
import topnav from "./icons/topnav.vue";

const gyytrl = ref([
  {
    imageSrc: qyjs,
    desc: '企业介绍',
    url: "https://www.ynhrs.com/ldcms/lianxiwomen"
  },
  {
    imageSrc: djyl,
    desc: '党建引领',
    url: "https://www.ynhrs.com/ldcms/dangjianyinling.html"
  },
  {
    imageSrc: zgzj,
    desc: '职工之家',
    url: "https://www.ynhrs.com/ldcms/zhigongzhijia.html"
  },


])

</script>
<template>
<div>
<el-container class="out_container1">
    <el-header height="12vh">
      <!--                  <el-image :src="require('@/assets/logo.png')" style="width: 200px"></el-image>-->

      <img src="/src/assets/logo.png" style="width:35%"/>
      <img src="/src/assets/haoye.png" style="width:23%;"/>
      <div class="placeholder" style="flex: 1;"></div>
      <div
          style="display: flex;flex-direction: row ;justify-items: center;align-items: center;justify-content: space-around;height: 13vh;margin-right:1vw">
      
          <router-link to="./Register">
          <el-button class="ph-bt" >注册</el-button>
        </router-link> 
          <router-link to="/login">
          <el-button class="ph-bt">登录</el-button> 
        </router-link> 
      </div>
    </el-header>
    <el-main class="el-main-flex1" style="display: flex; flex-direction: column;" >
      <!-- body -->
      <el-row class="content-row">
        <div class='template1' height="40vh">
            <el-carousel height="40vh">
              <a href="https://www.ynhrkf.com/datav/" target="_blank"> 
              <el-carousel-item >
                <block-stack-bar-chart></block-stack-bar-chart>
              </el-carousel-item>
              <el-carousel-item >
                <g2-line-ai></g2-line-ai>
              </el-carousel-item> 
              <el-carousel-item >
                <pie title="员工人才分类汇总表" container-id="12321" :data=pieData2 class="g2-view"
                     style="width:100%"></pie>
                 </el-carousel-item>
               <el-carousel-item >
                <g2-line class="g2-view" style="width:100%"></g2-line>
              </el-carousel-item>
              <el-carousel-item height="50vh">
                <pie title="员工人才分类汇总表" container-id="12321" :data=pieData2 class="g2-view"
                     style="width:100%"></pie>
              </el-carousel-item>
              <el-carousel-item >
                <chord title="人员流动表" container-id="333" :data=chordData class="g2-view" style="width:100%"></chord>
              </el-carousel-item>
            </a>
            </el-carousel>

            <!--            <el-text type="primary" tag="p" class="tem-title">业务数字大屏</el-text>-->
            <!-- <button-list :title="'业务数字大屏'" :btns="yccsBtns"></button-list> -->
        
          </div>
        <!-- li2 -->
        <el-col :span="24" class="content-col" >
          <!--云才出山-->
          <div class='template1' >
            <button-list :title="'云才出山'" :btns="yccsBtns"></button-list>
          </div>
          <div class='template1'>
            <button-list :title="'人力资源产业园服务'" :btns="rlzyBtns"></button-list>
          </div>
        </el-col>

        <!-- li3 -->
        <el-col :span="24" class="content-col">
          <div class='template1'>
            <button-list :title="'云品出滇'" :btns="ypcd"></button-list>
          </div>
          <div class='template1' >
            <button-list :title="'关于云投人力'" :btns="gyytrl"></button-list>
          </div>
          <!-- <div class="foot" style="height:28%"> -->
            <!--<img src="/src/assets/btn/gzh.png" style="width:25%;margin-left: 60%"/>
            <img src="/src/assets/btn/dt.png" style="width:20%"/> -->
            <!-- <img src="/src/assets/btn/sologan.png" style="width:50%;margin-left: 45%;"/> -->
            <!-- <text style="color: aliceblue;font-size: 1.55vh;width: 100%">
              Copyright © 2015-2024 Powered By 云南人力资源开发有限责任公司 版权所有
              <times></times>
            </text> -->
          <!-- </div> -->

        </el-col>


      </el-row>
      <!--      &lt;!&ndash; 其他内容 &ndash;&gt;-->
      <!-- <div style="background-color: rgba(0, 0, 0, 0); height: 100%; z-index: 99; width: 65vw">
      <button-list></button-list> -->
      <!-- </div> -->


    </el-main>

    <!-- foot -->


  </el-container>
  </div>  
</template>

<style scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
}

/*占满全屏*/

.out_container1{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  background-image: url('/src/assets/background/phbg.jpg');   
  background-size: cover;  
  background-repeat: no-repeat;   
  background-attachment: fixed;  
}


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

el-carousel-item{
    height: 35vh;
}

/* li1 */


.template1 {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  border-radius: 2vh;
  background-color: #dce6e1b4;
  border: #2c3e5031 solid 0.1vw;
  text-align: center;
  width: 94vw;
  padding: 1vw;

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

.ph-bt{
  width: 15vw;
  height: 3vh;
  font-size: 3.5vw;
  border-radius: 2vh;
  margin-right: 1vh;
  background-image: linear-gradient(to bottom, #5bae8458, #eff0ef1d);
  color: #426169;
}
/* 公告表单 */
.news-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 26vh;
  width: 100%;
  border-bottom-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
  background-color: rgba(230, 231, 232, 0.914);
  color: #587064;
}

/* 公告表单 */
.news-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;

  border-bottom-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
  background-color: rgba(230, 231, 232, 0.864);
  color: #587064;
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