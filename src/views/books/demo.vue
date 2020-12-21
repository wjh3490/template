
<template>
  <div>{{name.name}}</div>
</template>

<script>
export default {
  name: 'Demo',
  inject: ['name'],
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    console.log(this.name)
  },
  methods: {
    click() {
      this.count++
      this.$emit('test', this.count)
    }
  },
  
};
</script>
