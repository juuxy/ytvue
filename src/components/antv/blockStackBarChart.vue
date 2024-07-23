<template>
  <div id="地区" class="chart-container"></div>
</template>

<script lang="ts" setup>
import {Chart} from "@antv/g2";
import Color from "element-plus/es/components/color-picker/src/utils/color";
import {onMounted, ref} from 'vue';

const data = ref([
  {"type": "worker", "人数": 100, "地区": "五华"},
  {"type": "jobs", "人数": 30, "地区": "五华"},
  {"type": "worker", "人数": 99, "地区": "西山"},
  {"type": "jobs", "人数": 40, "地区": "西山"},
  {"type": "worker", "人数": 70, "地区": "盘龙"},
  {"type": "jobs", "人数": 80, "地区": "盘龙"},
  {"type": "worker", "人数": 120, "地区": "官渡"},
  {"type": "jobs", "人数": 90, "地区": "官渡"},
  {"type": "worker", "人数": 60, "地区": "呈贡"},
  {"type": "jobs", "人数": 50, "地区": "呈贡"},
  {"type": "worker", "人数": 110, "地区": "晋宁"},
  {"type": "jobs", "人数": 60, "地区": "晋宁"},
  {"type": "worker", "人数": 80, "地区": "安宁"},
  {"type": "jobs", "人数": 70, "地区": "安宁"},
  {"type": "worker", "人数": 130, "地区": "富民"},
  {"type": "jobs", "人数": 95, "地区": "富民"},
  {"type": "worker", "人数": 55, "地区": "宜良"},
  {"type": "jobs", "人数": 45, "地区": "宜良"},
  {"type": "worker", "人数": 75, "地区": "石林"},
  {"type": "jobs", "人数": 85, "地区": "石林"},
  {"type": "worker", "人数": 90, "地区": "嵩明"},
  {"type": "jobs", "人数": 110, "地区": "嵩明"},
  {"type": "worker", "人数": 65, "地区": "禄劝"},
  {"type": "jobs", "人数": 55, "地区": "禄劝"},
  {"type": "worker", "人数": 50, "地区": "寻甸"},
  {"type": "jobs", "人数": 65, "地区": "寻甸"}
]);

onMounted(() => {
  const chart = new Chart({
    container: '地区',
    autoFit: true,
  });

  chart
      .interval()
      .style('fillOpacity', 0.7)
      .legend({
        color: {
          itemMarkerSize: 20,
          itemLabelFill: "#283a3fd2",
          itemLabelFontSize: 20,
          // itemLabelText: (_, index) => logo[index][0],
          maxRows: 1,
          labelFormatter: (datum, index, data) => {
            console.log(datum)
            //如果datum 为 worker 返回 就业数 ，否则返回 求职数
            return datum === 'worker' ? '就业数' : '求职数'
            // datum.people.toLocaleString()
          },
        },
      })
      // .title({ title: 'hello', subtitle: 'world',titleFill:'red' })
      .data(data)
      .encode('x', '地区')
      .encode('y', '人数')
      .encode('color', 'type')
      .transform({type: 'dodgeX'})
      .interaction('elementHighlight', {background: true})
      // .scale('color', {palette: 'dark2'})
      .scale('color', {
        range: ['linear-gradient(to top, #394867, rgba(0,0,0,0))','linear-gradient(to top, #394867, rgba(0,0,0,0))'],
      })
      .axis('y', {
        lineLineWidth: 2,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(254,255,254)",
        line: {style: {stroke: '#black'}},
        label: {style: {fill: '#black'}},
        tickLine: {style: {stroke: '#black'}},
        grid: {line: {style: {stroke: '#ff0000'}}},
        // 轴标签
        labelFontSize: 20,
        labelFill: "black"
      })
      .axis('x', {
        labelFill: "black",
        // lineLineWidth: 20,
        // lineStroke: "rgb(21,214,229)",
        // line: {style: {stroke: '#ffffff'}},
        // label: {style: {fill: '#ffffff'}},
        // tickLine: {style: {stroke: '#ffffff'}},
        // grid: {line: {style: {stroke: '#f60101'}}},
        // 轴标签
        labelFontSize:15,
        // labelFill: "rgb(238,205,168)",
        // labelAlign: 'horizontal'
      })
  chart.title({title: '地区数据统计情况', titleFill: ' #283a3fd2', align: 'center', titleFontSize: 28})
  chart.render();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
