<template>
  <div class="logo">
    <img src="../../assets/logo.png" alt="" class="logo-pic" />
    <h1 class="logo-name">Vue.js Admin</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo'
};
</script>
<style scoped lang="less">
.logo {
  width: 100%;
  height: 64px;
  padding-left: 15px;
  line-height: 64px;
  overflow: hidden;
  &-pic {
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
  }
  &-name {
    display: inline-block;
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}
// .hideSidebar .logo {
//   padding-left: 11px;
// }
</style>
