<template>
	<header>
		<DynamicAvatar/>
		<SocialInformation/>
		<TypingText constantText="Hi, I'm " :dynamicTexts="roles"/>
	</header>
</template>

<script setup lang="ts">
import DynamicAvatar from "./components/DynamicAvatar.vue";
import TypingText from "./components/TypingText.vue";
import SocialInformation from "./components/SocialInformation.vue";

const roles = [
	"Don Truong",
	"Đông Trương",
	"from Vietnam",
	"a sophomore at MSU",
	"a former SWE Intern at Holistics",
	"a former SWE Intern at OED",
	"a former SWE Intern at Chang's Kitchen",
	"a dog person :)",
];

</script>
