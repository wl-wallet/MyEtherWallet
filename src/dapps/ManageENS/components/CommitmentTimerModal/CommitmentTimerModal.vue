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
      <div>
        aaaaaaaaaa
      </div>
    </b-modal>
  </div>
</template>
<script>
//import { mapGetters } from 'vuex';
export default {
  props: {},
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
