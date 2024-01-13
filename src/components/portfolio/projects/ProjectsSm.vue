<template>
    <div class="grid nested-grid w-full">
        <div v-for="project in projects" :key="project.name" class="col-12" style="height: 20vh;">
            <ProjectPane :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import projects from './projects.json';
</script>