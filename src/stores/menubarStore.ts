import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenubarStore = defineStore('menubar', () => {
    const forceHide = ref(false);

    const setForceHide = (val: boolean) => {
        forceHide.value = val;
    };

    return { forceHide, setForceHide };
});