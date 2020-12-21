<template>
  <div v-if="!item.hidden" class="submenu__title">
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item :index="onlyOneChild.path" class="submenu-title-noDropdown">
        <Item
          :title="onlyOneChild.meta.title"
          :icon="onlyOneChild.meta.icon"
        ></Item>
      </el-menu-item>
    </template>

    <template v-else>
      <el-submenu :index="item.path" popper-append-to-body>
        <template slot="title">
          <Item :title="item.meta.title" :icon="item.meta.icon"></Item>
        </template>

        <Sidebar
          class="nest-menu"
          v-for="route in item.children"
          :key="route.path"
          :item="route"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
import Item from './Item';
export default {
  name: 'Sidebar',
  components: { Item },
  props: ['item'],
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent };
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped lang="less"></style>
