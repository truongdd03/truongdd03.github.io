<template>
    <div class="grid nested-grid w-full">
        <div class="col-4" style="height: 80vh;">
            <ProjectPane :project="projects[0]" />
        </div>
        <div class="col-8">
            <div class="grid">
                <div class="col-6" style="height: 30vh;">
                    <ProjectPane :project="projects[1]" />
                </div>
                <div class="col-6">
                    <ProjectPane :project="projects[2]" />
                </div>
                <div class="col-12" style="height: 50vh;">
                    <ProjectPane :project="projects[3]" />
                </div>
            </div>
        </div>
        <div class="col-6" style="height: 40vh;">
            <ProjectPane :project="projects[4]" />
        </div>
        <div class="col-6" style="height: 40vh;">
            <ProjectPane :project="projects[5]" />
        </div>
        <div class="col-4" style="height: 20vh;">
            <ProjectPane :project="projects[6]" />
        </div>
        <div class="col-4" style="height: 20vh;">
            <ProjectPane :project="projects[7]" />
        </div>
        <div class="col-4" style="height: 20vh;">
            <ProjectPane :project="projects[8]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import projects from './projects.json';
</script>