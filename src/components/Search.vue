<script setup>
import { ref } from 'vue';
import { search as search_store } from '../stores/search';
const search = ref('');
function update_search_store_value() {
  search_store.update(search.value);
}
</script>

<template>
  <div class="search-bar">
    <img @click="update_search_store_value()" src="../assets/search-icon.svg" alt="">
    <input type="text" v-model="search" @blur="update_search_store_value()" @keyup.enter="update_search_store_value()">
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  display: flex;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: #FFD600;
  border: 2px solid black;
  height: 40px;
  width: 50%;
  padding: 4px;
  margin: 0 auto;

  gap: 8px;

  input {
    flex: 1;
    border: none;
    background-color: transparent;
    padding: 6px;
    min-width: 0;
  }
}
</style>