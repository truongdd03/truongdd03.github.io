<template>
    <div id="background" class="grid flex align-items-center" style="min-height: 50vh;">
        <div class="col-0 md:col-4 lg:col-4"></div>
        <div class="col-12 md:col-4 lg:col-4">
            <div class="w-full flex justify-content-center">
                <div>
                    <DynamicAvatar />
                    <SocialInformation />
                </div>
            </div>
            <div>
                <TypingText constantText="Hi, I'm " :dynamicTexts="roles" :icon="ShibaHi" />
            </div>
        </div>
        <div class="col-12 md:col-4 lg:col-4">
            <SpotifyStatus />
        </div>
    </div>
    <div class="icon-wrapper">
        <font-awesome-icon class="text-3xl cursor-pointer" icon="fa-solid fa-circle-arrow-down" inverse @click="scroll()" />
    </div>
</template>

<script setup lang="ts">
import DynamicAvatar from './DynamicAvatar.vue';
import SpotifyStatus from './SpotifyStatus.vue';
import TypingText from './TypingText.vue';
import SocialInformation from './SocialInformation.vue';
import { scrollIntoView } from '@/utils/utils';

import ShibaHi from '/assets/images/gifs/shiba-hi.gif';

const roles = [
    'Don Truong',
    'from Vietnam',
    'studying @ MSU',
    'a dog lover :)'
];

const scroll = async () => {
    await scrollIntoView('experience', '/');
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
    position: absolute;
    width: calc(100% - 40px);
    bottom: 10%;
    text-align: center;
}

#background {
    background: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url('./msu-background.jpeg');
    background-repeat: no-repeat;
    background-position: 50% 25%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

@media screen and (max-width: 768px) {
    .icon-wrapper {
        width: 100%;
    }
}
</style>
