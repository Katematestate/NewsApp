<script setup>
import NavBar from './components/NavBar.vue';
import SearchBar from './components/Search.vue';
import CardArticle from './components/CardArticle.vue';
import { search } from './stores/search';
import { watch, ref, onMounted } from 'vue';
import { app_state} from './stores/app-state';
import Spinner from './components/Spinner.vue';
import DynamicDialog from 'primevue/dynamicdialog';
import { useDialog } from 'primevue/usedialog';
import AboutDialog from './dialogs/About.vue';

const articles = ref([]);
const errors = ref([]);
const dialog = useDialog();

// TODO refactor get_articles into a 'store' like the search store
async function get_articles(search = 'tesla') {
  app_state.search_in_progress = true;
  return await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-01-23&sortBy=publishedAt&language=en&apiKey=5954b441284f4e27b939ca7090e49b24`).then(response => {
    if (response.status === 200) {
      // Request completed OK! (see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
      return response.json();
    } else {
      // TODO add some sort of error handling, maybe toasts?
      errors.value.push({ type: 'HTTP', code: response.status, description: 'Failed to fetch articles' })
    }
    return { articles: [] };
  }) .then(articles => { app_state.search_in_progress = false; return articles });
}

onMounted(async () => {
  articles.value = (await get_articles('tesla')).articles;
})

// watch is connected to reactive in search.js so it's watching the value of search and if it changed it runs code eg get_articles function
watch(search, async () => { articles.value = (await get_articles(search.value)).articles; });
</script>
<template>
  <DynamicDialog />
  <NavBar />
  <SearchBar />
  <template v-if="!app_state.search_in_progress">
    <CardArticle v-for="article in articles" :article="article" />
  </template>
  <template v-else>
    <Spinner class="spin-loading"/>
  </template>
</template>

<style scoped>
.spin-loading{
  margin: 0 auto;
  position: fixed;
  top: calc(50vh - 0.5em);
  left: calc(50% - 0.5em);
  font-size: 64px;
}
</style>