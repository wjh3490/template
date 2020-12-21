<template>
  <div style="text-align: center">
    <!-- <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    >
    </el-tree>

    <div v-for="item in list" :key="item.id">
      <input type="checkbox" id="checkbox" v-model="item.done" />
      <label for="checkbox">全选</label>
      <div v-for="item1 in item.children" :key="item1.id">
        <input
          type="checkbox"
          :id="item1.name"
          v-model="item1.done"
          @change="handleChange(item)"
        />
        <label :for="item1.name">{{ item1.name }}</label>
      </div>
    </div> -->

    <Check v-for="item in list" :key="item.id" :data="item" @cc="cc"></Check>
    <!-- <input type="checkbox" id="checkbox" v-model="checkedNames" />
    <label for="checkbox">全选</label>
    <div v-for="item in cityOptions" :key="item.id">
      <input
        type="checkbox"
        :id="item.name"
        v-model="item.done"
        @change="handleChange(item)"
      />
      <label :for="item.name">{{ item.name }}</label>
    </div> -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleRemove"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>

    <span @click="getlist">111</span>
  </div>
</template>

<script>
/*eslint-disable */
import { articlePage } from '@/api/article';
const cityOptions = [
  { name: '上海', id: 1, done: false },
  { name: '北京', id: 2, done: false },
  { name: '广州', id: 3, done: false },
  { name: '深圳', id: 4, done: false },
];
const list = [
  {
    done: false,
    id: 222,
    children: [
      { name: '上海', id: 1, done: false },
      { name: '北京', id: 2, done: false },
      { name: '广州', id: 3, done: false },
      { name: '深圳', id: 4, done: false },
    ],
  },

  {
    done: false,
    id: 111,
    children: [
      { name: '上海2', id: 11, done: false },
      { name: '北京2', id: 21, done: false },
      { name: '广州2', id: 31, done: false },
      { name: '深圳2', id: 41, done: false },
    ],
  },
];
const qs = require('qs');

import Check from './Check';
export default {
  name: 'Articles',
  data() {
    return {
      cityOptions,
      file: '',
      list,
      checked: true,
      checkList: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
            {
              id: 11,
              label: '二级 2-1',
              children: [
                {
                  id: 22,
                  label: '111 1-1-1',
                },
                {
                  id: 33,
                  label: '111 1-1-2',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  components: {
    Check,
  },
  computed: {
    remaining() {
      return this.cityOptions.filter((item) => item.done);
    },
    checkedNames: {
      get() {
        return this.remaining.length === this.cityOptions.length;
      },
      set(value) {
        this.cityOptions.forEach((item) => (item.done = value));
      },
    },
  },
  created() {},
  methods: {
    handleRemove(file) {
      this.file = file.raw;
    },
    async getlist() {
      let form = new FormData();
      form.append('a', 1111);
      this.file && form.append('file', this.file);
      let res = await articlePage(form, { age: 1, c: 2 });
    },
    cc(list) {
      console.log(list.done);
      list.children.forEach((item) => (item.done = !item.done));
    },
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
