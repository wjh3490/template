<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    ref="multipleTable"
    @selection-change="handleSelectionChange"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-table-column type="selection" width="55" v-if="$attrs.selection"> </el-table-column>
    <el-table-column type="index" label="序号"  v-if="$attrs.index"> </el-table-column>

    <el-table-column
      :label="item.label"
      width="180"
      v-for="item in tableHeader"
      :key="item.prop"
    >
      <template slot-scope="scope">
        <slot :name="item.prop" :data="scope.row">
          <span style="margin-left: 10px">{{
            item.formatter
              ? item.formatter(scope.row[item.prop])
              : scope.row[item.prop]
          }}</span>
        </slot>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <slot :data="scope.row" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableHeader: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit('selection-change', val);
    },
  },
};
</script>
