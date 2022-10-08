<template>
    <div class="wrapper full">
        <div class="title-wrapper">
            <h1 class="title">Experience</h1>
            <img class="title-icon"
                src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif" />
        </div>
        <!-- <Timeline :value="events">
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
            <template #connector>
                <div class="p-timeline-event-connector" style="width:4px; color: white"></div>
            </template>
        </Timeline> -->
    </div>
</template>

<script setup lang="ts">
import Timeline from 'primevue/timeline';

const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', color: 'white' },
    { status: 'Processing', date: '15/10/2020 14:00', color: 'white' },
    { status: 'Shipped', date: '15/10/2020 16:15', color: 'white' },
    { status: 'Delivered', date: '16/10/2020 10:00', color: 'white' }
];

</script>

<style lang="scss" scoped>

</style>
