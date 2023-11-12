<template>
    <div class="border-round p-3 surface-50">
        <div class="flex align-items-center justify-content-center ">
            <img :src="education?.icon" style="height: 40px;" />
            <p class="text-2xl ml-2">{{ education?.school }}</p>
        </div>
        <div class="flex mt-3 secondary-text text-color-secondary">
            <p>{{ education?.degree }}</p>
            <p class="ml-auto text-right">{{ education?.duration }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Education } from './Education';

defineProps({
    education: Object as PropType<Education>,
});
</script>