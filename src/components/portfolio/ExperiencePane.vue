<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="AlaskaClap" />
            <h1 class="title xl">Experience</h1>
            <img class="wxl title-icon" :src="ShibaClap" />
        </div>
        <Timeline :value="events1" align="alternate" class="timeline">
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

import AlaskaClap from '../../assets/gifs/alaska-clap.gif';
import ShibaClap from '../../assets/gifs/shiba-clap.gif';
import Holistics from '../../assets/experienceIcons/holistics.png';
import OED from '../../assets/experienceIcons/oed.png';
import MSU from '../../assets/educationIcons/msu.png';
import Salesforce from '../../assets/experienceIcons/salesforce.png';

const events1 = [
    {
        company: 'Salesforce',
        icon: Salesforce,
        title: 'Incoming Software Engineer Intern',
        duration: '',
        description: '',
    },
    {
        company: 'Michigan State University',
        icon: MSU,
        title: 'Research Assistant | Programmer',
        duration: 'October 2022 - present',
        description: `
* Developed a website to customize survey forms for gathering statistics data from the USDA national farmers market.

* Implemented an activity tracker from scratch using <span class="yellow">PHP</span>, <span class="yellow">SQL</span>, and <span class="yellow">JavaScript</span>.

* Wrote a <span class="yellow">Python</span> crawler to retrieve page content.
`,
    },
    {
        company: 'Holistics Data',
        url: 'https://www.holistics.io/',
        icon: Holistics,
        skills: 'Vue.js, TypeScript, HTML/CSS',
        title: 'Software Engineer Intern',
        duration: 'May 2022 - September 2022',
        description: `
* Implemented new features (conditional expression, string interpolation, etc.) in <span class="yellow">TypeScript</span> for a new programming language explicitly used for data analytics.

* Developed an online editor for testing and demonstrating the programming language using <span class="yellow">TypeScript</span> and <span class="yellow">Vue 3</span>.

* Collaborated in a team of 4 to develop an internal vscode extension from scratch to connect docs and codebase.`,
    },
    {
        company: 'Open Energy Dashboard',
        url: 'https://openenergydashboard.github.io/',
        icon: OED,
        skills: 'React, Redux, TypeScript, JavaScript, Postgres',
        title: 'Software Engineer Intern',
        duration: 'October 2021 - May 2022 & October 2022 - Present',
        description: `
* Performed security testing by writing <span class="yellow">Bash</span> scripts and applied a rate limit to prevent DDoS attacks. Improving the exporting view using <span class="yellow">React</span>, <span class="yellow">Redux</span>, and <span class="yellow">TypeScript</span>.

* Expanded the database and created new API routes to support over 30 different resource types using <span class="yellow">PostgresQL</span> and <span class="yellow">JavaScript</span>. Reviewed code and migrated database for the new product version (1.0.0).`,
    },
    {
        company: "Chang's Kitchen",
        title: 'Software Engineer Intern',
        duration: 'May 2021 - August 2021',
        description: `
* Developed an iOS mobile app with <span class="yellow">Swift</span> for customers to order food from the restaurant with daily rotating menus. Using Firebase database, the app allowed users to manage and re-order from order history.

* Designed a web app using <span class="yellow">HTML/CSS</span> and <span class="yellow">JavaScript</span> to manage orders from the mobile app, calculate profit, and analyze customers’ data.`,
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
        padding: 20px;
        min-height: 5vw;

        .duration {
            color: white;
        }
    }

    .experience-wrapper {
        background-color: black;

        .description {
            margin-left: -20px;
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
