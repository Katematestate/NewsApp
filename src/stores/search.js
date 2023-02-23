// this allows the searchbar value to be shared between components / pages

import { reactive } from "vue";

// reactive means it can be plugged into vue's changed detection and it updates
export const search = reactive({
  value: "",
  update(value) {
    this.value = value;
  },
});
