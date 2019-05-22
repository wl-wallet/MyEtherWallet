<template>
  <div class="info">
    <div class="wrap">
      <div class="page-container">
        <div class="content-block">
          <div class="info-block">
            <div class="title-bar">
              <p class="left">Wallet Information</p>
              <p class="right">Access Wallet</p>
            </div>
            <div class="contents">
              <div class="balance-block">
                <h4>Balance</h4>
                <div class="value">
                  <h4>1.3450345345 <span>ETH</span></h4>
                </div>
              </div>
              <div class="blockie-container">
                <div class="blockie">
                  <blockie
                    :address="address"
                    :size="8"
                    :scale="16"
                    width="64px"
                    height="64px"
                    class="blockie-image"
                  />
                </div>
                <p>Jack's wallet</p>
              </div>
              <div class="address-value">
                <div class="value">{{ address }}</div>
              </div>
              <div class="buttons">
                <button>Private Key</button>
                <button>Txn History</button>
                <button>Keystore File</button>
                <button>Print Wallet</button>
              </div>
            </div>
          </div>
          <interface-tokens />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InterfaceTokens from '@/layouts/InterfaceLayout/components/InterfaceTokens';
import Blockie from '@/components/Blockie';

export default {
  components: {
    'interface-tokens': InterfaceTokens,
    blockie: Blockie
  },
  data() {
    return {
      address: '0xA8FEd68f2a7BaFB9fCA1321aA21dd36B6708EFAF'
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import 'WalletInfoContainer.scss';
</style>
