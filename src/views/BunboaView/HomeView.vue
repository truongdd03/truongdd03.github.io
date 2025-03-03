<template>
    <div v-if="bunboaStore.data" id="bunboa" class="h-full w-full flex flex-column align-items-center p-5">
        <div class="w-full flex justify-content-end">
            <Button
                style="background-color: purple; color: white;"
                icon="pi pi-cog"
                size="small"
                rounded
                @click="showEditModal = true" />
        </div>
        <DayTracker class="w-full" :date="bunboaStore.data.date" />
        <div class="flex-grow-1" />
        <div class="mb-5 w-full">
            <HisHer />
        </div>
    </div>
    <div v-else class="h-full w-full flex justify-content-center align-items-center bg-white">
        <img alt="loading" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2o5dGZnNmx4NWtvd3RmNnkxN3lheGRkc3N2MW0wYnRhamRpZmVsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/i39BqIYGwiD4uaDL1d/giphy.gif" />
    </div>
    <!-- Dialog to edit profile -->
    <Dialog
        v-model:visible="showEditModal"
        modal
        header="Edit Profile"
        :draggable="false">
        <EditProfile />
    </Dialog>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import DayTracker from '@/components/bunboa/DayTracker.vue';
import HisHer from '@/components/bunboa/HisHer/HisHer.vue';
import { useBunBoa } from '@/stores/bunboa';
import EditProfile from '@/components/bunboa/modals/EditProfile.vue';

const bunboaStore = useBunBoa();
const showEditModal = ref(false);

onBeforeMount(async () => {
    await bunboaStore.update();
});
</script>

<style lang="scss" scoped>
#bunboa {
    background: url('./bg.png');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: 50% 25%;
}
</style>