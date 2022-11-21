<template>
    <MenuBar :displaying-section="target"></MenuBar>
    <IntroductionPane id="introduction" ref="introduction" />
    <ExperiencePane id="experience" ref="experience" />
    <EducationPane id="education" ref="education" />
    <ProjectsPane id="project" ref="project" />
    <notifications class="notification" position="bottom right" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import MenuBar from '../MenuBar.vue';
import IntroductionPane from './introduction/IntroductionPane.vue';
import ExperiencePane from './ExperiencePane.vue';
import EducationPane from './EducationPane.vue';
import ProjectsPane from './projects/ProjectsPane.vue';
import { useElementVisibility } from '@vueuse/core'

// Get the target section to highlight the correct navBar button
const introduction = ref(null);
const experience = ref(null);
const education = ref(null);
const project = ref(null);
const isIntroductionVisible = useElementVisibility(introduction);
const isExperienceVisible = useElementVisibility(experience);
const isEducationVisible = useElementVisibility(education);
const isProjectVisible = useElementVisibility(project);
const target = computed(() => {
    const section = ['introduction', 'experience', 'education', 'project'];
    const isVisible: Boolean[] = [isIntroductionVisible, isExperienceVisible, isEducationVisible, isProjectVisible].map((r) => r.value);
    return section[isVisible.lastIndexOf(true)];
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
