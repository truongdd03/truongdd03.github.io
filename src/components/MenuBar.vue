<template>
    <Menubar :model="items" style="min-height: 70px;">
        <template #start>
            <div class="flex align-items-center" @click="scrollTo('home')">
                <font-awesome-icon icon="fa-solid fa-paw" inverse class="mr-2 text-2xl" />
                <p class="text-2xl font-bold cursor-pointer">
                    Don Truong
                </p>
            </div>
        </template>

        <template #item="{ item, props }">
            <div v-ripple class="flex align-items-center" v-bind="props.action" @click="scrollTo(item.label as string)">
                <span :class="`${item.icon} text-primary`" />
                <span class="ml-2 text-primary">{{ item.label }}</span>
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';

import { ref } from 'vue';
import { scrollTo } from '@/utils/navigate';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
    },
    {
        label: 'Experience',
        icon: 'pi pi-briefcase',
    },
    {
        label: 'Education',
        icon: 'pi pi-book',
    },
    {
        label: 'Projects',
        icon: 'pi pi-desktop',
    },
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