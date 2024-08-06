<template>
  <div class="g2-views">
<!--    <div v-for="dict in g2Views" :key="dict.name" class="g2-view">-->
<!--      {{ dict.name }}-->
<!--    </div>-->
    <g2-line class="g2-view" style="width:60%"></g2-line>
    <pie title="员工分布图" container-id="sadsadsa" :data=pieData class="g2-view" style="width:30%"></pie>
    <pie title="员工人才分类汇总表" container-id="12321" :data=pieData2 class="g2-view" style="width:30%"></pie>
    <chord title="人员流动表" container-id="333" :data=chordData class="g2-view" style="width:30%"></chord>
  </div>
</template>


<script lang="ts" setup>
import g2Line from '@/components/antv/g2Line.vue';
import pie from '@/components/antv/pie.vue';
import chord from '@/components/antv/chord.vue';


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
  { name: '公司领导', value: 5 },
  { name: '党群综合部', value: 7 },
  { name: '财务管理部', value: 10 },
  { name: '党委', value: 1 },
  { name: '经营管理部', value: 5 },
  { name: '纪检风控部', value: 4 },
  { name: '市场营销中心', value: 3 },
  { name: '产品服务中心', value: 7 },
  { name: '业务发展中心', value: 5 },
];
//
// 财务管理类	10
// 纪检类	3
// 党群类	3
// 行政管理类	4
// 人力资源类	4
// 投资管理类	1
// 经营管理类	7
// 市场拓展类	8
// 研发类	0
// 法律合规类	4
// 安全管理类	1

const pieData2 = [
  { name: '财务管理类', value: 10 },
  { name: '纪检类', value: 3 },
  { name: '党群类', value: 3 },
  { name: '行政管理类', value: 4 },
  { name: '人力资源类', value: 4 },
  { name: '投资管理类', value: 1 },
  { name: '经营管理类', value: 7 },
  { name: '市场拓展类', value: 8 },
  { name: '研发类', value: 0 },
  { name: '法律合规类', value: 4 },
  { name: '安全管理类', value: 1 },
];

const chordData  = [
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

</script>

<style scoped>

.g2-views {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: 100%;
  height: 81vh;
  background-color: #bddbef;
}

.g2-view {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 30%;
  height: 45%;
  background-color: #bddbef;
  margin: 1%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

</style>


