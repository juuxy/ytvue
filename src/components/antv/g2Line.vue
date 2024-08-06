<template>
  <div id="g2line" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { Chart } from "@antv/g2";
import { onMounted, ref, nextTick } from 'vue';

// 数据变量
const data = ref([
  { date: '2023-08', amount: 37, symbol: "企业数" },
  { date: '2023-09', amount: 110, symbol: "企业数" },
  { date: '2023-10', amount: 38, symbol: "企业数" },
  { date: '2023-11', amount: 35, symbol: "企业数" },
  { date: '2023-12', amount: 52, symbol: "企业数" },
  { date: '2024-01', amount: 32, symbol: "企业数" },
  { date: '2024-02', amount: 21, symbol: "企业数" },
  { date: '2024-03', amount: 84, symbol: "企业数" },
  { date: '2024-04', amount: 39, symbol: "企业数" },
  { date: '2024-05', amount: 33, symbol: "企业数" },
  { date: '2023-06', amount: 22, symbol: "企业数" },


]);

// 配色变量
const colorPalette = 'dark2';
const axisColor = '#f60606';
const gridLineColor = '#2a2a2a';
const titleColor = ' #587064';
const titleFontSize =30;
const axisLabelFontSize = 15;
const labelFill ='black';
const title = '新增招聘企业数';
onMounted(async () => {
  await nextTick();
  const init = document.createEvent("Event");
  init.initEvent("resize", true, true);
  window.dispatchEvent(init);
  setTimeout(() => {
    window.dispatchEvent(init);
  }, 50);

  const chart = new Chart({
    container: 'g2line',
    autoFit: true,
  });

  chart
      .line()
      .data(data.value)
      .encode('x', 'date')
      .encode('y', 'amount')
      .encode('series', 'symbol')
      .encode('color', 'symbol')
      .style('gradient', 'y')
      .style('shape', 'smooth')
      .style('lineWidth', 2)
      .scale('color', { palette: colorPalette })
      .axis('y', {
        lineLineWidth: 1,
        lineStroke: "rgb(0,0,0)",
        line: { style: { stroke: axisColor } },
        label: { style: { fill: axisColor } },
        tickLine: { style: { stroke: axisColor } },
        grid: { line: { style: { stroke: '#ff0000' } } },
        labelFontSize: axisLabelFontSize,
        labelFill: labelFill,
        title:"企业数"
      })
      .axis('x', {
        lineLineWidth: 1,
        lineStroke: "rgb(0,0,0)",
        line: { style: { stroke: axisColor } },
        label: { style: { fill: axisColor } },
        tickLine: { style: { stroke: axisColor } },
        grid: { line: { style: { stroke: '#f60101' } } },
        labelFontSize: axisLabelFontSize,
        labelFill: labelFill,
        labelAlign:'parallel',
        labelAutoWrap:true,
        title:"年月"
      });

  chart.title({ title: title, titleFill: titleColor, align: 'center', titleFontSize: titleFontSize });

  await chart.render();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  background-color: rgba(212, 130, 7, 0.003);
}
</style>
