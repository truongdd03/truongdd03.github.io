<template>
    <div
        @click="openUrl(project!.url)" 
        v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
        class="wrapper border-3 surface-border border-round h-full flex align-items-center justify-content-center cursor-pointer">
        <img class="bg" :src="project?.image" />
        <p class="text-2xl font-bold text-center">{{ project?.name }}</p>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Project } from './Project';
import { openUrl } from '@/utils/navigate';

defineProps({
    project: Object as PropType<Project>,
});

</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    z-index: 1;

    .bg {
        opacity: 0.3;
        z-index: -1;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.wrapper:hover {
    border-color: var(--primary-color) !important;
}
</style>
