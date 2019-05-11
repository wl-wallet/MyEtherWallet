<template>
  <div>
    <b-modal
      ref="commtimer"
      hide-footer
      hide-header
      centered
      no-close-on-backdrop
      class="bootstrap-modal nopadding"
    >
      <div class="timer-content">
        <div class="content">
          <img src="@/assets/images/icons/sand-timer.svg" />
          <div class="time-left">01:00</div>
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
        title: 'Register',
        buttonStyle: 'green'
      }
    };
  },
  computed: {},
  mounted() {
    this.$refs.commtimer.show();
  },
  methods: {
    close() {
      this.$refs.commtimer.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'CommitmentTimerModal.scss';
</style>
