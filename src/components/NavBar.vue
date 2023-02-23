<template>
    <div class="nav-bar">
        <img class="brand-logo" src="/favicon.svg" alt="">
        <div class="type-logo">
            <h1>the</h1>
            <h1>Newsies App</h1>
        </div>
        <div class="toolbar">
            <button class="drop-menu p-button p-button-text" @click="open_about()"> 
                <img src="../assets/hamburger-menu.svg" alt="">
            </button>
        </div>
        <span class="underline"></span>
    </div>
</template>

<style scoped lang="scss">
.nav-bar {
    display: flex;
    position: relative;
    padding: 16px;
    gap: 8px;
}

.type-logo {
margin-top: 16px;

    h1 {
        line-height: 1.1;
        margin: 0;

        &:first-child {
            font-size: 1rem;
        }
    }
}

.brand-logo {
    background-color: var(--brand-color);
    border-radius: 100%;
    border: 1px solid black;
    $size: 82px;
    height: $size;
    width: $size;
    padding: 6px;
    position: relative;
    z-index: 2;
}

.underline {
    display: block;
    border-top: 2px solid black;
    position: absolute;
    left: 70px;
    right: 0;
    bottom: 30px;
    z-index: 1;
}

.toolbar{
    margin-inline-start: auto;
    align-self: center;
}
</style>

<script setup>
import { useDialog } from 'primevue/usedialog';
import AboutDialog from '../dialogs/About.vue';

const dialog = useDialog();

function open_about(){
    dialog.open(AboutDialog, { props: { header: ' ', modal: true } });
}
</script>
