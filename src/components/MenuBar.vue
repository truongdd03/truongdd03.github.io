<template>
    <Menubar :model="items">
        <template #start>
            <div class="flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-paw" inverse class="mr-2 text-2xl" />
                <p class="text-2xl font-bold cursor-pointer">Don Truong</p>
            </div>
        </template>

        <template #item="{ item, props }">
            <a v-ripple class="flex align-items-center" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';

import { ref } from 'vue';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Experience',
        icon: 'pi pi-briefcase'
    },
    {
        label: 'Education',
        icon: 'pi pi-book'
    },
    {
        label: 'Project',
        icon: 'pi pi-desktop'
    }
]);
</script>

<style>
.p-menubar-root-list {
    position: absolute;
    right: 35px;
}

.p-menubar-button {
    position: absolute;
    right: 10px;
}
</style>