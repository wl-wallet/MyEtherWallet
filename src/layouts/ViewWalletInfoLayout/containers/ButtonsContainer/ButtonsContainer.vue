<template>
  <div class="buttons">
    <ul>
      <li v-for="button in buttons" :key="button.key" :class="button.classname">
        <div class="button-inner-block">
          <div class="button-icon">
            <img :src="button.img" />
          </div>
          <div class="button-title">
            {{ button.title }}
          </div>
          <div class="button-desc">
            {{ button.desc }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mewConnectImg from '@/assets/images/icons/AccessWallet/button-mewconnect.svg';
import hardwareImg from '@/assets/images/icons/AccessWallet/button-hardware.svg';
import metamaskImg from '@/assets/images/icons/AccessWallet/button-metamask.svg';
import softwareImg from '@/assets/images/icons/AccessWallet/button-software.svg';

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
@import 'ButtonsContainer.scss';
</style>
