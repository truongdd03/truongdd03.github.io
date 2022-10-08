<template>
    <IntroductionPane id="introduction" />
    <ExperiencePane id="experience" />
    <!-- <SkillsPane id="skills" /> -->
    <notifications class="notification" position="bottom right" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import IntroductionPane from './components/introduction/IntroductionPane.vue';
import ExperiencePane from './components/experience/ExperiencePane.vue';
import SkillsPane from './components/skills/SkillsPane.vue';

onMounted(() => {
    notify({
        title: 'Contruction zone!',
        type: 'warn',
        text: 'This website is a work in progress. Some features may not work properly.'
    })
})

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
