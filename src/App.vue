<template>
    <IntroductionPane id="introduction" />
    <ExperiencePane id="experience" />
    <EducationPane id="education" />
    <ProjectsPane id="project" />
    <notifications class="notification" position="bottom right" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import IntroductionPane from './components/introduction/IntroductionPane.vue';
import ExperiencePane from './components/experience/ExperiencePane.vue';
import EducationPane from './components/education/EducationPane.vue';
import ProjectsPane from './components/projects/ProjectsPane.vue';
import { writeUserIP } from './utils';

onMounted(async () => {
    writeUserIP();
});

</script>

<style lang="scss">
.notification {
    .notification-title {
        font-size: 15px;
        font-weight: bolder;
    }

    .notification-content {
        font-size: 15px;
    }
}
</style>
