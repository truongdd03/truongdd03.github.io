<template>
    <Card class="mt-2">
        <template #title>
            <div
                v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                class="flex justify-content-center align-items-center">
                <img style="height: 40px;" :src="AlaskaClap" alt="Alaska Clapping" />
                <h1 class="text-3xl">
                    Experience
                </h1>
                <img style="height: 40px;" :src="ShibaClap" alt="Shiba Clapping" />
            </div>
        </template>
        <template #content>
            <div class="flex gap-3 flex-column md:flex-row h-full md:h-auto" style="height: 700px">
                <CompanyMenu v-model="selected" class="w-auto md:w-5 lg:w-3 h-full" />
                <CompanyDetails :detail="selected" />
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

import AlaskaClap from '/assets/images/gifs/alaska-clap.gif';
import ShibaClap from '/assets/images/gifs/shiba-clap.gif';

import { ref } from 'vue';
import CompanyMenu from './CompanyMenu.vue';
import CompanyDetails from './CompanyDetails.vue';

import experience from './experience.json';

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