<template>
    <div class="wrapper">
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
.wrapper {
    width: 100%;
    margin: 0px 0px 50px 0px;
    padding: 30px;
}
</style>
