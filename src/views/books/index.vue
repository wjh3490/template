<template>
  <div class="container">
    <div
      class="wrap"
      :style="{
        transform: `rotate(${angle}deg)`,
        transition: ` all ${transitionTime}s`,
      }"
    >
      <img src="../../assets/2.png" alt="" />
    </div>

    <div class="jingtou" @click="handleCircle">
      <img src="../../assets/1.png" alt="" />
    </div>

    <Demo></Demo>
    <div>{{ name }}</div>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Demo from './demo';
export default {
  components: { Demo },
  provide() {
    this.state = Vue.observable({name: this.name});
    return {
      name: this.state
    };
  },
  data() {
    return {
      name: 'zdddd',
      flag: true,
      angle: 0,
      transitionTime: 0,      
      timeId: null,
      prizeList: [
        { id: 0, prize: 'iphoneX' },
        { id: 1, prize: '10元现金' },
        { id: 2, prize: '重在参与' },
        { id: 3, prize: '30元现金' },
        { id: 4, prize: '20元现金' },
        { id: 5, prize: '50元现金' },
        { id: 6, prize: '5元现金' },
        { id: 7, prize: '100元现金' },
      ],
      prizeId: 3,
    };
  },

  methods: {
    click() {
      this.state.name = 'ssdsdsd';
  
    },
    handleCircle() {
      clearTimeout(this.timeId);
      if (this.flag) {
        this.flag = false;
        this.transitionTime = 4;
        this.prizeId = (Math.random() * 8) | 0;
        this.angle = 360 - this.prizeId * 45 + 5 * 360;

        this.timeId = setTimeout(() => {
          this.flag = true;
          this.transitionTime = 0;
          this.angle = 0;
          const prize = this.prizeList.find((item) => item.id === this.prizeId);
          console.log(prize);
          alert(prize.prize);
        }, 4 * 1000 + 400);
      }
    },
  },
};
</script>

<style scoped lang="less">
.wrap img {
  width: 300px;
  height: 300px;
}
.wrap {
}
.jingtou {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.jingtou img {
  width: 100px;
  height: 120px;
}
.container {
  position: relative;
  width: 300px;
  height: 300px;
}
</style>
