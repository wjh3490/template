<template>
  <div id="liquidFill"></div>
</template>

<script>
/*eslint-disable */
import echarts from 'echarts';
import 'echarts-liquidfill';
var max = 500;
var scroe = 60 / 100;
var data = max * scroe;
export default {
  name: 'LiquidFill',
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
      this.chart = echarts.init(document.getElementById('liquidFill'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        series: [
          {
            type: 'liquidFill',
            data: [0.45],
            radius: '75%',
            color: ['#00b9f5'],
            backgroundStyle: {
              color: 'rgba(0, 0, 0, 0.5)',
              borderColor: '#007bff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 123, 225, 0.4)',
              shadowBlur: 20,
            },
            outline: {
              show: false,
            },
          },
        ],
        // series: [
        //   {
        //     type: 'liquidFill',
        //     itemStyle: {
        //       opacity: 0.8, //波浪的透明度
        //       shadowBlur: 10, //波浪的阴影范围
        //       shadowColor: '#FFB931', //阴影颜色
        //     },
        //     radius: '70%',
        //     //水波
        //     color: [
        //       new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //         {
        //           offset: 0,
        //           color: '#FE8704',
        //         },
        //         {
        //           offset: 1,
        //           color: '#FFB931',
        //         },
        //       ]),
        //     ],
        //     data: [
        //       {
        //         value: scroe,
        //       },
        //     ],
        //     // background: '#000',
        //     center: ['50%', '50%'],
        //     backgroundStyle: {
        //       color: 'rgba(255,255,255,0)',
        //     },
        //     label: {
        //       normal: {
        //         formatter: '',
        //         textStyle: {
        //           fontSize: 12,
        //         },
        //       },
        //     },
        //     outline: {
        //       itemStyle: {
        //         borderColor: 'transparent',
        //         borderWidth: 5,
        //       },
        //       borderDistance: 0,
        //     },
        //   },
        //   //外环线
        //   {
        //     color: ['#FF8B00', 'transparent'],
        //     type: 'pie',
        //     center: ['50%', '50%'],
        //     radius: ['80%', '83%'],
        //     hoverAnimation: false,
        //     data: [
        //       {
        //         name: '',
        //         value: data,
        //         label: {
        //           show: false,
        //           position: 'center',
        //           color: '#fff',
        //           fontSize: 38,
        //           fontWeight: 'bold',
        //           formatter: function(o) {
        //             return data;
        //           },
        //         },
        //       },
        //       {
        //         //画剩余的刻度圆环
        //         name: '',
        //         value: max - data,
        //         label: {
        //           show: false,
        //         },
        //         labelLine: {
        //           show: false,
        //         },
        //       },
        //     ],
        //   },
        // ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#liquidFill {
  width: 100%;
  height: 100%;
}
</style>
