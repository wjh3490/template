<template>
  <div class="border-container">
    <span class="border-item"></span>
    <span class="border-item"></span>
    <span class="border-item"></span>
    <span class="border-item"></span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Border',
};
</script>
<style scoped lang="less">
.border-commom() {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #0a6aff;
  border-bottom-width: 0px;
  border-right-width: 0px;
}
.border-container {
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px solid rgba(25, 186, 139, 0.2);
  .border-item {
    &:nth-child(1) {
      .border-commom();
      top: -2px;
      left: -2px;
    }
    &:nth-child(2) {
      .border-commom();
      top: -2px;
      right: -2px;
      transform: rotate(90deg);
    }
    &:nth-child(3) {
      .border-commom();
      right: -2px;
      bottom: -2px;
      transform: rotate(180deg);
    }
    &:nth-child(4) {
      .border-commom();
      left: -2px;
      bottom: -2px;
      transform: rotate(270deg);
    }
  }
}
</style>
