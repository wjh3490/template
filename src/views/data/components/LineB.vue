<template>
  <div id="lineb"></div>
</template>

<script>
/*eslint-disable */
import echarts from 'echarts';
export default {
  name: 'LineB',
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
      this.chart = echarts.init(document.getElementById('lineb'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        color: ['#3cefff'],
        grid: {
          x: '12%',
          width: '82%',
          bottom: 40,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '01月',
              '02月',
              '03月',
              '04月',
              '05月',
              '06月',
              '07月',
              '08月',
              '09月',
              '10月',
              '11月',
              '12月',
            ],
            axisTick: {
              alignWithLabel: true,
            },
            nameTextStyle: {
              color: 'red',
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
              formatter: '{value}%',
            },
            splitLine: {
              lineStyle: {
                color: '#fff',
              },
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: '{c}%',
              },
            },
            data: [60, 70, 80, 90, 60, 70, 80, 90, 70, 80, 90, 100],
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, 5],
            z: 12,
            data: [60, 70, 80, 90, 60, 70, 80, 90, 70, 80, 90, 100],
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                opacity: 0.7,
              },
            },
            barWidth: '20',
            data: [60, 70, 80, 90, 60, 70, 80, 90, 70, 80, 90, 100],
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#lineb {
  width: 100%;
  height: 100%;
}
</style>
