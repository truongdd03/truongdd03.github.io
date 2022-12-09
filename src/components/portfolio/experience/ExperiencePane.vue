<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="AlaskaClap" />
            <h1 class="title xl">Experience</h1>
            <img class="wxl title-icon" :src="ShibaClap" />
        </div>
        <Timeline :value="experience" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        <a class="company-link" :href="slotProps.item.url" target="_blank">
                            <h3 class="l green company-name">{{ slotProps.item.company }}</h3>
                            <font-awesome-icon v-if="slotProps.item.url" class="m redirect-icon"
                                icon="fa-solid fa-up-right-from-square" />
                        </a>
                    </template>
                    <template #subtitle>
                        <p class="m">{{ slotProps.item.title }}</p>
                    </template>
                    <template #content v-if="slotProps.item.description !== ''">
                        <Markdown :html="true" class="s description" :source="slotProps.item.description" />
                    </template>
                </Card>
            </template>
            <template #opposite="slotProps">
                <div class="duration-wrapper">
                    <p class="m duration">{{ slotProps.item.duration }}</p>
                </div>
            </template>
            <template #marker="slotProps">
                <img v-if="slotProps.item.icon" class="wl marker-icon" :src="slotProps.item.icon"
                    :alt="slotProps.item.company" />
                <font-awesome-icon v-else class="l marker-icon-default" icon="fa-solid fa-briefcase" />
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">
import Markdown from 'vue3-markdown-it';
import Card from 'primevue/card';

import AlaskaClap from '/assets/images/gifs/alaska-clap.gif';
import ShibaClap from '/assets/images/gifs/shiba-clap.gif';

import experience from './experience.json';

</script>

<style lang="scss" scoped>
.timeline {
    width: 100%;

    .company-link {
        text-decoration: none;

        .redirect-icon,
        .company-name {
            display: inline;
        }

        .redirect-icon {
            margin-left: 5px;
            color: hsla(160, 100%, 37%, 1);
        }
    }

    .duration-wrapper {
        padding-top: 20px;
        min-height: 5vw;

        .duration {
            color: white;
        }
    }

    .experience-wrapper {
        border: 0.5px solid rgb(54, 53, 53);
        border-radius: 20px;
        background-color: black;
        -webkit-box-shadow: 0 0 10px rgba(60, 60, 60, 0.66);
        box-shadow: 0 0 10px rgba(60, 60, 60, 0.66);

        .description {
            margin: -20px 0 0 -20px;
            text-align: left;
            color: white;
        }
    }

    .marker-icon {
        margin: 10px 0px 10px 0px;
    }

    .marker-icon-default {
        margin: 10px 0px 10px 0px;
    }
}
</style>
