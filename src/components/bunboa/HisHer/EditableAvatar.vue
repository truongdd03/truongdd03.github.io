<template>
    <div>
        <div style="height: 7rem; width: 7rem;">
            <img
                class="h-full w-full border-circle border-3"
                style="object-fit: cover;"
                :alt="personData?.name"
                :src="personData?.image" />
        </div>
        <p
            class="text-center font-bold p-1 border-round"
            style="font-size: 1rem; background-color: purple;">
            {{ personData?.name }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import { type Person } from '@/utils/bunboa';

defineProps({
    personData: Object as PropType<Person>,
});
</script>