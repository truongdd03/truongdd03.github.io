<template>
    <div class="w-full flex justify-content-center">
        <div>
            <font-awesome-icon icon="fa-solid fa-quote-left" inverse class="mr-2 text-2xl" />
            <div>
                <TypingText :text="overview!"></TypingText>
                <p class="text-md mt-2 text-right">-- {{ overviewSource }} --</p>
            </div>

            <font-awesome-icon icon="fa-solid fa-quote-right" inverse class="mr-2 text-2xl" style="float: right;" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TypingText from './TypingText.vue';

defineProps({
    overview: String,
    overviewSource: String,
});
</script>