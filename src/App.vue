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
	"a dog person",
	"a sophomore at MSU",
	"an ex-SWE Intern at Holistics",
	"an ex-SWE Intern at OED",
	"an ex-SWE Intern at Chang's Kitchen"
];

</script>
