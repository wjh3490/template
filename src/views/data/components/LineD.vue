<template>
  <div id="lined"></div>
</template>

<script>
/*eslint-disable */
import echarts from 'echarts';
export default {
  name: 'LineD',
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
      this.chart = echarts.init(document.getElementById('lined'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        color: ['#f0c725', '#16f892'],
        // tooltip: {
        //   trigger: 'axis',
        //   backgroundColor: 'rgba(255,255,255,0.1)',
        //   axisPointer: {
        //     type: 'shadow',
        //     label: {
        //       show: true,
        //       textStyle: {
        //         color: '#fff',
        //         fontSize: 16,
        //       },
        //       backgroundColor: '#7B7DDC',
        //     },
        //   },
        // },

        grid: {
          x: '12%',
          width: '82%',
          bottom: 40,
          // containLabel: true,
        },

        xAxis: [
          {
            type: 'category',
            data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            axisLine: {
              lineStyle: {
                color: '#fff',
              },
            },
            axisLabel: { fontSize: 16 },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '(万)',
            nameTextStyle: {
              color: '#c1cadf',
              align: 'right',
              lineHeight: 10,
            },
            axisLine: {
              lineStyle: {
                color: '#fff',
              },
            },
            splitLine: { show: false },
            axisLabel: { fontSize: 16 },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '总卡数',
            type: 'line',
            // smooth: true,
            symbolSize: 8,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(240,199,37,0.5)',
                },
                {
                  offset: 1,
                  color: 'rgba(240,199,37,0.01)',
                },
              ]),
            },
            data: [127, 224, 120, 278, 227, 237, 200],
            barWidth: '30%',
            itemStyle: { normal: { color: '#f0c725' } },
          },
          {
            name: '使用中卡数',
            type: 'line',
            // smooth: true,
            symbolSize: 8,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(22,248,146,0.5)',
                },
                {
                  offset: 1,
                  color: 'rgba(22,248,146,0.01)',
                },
              ]),
            },
            data: [27, 124, 70, 178, 127, 157, 140],
            barWidth: '30%',
            itemStyle: { normal: { color: '#16f892' } },
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#lined {
  width: 100%;
  height: 100%;
}
</style>
