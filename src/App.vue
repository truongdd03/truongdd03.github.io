<template>
    <div class="navbar" id="navbar">
        <MenuBar></MenuBar>
    </div>
    <div style="height: 100px;"></div>
    <router-view />
</template>

<script setup lang="ts">
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
    width: calc(100% - 55px);
    transition: top 0.4s;
}
</style>
