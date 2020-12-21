<template>
  <div class="multitab-container">
    <el-tabs
      v-model="activeKey"
      type="card"
      :closable="pages.length > 1"
      @edit="onEdit"
    >
      <el-tab-pane v-for="item in pages" :key="item.name" :name="item.name">
        <template slot="label">
          <span
            class="multi-tab-item"
            @contextmenu.prevent="openMenus(item.name, $event)"
            >{{ getTitle(item.title) }}</span
          >
        </template>
      </el-tab-pane>
    </el-tabs>
    <ul
      :style="{ left: left + 'px', top: top + 'px' }"
      v-if="show"
      class="multitab-list"
    >
      <li class="multitab-item" @click="closeThat" v-if="pages.length > 1">
        关闭当前
      </li>
      <li class="multitab-item" @click="closeAll">关闭所有</li>
      <li class="multitab-item" @click="closeLeft">关闭左边</li>
      <li class="multitab-item" @click="closeRight">关闭右边</li>
    </ul>
  </div>
</template>

<script>
/*eslint-disable*/
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'MultiTab',

  data() {
    return {
      activeKey: '',
      left: 0,
      top: 0,
      show: false,
      tag: '',
    };
  },
  computed: {
    ...mapState(['pages']),
  },
  watch: {
    $route: {
      handler(newVal) {
        this.activeKey = newVal.fullPath;
        if (this.pages.findIndex((item) => item.name === newVal.fullPath) < 0) {
          this.addView({
            name: newVal.fullPath,
            title: newVal.meta.title,
          });
        }
      },
      immediate: true,
    },
    activeKey: function(newPathKey) {
      this.$router.push({ path: newPathKey });
    },
    show(val) {
      if (val) {
        document.body.addEventListener('click', this.closeMenu);
      } else {
        document.body.removeEventListener('click', this.closeMenu);
      }
    },
  },
  methods: {
    openMenus(tag, e) {
      const { clientX, offsetY } = e;
      this.left = clientX - 10;
      this.top = offsetY + 50;
      this.show = true;
      this.tag = tag;
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    remove(targetKey) {
      this.removeView(targetKey);
      // 判断当前标签是否关闭，若关闭则跳转到最后一个还存在的标签页
      if (!this.pages.find((item) => item.name === this.activeKey)) {
        this.selectedLastPath();
      }
    },
    selectedLastPath() {
      this.activeKey = this.pages[this.pages.length - 1].name;
    },
    closeThat() {
      this.show = false;
      this.remove(this.tag);
    },
    closeLeft() {
      const currentIndex = this.pages.findIndex(
        (item) => item.name === this.tag
      );
      this.show = false;
      if (currentIndex > 0) {
        this.pages.forEach((item, index) => {
          if (index < currentIndex) {
            this.remove(item.name);
          }
        });
      } else {
        this.$message.info('左侧没有标签');
      }
    },
    closeRight() {
      const currentIndex = this.pages.findIndex(
        (item) => item.name === this.tag
      );
      this.show = false;
      if (currentIndex < this.pages.length - 1) {
        this.pages.forEach((item, index) => {
          if (index > currentIndex) {
            this.remove(item.name);
          }
        });
      } else {
        this.$message.info('右侧没有标签');
      }
    },
    closeAll() {
      const currentIndex = this.pages.findIndex(
        (item) => item.name === this.tag
      );
      this.show = false;
      if (this.pages.length === 1) {
        this.$message.info('这是最后个标签');
      }
      this.pages.forEach((item, index) => {
        if (index !== currentIndex) {
          this.remove(item.name);
        }
      });
    },
    closeMenu() {
      this.show = false;
    },
    ...mapMutations({ addView: 'ADD_VIEW', removeView: 'REMOVE_VIEW' }),
  },
};
</script>
<style scope lang="less">
.multitab-container {
  height: 40px;
  padding: 0 10px;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 21, 41, 0.08);
  .multitab-list {
    position: absolute;
    z-index: 99;
    background: #fff;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    padding: 0;
    .multitab-item {
      list-style: none;
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      font-size: 12px;
      &:hover {
        background: #ecf5ff;
        color: #66b1ff;
      }
    }
  }
}
</style>
