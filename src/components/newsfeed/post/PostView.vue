<template>
    <div class="post-wrapper black-background wxxxl">
        <div class="header">
            <img class="wxm avatar clickable" src="/assets/images/avatar/don-cool.jpeg" @click="redirectToHome()" />
            <div class="header-text-wrapper">
                <p class="s green clickable" @click="redirectToHome()">Don Truong</p>
                <p class="ss">12/01/2022 - 19:00</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

const redirectToHome = () => {
    router.push('/');
}

</script>

<style lang="scss" scoped>
.post-wrapper {
    display: inline-block;
    height: 200px;
    vertical-align: top;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;

    .header {
        width: auto;
        display: flex;

        .avatar {
            height: auto;
            border-radius: 50%;
            margin-right: 10px;
            object-fit: cover;
        }

        .header-text-wrapper {
            text-align: left;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>