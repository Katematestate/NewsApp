<script setup>
import NavBar from './components/home_components/NavBar.vue';
import SearchBar from './components/home_components/Search.vue'
</script>
<template>
  <NavBar/>
  <SearchBar/>
</template>
<style scoped>
</style>
<script>
export default {
  data(){ // return part of data() is where we declare variables
    return{ // declare variables below and separate them with comma ,
    } // end of variable declaration area
  }, // End of data()
  methods:{ // this is where we define functions that can be used in created() or template items with @click
  }, // End of methods
  created(){ // this is where we write the JS code lines that will run once at the beginning for this component
  } // End of created()
} // End of export default
</script>