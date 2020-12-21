<template>
  <div id="linee"></div>
</template>

<script>
/*eslint-disable */
var xAxisData = [];
var data = [];
var data2 = [];
for (var i = 0; i < 50; i++) {
  xAxisData.push(i);
  data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
}
import echarts from 'echarts';
export default {
  name: 'LineE',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name: [],
          val: [],
        };
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('linee'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        grid: {
          x: '12%',
          width: '82%',
          bottom: 40,
          // containLabel: true,
        },
        xAxis: [
          {
            show: false,
            data: xAxisData,
          },
          {
            show: false,
            data: xAxisData,
          },
        ],
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: [
              '#4a657a',
              '#308e92',
              '#b1cfa5',
              '#f5d69f',
              '#f5898b',
              '#ef5055',
            ],
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: 'back',
            type: 'bar',
            data: data2,
            z: 1,
            itemStyle: {
              normal: {
                opacity: 0.4,
                barBorderRadius: 5,
                shadowBlur: 3,
                // shadowColor: '#111',
              },
            },
          },
          {
            name: 'Simulate Shadow',
            type: 'line',
            data: data,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: 'linear',
            animationDuration: 1200,
            lineStyle: {
              normal: {
                color: 'transparent',
              },
            },
            areaStyle: {
              normal: {
                color: '#08263a',
                shadowBlur: 50,
                shadowColor: '#000',
              },
            },
          },
          {
            name: 'front',
            type: 'bar',
            data: data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
              },
            },
          },
        ],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay: function(idx) {
          return idx * 20;
        },
        animationDelayUpdate: function(idx) {
          return idx * 20;
        },
      });
    },
  },
};
</script>
<style scoped lang="less">
#linee {
  width: 100%;
  height: 100%;
}
</style>
