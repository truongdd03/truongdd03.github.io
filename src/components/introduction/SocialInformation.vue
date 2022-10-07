<template>
    <header>
        <div class="social">
            <a href="https://github.com/truongdd03" target="_blank">
                <font-awesome-icon class="icon" icon="fa-brands fa-github" inverse />
            </a>
            <a href="https://www.linkedin.com/in/dong-truong/" target="_blank">
                <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" inverse />
            </a>
            <a href="https://discordapp.com/users/763404045150060605" target="_blank">
                <font-awesome-icon class="icon" icon="fa-brands fa-discord" inverse />
            </a>
            <font-awesome-icon class="icon" icon="fa-solid fa-envelope" inverse @click="copyMailAddress()" />
        </div>
    </header>
</template>

<script setup lang="ts">import { notify } from '@kyvg/vue3-notification';
const copyMailAddress = async () => {
    const mailAddress = 'dong23102003@gmail.com';
    await navigator.clipboard.writeText(mailAddress);
    notify({ title: 'Copied email address!' });
}
</script>

<style lang="scss" scoped>
.social {
    width: 100%;
    text-align: center;
}
.icon {
    display: inline-block;
    margin: 30px 15px 10px 15px;
    font-size: 2rem;
    cursor: pointer;
}
</style>
