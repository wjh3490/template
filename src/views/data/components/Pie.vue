<template>
  <div id="pie"></div>
</template>

<script>
/*eslint-disable */
var barColor = [
  '#8F6EE8',
  '#7F6EE8',
  '#6E74E8',
  '#6A8FF1',
  '#62A4F0',
  '#6AC5F1',
  '#62D4E3',
  '#73DFD9',
];
var personFloorName = [
  { value: 10, name: 'F1' },
  { value: 20, name: 'F2' },
  { value: 40, name: 'F3' },
  { value: 45, name: 'F4' },
];
import echarts from 'echarts';
var dataStyle = {
  normal: {
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    // shadowBlur: 15,
    // shadowColor: 'white',
  },
};
var placeHolderStyle = {
  normal: {
    color: 'rgba(0,0,0,0)',
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
  },
  emphasis: {
    color: 'rgba(0,0,0,0)',
  },
};
export default {
  name: 'Pie',
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
      this.chart = echarts.init(document.getElementById('pie'));
      this.setOptions();
      this.$once('hook:beforeDestroy', function() {
        if (!this.chart) return;
        this.chart.dispose();
        this.chart = null;
      });
    },
    setOptions() {
      this.chart.setOption({
        angleAxis: {
          show: false,
          clockwise: false,
          // min: function(value) {
          //     return 5
          // },
          max: function(value) {
            return value.max + 2;
          },
        },
        radiusAxis: {
          type: 'category',
          min: function(value) {
            return -1;
          },
          max: function(value) {
            return value.max;
          },
          axisLabel: {
            interval: 0,
            color: function(value, index) {
              return barColor[index - 1];
            },
            fontSize: 10,
            align: 'left',
            margin: '-10',
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          splitLine: {
            show: true,
          },
          z: 20,
          data: [...personFloorName.map((d) => d.name)],
        },

        polar: {},
        color: [
          'rgba(156,107,211,.6)',
          'rgba(77,224,255,.6)',
          'rgba(77,255,143,.6)',
          'rgba(173,255,77,.6)',
        ],
        tooltip: {
          show: true,
          formatter: '{b} : {c}',
        },

        legend: {
          top: '160',
          left: '350',
          itemWidth: 0,
          itemHeight: 0,
          data: ['1', '2', '3', '4'],
          textStyle: {
            color: '#fff',
            fontSize: 22,
          },

          selectedMode: true,
        },
        series: [
          {
            name: 'Line 4',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [100, 180],
            itemStyle: dataStyle,
            startAngle: 360,
            z: 5,
            data: [
              {
                value: 7645434,
                name: '1',
              },
              {
                value: 3612343,
                name: '总数',
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: 'Line 3',
            type: 'pie',
            clockWise: true,
            radius: [100, 160],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 360,

            data: [
              {
                value: 2632321,
                name: '2',
              },
              {
                value: 2212343,
                name: '总数',
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: 'Line 2',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [100, 140],
            startAngle: 360,
            itemStyle: dataStyle,

            data: [
              {
                value: 1823323,
                name: '3',
              },
              {
                value: 1812343,
                name: '总数',
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: 'Line 1',
            type: 'pie',
            startAngle: 360,
            clockWise: true,

            radius: [100, 120],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [
              {
                value: 1342221,
                name: '4',
              },
              {
                value: 1912343,
                name: '总数',
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            type: 'custom',
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
              var values = [api.value(0), api.value(1)];
              console.log(values);
              var coord = api.coord(values);
              return {
                type: 'text',
                position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                rotation: coord[3] + Math.PI / 2,
                origin: [coord[0], coord[1]],
                style: {
                  text: api.value(1),
                  fill: '#fff',
                  fontSize: 16,
                  textAlign: 'left',
                  textVerticalAlign: 'middle',
                  x: coord[0] + 10,
                  y: coord[1],
                },
              };
            },
            data: personFloorName,
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#pie {
  width: 100%;
  height: 100%;
}
</style>
