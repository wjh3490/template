<template>
  <div id="linec"></div>
</template>

<script>
/*eslint-disable */
import echarts from 'echarts';
export default {
  name: 'LineC',
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
      this.chart = echarts.init(document.getElementById('linec'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        textStyle: {
          color: '#c0c3cd',
          fontSize: 14,
        },

        color: [
          '#63caff',
          '#49beff',
          '#03387a',
          '#03387a',
          '#03387a',
          '#6c93ee',
          '#a9abff',
          '#f7a23f',
          '#27bae7',
          '#ff6d9d',
          '#cb79ff',
          '#f95b5a',
          '#ccaf27',
          '#38b99c',
          '#93d0ff',
          '#bd74e0',
          '#fd77da',
          '#dea700',
        ],
        grid: {
          x: '12%',
          width: '82%',
          bottom: 40,
        },
        xAxis: {
          // nameTextStyle: {
          //   color: '#fff',
          //   padding: [0, 0, -10, 0],
          //   fontSize: 14,
          // },
          axisLabel: {
            color: '#fff',
            fontSize: 14,
            interval: 0,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          type: 'category',
        },
        yAxis: {
          nameTextStyle: {
            color: '#c0c3cd',
            padding: [0, 0, -10, 0],
            fontSize: 14,
          },
          axisLabel: {
            color: '#fff',
            fontSize: 14,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#fff',
            },
          },
          axisLine: {
            show: false,
          },
          name: '',
        },
        series: [
          {
            data: [200, 85, 112, 275, 305, 415, 741],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#1477BD',
                  },
                  {
                    offset: 1,
                    color: '#00FFFE',
                  },
                ],
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff',
            },
            zlevel: 100,
          },
          {
            data: [1, 1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15],
            zlevel: 100,
          },
          {
            data: [200, 85, 112, 275, 305, 415, 741],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: 100,
          },
          {
            data: [741, 741, 741, 741, 741, 741, 741],
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            barGap: '-100%',
            zlevel: 2,
          },
          {
            data: [1, 1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15],
            zlevel: -2,
          },
          {
            data: [741, 741, 741, 741, 741, 741, 741],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: 2,
          },
        ],
        tooltip: {
          trigger: 'axis',
          show: false,
        },
      });
    },
  },
};
</script>
<style scoped lang="less">
#linec {
  width: 100%;
  height: 100%;
}
</style>
