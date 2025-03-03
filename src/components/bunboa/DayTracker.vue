<template>
    <div class="flex justify-content-center mt-5">
        <NumberCircle :number="getNumDays()" title="days" />
    </div>

    <div
        style="font-size: 1.5rem;"
        class="flex justify-content-center align-items-center mt-5 mb-2">
        <NumberBox :number="clock.year" title="years" />
        <NumberBox :number="clock.month" title="months" />
        <NumberBox :number="clock.day" title="days" />
        <NumberBox :number="clock.hour" title="hours" />
        <NumberBox :number="clock.minute" title="minutes" />
    </div>
    <div style="background-color: purple;" class="border-round p-1">
        {{ clock.second }} seconds
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import moment from 'moment';
import NumberBox from '../common/NumberBox.vue';
import NumberCircle from '../common/NumberCircle.vue';
import { useBunBoa } from '@/stores/bunboa';

const bunboaStore = useBunBoa();

const clock = ref({
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
    month: 0,
    year: 0,
});

const getNumDays = () => {
    const dayOne = moment(bunboaStore.data!.date);
    const current = moment(moment.now());

    return current.diff(dayOne, 'days');
};

const updateClock = () => {
    const dayOne = moment(bunboaStore.data!.date);
    const current = moment(moment.now());

    const years = current.diff(dayOne, 'year');
    dayOne.add(years, 'years');

    const months = current.diff(dayOne, 'months');
    dayOne.add(months, 'months');

    const days = current.diff(dayOne, 'days');
    dayOne.add(days, 'days');

    const hours = current.diff(dayOne, 'hours');
    dayOne.add(hours, 'hours');

    const minutes = current.diff(dayOne, 'minutes');
    dayOne.add(minutes, 'minutes');

    const seconds = current.diff(dayOne, 'seconds');

    clock.value = {
        year: years,
        month: months,
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
    };
};

onBeforeMount(() => {
    updateClock();
    setInterval(updateClock, 1000);
});
</script>