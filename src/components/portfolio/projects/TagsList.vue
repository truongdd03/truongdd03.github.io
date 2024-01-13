<template>
    <div>
        <Tag v-for="tag in tags" :key="(tag as string)" :value="tag" class="mr-1" rounded />
    </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag';

defineProps({
    tags: Array<string>,
});
</script>