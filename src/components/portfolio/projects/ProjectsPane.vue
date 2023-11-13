<template>
    <Card class="mt-3">
        <template #title>
            <div class="flex justify-content-center align-items-center"
                v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
                <img style="height: 40px;" :src="ShibaDepressed" />
                <p class="text-3xl">Projects</p>
                <img style="height: 40px;" :src="AlaskaDepressed" />
            </div>
        </template>
        <template #content>
            <ProjectsLg v-if="screenWidth > 1024"></ProjectsLg>
            <ProjectsMd v-else-if="screenWidth > 650"></ProjectsMd>
            <ProjectsSm v-else></ProjectsSm>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import ProjectsLg from './ProjectsLg.vue';
import ProjectsMd from './ProjectsMd.vue';
import ProjectsSm from './ProjectsSm.vue';

import ShibaDepressed from '/assets/images/gifs/shiba-depressed.gif';
import AlaskaDepressed from '/assets/images/gifs/alaska-depressed.gif';

import { onMounted, ref } from 'vue';

const screenWidth = ref(window.innerWidth);

onMounted(() => {
    window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth;
    });
});
</script>

<style lang="scss" scoped>
.wrapper {
    .projects-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 25px;
        align-items: stretch;

        .project {
            width: 300px;
            height: 400px;
        }
    }
}
</style>
