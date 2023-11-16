<template>
    <Card class="mt-3">
        <template #title>
            <p>Editor</p>
        </template>

        <template #content>
            <Editor v-model="value" editorStyle="height: 320px" />
            <div class="mt-3 border-1 border-round surface-border p-3">
                <div class="flex align-items-center">
                    <p>Output:</p>
                    <Button label="Copy" icon="pi pi-copy" class="ml-auto" @click="copyValue" />
                </div>
                <p>{{ JSON.stringify(value) }}</p>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const value = ref('');

const copyValue = async () => {
    const content = JSON.stringify(value.value);
    await navigator.clipboard.writeText(content);
    toast.add({
        severity: 'success',
        detail: 'Copied value!',
        life: 3000
    });
};
</script>