<template>
    <div class="not-found-wrapper">
        <h1 class="xxl">Oops - 404 Page not found :(</h1>
        <img class="wxl"
            src="https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-19-9.gif" />
        <div class="button-wrapper">
            <router-link class="l button" to="/">Go to Homepage</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.not-found-wrapper {
    padding: 10% 0 10% 0;
    text-align: center;
    width: 100%;
    height: 100vh;

    h1 {
        color: hsla(160, 100%, 37%, 1);
    }

    .button-wrapper {
        margin: 0 40% 10% 40%;
        width: 20%;
        position: absolute;
        bottom: 10%;
        text-align: center;

        .button {
            cursor: pointer;
            color: white;
        }
    }
}
</style>