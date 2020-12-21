<template>
  <div style="text-align: center">
    <input type="checkbox" id="checkbox" v-model="data.done" />
    <label for="checkbox" @click="$emit('cc',data)">全选</label>
    <div v-for="item in data.children" :key="item.id">
      <input
        type="checkbox"
        :id="item.name"
        v-model="item.done"
        @change="handleChange(item)"
      />
      <label :for="item.name">{{ item.name }}</label>
    </div>
  </div>
</template>

<script>
/*eslint-disable */

export default {
  name: 'Check',
  props: ['data'],
  computed: {
    remaining() {
      return this.data.children.filter((item) => item.done);
    },
    checkedNames: {
      get() {
        return this.remaining.length === this.data.children.length;
      },
      set(value) {
        this.this.data.children.forEach((item) => (item.done = value));
      },
    },
  },
  methods: {
    handleChange(item) {
      // this.remaining = this.cityOptions.filter((item) => item.done);
    },
    handleChangeAll() {
      let flag = this.checkedNames;
      this.cityOptions.forEach((item) => (item.done = !flag));
      this.remaining = this.cityOptions.filter((item) => item.done);
    },
  },
};
</script>
<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
