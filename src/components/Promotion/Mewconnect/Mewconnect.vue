<template>
  <div ref="Container" class="mewconnect">
    <a
      rel="noopener noreferrer"
      href="https://mewconnect.myetherwallet.com/#/"
      target="_blank"
    >
      <img
        class="background-image"
        src="~@/assets/images/promotion/mewconnect.png"
      />
      <div ref="textBlock" class="text-block">
        <div class="text">
          <p class="title">MEWconnect</p>
          <div class="subtitle">
            <p class="">Available for iOS</p>
            <p class="">and Android</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted: function() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const w = this.$refs.Container.clientWidth;
      this.$refs.textBlock.style.fontSize = w / 19 + 'px';
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'Mewconnect.scss';
</style>
