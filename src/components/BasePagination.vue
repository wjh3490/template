<template>
  <div class="pagination-container">
    <el-pagination
    class="pagination"
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40];
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit('update:page', val);
      }
    },
    pageSize: {
      get() {
        // 3
        return this.limit;
      },
      set(val) {
        // 1
        this.$emit('update:limit', val);
      }
    }
  },

  methods: {
    handleSizeChange(val) {
      // 2
      this.$emit('pagination', { page: this.currentPage, limit: val });
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize });
    }
  }
};
</script>

<style scoped></style>
