<template>
  <div :id="containerId" class="chart-container"></div>
</template>

<script lang="ts" setup>
import {Chart} from '@antv/g2';
import {onMounted, onBeforeUnmount, defineProps} from 'vue';
import { schemeTableau10 } from 'd3-scale-chromatic';
const props = defineProps<{
  data: Array<{ source: string, target:string ,value: number }>,
  containerId: string,
  title:string,
}>();

let chart: Chart;

onMounted(() => {
  chart = new Chart({
    container: props.containerId,
    autoFit: true,
  });
  chart
      .chord()
      .data({
        value: { links: props.data },
      })
      .layout({
        nodeWidthRatio: 0.05,
      })
      .scale('color', { range: schemeTableau10 })
      .style('labelFontSize', 15)
      .style('linkFillOpacity', 0.6);
  chart.title({title: props.title, titleFill: '#587064be', align: 'center', titleFontSize: 28})
  chart.render();
});

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
