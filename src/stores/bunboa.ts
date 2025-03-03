import { defineStore } from 'pinia';
import { type Ref, ref, watch } from 'vue';
import type { Data } from '@/utils/bunboa';
import { fetchRemote, writeRemote } from '@/utils/firebase';
import { showToast } from '@/utils/utils';

export const useBunBoa = defineStore('bunboa', () => {
    const data: Ref<Data | null> = ref(null);
    const hasUnsavedChanges = ref(false);
    const loaded = ref(false);

    const update = async () => {
        const remoteData = await fetchRemote('/bunboa');
        data.value = {
            date: new Date(remoteData.date),
            his: {
                ...remoteData.his,
            },
            her: {
                ...remoteData.her,
            },
        };
    };

    const saveChanges = async () => {
        hasUnsavedChanges.value = false;
        await writeRemote('bunboa/her', data.value?.her);
        await writeRemote('bunboa/his', data.value?.his);
        showToast('success', 'Successfully saved changes!');
    };

    watch(() => data.value, () => {
        if (!loaded.value) {
            loaded.value = true;
        } else {
            hasUnsavedChanges.value = true;
        }
    }, { deep: true });

    return {
        data, hasUnsavedChanges, update, saveChanges,
    };
});