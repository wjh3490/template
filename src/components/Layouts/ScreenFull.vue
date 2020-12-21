<template>
  <div class="screenfull-svg" @click="screenFull">
    <svg
      v-if="!isFullscreen"
      class="icon"
      viewBox="64 64 896 896"
      data-icon="global"
      width="1em"
      height="1em"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#333333"
        d="M358.4 768H426.666667v85.333333H213.333333v-213.333333h85.333334v68.266667l128-128 59.733333 59.733333-128 128z m345.6 0l-128-128 59.733333-59.733333 132.266667 132.266666V640h85.333333v213.333333h-213.333333v-85.333333h64zM358.4 298.666667l128 128-59.733333 59.733333-128-128V426.666667H213.333333V213.333333h213.333334v85.333334H358.4z m345.6 0H640V213.333333h213.333333v213.333334h-85.333333V354.133333l-132.266667 132.266667-59.733333-59.733333 128-128z"
      />
    </svg>

    <svg
      v-if="isFullscreen"
      class="icon"
      viewBox="64 64 896 896"
      data-icon="global"
      width="1em"
      height="1em"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#333333"
        d="M421.12 578.72c19.328 0 30.944 14.336 30.944 32v128c0 17.696-11.616 32-30.944 32s-30.944-14.304-30.944-32v-53.024l-143.04 137.408c-15.488 12.224-34.848 11.808-46.432-0.96-11.616-12.768-11.616-33.056 0-45.248l139.2-134.176h-46.4c-19.328 0-30.944-14.304-30.944-32 0-17.664 11.616-32 30.944-32h127.616z m317.12 0c19.328 0 34.784 14.336 34.784 32 0 17.696-15.456 32-34.816 32H688l135.36 134.624a33.792 33.792 0 0 1 0 45.248c-11.616 12.48-30.976 12.48-46.432 0l-135.36-134.624v50.752c0 17.696-11.584 32-30.912 32-15.488 0-30.944-14.304-30.944-32v-128c0-17.664 15.456-32 30.944-32h127.584z m85.056-377.696a33.792 33.792 0 0 1 0 45.28l-135.36 140.416h50.272c19.36 0 34.816 14.368 34.816 32 0 17.696-15.456 32-34.816 32h-127.584c-15.488 0-30.944-14.304-30.944-32v-128c0-17.632 15.456-32 30.944-32 19.328 0 30.912 14.368 30.912 32v49.184l135.36-138.24c15.456-12.64 34.816-12.928 46.4-0.64z m-622.592 0.352c10.72-11.52 28-12.416 42.784-2.656l3.616 2.656 139.2 140.096V290.752c0-17.664 15.488-32 30.944-32 18.048 0 32.736 12.48 34.624 28.48l0.192 3.52v128c0 16.512-13.472 30.08-31.008 31.808l-3.808 0.16H289.632c-15.456 0-30.912-14.304-30.912-32 0-16.384 13.312-29.92 27.616-31.776l3.296-0.224h50.272l-139.2-140.096a33.792 33.792 0 0 1 0-45.248z"
      />
    </svg>
  </div>
</template>

<script>
import screenfull from 'screenfull';
export default {
  name: 'ScreenFull',
  data() {
    return {
      isFullscreen: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    screenFull() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '不支持全屏',
          type: 'warning',
        });
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) screenfull.on('change', this.change);
      this.$once(() => this.destroy());
    },
    destroy() {
      if (screenfull.isEnabled) screenfull.off('change', this.change);
    },
  },
};
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  margin-right: 15px;
  font-size: 14px;
}
.icon {
  vertical-align: middle;
  display: inline-block;
  color: #606266;
  font-size: 22px;
}
</style>
