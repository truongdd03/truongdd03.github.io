<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="ShibaDepressed" />
            <h1 class="xl title">Projects</h1>
            <img class="wxl title-icon" :src="AlaskaDepressed" />
        </div>
        <ProjectPane v-for="project in projects" :project="project"></ProjectPane>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import ShibaDepressed from '/assets/images/gifs/shiba-depressed.gif';
import AlaskaDepressed from '/assets/images/gifs/alaska-depressed.gif';

import projects from './projects.json';

</script>

<style lang="scss" scoped>
</style>
