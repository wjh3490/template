<script>
export default {
  props: ['name'],
  data() {
    return {
      state: 1,
    };
  },

  methods: {
    handleClick() {
      this.state++;
    },
  },
  render() {
    console.log(2);
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
        {this.name}
      </div>
    );
  },
};
</script>
