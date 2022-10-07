<template>
    <div>
        <DynamicAvatar />
        <SocialInformation />
        <TypingText constantText="Hi, I'm " :dynamicTexts="roles" />
    </div>
</template>

<script setup lang="ts">
import DynamicAvatar from './DynamicAvatar.vue';
import TypingText from './TypingText.vue';
import SocialInformation from './SocialInformation.vue';

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
