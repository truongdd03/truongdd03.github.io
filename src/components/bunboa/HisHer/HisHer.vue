<template>
    <div class="w-ful flex justify-content-center">
        <img style="height: 10rem;" alt="taylor" src="https://gifdb.com/images/high/transparent-heart-sticker-taylor-swift-3ww71k1e6f9sdzhe.webp" />
    </div>
    <div class="w-full flex justify-content-center">
        <EditableAvatar :person-data="bunboaStore.data!.his" />
        <div class="flex-grow-1" />
        <EditableAvatar :person-data="bunboaStore.data!.her" />
    </div>
</template>

<script setup lang="ts">
import { useBunBoa } from '@/stores/bunboa';
import EditableAvatar from './EditableAvatar.vue';

const bunboaStore = useBunBoa();
</script>