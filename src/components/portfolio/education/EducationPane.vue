<template>
    <Card class="mt-3">
        <template #title>
            <div
                v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                class="flex align-items-center justify-content-center">
                <img style="height: 40px;" :src="AlaskaBike" alt="Dog Riding Bike" />
                <h1 class="text-3xl">
                    Education
                </h1>
                <img style="height: 50px;" :src="AlaskaEat" alt="Dog Eating" />
            </div>
        </template>

        <template #content>
            <div class="grid">
                <div
                    v-for="item in education"
                    :key="item.school"
                    v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
                    class="col">
                    <EducationDetail :education="item" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import EducationDetail from './EducationDetail.vue';

import AlaskaBike from '/assets/images/gifs/alaska-bike.gif';
import AlaskaEat from '/assets/images/gifs/alaska-eat.gif';

import education from './education.json';
</script>

<style lang="scss" scoped>
.timeline {
    .duration-wrapper {
        padding-top: 20px;
        min-height: 50px;

        .duration {
            color: white;
        }
    }

    .experience-wrapper {
        background-color: black;
        border-radius: 20px;
        border: 1px solid white;
        -webkit-box-shadow: 0 0 10px white;
        box-shadow: 0 0 10px white;

        .description {
            text-align: left;
            color: white;
            margin: -20px 0 0 0;
            white-space: pre-wrap;
        }
    }
}
</style>