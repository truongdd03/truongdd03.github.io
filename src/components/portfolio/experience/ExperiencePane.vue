<template>
    <Card class="mt-2">
        <template #title>
            <div class="flex justify-content-center align-items-center"
                v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
                <img style="height: 40px;" :src="AlaskaClap" />
                <h1 class="text-3xl">Experience</h1>
                <img style="height: 40px;" :src="ShibaClap" />
            </div>
        </template>
        <template #content>
            <CompanyMenu v-model="selected"></CompanyMenu>
            <CompanyDetails class="mt-5" :detail="selected"></CompanyDetails>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

import AlaskaClap from '/assets/images/gifs/alaska-clap.gif';
import ShibaClap from '/assets/images/gifs/shiba-clap.gif';

import CompanyMenu from './CompanyMenu.vue';
import CompanyDetails from './CompanyDetails.vue';

import experience from './experience.json';
import { ref } from 'vue';

const selected = ref(experience[0]);
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