<template>
    <div class="wrapper black-background">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="AlaskaBike" />
            <h1 class="xl title">Education</h1>
            <img class="wxl title-icon" :src="AlaskaEat" />
        </div>
        <Timeline :value="education" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        <h3 class="l green">{{slotProps.item.school}}</h3>
                    </template>
                    <template #subtitle>
                        <p class="m">{{slotProps.item.degree}}</p>
                    </template>
                    <template #content>
                        <p v-if="slotProps.item.description" class="s description">{{slotProps.item.description}}</p>
                    </template>
                </Card>
            </template>
            <template #opposite="slotProps">
                <div class="duration-wrapper">
                    <p class="m duration">{{slotProps.item.duration}}</p>
                </div>
            </template>
            <template #marker="slotProps">
                <img class="wl marker-icon" :src="slotProps.item.icon" :alt="slotProps.item.school" />
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

import AlaskaBike from '/assets/images/gifs/alaska-bike.gif';
import AlaskaEat from '/assets/images/gifs/alaska-eat.gif';

import education from '/public/assets/content/education.json';
</script>

<style lang="scss" scoped>
.timeline {
    width: 100%;

    .duration-wrapper {
        padding: 25px;
        min-height: 50px;

        .duration {
            color: white;
        }
    }

    .experience-wrapper {
        background-color: black;
        border: calc(0.1vw + 3px) solid white;

        .description {
            text-align: left;
            color: white;
            margin-bottom: 20px;
            white-space: pre-wrap;
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
