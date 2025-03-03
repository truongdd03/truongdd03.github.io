<template>
    <div v-if="bunboaStore.data" id="bunboa" class="h-full w-full flex flex-column align-items-center p-4 pt-8">
        <DayTracker class="w-full" :date="bunboaStore.data.date" />
        <div class="flex-grow-1" />
        <div class="mb-5 w-full">
            <HisHer />
        </div>
    </div>
    <div v-else class="h-full w-full flex justify-content-center align-items-center bg-white">
        <img alt="loading" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2o5dGZnNmx4NWtvd3RmNnkxN3lheGRkc3N2MW0wYnRhamRpZmVsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/i39BqIYGwiD4uaDL1d/giphy.gif" />
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import DayTracker from '@/components/bunboa/DayTracker.vue';
import HisHer from '@/components/bunboa/HisHer/HisHer.vue';
import { useBunBoa } from '@/stores/bunboa';

const bunboaStore = useBunBoa();

onBeforeMount(async () => {
    await bunboaStore.update();
});
</script>

<style lang="scss" scoped>
#bunboa {
    background: url('./bg.png');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: 50% 25%;
}
</style>