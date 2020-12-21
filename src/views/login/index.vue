<script>
import Demo from './Demo';
import Demo1 from './Demo1';
export default {
  name: 'Login',
  components: { Demo, Demo1 },

  data() {
    return {
      name: 'llsasdad',
    };
  },
  methods: {
    handleClick() {
      this.name += 5;
    },
  },
  render() {
    console.log(3);
    return (
      <div>
        <button onClick={this.handleClick}>点击1111</button>
        <Demo name={this.name}></Demo>
        <Demo1></Demo1>
      </div>
    );
  },
};
</script>
