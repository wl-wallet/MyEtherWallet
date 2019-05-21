<template>
  <div class="view-wallet-info">
    <div class="wrap">
      <div class="page-container">
        <page-title />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import pageTitle from './components/pageTitle';

export default {
  components: {
    'page-title': pageTitle
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import 'ViewWalletInfoLayout.scss';
</style>
