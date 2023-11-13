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
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
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
