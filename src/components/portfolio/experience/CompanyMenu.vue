<template>
    <div class="grid flex-column w-full" style="margin: 0 !important; margin-top: -0.5rem !important;">
        <div
            v-for="item in experience"
            :key="item.company"
            class="company col flex justify-content-center align-items-center border-3 border-round cursor-pointer mt-2 p-5 w-full"
            :class="modelValue?.company == item.company ? 'company-primary-border' : 'surface-border'"
            @click="onSelect(item)">
            <img :src="item.icon" style="object-fit: cover; height: 60px;" alt="icon" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import experience from './experience.json';
import type { Experience } from './Experience';
import { scrollIntoView } from '@/utils/utils';

defineProps({
    modelValue: Object as PropType<Experience>,
});

const emits = defineEmits(['update:modelValue']);

const onSelect = (item: Experience) => {
    emits('update:modelValue', item);
    scrollIntoView('experience-detail', '/');
};
</script>

<style scoped>
.company:hover,
.company-primary-border {
    border-color: var(--primary-color) !important;
}
</style>