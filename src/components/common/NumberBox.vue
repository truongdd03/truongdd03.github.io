<template>
    <div style="width: 5rem;">
        <div class="flex justify-content-center">
            <div
                style="background-color: purple; opacity: 0.8;"
                class="w-4rem h-4rem border-round flex align-items-center justify-content-center">
                <div class="text-center">
                    <p style="font-size: 1.5rem;">
                        {{ number }}
                    </p>
                    <p style="font-size: 1rem;">
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