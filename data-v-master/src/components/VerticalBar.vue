<template>
  <div>
    <div>服务资源占用比</div>
    <div ref="target" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";


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


const renderChart = () => {
  const options = {
 
    xAxis: {
      type: "category",
      data:[
        props.data.servers[0].name = "消毒液",
        props.data.servers[1].name = "口罩",
        props.data.servers[2].name = "防护服",
        props.data.servers[3].name = "体温计",
        props.data.servers[4].name = "防护镜"
      ],
      axisLabel: { color: "#9eb1c8" },
    },
   
    yAxis: {
      show: false, 
      type: "value", 
      max: function (value) {
        return parseInt(value.max * 1.2);
      },
      
    },
    
    grid: {
      top: 16,
      right: 0,
      bottom: 26,
      left: -26,
      containLabel: true, 
    },
    
    series: [
      {
        type: "bar",
        data: props.data.servers.map(item => ({
          name: item.name,
          value:item.value
        })),
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          color: '#5D98CE',
          barBorderRadius: 5,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 5
        },
        barWidth: 12,
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color:'#fff',
          },
          formatter:'{c}%'
          
        }
      },
    ],
  };
 
  myChart.setOption(options);
};

watch(() => props.data,renderChart)
</script>

<style lang="scss" scoped></style>
