<template>
    <div class="fadein navbar" id="navbar">
        <MenuBar></MenuBar>
    </div>
    <div style="height: 80px;"></div>
    <div style="position: relative; overflow-x: hidden;">
        <router-view />
    </div>


    <ThemeSelect style="bottom: 10px; right: 15px; position: fixed;"></ThemeSelect>
    <Toast position="top-center" style="z-index: 100;" />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import MenuBar from './components/MenuBar.vue';
import { onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import ThemeSelect from './components/ThemeSelect.vue';

const toast = useToast();

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

onMounted(() => {
    toast.add({
        severity: 'info',
        summary: 'Welcome to my new website!',
        detail: 'Things are still moving behind the scenes, but hope that you like it so far!',
        life: 5000
    });
});
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
