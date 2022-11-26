<template>
    <div class="wrapper tmp">
        <div class="title-wrapper">
            <img class="wxl title-icon" :src="ShibaDepressed" />
            <h1 class="xl title">Projects</h1>
            <img class="wxl title-icon" :src="AlaskaDepressed" />
        </div>
        <ProjectPane v-for="project in projects" :project="project"></ProjectPane>
    </div>
</template>

<script setup lang="ts">
import ProjectPane from './ProjectPane.vue';

import ShibaDepressed from '../../../assets/gifs/shiba-depressed.gif';
import AlaskaDepressed from '../../../assets/gifs/alaska-depressed.gif';
import PersonalWebsite from '../../../assets/projects/personal-website.jpeg';
import Barter from '../../../assets/projects/barter.jpeg';
import Nuntium from '../../../assets/projects/nuntium.jpeg';

const projects = [
    {
        name: 'Personal Website',
        subtitle: 'A website built with <span class="yellow">TypeScript</span> and <span class="yellow">Vue3</span>',
        skills: ['TypeScript', 'Vue3'],
        image: PersonalWebsite,
        description: '',
        url: 'https://github.com/truongdd03/truongdd03.github.io'
    },
    {
        name: 'Search engine',
        subtitle: 'A simple version of Google Search written in <span class="yellow">C++</span>',
        skills: ['C++'],
        description: 'A multi-threaded search engine that crawls information from multiple websites, extracts keywords, and returns appropriate results based on user’s queries. LRU cache is use to optimize query speech.',
        url: 'https://github.com/truongdd03/searchEngine'
    },
    {
        name: 'Barter',
        subtitle: 'A used stuff trading website. Winner of <span class="yellow">Best Use of Google Cloud</span>',
        skills: ['HTML/CSS', 'JavaScript'],
        image: Barter, 
        description: 'Winner of Best Use of Google Cloud. Implemented in 36 hours during SpartaHack VII, Barter is an exchanging items website with the goal to reduce the amount of trash and connect people.', 
        url: 'https://github.com/truongdd03/SpartaHack'
    },
    {
        name: 'Nuntium',
        subtitle: 'A news-sharing iOS application built with <span class="yellow">Swift</span>',
        skills: ['Swift'],
        image: Nuntium,
        description: 'Implemented in 36 hours during ShellHacks 2021, this is a news-sharing platform that supports reliability ratings and a customized search engine.',
        url: 'https://github.com/truongdd03/Shellhack'
    },
    {
        name: 'Opty',
        subtitle: 'A simple version of LinkedIn built with <span class="yellow">Swift</span>',
        skills: ['Swift'],
        image: '',
        description: 'A mobile-oriented social media that is used specifically for job search. Users can easily create a resume or a recruiting post. This app would also match suitable jobs or potential candidates based on users’ profiles and job descriptions.',
        url: 'https://github.com/truongdd03/Opty-IOS'
    },
    {
        name: 'Financial Diary',
        subtitle: 'An expenses and incomes tracking iOS App',
        skills: ['Swift'],
        image: '',
        description: 'An iOS application to track users’ expenses and incomes, as well as displaying real-time data of the stock market for investment suggestions.',
        url: 'https://github.com/truongdd03/Financial-Diary'
    },
]

</script>

<style lang="scss" scoped>
</style>
