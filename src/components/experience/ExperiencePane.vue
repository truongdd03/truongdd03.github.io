<template>
    <div class="wrapper full">
        <div class="title-wrapper">
            <img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif" />
            <h1 class="title">Experience</h1>
            <img class="title-icon" src="https://pic.funnygifsbox.com/uploads/2021/06/funnygifsbox.com-2021-06-10-09-00-31-19.gif" />
        </div>
        <Timeline :value="events1" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        <h3 class="company green">{{slotProps.item.company}}</h3>
                    </template>
                    <template #subtitle>
                        <div class="subtitle-wrapper">
                            <p class="position">{{slotProps.item.title}}</p>
                            <p class="duration">{{slotProps.item.duration}}</p>
                        </div>
                    </template>
                    <template #content>
                        <p class="description">{{slotProps.item.description}}</p>
                    </template>
                </Card>
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
    margin: 0px 30px 0px 30px;

    .experience-wrapper {
        background-color: black;

        .subtitle-wrapper {
            width: 100%;
            height: 20px;
            font-size: 20px;

            .position {
                float: left;
            }

            .duration {
                float: right;
            }
        }

        .description {
            text-align: left;
            color: white;
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
