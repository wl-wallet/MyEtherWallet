<template>
  <div class="drop-down-bid-currency-selector">
    <div class="form-title-container">
      <div class="title">{{ options.title }}</div>
    </div>

    <div class="coin-selector-click-safe-zone">
      <div
        :class="dropdownOpen ? 'dropdown-open' : ''"
        class="dropdown-input-box"
        @click="openDropdownFocustToSearchInput"
      >
        <div ref="selectedValue" class="selected-coin">
          {{ selectedName }}
        </div>
        <div class="dropdown-open-button">
          <i
            v-if="!dropdownOpen"
            class="fa fa-chevron-down"
            aria-hidden="true"
          />
          <i v-if="dropdownOpen" class="fa fa-chevron-up" aria-hidden="true" />
        </div>
      </div>
      <div
        :class="dropdownOpen ? 'show-dropdown' : ''"
        class="dropdown-list-box"
      >
        <ul v-for="data in options.data" :key="data.key">
          <li
            ref="listItem"
            :value="data.value"
            class="list-item"
            @click="listItemClick"
          >
            {{ data.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    },
    defaultItem: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dropdownOpen: false,
      selectedName: 'Click to select...',
      selectedValue: null
    };
  },
  beforeMount() {
    // Detect all clicks on the document
    document.addEventListener('click', this.clickEvent, false);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickEvent, false);
  },
  mounted() {
    if (this.defaultItem !== '') {
      this.selectedName = this.options.data[this.defaultItem - 1].name;
      this.selectedValue = this.options.data[this.defaultItem - 1].value;
      this.$emit('input', this.selectedValue);

      // Add active class to selected item
      this.$refs.listItem[this.defaultItem - 1].classList.add('active');
    }
  },
  methods: {
    openDropdownFocustToSearchInput: function() {
      // Focus user input to the seach input.
      this.dropdownOpen = !this.dropdownOpen;
    },
    clickEvent: function(event) {
      for (let count = 0; count < event.path.length; count++) {
        if (event.path[count].className === 'coin-selector-click-safe-zone') {
          return;
        }
      }
      this.dropdownOpen = false;
    },
    listItemClick: function(event) {
      const items = this.$refs.listItem;

      items.forEach(function(el) {
        el.classList.remove('active');
      });

      event.target.classList.add('active');

      // Replace the selected item text
      this.selectedName = event.target.textContent;
      this.selectedValue = event.target.value;

      // Close dropdown
      this.dropdownOpen = false;

      // Emit value back to parent
      this.$emit('input', this.selectedValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'StandardDropdownSelector.scss';
</style>
