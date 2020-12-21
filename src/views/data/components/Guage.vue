<template>
  <div id="guage"></div>
</template>

<script>
/*eslint-disable */
import echarts from 'echarts';
export default {
  name: 'Guage',
  props: {
    data: {
      type: Object,
      default: () => {},
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
      this.chart = echarts.init(document.getElementById('guage'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        tooltip: {
          formatter: '{a}年度百分比 : {b}',
          textStyle: {
            color: '#fff',
            fontSize: 15.4,
          },
          fontSize: 0,
        },  
        series: [
          {
            center: ['23%', '60%'],
            radius: '60%',
            startAngle: 240,
            endAngle: 30,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    '1',
                    (function() {
                      return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                          offset: 0,
                          color: '#00d5ff',
                        },
                        {
                          offset: 1,
                          color: '#ffbe00',
                        },
                      ]);
                    })(),
                  ],
                  ['1', '#222e7d'],
                ],
                width: 10,
                fontSize: 15.0,
                shadowColor: 'rgba(0, 213, 255,1)',
                shadowBlur: 180,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
            },
            axisTick: {
              length: 10,
              lineStyle: {
                width: 1,
              },
              alignWithLabel: false,
            },
            axisLabel: {
              textStyle: {
                color: '#00d5ff',
                fontSize: 14,
              },
              distance: 8,
            },
            splitLine: {
              lineStyle: {
                width: 3,
              },
              length: 13,
            },
            pointer: {
              length: '70%',
              width: 10,
            },
            title: {
              fontWeight: 'bolder',
              fontSize: 20,
              color: '#fff',
              fontStyle: 'italic',
            },
            detail: {
              backgroundColor: 'rgba(255, 190, 0, 1)',
              formatter: function(value) {
                return '2018';
              },
              fontSize: 16,
              textColor: '#fff',
            },
            name: '2018',
            type: 'gauge',
            z: 3,
            data: [
              {
                value: 20,
                name: '20%',
              },
            ],
          },
          {
            center: ['77%', '60%'],
            radius: '60%',
            startAngle: 150,
            endAngle: -60,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    '1',
                    (function() {
                      return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                          offset: 0,
                          color: '#00d5ff',
                        },
                        {
                          offset: 1,
                          color: '#ffbe00',
                        },
                      ]);
                    })(),
                  ],
                  ['1', '#222e7d'],
                ],
                width: 10,
                fontSize: 15.0,
                shadowColor: 'rgba(0, 213, 255,1)',
                shadowBlur: 60,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
            },
            axisTick: {
              length: 10,
              lineStyle: {
                width: 1,
              },
              alignWithLabel: false,
            },
            axisLabel: {
              textStyle: {
                color: '#00d5ff',
                fontSize: 14,
              },
              distance: 5,
            },
            splitLine: {
              lineStyle: {
                width: 3,
              },
              length: 13,
            },
            pointer: {
              length: '70%',
              width: 10,
            },
            title: {
              fontWeight: 'bolder',
              fontSize: 20,
              color: '#fff',
              fontStyle: 'italic',
            },
            detail: {
              backgroundColor: 'rgba(255, 190, 0, 1)',
              formatter: function(value) {
                return '2020';
              },
              fontSize: 16,
              textColor: '#fff',
            },
            name: '2020',
            type: 'gauge',
            z: 3,
            data: [
              {
                value: 100,
                name: '100%',
              },
            ],
          },
          {
            center: ['50%', '50%'],
            radius: '70%',
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    '1',
                    (function() {
                      return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                          offset: 0,
                          color: '#00d5ff',
                        },
                        {
                          offset: 1,
                          color: '#ffbe00',
                        },
                      ]);
                    })(),
                  ],
                  ['1', '#222e7d'],
                ],
                width: 15,
                fontSize: 20.0,
                shadowColor: 'rgba(0, 213, 255,1)',
                shadowBlur: 60,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
            },
            axisTick: {
              length: 15,
              lineStyle: {
                width: 1,
              },
              alignWithLabel: false,
            },
            axisLabel: {
              textStyle: {
                color: '#00d5ff',
                fontSize: 16,
              },
              distance: 5,
            },
            splitLine: {
              lineStyle: {
                width: 3,
              },
              length: 17,
            },
            pointer: {
              length: '70%',
              width: 10,
            },
            title: {
              fontWeight: 'bolder',
              fontSize: 24,
              color: '#fff',
              fontStyle: 'italic',
            },
            detail: {
              show: true,
              backgroundColor: 'rgba(255, 190, 0, 1)',
              formatter: function(value) {
                return '2019';
              },
              fontSize: 20,
              textColor: '#fff',
            },
            name: '2019',
            type: 'gauge',
            z: 3,
            data: [
              {
                value: 50,
                name: '50%',
              },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#guage {
  width: 100%;
  height: 100%;
}
</style>
