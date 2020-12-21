<template>
  <el-dropdown
    class="avatar-container"
    trigger="click"
    placement="bottom-start"
  >
    <div class="avatar-wrapper">
      <span class="user-name">admin</span>
      <i
        class="el-icon-caret-bottom"
        style="display: inline-block;
  vertical-align: middle"
      />
      <img src="../../assets/logo.png" class="user-avatar" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <router-link to="/">
        <el-dropdown-item>首 页</el-dropdown-item>
      </router-link>
      <div>
        <el-dropdown-item @click.native="logout">
          <span>退 出</span>
        </el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'Avatar',
  methods: {
    logout() {},
  },
};
</script>
<style scope>
.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
}
.user-name {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
div:focus {
  outline: none;
}
</style>
