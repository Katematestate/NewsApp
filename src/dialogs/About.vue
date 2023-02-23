<template>
    <div class="about-dialog">
        <img class="brand-logo" src="/favicon.svg" alt="">
        <div class="about-blog">
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est corrupti, obcaecati quam amet ad consequatur accusantium sequi exercitationem dolorem aliquid tempore laudantium facere ipsum deleniti commodi ea quasi consequuntur quis explicabo fugiat. Inventore libero earum eaque adipisci, architecto incidunt!</p>
        </div>
    </div>
    <div class="media-icons">
        <img class="social-icon" src="../assets/twitter-icon.svg" alt="">
        <img class="social-icon" src="../assets/facebook-icon.svg" alt="">
        <img class="social-icon" src="../assets/instagram-icon.svg" alt="">
    </div>
</template>

<style scoped>

.about-dialog{
    display: flex;
    gap: 32px;
}
    .brand-logo{
    height: 120px;
    width: 120px;
    }
    .media-icons{
        display: flex;
        gap: 16px;
        justify-content: flex-end;
    }

    .social-icon{
        height: 32px;
    }
</style>