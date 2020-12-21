<template>
  <div>
    <!-- <BaseTable
      :tableData="tableData"
      :tableHeader="tableHeader"
      @selection-change="(val) => (multipleSelection = val)"
      :selection="true"
      :index="true"
    >
      <template v-slot:default>
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </template>
    </BaseTable> -->
    <BaseForm
      :formConfig="formConfig"
      :form="formData"
      :rules="rules"
      ref="form"
    >
      <template v-slot:default>
        <el-button type="primary">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </BaseForm>
    <el-date-picker
      v-model="value9"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>

<script>
/*eslint-disable */
import BaseTable from '@/components/Base/BaseTable';
import BaseForm from '@/components/Base/BaseForm';
export default {
  name: 'Audits',
  components: { BaseTable, BaseForm },
  data() {
    return {
      value9: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tableHeader: [
        { prop: 'date', label: '日期' },
        {
          prop: 'name',
          label: '姓名',
          formatter: (val) => {
            return val + '1';
          },
        },
      ],
      multipleSelection: [],

      formConfig: [
        {
          prop: 'name',
          label: '活动名称',
          type: 'input',
          placeholder: '请输入',
        },
        {
          prop: 'region',
          label: '活动区域',
          type: 'select',
          placeholder: '请输入',
          chlidren: [
            { lable: '区域一', value: 'shanghai' },
            { lable: '区域2', value: 'beijing' },
          ],
        },
      ],
      formData: {
        name: '',
        region: '',
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    resetForm() {
      this.$refs.form.$refs.form1.clearValidate();
    },
  },
};
</script>
