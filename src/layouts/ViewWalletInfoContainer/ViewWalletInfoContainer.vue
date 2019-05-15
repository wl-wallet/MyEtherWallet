<template>
  <div class="view-wallet-info">
    <div class="wrap">
      aaaaaaaaa
    </div>
  </div>
</template>

<script>
import mewConnectImg from '@/assets/images/icons/button-mewconnect.svg';
import hardwareImg from '@/assets/images/icons/button-hardware.svg';
import metamaskImg from '@/assets/images/icons/button-metamask.svg';
import softwareImg from '@/assets/images/icons/button-software.svg';

export default {
  components: {},
  data() {
    return {
      buttons: [
        {
          func: this.mewConnectModalOpen,
          title: this.$t('common.mewConnect'),
          desc: this.$t('accessWallet.mewConnectDesc'),
          img: mewConnectImg,
          classname: 'button-mewconnect'
        },
        {
          func: this.hardwareModalOpen,
          title: this.$t('common.hardware'),
          desc:
            'Ledger wallet, FINNEY, Trezor, Digital bitbox, Secalot, KeepKey',
          img: hardwareImg,
          classname: 'button-hardware'
        },
        {
          func: this.metamaskModalOpen,
          title: 'MetaMask',
          desc: this.$t('accessWallet.metaMaskDesc'),
          img: metamaskImg,
          classname: 'button-metamask'
        },
        {
          func: this.softwareModalOpen,
          title: this.$t('accessWallet.software'),
          desc: this.$t('accessWallet.softwareDesc'),
          img: softwareImg,
          classname: 'button-software'
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import 'ViewWalletInfoContainer.scss';
</style>
