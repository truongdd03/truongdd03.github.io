<template>
    <div class="flex align-items-center" style="min-height: 50px;" @mouseenter="shouldDisplayEditIcon = true" @mouseleave="shouldDisplayEditIcon = false">
        <Textarea v-if="isEditing" v-model="value" class="w-full" :class="styleClass" autoResize rows="1" />
        <p v-else class="w-full" :class="styleClass" style="white-space: pre-wrap;" @click="isEditing = true">
            {{ value }}
        </p>
        <Button v-if="isEditing" class="ml-1" icon="pi pi-check" link @click="onSave" />
        <Button v-else-if="shouldDisplayEditIcon" class="ml-1" icon="pi pi-pencil" link @click="isEditing = true" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import { onMounted, ref } from 'vue';

const value = ref('');
const isEditing = ref(false);
const shouldDisplayEditIcon = ref(false);

const props = defineProps({
    text: String,
    styleClass: {
        type: String,
        default: 'text-md',
    },
});

onMounted(() => {
    value.value = props.text || '';
});

const emits = defineEmits(['update']);

const onSave = () => {
    emits('update', value.value);
    isEditing.value = false;
};
</script>