<template>
    <div class="wrapper full">
        <div class="title-wrapper">
            <h1 class="title">Experience</h1>
            <!-- <img class="title-icon" -->
            <!-- src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif" /> -->
        </div>
        <Timeline :value="events1" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        {{slotProps.item.company}}
                    </template>
                    <template #subtitle>
                        {{slotProps.item.duration}}
                    </template>
                    <template #content>
                        <p class="description">{{slotProps.item.description}}</p>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

const events1 = [
    {
        company: "Holistics Data",
        skills: "Vue.js, TypeScript",
        title: "Software Engineer Intern",
        duration: "May 2022 - September 2022",
        description: 'Worked on a new programming language called AML explicitly used for data analytics. \
                    Developed an online playground for testing and demonstrating AML. \
                    Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process',
    },
    {
        company: "Open Energy Dashboard",
        skills: "React, Redux, TypeScript, JavaScript, Postgres",
        title: "Software Engineer Intern",
        duration: "October 2021 - May 2022",
        description: 'Performed security testing and applied a rate limit for access to prevent DDoS attacks.\
                    Removed redundant code and enhanced the data exporting process. \
                    Managed database and created new APIs to support different resource types. \
                    Reviewed code and created database migrations for the new product version (0.8.0 to 1.0.0).',
    },
    {
        company: "Chang's Kitchen",
        skills: "Swift, JavaScript",
        title: "Software Engineer Intern",
        duration: "May 2021 - August 2021",
        description: "Developed an iOS mobile app for customers to order food directly from the restaurant with daily rotating menus.\
                    Designed and implemented a web application to manage orders from the mobile app, calculate cost and profit, and analyze customers’ data.",
    },
];
</script>

<style lang="scss" scoped>
.timeline {
    margin: 0px 30px 0px 30px;
    .experience-wrapper {
        .description {
            text-align: left;
        }
    }
}
</style>
