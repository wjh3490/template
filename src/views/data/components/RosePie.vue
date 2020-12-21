<template>
  <div id="rose-pie"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'RosePie',
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
      this.chart = echarts.init(document.getElementById('rose-pie'));
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
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c}/月',
        },
        calculable: true,
        series: [
          {
            name: '第三条圆弧',
            type: 'pie',
            center: ['40%', '80%'],
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ['29%', '30%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: '500',
                name: '第三条圆弧',
              },
              {
                value: '500',
                itemStyle: {
                  normal: {
                    color: 'transparent',
                  },
                },
              },
            ],
          },
          {
            name: '第四条圆弧',
            type: 'pie',
            center: ['40%', '80%'],
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ['45%', '46%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: '500',
                name: '第四条圆弧',
              },
              {
                value: '500',
                itemStyle: {
                  normal: {
                    color: 'transparent',
                  },
                },
              },
            ],
          },
          {
            name: '第五条圆弧',
            type: 'pie',
            center: ['40%', '80%'],
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ['75%', '76%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: '500',
                name: '第五条圆弧',
              },
              {
                value: '500',
                itemStyle: {
                  normal: {
                    color: 'transparent',
                  },
                },
              },
            ],
          },
          {
            name: '第六条圆弧',
            type: 'pie',
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ['90%', '91%'],
            center: ['40%', '80%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: '500',
                name: '第六条圆弧',
              },
              {
                value: '500',
                itemStyle: {
                  normal: {
                    color: 'transparent',
                  },
                },
              },
            ],
          },
          {
            name: '工作类型',
            type: 'pie',
            radius: [80, 300],
            avoidLabelOverlap: false,
            startAngle: 0,
            center: ['40%', '80%'],
            roseType: 'area',
            selectedMode: 'single',
            label: {
              normal: {
                show: true,
                formatter: '{c}/月',
                position: 'inside',
              },
              emphasis: {
                show: true,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: '',
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 1000,
                name: '分段一',
                label: {
                  normal: {
                    rotate: 170, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#f845f1',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 1500,
                name: '分段二',
                label: {
                  normal: {
                    rotate: 150, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#ad46f3',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 2000,
                name: '分段三',
                label: {
                  normal: {
                    rotate: 130, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#5045f6',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 2500,
                name: '分段四',
                label: {
                  normal: {
                    rotate: 110, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#4777f5',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 3000,
                name: '分段五',
                label: {
                  normal: {
                    rotate: 90, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#44aff0',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 3500,
                name: '分段六',
                label: {
                  normal: {
                    rotate: 70, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#45dbf7',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 4000,
                name: '分段七',
                label: {
                  normal: {
                    rotate: 50, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#f6d54a',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 4500,
                name: '分段八',
                label: {
                  normal: {
                    rotate: 30, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#f69846',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
              },
              {
                value: 5000,
                name: '分段九',
                label: {
                  normal: {
                    rotate: 10, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#ff4343',
                    borderWidth: 3,
                    borderColor: 'rgb(43, 51, 59)',
                  },
                },
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
#rose-pie {
  width: 100%;
  height: 100%;
}
</style>
