<template>
    <div class="wrapper black-background">
        <DynamicAvatar />
        <SocialInformation />
        <TypingText
            constantText="Hi, I'm "
            :dynamicTexts="roles"
            icon="https://pic.funnygifsbox.com/uploads/2019/11/funnygifsbox.com-2019-11-04-07-40-17-9.gif"
        />
        <div class="icon-wrapper">
            <font-awesome-icon class="xl scroll-icon" icon="fa-solid fa-circle-arrow-down" inverse @click="scroll()" />
        </div>
    </div>
</template>

<script setup lang="ts">
import DynamicAvatar from './DynamicAvatar.vue';
import TypingText from './TypingText.vue';
import SocialInformation from './SocialInformation.vue';
import { scrollIntoView } from '@/utils';

const roles = [
    'Don Truong',
    'from Vietnam',
    'studying at Michigan State University',
    'a former SWE Intern at Holistics',
    'a former SWE Intern at OED',
    "a former SWE Intern at Chang's Kitchen",
    'a dog person :)',
];

const scroll = async () => {
    await scrollIntoView('experience', '/');
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
    width: 90%;
    position: absolute;
    bottom: 10%;
    text-align: center;

    .scroll-icon {
        cursor: pointer;
    }
}
</style>
