<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
      <router-link
        v-if="index < breadList.length - 1"
        :to="{ path: item.path === '' ? '/' : item.path }"
        >{{ getTitle(item.meta.title) }}</router-link
      >
      <span v-else>{{ getTitle(item.meta.title) }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',

  data() {
    return {
      breadList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    a(name) {
      const c = 'breadcrumd.' + name;
      return this.$t(c);
    },
    getBreadcrumb() {
      const matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      this.breadList = [{ path: '/', meta: { title: 'first' } }, ...matched];
    },
  },
};
</script>
