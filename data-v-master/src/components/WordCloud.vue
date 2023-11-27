
<template>
  <div>
    <div><a href="../static1/index.html">关键词条</a></div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted,watch } from 'vue';
import * as echarts from "echarts";
import 'echarts-wordcloud'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

let myChart = null;
const target = ref(null);
onMounted(() => {
  myChart = echarts.init(target.value);
  renderChart();
});



const randowRGB = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return `rgb(${r},${g},${b})`
}


const renderChart = () => {
  const newDatas = [
   
      { name: '新冠', value: 10 },
      { name: '梅毒', value: 8 },
      { name: '流感', value: 12 },
      { name: '麻疹', value: 11 },
      { name: '肺结核', value: 6 },
      { name: '登革热', value: 8 },
      { name: '艾滋病', value: 9 },
      { name: '霍乱', value: 7 },
      { name: '淋病', value: 6 },
      { name: '狂犬病', value: 9 },
      { name: '白喉', value: 10 },
      { name: '布鲁氏菌病', value: 11 },
      { name: '脊髓灰质炎', value: 6 },
      { name: '脊髓灰质炎', value: 13 },
     
    ];
  const options = {
    series: [
      {
        type: 'wordCloud',
        sizeRange: [8, 46],
        rotationRange: [0, 0],
        gridSize: 0,
        layoutAnimation: true,
        textStyle: {
          color:randowRGB
        },
        emphasis: {
          textStyle: {
            fontWeight: 'bold',
            color:'#ffffff'
          }
        },
        data:newDatas,
      }
    ] 
  }
  
  myChart.setOption(options);
};
watch(() => props.data,renderChart)
</script>

<style lang="scss" scoped>

</style>