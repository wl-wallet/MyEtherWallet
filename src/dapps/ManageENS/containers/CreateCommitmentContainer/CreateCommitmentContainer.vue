<template lang="html">
  <div class="transfer-registrar-container">
    <div class="transfer-registrar-content">
      <div class="available-message">
        <p>Congratulations!</p>
        <p>
          <span>{{ fullDomainName }}</span> is available
        </p>
      </div>

      <div class="year-selector">
        <standard-dropdown-selector
          :options="yearOptions"
          v-model="duration"
          default-item="1"
        />
      </div>

      <div class="transfer-registrar-button">
        <button
          :class="[
            'large-round-button-green-filled',
            loading ? 'disabled' : ''
          ]"
          @click="createCommitment"
        >
          <span v-show="!loading">
            Register
          </span>
          <i v-show="loading" class="fa fa-spinner fa-spin" />
        </button>
      </div>
    </div>
    <interface-bottom-text
      :link-text="$t('interface.helpCenter')"
      :question="$t('interface.haveIssues')"
      link="https://kb.myetherwallet.com"
    />
  </div>
</template>

<script>
import InterfaceBottomText from '@/components/InterfaceBottomText';
import StandardDropdownSelector from '@/components/StandardDropdownSelector';

export default {
  components: {
    'interface-bottom-text': InterfaceBottomText,
    'standard-dropdown-selector': StandardDropdownSelector
  },
  props: {
    hostName: {
      type: String,
      default: ''
    },
    createCommitment: {
      type: Function,
      default: function() {}
    },
    loading: {
      type: Boolean,
      default: false
    },
    tld: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      duration: '',
      yearOptions: {
        title: 'How many years do you want to keep the name?',
        data: [
          { name: '1 year', value: 1 },
          { name: '2 years', value: 2 },
          { name: '3 years', value: 3 },
          { name: '4 years', value: 4 },
          { name: '5 years', value: 5 },
          { name: '6 years', value: 6 },
          { name: '7 years', value: 7 },
          { name: '8 years', value: 8 },
          { name: '9 years', value: 9 },
          { name: '10 years', value: 10 },
          { name: '11 years', value: 11 },
          { name: '12 years', value: 12 },
          { name: '13 years', value: 13 },
          { name: '14 years', value: 14 },
          { name: '15 years', value: 15 },
          { name: '16 years', value: 16 },
          { name: '17 years', value: 17 },
          { name: '18 years', value: 18 },
          { name: '19 years', value: 19 },
          { name: '20 years', value: 20 }
        ]
      }
    };
  },
  computed: {
    fullDomainName() {
      return `${this.hostName}.${this.tld}`;
    }
  },
  watch: {
    duration(newVal) {
      this.$emit('updateDuration', Number(newVal));
    }
  },
  mounted() {
    if (this.hostName === '') {
      this.$router.push('/interface/dapps/manage-ens');
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'CreateCommitmentContainer.scss';
</style>
