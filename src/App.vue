<template>
    <div class="navbar" id="navbar">
        <MenuBar></MenuBar>
    </div>
    <div style="height: 80px;"></div>
    <router-view />
    <Toast />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import MenuBar from './components/MenuBar.vue';

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById('navbar')!.style.top = '10px';
    } else {
        document.getElementById('navbar')!.style.top = '-70px';
    }
    prevScrollPos = currentScrollPos;
};
</script>

<style scoped>
.navbar {
    position: fixed;
    z-index: 10;
    width: calc(100% - 20px);
    transition: top 0.4s;
    text-align: center;
}
</style>
