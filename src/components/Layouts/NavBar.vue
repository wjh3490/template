<template>
  <div class="nav-container">
    <ScreenFull />
    <SelectLang />
    <Avatar />
  </div>
</template>

<script>
import SelectLang from './SelectLang';
import Avatar from './Avatar';
import ScreenFull from './ScreenFull';
export default {
  name: 'Navbar',
  components: {
    SelectLang,
    Avatar,
    ScreenFull,
  },
};
</script>
<style scoped>
.nav-container {
  font-size: 18px;
  float: right;
  height: 100%;
  padding-right: 30px;
  cursor: pointer;
  padding: 5px 0;
  padding-right: 30px;
}
</style>
