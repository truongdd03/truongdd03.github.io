<template>
    <div class="wrapper bgblack">
        <div class="avatar-activity-wrapper">
            <div class="left"></div>
            <div class="center">
                <DynamicAvatar />
            </div>
            <div class="right">
                <SpotifyStatus />
            </div>
        </div>
        <SocialInformation />
        <TypingText constantText="Hi, I'm " :dynamicTexts="roles" :icon="ShibaHi" />
        <div class="icon-wrapper">
            <font-awesome-icon class="xl scroll-icon" icon="fa-solid fa-circle-arrow-down" inverse @click="scroll()" />
        </div>
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
    'studying @ Michigan State University',
    'interested in software engineering',
    'a dog lover :)'
];

const scroll = async () => {
    await scrollIntoView('experience', '/');
}
</script>

<style lang="scss" scoped>
.avatar-activity-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .left {
        width: 35%;
    }

    .center {
        width: 30%;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35%;
    }
}

.icon-wrapper {
    width: 90%;
    position: absolute;
    bottom: 10%;
    text-align: center;

    .scroll-icon {
        cursor: pointer;
    }
}

@media screen and (max-width: 768px) {
    .avatar-activity-wrapper {
        flex-direction: column;

        .left {
            display: none;
        }

        .right {
            margin-top: 20px;
            max-width: none;
            width: auto;
        }
    }

    .icon-wrapper {
        width: 100%;
    }
}
</style>
