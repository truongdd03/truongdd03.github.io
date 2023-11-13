<template>
    <div class="fadein" style="height: calc(100vh - 80px); position: relative;">
        <div id="background" class="h-full lg:h-auto pt-3">
            <div class="grid flex">
                <div class="col-0 lg:col-4"></div>
                <div class="col-12 lg:col-4">
                    <div class="w-full flex justify-content-center">
                        <div>
                            <DynamicAvatar />
                            <SocialInformation />
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-4">
                    <SpotifyStatus />
                </div>
                <div class="flex justify-content-center w-full">
                    <TypingText constantText="Hi, I'm " :dynamicTexts="roles" :icon="ShibaHi" />
                </div>
            </div>
            <div class="icon-wrapper">
                <font-awesome-icon class="text-3xl cursor-pointer" icon="fa-solid fa-circle-arrow-down" inverse
                    @click="scrollTo('experience')" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DynamicAvatar from './DynamicAvatar.vue';
import SpotifyStatus from './SpotifyStatus.vue';
import TypingText from './TypingText.vue';
import SocialInformation from './SocialInformation.vue';
import { scrollTo } from '@/utils/navigate';

import ShibaHi from '/assets/images/gifs/shiba-hi.gif';

const roles = [
    'Don Truong',
    'from Vietnam',
    'studying @ MSU',
    'a dog lover :)'
];
</script>

<style lang="scss" scoped>
.icon-wrapper {
    position: absolute;
    width: 100%;
    bottom: 8vh;
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
</style>
