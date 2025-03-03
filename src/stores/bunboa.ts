import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';
import type { Data } from '@/utils/bunboa';
import { fetchRemote } from '@/utils/firebase';
import { getFromStorage } from '@/utils/storage';

export const useBunBoa = defineStore('bunboa', () => {
    const data: Ref<Data | null> = ref(null);

    const update = async () => {
        const remoteData = await fetchRemote('/bunboa');
        data.value = {
            date: new Date(remoteData.date),
            his: {
                image: await getFromStorage(remoteData.his.image),
                name: remoteData.his.name,
            },
            her: {
                image: await getFromStorage(remoteData.her.image),
                name: remoteData.her.name,
            },
        };
    };

    return { data, update };
});