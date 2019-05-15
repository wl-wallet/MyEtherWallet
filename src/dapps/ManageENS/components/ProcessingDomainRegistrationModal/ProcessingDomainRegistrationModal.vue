<template>
  <div>
    <b-modal
      ref="processingdomain"
      hide-footer
      hide-header
      centered
      no-close-on-backdrop
      class="bootstrap-modal nopadding"
    >
      <div class="processing-domain-content">
        <div class="content">
          <div class="processing-message">
            {{ $t('dapps.processingRegistration') }}
          </div>
          <img src="@/assets/images/icons/sand-timer.svg" />
        </div>
        <div class="buttons">
          <standard-button
            :options="registerButton"
            :button-disabled="true"
            @click.native="close"
          />
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
//import { mapGetters } from 'vuex';
import StandardButton from '@/components/Buttons/StandardButton';

export default {
  components: {
    'standard-button': StandardButton
  },
  props: {},
  data() {
    return {
      registerButton: {
        title: this.$t('dapps.manageDomain'),
        buttonStyle: 'green'
      }
    };
  },
  computed: {},
  mounted() {
    //this.$refs.processingdomain.show();
  },
  methods: {
    close() {
      this.$refs.processingdomain.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'ProcessingDomainRegistrationModal.scss';
</style>
