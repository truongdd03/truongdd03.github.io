<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif" />
            <h1 class="title">Experience</h1>
            <img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-41-72.gif" />
        </div>
        <Timeline :value="events1" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        <h3 class="company green">{{slotProps.item.company}}</h3>
                    </template>
                    <template #subtitle>
                        <p class="subtitle">{{slotProps.item.title}}</p>
                    </template>
                    <template #content>
                        <p class="description">{{slotProps.item.description}}</p>
                        <p style="color: yellow">{{`Related Skills: ${slotProps.item.skills}`}}</p>
                    </template>
                </Card>
            </template>
            <template #opposite="slotProps">
                <div class="duration-wrapper">
                    <p class="duration">{{slotProps.item.duration}}</p>
                </div>
            </template>
            <template #marker="slotProps">
                <img v-if="slotProps.item.icon" class="marker-icon" :src="slotProps.item.icon" />
                <font-awesome-icon v-else class="marker-icon-default" icon="fa-solid fa-briefcase" />
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Holistics from '../../assets/experienceIcons/holistics.png';
import OED from '../../assets/experienceIcons/oed.png';

const events1 = [
    {
        company: 'Holistics Data',
        icon: Holistics,
        skills: 'Vue.js, TypeScript',
        title: 'Software Engineer Intern',
        duration: 'May 2022 - September 2022',
        description: 'Worked on a new programming language called AML explicitly used for data analytics. \
                    Developed an online playground for testing and demonstrating AML. \
                    Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process',
    },
    {
        company: 'Open Energy Dashboard',
        icon: OED,
        skills: 'React, Redux, TypeScript, JavaScript, Postgres',
        title: 'Software Engineer Intern',
        duration: 'October 2021 - May 2022',
        description: 'Performed security testing and applied a rate limit for access to prevent DDoS attacks.\
                    Removed redundant code and enhanced the data exporting process. \
                    Managed database and created new APIs to support different resource types. \
                    Reviewed code and created database migrations for the new product version (0.8.0 to 1.0.0).',
    },
    {
        company: "Chang's Kitchen",
        skills: 'Swift, JavaScript',
        title: 'Software Engineer Intern',
        duration: 'May 2021 - August 2021',
        description: 'Developed an iOS mobile app for customers to order food directly from the restaurant with daily rotating menus.\
                    Designed and implemented a web application to manage orders from the mobile app, calculate cost and profit, and analyze customers’ data.',
    },
];
</script>

<style lang="scss" scoped>
.timeline {
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

        .subtitle {
            font-size: 20px;
        }

        .description {
            text-align: left;
            color: white;
            margin-bottom: 20px;
        }
    }

    .marker-icon {
        height: 50px;
        margin: 10px 0px 10px 0px;
    }

    .marker-icon-default {
        font-size: 30px;
        margin: 10px 0px 10px 0px;
    }
}
</style>
