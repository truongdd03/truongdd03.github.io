<template>
    <div id="navbar" class="fadein navbar">
        <MenuBar />
    </div>
    <div style="height: 80px;" />
    <div style="position: relative; overflow-x: hidden;">
        <router-view />
    </div>

    <ThemeSelect style="bottom: 10px; right: 15px; position: fixed; opacity: 0.8;" />
    <Toast position="top-center" style="z-index: 100;" />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import MenuBar from './components/MenuBar.vue';
import ThemeSelect from './components/ThemeSelect.vue';
import { fetchRemote } from './utils/firebase';

const toast = useToast();

let prevScrollPos = window.scrollY;

window.onscroll = () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos || window.scrollY == 0) {
        document.getElementById('navbar')!.style.top = '10px';
    } else {
        document.getElementById('navbar')!.style.top = '-70px';
    }
    prevScrollPos = currentScrollPos;
};

onMounted(async () => {
    const notification = await fetchRemote('notification');

    if (notification) {
        toast.add(notification);
    }
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