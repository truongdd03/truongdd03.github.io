<template>
    <div class="h-15rem">
        <Cropper
            ref="cropper"
            class="cropper"
            :stencil-props="{
                aspectRatio: 1,
            }"
            :src="file!.objectURL" />
    </div>

    <div class="text-right mt-2">
        <Button label="Cancel" size="small" severity="secondary mr-2" @click="emits('close')" />
        <Button label="Upload" size="small" icon="pi pi-cloud-upload" @click="crop" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { type PropType, ref } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import { type FormattedFile } from '@/utils/bunboa';
import 'vue-advanced-cropper/dist/style.css';

const cropper = ref();
const emits = defineEmits(['close', 'crop']);

defineProps({
    file: Object as PropType<FormattedFile>,
});

const crop = () => {
    const croppedData = cropper.value.getResult();
    const croppedImage = croppedData.canvas.toDataURL('image/jpeg');
    emits('crop', croppedImage);
    emits('close');
};
</script>