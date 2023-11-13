<template>
    <div class="grid" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <div v-for="item in experience" v-bind:key="item.company"
            class="company col flex justify-content-center w-5 border-3 border-round cursor-pointer m-2 p-5"
            :class="modelValue?.company == item.company ? 'company-primary-border' : 'surface-border'" @click="onSelect(item)">
            <img :src="item.icon" style="object-fit: cover; height: 60px;" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import experience from './experience.json';
import type { Experience } from './Experience';

defineProps({
    modelValue: Object as PropType<Experience>,
});

const emits = defineEmits(['update:modelValue']);

const onSelect = (item: Experience) => {
    emits('update:modelValue', item);
};
</script>

<style scoped>
.company:hover,
.company-primary-border {
    border-color: var(--primary-color) !important;
}
</style>