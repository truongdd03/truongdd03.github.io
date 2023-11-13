<template>
    <div class="grid nested-grid w-full">
        <div class="col-4" style="height: 80vh;">
            <ProjectPane :project="projects[0]"></ProjectPane>
        </div>
        <div class="col-8">
            <div class="grid">
                <div class="col-6" style="height: 30vh;">
                    <ProjectPane :project="projects[1]"></ProjectPane>
                </div>
                <div class="col-6">
                    <ProjectPane :project="projects[2]"></ProjectPane>
                </div>
                <div class="col-12" style="height: 50vh;">
                    <ProjectPane :project="projects[3]"></ProjectPane>
                </div>
            </div>
        </div>
        <div class="col-6" style="height: 40vh;">
            <ProjectPane :project="projects[4]"></ProjectPane>
        </div>
        <div class="col-6" style="height: 40vh;">
            <ProjectPane :project="projects[5]"></ProjectPane>
        </div>
        <div class="col-4" style="height: 20vh;">
            <ProjectPane :project="projects[6]"></ProjectPane>
        </div>
        <div class="col-4" style="height: 20vh;">
            <ProjectPane :project="projects[7]"></ProjectPane>
        </div>
        <div class="col-4" style="height: 20vh;">
            <ProjectPane :project="projects[8]"></ProjectPane>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import projects from './projects.json';
</script>