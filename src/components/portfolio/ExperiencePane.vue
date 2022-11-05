<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img class="wxl title-icon"
                src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-39-88.gif" />
            <h1 class="title xl">Experience</h1>
            <img class="wxl title-icon"
                src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-41-72.gif" />
        </div>
        <Timeline :value="events1" align="alternate" class="timeline">
            <template #content="slotProps">
                <Card class="experience-wrapper">
                    <template #title>
                        <a class="company-link" :href="slotProps.item.url" target="_blank">
                            <h3 class="l green company-name">{{slotProps.item.company}}</h3>
                            <font-awesome-icon v-if="slotProps.item.url" class="m redirect-icon"
                                icon="fa-solid fa-up-right-from-square" />
                        </a>
                    </template>
                    <template #subtitle>
                        <p class="m">{{slotProps.item.title}}</p>
                    </template>
                    <template #content>
                        <p class="s description">{{slotProps.item.description}}</p>
                        <p class="s" style="color: yellow">{{`Related Skills: ${slotProps.item.skills}`}}</p>
                    </template>
                </Card>
            </template>
            <template #opposite="slotProps">
                <div class="duration-wrapper">
                    <p class="m duration">{{slotProps.item.duration}}</p>
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
import Card from 'primevue/card';
import Holistics from '../../assets/experienceIcons/holistics.png';
import OED from '../../assets/experienceIcons/oed.png';
import MSU from '../../assets/educationIcons/msu.png';

const events1 = [
    {
        company: 'Open Energy Dashboard',
        url: 'https://openenergydashboard.github.io/',
        icon: OED,
        skills: 'React, Redux, TypeScript, JavaScript, Postgres',
        title: 'Software Engineer Intern',
        duration: 'October 2022 - Present',
        description: '',
    },
    {
        company: 'Michigan State University',
        icon: MSU,
        skills: 'JavaScript, HTML/CSS',
        title: 'Research Assistant | Programmer',
        duration: 'October 2022 - present',
        description: 'Developed a website to customize survey forms for gathering statistics data from the USDA national farmers market.',
    },
    {
        company: 'Holistics Data',
        url: 'https://www.holistics.io/',
        icon: Holistics,
        skills: 'Vue.js, TypeScript, HTML/CSS',
        title: 'Software Engineer Intern',
        duration: 'May 2022 - September 2022',
        description: 'Worked on a new programming language called AML explicitly used for data analytics. \
                    Developed an online playground for testing and demonstrating AML. \
                    Collaborated on a team of 4 to create an internal vscode extension that improves the documentation searching process',
    },
    {
        company: 'Open Energy Dashboard',
        url: 'https://openenergydashboard.github.io/',
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
        padding: 25px;
        min-height: 5vw;

        .duration {
            color: white;
        }
    }

    .experience-wrapper {
        background-color: black;

        .description {
            text-align: left;
            color: white;
            margin-bottom: 20px;
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
