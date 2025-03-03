<template>
    <div>
        <div
            class="mb-1"
            style="height: 7rem; width: 7rem;">
            <img
                class="h-full w-full border-circle border-3"
                style="object-fit: cover;"
                :alt="bunboaStore.data![type].name"
                :src="bunboaStore.data![type].image" />
        </div>
        <p
            v-if="!isEditting"
            class="text-center font-bold p-1 border-round"
            style="font-size: 1rem; background-color: purple;">
            {{ bunboaStore.data![type].name }}
        </p>
        <FileUpload
            v-else
            :multiple="false"
            mode="basic"
            accept="image/*"
            @select="onSelectedFiles" />

        <!-- Dialog to crop image when upload from local -->
        <Dialog
            v-model:visible="cropModal.visible"
            modal
            header="Update Image"
            :draggable="false"
            class="m-2"
            style="width: 500px; max-width: 90vw;">
            <ImageCropper
                class="w-full"
                :file="cropModal.file!"
                @crop="onCrop"
                @close="onCloseCropModal" />
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
import { ref, type PropType, type Ref } from 'vue';
import { useBunBoa } from '@/stores/bunboa';
import { type FormattedFile } from '@/utils/bunboa';
import ImageCropper from './ImageCropper.vue';

const bunboaStore = useBunBoa();
const cropModal: Ref<{
  visible: boolean,
  file: FormattedFile | null
}> = ref({ visible: false, file: null });

const props = defineProps({
    type: {
        type: Object as PropType<'his' | 'her'>,
        required: true,
    },
    isEditting: {
        type: Boolean,
        default: false,
    },
});

const onSelectedFiles = (event: any) => {
    // The new uploaded file
    const file = event.files[event.files.length - 1];
    cropModal.value = {
        visible: true,
        file,
    };
    // Use must crop the image before uploading.
    // Hence, we temporarily remove the image and upload it in the onCrop function.
    event.files.pop();
};

/**
 * Function to handle crop event of cropping modal
 * @param newImage The new image's src
 */
const onCrop = async (newImage: string) => {
    cropModal.value.file!.objectURL = newImage;
    bunboaStore.data![props.type].image = newImage;
};

const onCloseCropModal = () => {
    cropModal.value = {
        visible: false,
        file: null,
    };
};
</script>