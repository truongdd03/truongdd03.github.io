<template>
    <div>
        <Tag v-for="tag in tags" v-bind:key="(tag as string)" :value="tag" class="mr-1" rounded></Tag>
    </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag';

defineProps({
    tags: Array<String>
});
</script>