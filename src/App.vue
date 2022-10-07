<template>
	<header>
		<div class="center">
			<DynamicAvatar/>
		</div>
		<TypingText constantText="Hi, I'm " :dynamicTexts="roles"/>
	</header>
</template>

<script setup lang="ts">
import DynamicAvatar from "./components/DynamicAvatar.vue";
import TypingText from "./components/TypingText.vue";

const roles = [
	"Don Truong",
	"Đông Trương",
	"from Vietnam",
	"a dog person :)",
	"a sophomore at MSU",
	"a former SWE Intern at Holistics",
	"a former SWE Intern at OED",
	"a former SWE Intern at Chang's Kitchen"
];

</script>
