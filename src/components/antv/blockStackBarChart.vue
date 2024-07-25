<template>
  <div id="地区" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { Chart } from "@antv/g2";
import { onMounted, ref, nextTick } from 'vue';

// 云南省各地州市的模拟数据
const data = ref([
  { "type": "worker", "人数": 120, "地区": "昆明" },
  { "type": "jobs", "人数": 80, "地区": "昆明" },
  { "type": "worker", "人数": 100, "地区": "曲靖" },
  { "type": "jobs", "人数": 60, "地区": "曲靖" },
  { "type": "worker", "人数": 90, "地区": "玉溪" },
  { "type": "jobs", "人数": 50, "地区": "玉溪" },
  { "type": "worker", "人数": 110, "地区": "保山" },
  { "type": "jobs", "人数": 70, "地区": "保山" },
  { "type": "worker", "人数": 80, "地区": "昭通" },
  { "type": "jobs", "人数": 40, "地区": "昭通" },
  { "type": "worker", "人数": 130, "地区": "丽江" },
  { "type": "jobs", "人数": 90, "地区": "丽江" },
  { "type": "worker", "人数": 70, "地区": "普洱" },
  { "type": "jobs", "人数": 60, "地区": "普洱" },
  { "type": "worker", "人数": 85, "地区": "临沧" },
  { "type": "jobs", "人数": 55, "地区": "临沧" },
  { "type": "worker", "人数": 95, "地区": "楚雄" },
  { "type": "jobs", "人数": 65, "地区": "楚雄" },
  { "type": "worker", "人数": 105, "地区": "红河" },
  { "type": "jobs", "人数": 75, "地区": "红河" },
  { "type": "worker", "人数": 115, "地区": "文山" },
  { "type": "jobs", "人数": 85, "地区": "文山" },
  { "type": "worker", "人数": 125, "地区": "西双版纳" },
  { "type": "jobs", "人数": 95, "地区": "西双版纳" },
  { "type": "worker", "人数": 135, "地区": "大理" },
  { "type": "jobs", "人数": 105, "地区": "大理" },
  { "type": "worker", "人数": 145, "地区": "德宏" },
  { "type": "jobs", "人数": 115, "地区": "德宏" },
  { "type": "worker", "人数": 155, "地区": "怒江" },
  { "type": "jobs", "人数": 125, "地区": "怒江" },
  { "type": "worker", "人数": 165, "地区": "迪庆" },
  { "type": "jobs", "人数": 135, "地区": "迪庆" },
]);

onMounted(async () => {
  await nextTick();

  const chart = new Chart({
    container: '地区',
    autoFit: true,
    
  });

  chart
      .interval()
      .style('fillOpacity', 1)
      .data(data.value)
      .encode('x', '地区')
      .encode('y', '人数')
      .encode('color', 'type')
      .transform({ type: 'dodgeX' })
      .interaction('elementHighlight', { background: true })
      .scale('color', {
        range: ['rgba(57, 72, 103, 0.79)', 'rgba(255, 255, 255, 0.9)'],
      })
      .axis('y', {
        label: {
          style: { fill: '#000' },
          fontSize: 20,
        },
        grid: {
          line: { style: { stroke: '#000' } },
        },
      })
      .axis('x', {
        label: {
          style: { fill: '#000' },
          fontSize: 35,
        },
      })
      .legend('color', {
        itemMarkerSize: 20,
        itemLabelFill: "#000",
        itemLabelFontSize: 20,
        labelFormatter: (datum) => (datum === 'worker' ? '派出' : '召回'),
      });

  chart.title({title: '云南省人才派遣数据统计', titleFill: '#394867', align: 'center', titleFontSize: 28})
  chart.render();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 231, 195, 0.003);
}

.parent-container {
  width: 100%;
  height:100%;
}
</style>
