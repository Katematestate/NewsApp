<script setup>
defineProps({ article: {} })
</script>
<template>
    <div class="news-card">
        <div class="card-avatar">
            <img :src="article.urlToImage ?? '/favicon.svg'" alt="article image">
        </div>
        <!-- ?? means nullish see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing -->
        <div class="card-content">
            <h1>{{ article.source.name }}</h1>
            <h2>{{ article.author }}</h2>
            <p>{{ article.description }}</p>

            <a target="_blank" :href="article.url">Read this issue</a>
        </div>
    </div>
</template>
<style scoped lang="scss">
.news-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 2px solid black;
    margin: 16px;
    padding: 4px;

    img {
        max-width: 400px;
        width: 100%;
    }

    a {
        display: block;
        text-align: end;
    }
}

.card-avatar {
    display: flex;
    align-items: center;
    flex: 1 1 200px;
    border: 2px solid black;
    aspect-ratio: 1/2;
    overflow: hidden;
}

.card-content {
    flex: 1 1 60%;
}
</style>