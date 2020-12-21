<template>
  <el-form :model="form" label-width="80px" ref="form1" :rules="rules">
    <el-form-item
      v-for="item in formConfig"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
    >
      <slot :name="item.prop" :data="item">
        <el-input
          v-model="form[item.prop]"
          v-if="item.type === 'input'"
          :placeholder="item.placeholder"
        ></el-input>

        <el-select
          v-model="form[item.prop]"
          :placeholder="item.placeholder"
          v-if="item.type === 'select'"
        >
          <el-option
            :label="op.label"
            :value="op.value"
            v-for="op in item.chlidren"
            :key="op.prop"
          ></el-option>
        </el-select>
      </slot>
    </el-form-item>

    <el-form-item>
      <slot />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    formConfig: {
      type: Array,
      default: () => [],
    },
    form: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>
