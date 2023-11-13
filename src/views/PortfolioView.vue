<template>
    <IntroductionPane></IntroductionPane>
    <ExperiencePane id="experience"></ExperiencePane>
    <EducationPane id="education"></EducationPane>
    <ProjectsPane id="projects"></ProjectsPane>
</template>

<script setup lang="ts">
import IntroductionPane from '@/components/portfolio/introduction/IntroductionPane.vue';
import ExperiencePane from '@/components/portfolio/experience/ExperiencePane.vue';
import EducationPane from '@/components/portfolio/education/EducationPane.vue';
import ProjectsPane from '@/components/portfolio/projects/ProjectsPane.vue';
</script>