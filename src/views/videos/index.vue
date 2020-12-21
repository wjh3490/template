<template>
  <div class="container">
    <span @click="focusInput" :class="{ focus: flag && str.length === 0 }">{{
      str[0]
    }}</span>
    <span @click="focusInput" :class="{ focus: flag && str.length === 1 }">{{
      str[1]
    }}</span>
    <span @click="focusInput" :class="{ focus: flag && str.length === 2 }">{{
      str[2]
    }}</span>
    <span @click="focusInput" :class="{ focus: flag && str.length === 3 }">{{
      str[3]
    }}</span>
<!-- 
<input type="number" pattern="\d"> 
<input type="number" pattern="[0-9]*"> -->
    <input
      class="input"
      ref="email"
      type="number"
      pattern="[0-9]*"
      maxlength='6'
      autofocus 
      style="border:1px  solid #000"
      @focus="() => (flag = true)"
      @blur="() => (flag = false)"
      v-model="str"
    />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Videos',
  data() {
    return {
      str: '',
      flag: false,
    };
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    focus() {},
    blur() {
      this.flag = false;
    },
    focusInput() {
      this.$refs.email.focus();
    },
    keydown(e) {
      if (e.keyCode === 8) {
        this.str = this.str.substring(0, this.str.length - 1);
        console.log(this.str);
        return;
      }
      console.log(e);
      this.str += e.key;
      console.log(this.str);
    },
  },
};
</script>
<style scoped>
span {
  display: block;
  float: left;
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  position: relative;
}
.input {
  position: absolute;
  opacity: 0;
  transform: scale(0);
  top: 0;
  left: 100px;
  z-index: 1000;
}
.focus::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;

  height: 10px;
  background-color: #323233;
  transform: translate(-50%, -50%);
  animation: 1s van-cursor-flicker infinite;
}
@keyframes van-cursor-flicker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
