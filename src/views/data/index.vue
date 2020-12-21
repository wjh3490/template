<template>
  <div class="container">
    <div class="wrap" ref="wrap">
      <header class="wrap-header">
        <aside class="wrap-left">
          <section style="width: 100%; height:400px">
            <Border>
              <LiquidFill />
            </Border>
          </section>
          <section style="width: 100%; height:400px;margin-top:20px">
            <Border>
              <Guage />
            </Border>
          </section>
        </aside>
        <main class="wrap-center"></main>
        <aside class="wrap-right">
          <section style="width: 100%; height:400px">
            <Border>
              <Pie></Pie>
            </Border>
          </section>
          <section style="width: 100%; height:400px;margin-top: 20px">
            <Border>
              <RosePie></RosePie>
            </Border>
          </section>
        </aside>
      </header>

      <footer style="height: 400px" class="wrap-foot">
        <section>
          <Border>
            <LineA />
          </Border>
        </section>
        <section style="flex: 3;margin:0 20px">
          <Border>
            <BarLine />
          </Border>
        </section>

        <section>
          <Border>
            <LineD />
          </Border>
        </section>
      </footer>
      <footer style="height: 400px" class="wrap-foot">
        <section>
          <Border>
            <LineB />
          </Border>
        </section>
        <section style="flex: 3;margin:0 20px">
          <Border>
            <LineE />
          </Border>
        </section>

        <section>
          <Border>
            <LineC />
          </Border>
        </section>
      </footer>
    </div>
  </div>
</template>
<script>
/*eslint-disable */
import { screenSize } from './index';
import Border from './components/Border';
import LiquidFill from './components/LiquidFill';
import Guage from './components/Guage';
import Pie from './components/Pie';
import RosePie from './components/RosePie';
import LineA from './components/LineA';
import LineB from './components/LineB';
import LineC from './components/LineC';
import LineD from './components/LineD';
import LineE from './components/LineE';
import BarLine from './components/BarLine';
export default {
  name: 'Data',
  components: {
    Border,
    LiquidFill,
    Guage,
    Pie,
    RosePie,
    LineA,
    LineB,
    LineC,
    LineD,
    LineE,
    BarLine,
  },
  mounted() {
    screenSize(this.$refs.wrap);
  },
};
</script>
<style scoped lang="less">
.container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.wrap {
  transform-origin: 0 0 0;
  background: #000 url('./timg.jpg');
  background-size: 100% 100%;
  background-position: 50% 0;
  min-width: auto;
  width: 1920px;
  min-height: auto;
  height: 1080px;
  overflow: auto;
  padding: 30px 30px 30px 30px;
}
.wrap-header {
  display: flex;
  aside {
    flex: 2;
  }
  main {
    flex: 3;
  }
}
.wrap-foot {
  display: flex;
  margin-top: 20px;
  section {
    flex: 2;
    height: 400px;
  }
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 6px;
}
</style>
