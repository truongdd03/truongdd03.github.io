<template>
    <div class="grid nested-grid w-full">
        <div class="col-12" style="height: 20vh;" v-for="project in projects" v-bind:key="project.name">
            <ProjectPane :project="project"></ProjectPane>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import projects from './projects.json';
</script>