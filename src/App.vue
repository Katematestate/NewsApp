<script setup>
import NavBar from './components/NavBar.vue';
import SearchBar from './components/Search.vue';
import CardArticle from './components/CardArticle.vue';
</script>
<template>
  <NavBar />
  <SearchBar />
  <template v-if="articles && articles.length > 0">
    <pre>Debug Article Keys: {{ Object.keys(articles[0]) /* debugging what keys are available on the article objects */ }}</pre>
    <pre>Debug Source Keys: {{ Object.keys(articles[0]?.source) }}</pre>
  </template>
  <CardArticle v-for="article in articles" :article="article" />
</template>
<style scoped></style>
<script>
export default {
  data() { // return part of data() is where we declare variables
    return { // declare variables below and separate them with comma ,
      articles: [],
      errors: []
    } // end of variable declaration area
  }, // End of data()
  methods: { // this is where we define functions that can be used in created() or template items with @click
    async get_articles() {
      return await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-23&sortBy=publishedAt&apiKey=5954b441284f4e27b939ca7090e49b24').then(response => {
        if (response.status === 200) {
          // Request completed OK! (see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
          return response.json();
        } else {
          // TODO add some sort of error handling, maybe toasts?
          this.errors.push({ type: 'HTTP', code: response.status, description: 'Failed to fetch articles' })
        }
        return { articles: [] };
      });
    }
  }, // End of methods
  async created() { // this is where we write the JS code lines that will run once at the beginning for this component
    this.articles = (await this.get_articles()).articles;
  } // End of created()
} // End of export default
</script>