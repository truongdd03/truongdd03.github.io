<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="ShibaDepressed" />
            <h1 class="xl title">Projects</h1>
            <img class="wxl title-icon" :src="AlaskaDepressed" />
        </div>
        <div class="projects-wrapper">
            <ProjectPane class="project" v-bind:key="project.name" v-for="project in projects" :project="project"></ProjectPane>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import ShibaDepressed from '/assets/images/gifs/shiba-depressed.gif';
import AlaskaDepressed from '/assets/images/gifs/alaska-depressed.gif';

import projects from './projects.json';

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
