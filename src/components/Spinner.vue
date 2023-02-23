<template>
<div></div>
</template>

<style scoped lang="scss">
@keyframes spin{
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
}
div{
    display: block;
    height: 1em;
    width: 1em;
    border-left: 3px solid var(--brand-color);
    border-radius: 100%;
    animation: spin 1s infinite linear;
}
</style>