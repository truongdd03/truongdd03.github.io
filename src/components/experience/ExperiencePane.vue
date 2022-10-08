<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <h1 class="title">Experience</h1>
            <img class="title-icon"
                src="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-38-72.gif" />
        </div>
        <!-- <Timeline :value="events" align="alternate">
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline> -->
    </div>
</template>

<script setup lang="ts">
import Timeline from 'primevue/timeline';

const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2020 14:00', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', color: '#607D8B' }
];

</script>

<style lang="scss" scoped>
.tmp {
    background-color: purple;
}
</style>
