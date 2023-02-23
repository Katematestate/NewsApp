<script setup>
defineProps({ article: {} })
</script>
<template>
    <div>
        <p>{{ article.source.name }}</p>
        <p>{{ article.author }}</p>
        <p>{{ article.description }}</p>
        <details>
            <summary>Full content</summary>
            {{ article.content }}
        </details>
        <p>{{ article.url }}</p>
    </div>
</template>
<style scoped></style>