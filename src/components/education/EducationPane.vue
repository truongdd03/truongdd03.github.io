<template>
    <div class="wrapper black-background">
        <div class="title-wrapper">
            <img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-9.gif" />
            <h1 class="title">Education</h1>
            <img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif" />
        </div>
        <Timeline :value="events" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        <h3 class="company green">{{slotProps.item.school}}</h3>
                    </template>
                    <template #subtitle>
                        <p class="position">{{slotProps.item.degree}}</p>
                    </template>
                    <template #content>
                        <p v-if="slotProps.item.description" class="description">{{slotProps.item.description}}</p>
                    </template>
                </Card>
            </template>
            <template #opposite="slotProps">
                <div class="duration-wrapper">
                    <p class="duration">{{slotProps.item.duration}}</p>
                </div>
            </template>
            <template #marker="slotProps">
                <img class="marker-icon" :src="slotProps.item.icon" />
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
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

    .company {
        font-size: 2vw;
    }

    .duration-wrapper {
        padding: 25px;
        min-height: 50px;

        .duration {
            color: white;
            font-size: 20px;
        }
    }

    .experience-wrapper {
        background-color: black;
        border: 5px solid white;

        .position {
            font-size: 20px;
        }

        .description {
            text-align: left;
            color: white;
            margin-bottom: 20px;
            white-space: pre-wrap;
        }
    }

    .marker-icon {
        height: 5vw;
        margin: 10px 0px 10px 0px;
    }

    .marker-icon-default {
        font-size: 5vw;
        margin: 10px 0px 10px 0px;
    }
}
</style>
