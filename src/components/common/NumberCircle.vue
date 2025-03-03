<template>
    <div style="width: 12rem;">
        <div class="flex justify-content-center">
            <div
                style="border: 0.3rem solid white; background-color: white; opacity: 0.8;"
                class="w-11rem h-11rem border-circle flex align-items-center justify-content-center">
                <div class="text-center">
                    <p style="font-size: 3rem; color: pink;">
                        {{ number }}
                    </p>
                    <p style="font-size: 1.3rem; color: black">
                        {{ title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    number: Number,
    title: String,
});
</script>