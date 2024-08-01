<template>
  <div ref="chartContainer"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {Chart} from '@antv/g2';

// 数据
const data = [
  {'月份': '23-08', city: '招聘', '人数': 7},
  {'月份': '23-08', city: '求职', '人数': 3.9},
  {'月份': '23-09', city: '招聘', '人数': 6.9},
  {'月份': '23-09', city: '求职', '人数': 4.2},
  {'月份': '23-10', city: '招聘', '人数': 9.5},
  {'月份': '23-10', city: '求职', '人数': 5.7},
  {'月份': '23-11', city: '招聘', '人数': 14.5},
  {'月份': '23-11', city: '求职', '人数': 8.5},
  {'月份': '23-12', city: '招聘', '人数': 18.4},
  {'月份': '23-12', city: '求职', '人数': 11.9},
  {'月份': '24-01', city: '招聘', '人数': 21.5},
  {'月份': '24-01', city: '求职', '人数': 15.2},
  {'月份': '24-02', city: '招聘', '人数': 25.2},
  {'月份': '24-02', city: '求职', '人数': 17},
  {'月份': '24-03', city: '招聘', '人数': 26.5},
  {'月份': '24-03', city: '求职', '人数': 16.6},
  {'月份': '24-04', city: '招聘', '人数': 23.3},
  {'月份': '24-04', city: '求职', '人数': 14.2},
  {'月份': '24-05', city: '招聘', '人数': 18.3},
  {'月份': '24-05', city: '求职', '人数': 10.3},
  {'月份': '24-06', city: '招聘', '人数': 13.9},
  {'月份': '24-06', city: '求职', '人数': 6.6},
  {'月份': '24-07', city: '招聘', '人数': 9.6},
  {'月份': '24-07', city: '求职', '人数': 4.8},
];

// 创建图表容器的引用
const chartContainer = ref(null);

onMounted(() => {
  const chart = new Chart({
    container: chartContainer.value,
    autoFit: true,
  });

  chart
      .data(data)
      .title("aaaa")
      .encode('x', '月份')
      .encode('y', '人数')
      .encode('color', 'city')
      .scale('x', {
        range: [0, 1],
      })
      .scale('y', {
        nice: true,
      })
      .axis('y', {
        lineLineWidth: 3,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(0,0,0)",
        line: {style: {stroke: '#ffffff'}}, // Change y-axis line color
        label: {style: {fill: '#ffffff'}}, // Change y-axis label color
        tickLine: {style: {stroke: '#ffffff'}}, // Change y-axis tick color
        grid: {line: {style: {stroke: '#2a2a2a'}}}, // Change y-axis grid line color
        // 轴标签
        labelFontSize: 20,
        // tickStroke: "rgb(246,1,1)", // Change y-axis tick color
      })
      .axis('x', {
        lineLineWidth: 3,
        // labelFormatter: (d) => d + '°C',
        lineStroke: "rgb(0,0,0)",
        line: {style: {stroke: '#ffffff'}},

        label: {style: {fill: '#ffffff'}},
        tickLine: {style: {stroke: '#ffffff'}},
        grid: {line: {style: {stroke: '#2a2a2a'}}},
        // 轴标签
        labelFontSize: 20,
        labelFill: "rgb(0,0,0)"
      })
      .legend('color', {
        itemMarkerSize: 20,
        itemLabelFill: "#283a3fd2",
        itemLabelFontSize: 20,
        // labelFormatter: (datum) => (datum === 'worker' ? '就业数' : '求职数'),
      });

  chart.line().encode('shape', 'smooth');
  chart.point().encode('shape', 'point').tooltip(false);
  chart
      .area()
      .style('fill', 'linear-gradient(-90deg, white 0%, rgba(255,231,195,0) 100%)')
      .encode('shape', 'smooth');
  chart.title({title: '招聘数&求职数趋势', titleFill: '#394867', align: 'center', titleFontSize: 30})
  chart.render();
});
</script>

<style scoped>

</style>