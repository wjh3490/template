<script>
export default {
  
  data() {
    return {
      state: 1,
    };
  },

  methods: {
  },
  render() {
    console.log(1);
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
       
      </div>
    );
  },
};
</script>
