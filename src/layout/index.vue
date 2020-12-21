<template>
  <div class="app-container">
    <div class="app-left-container" :class="{ hideSidebar: isCollapse }">
      <el-scrollbar class="my-scroller" wrap-class="wrap">
        <logo />
        <el-menu
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
          :router="true"
          text-color="#fff"
          active-text-color="#1890ff"
          :default-active="key"
          :collapse="isCollapse"
        >
          <sidebar v-for="route in routers" :key="route.path" :item="route" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="app-right-container" :class="{ hideSidebar: isCollapse }">
      <header>
        <div class="top-nav">
          <hamburger :isCollapse.sync="isCollapse" />
          <breadcrumb />
          <nav-bar />
        </div>
        <multi-tab />
      </header>

      <section class="main-container">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cacheRouters">
            <router-view :key="key" class="page" />
          </keep-alive>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import Sidebar from '@/components/Layouts/Sidebar';
import MultiTab from '@/components/Layouts/MultiTab';
import Breadcrumb from '@/components/Layouts/Breadcrumb';
import Hamburger from '@/components/Layouts/Hamburger';
import NavBar from '@/components/Layouts/NavBar';
import Logo from '@/components/Layouts/Logo';

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Breadcrumb,
    Hamburger,
    MultiTab,
    NavBar,
    Logo,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
    cacheRouters() {
      return this.$store.state.cacheRouters;
    },
    routers() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style scoped lang="less">
.app-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.app-left-container {
  transition: width 0.3s;
  width: 210px !important;
  background-color: #054279;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  &.hideSidebar {
    width: 54px !important;
  }
}

.app-right-container {
  margin-left: 210px;
  transition: all 0.3s;
  min-height: 100%;

  &.hideSidebar {
    margin-left: 54px;
  }
}

.main-container {
  padding: 20px;
  background-color: #f0f2f5;
  overflow: hidden;
  overflow: hidden;
  min-height: calc(100vh - 91px);
  width: 100%;
  .page {
    background-color: #fff;
    min-height: calc(100vh - 132px);
    border-radius: 5px;
  }
}

.top-nav {
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hideSidebar .logo {
  padding-left: 11px;
}
</style>
