<template>
    <SpeedDial ref="speedDial" :model="items" direction="up" showIcon="pi pi-palette" style="z-index: 2;">
        <template #item="{ item }">
            <Avatar
                size="large"
                :style="`background-color: ${item.color}`"
                shape="circle"
                class="cursor-pointer border-2"
                :class="currentTheme == item.theme ? 'border-0' : ''"
                @click="switchTheme(item.theme)" />
        </template>
    </SpeedDial>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar';
import SpeedDial from 'primevue/speeddial';
import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();

const currentTheme = ref('mdc-dark-indigo');
const speedDial = ref(null);
const items = ref([
    {
        color: 'rgb(160, 169, 214)',
        theme: 'mdc-dark-indigo',
    },
    {
        color: 'rgb(173, 160, 241)',
        theme: 'soho-dark',
    },
    {
        color: 'rgb(129, 143, 241)',
        theme: 'lara-dark-indigo',
    },
    {
        color: 'rgb(118, 181, 241)',
        theme: 'arya-blue',
    },
    {
        color: 'rgb(175, 111, 195)',
        theme: 'arya-purple',
    },
    {
        color: 'rgb(105, 208, 157)',
        theme: 'lara-dark-teal',
    },
    {
        color: 'rgb(249, 213, 104)',
        theme: 'arya-orange',
    },
    {
        color: 'rgb(231, 149, 177)',
        theme: 'luna-pink',
    },
]);

const switchTheme = (theme: string) => {
    PrimeVue.changeTheme(currentTheme.value, theme, 'theme-link', () => { });
    currentTheme.value = theme;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (speedDial.value as any).hide();
};
</script>