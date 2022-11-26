<template>
    <div class="wrapper black-background">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="AlaskaBike" />
            <h1 class="xl title">Education</h1>
            <img class="wxl title-icon" :src="AlaskaEat" />
        </div>
        <Timeline :value="events" align="alternate" class="timeline">
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

import AlaskaBike from '../../assets/gifs/alaska-bike.gif';
import AlaskaEat from '../../assets/gifs/alaska-eat.gif';
import MSU from '../../assets/educationIcons/msu.png';
import PTNK from '../../assets/educationIcons/ptnk.png';

const events = [
    {
        icon: MSU,
        school: 'Michigan State University',
        duration: 'September 2021 - May 2025',
        degree: 'BS in Computer Science',
        description: 
`GPA: 4.0/4.0
Dean's List
MSU International Tution Grant
MSU Presidential Study Abroad Scholarship
MSU #YOU-ARE-WELCOME-HERE Scholarship`,
    },
    {
        icon: PTNK,
        school: 'VNU-HCM High School for the Gifted',
        duration: 'September 2018 - June 2021',
        degree: 'High School Diploma',
    }
];
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
