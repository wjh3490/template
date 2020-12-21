<script>
export default {
  name: "BaseTips",
  functional: true,
  props: {
    tipsList: {
      type: Array,
      default: () => []
    }
  },
  render(h, context) {
    const { props } = context;
    return (
      <footer class="tips">
        <div class="tips-icon">
          <span class="iconfont icon-tishi" />
          <span class="tips-name">提示</span>
        </div>
        <div class="tips-items">
          {props.tipsList.map((item, index) => (
            <p class="tips-item" key={index}>
              {item}
            </p>
          ))}
        </div>
      </footer>
    );
  }
};
</script>

<style scoped lang="less">
.icon-tishi {
  font-size: 24px;
  color: #299cff;
  margin-right: 8px;
}
.tips {
  margin-top: 30px;
  &-icon {
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
  &-name {
    color: #9f9f9f;
  }
  &-item {
    line-height: 28px;
    padding-left: 24px;
    color: #9f9f9f;
  }
}
</style>












<script>
export default {
  name: "BaseSteps",
  functional: true,
  props: {
    step: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => [
        { id: 1, name: "身份确认", type: "point" },
        { id: 2, name: "", type: "line" },
        { id: 3, name: "选择商品", type: "point" },
        { id: 4, name: "", type: "line" },
        { id: 5, name: "收取礼品", type: "point" }
      ]
    }
  },
  render(h, ctx) {
    const { props } = ctx;
    const nodes = [];
    for (let i = 0, length = props.list.length; i < length; i++) {
      nodes.push(
        <span
          class={[
            `steps-${props.list[i].type}`,
            { steps_active: i < props.step }
          ]}
          key={props.list[i].id}
        >
          <span class="steps-title">{props.list[i].name}</span>
        </span>
      );
    }
    return <div class="steps-container">{nodes}</div>;
  }
};
</script>

<style scoped  lang="less">
@activeColor: #299cff;
@normaColor: #9f9f9f;

.steps {
  &-container {
    background: #fff;
    text-align: center;
    span {
      display: inline-block;
    }
  }
  &-line {
    width: 34%;
    height: 1px;
    background-color: @normaColor;
    vertical-align: middle;
  }
  &-point {
    position: relative;
    width: 8px;
    height: 8px;
    margin: 0 6px;
    vertical-align: middle;
    border-radius: 50%;
    background-color: @normaColor;
  }
  &-title {
    width: 30px;
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    font-size: 12px;
    color: @normaColor;
  }
  &_active {
    background-color: @activeColor;
    .steps-title {
      color: @activeColor;
    }
  }
}
</style>


