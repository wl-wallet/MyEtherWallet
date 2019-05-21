<template>
  <div class="wallet-info">
    <div class="wrap">
      <div class="page-container">
        <interface-tokens />
      </div>
    </div>
  </div>
</template>

<script>
import InterfaceTokens from '@/layouts/InterfaceLayout/components/InterfaceTokens';

export default {
  components: {
    'interface-tokens': InterfaceTokens
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
@import 'WalletInfoContainer.scss';
</style>
