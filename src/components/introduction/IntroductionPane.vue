<template>
    <div class="wrapper black-background full">
        <DynamicAvatar />
        <SocialInformation />
        <TypingText constantText="Hi, I'm " :dynamicTexts="roles" />
        <div class="icon-wrapper">
            <font-awesome-icon class="scroll-icon" icon="fa-solid fa-circle-arrow-down" inverse @click="scroll()" />
        </div>
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

const scroll = () => {

}
</script>

<style lang="scss" scoped>
.full {
    height: 100vh;
    width: 100%;
}
.icon-wrapper {
    width: 100%;
    position: absolute;
    bottom: 5%;
    text-align: center;

    .scroll-icon {
        font-size: 3rem;
        cursor: pointer;
    }
}
</style>
