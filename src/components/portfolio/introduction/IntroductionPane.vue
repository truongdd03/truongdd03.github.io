<template>
    <div class="wrapper black-background">
        <DynamicAvatar />
        <SocialInformation />
        <TypingText
            constantText="Hi, I'm "
            :dynamicTexts="roles"
            :icon="ShibaHi"
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

import ShibaHi from '../../../../assets/images/gifs/shiba-hi.gif';

const roles = [
    'Don Truong',
    'an incoming SWE Intern @ Salesforce',
    'from Vietnam',
    'studying @ Michigan State University',
    'a former SWE Intern @ Holistics',
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
