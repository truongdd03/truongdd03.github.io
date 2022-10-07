<template>
	<header>
		<DynamicAvatar />
		<SocialInformation />
		<TypingText constantText="Hi, I'm " :dynamicTexts="roles" />
		<notifications class="notification" position="bottom right" />
	</header>
</template>

<script setup lang="ts">
import DynamicAvatar from './components/DynamicAvatar.vue';
import TypingText from './components/TypingText.vue';
import SocialInformation from './components/SocialInformation.vue';
import { onMounted } from 'vue';
import { notify } from '@kyvg/vue3-notification';

const roles = [
    'Don Truong',
    'Đông Trương',
    'from Vietnam',
    'a sophomore at MSU',
    'a former SWE Intern at Holistics',
    'a former SWE Intern at OED',
    "a former SWE Intern at Chang's Kitchen",
    'a dog person :)',
];

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
