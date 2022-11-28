<template>
    <div class="wrapper black-background">
        <div class="avatar-activity-wrapper">
            <div class="left"></div>
            <div class="center">
                <DynamicAvatar />
            </div>
            <div class="right">
                <div class="spotify-status-wrapper">
                    <div class="title-wrapper">
                        <img class="wm" style="margin-right:10px;" src="/assets/images/gifs/shiba-listen-music.gif" />
                        <p class="s green">Listening to Spotify</p>
                        <img class="wm" style="margin-left:10px;" src="/assets/images/gifs/shiba-listen-music.gif" />
                    </div>
                    <div class="song-wrapper">
                        <img class="wxl" src="https://i.scdn.co/image/ab67616d0000b2733846fa121fe826af4364df6e" />
                        <div class="song-description">
                            <p class="s song-info white bold">Siêu phẩm tình ew</p>
                            <p class="s song-info">MAI</p>
                        </div>
                        <div class="spotify-logo">
                            <font-awesome-icon class="l icon" icon="fa-brands fa-spotify" inverse />
                        </div>
                    </div>
                </div>
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
import TypingText from './TypingText.vue';
import SocialInformation from './SocialInformation.vue';
import { scrollIntoView } from '@/utils/utils';

import ShibaHi from '/assets/images/gifs/shiba-hi.gif';

const roles = [
    'Don Truong',
    'an incoming SWE Intern @ Salesforce',
    'from Vietnam',
    'studying @ Michigan State University',
    'a former SWE Intern @ Holistics',
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

        .spotify-status-wrapper {
            width: 100%;
            padding: 10px 30px 20px 30px;
            border: 5px;
            background-color: rgba(60, 60, 60, 0.29);

            .song-wrapper {
                width: 100%;
                display: flex;
                margin-top: 20px;
                justify-content: center;

                .song-description {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin: 0 30px 0 10px;

                    .song-info {
                        text-align: left;
                        width: 100%;
                    }
                }

                .spotify-logo {
                    display: flex;
                    align-items: center;
                }
            }
        }
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
}
</style>
