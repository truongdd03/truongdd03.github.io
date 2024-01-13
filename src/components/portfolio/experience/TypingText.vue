<template>
    <p class="text-2xl text-center">
        <span id="dynamicText">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </p>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    text: String,
});

const typingSpeed = 20;
const typeValue = ref('');
let typeStatus = false;
let charId = 0;

const typeText = async () => {
    if (!props.text) return;
    if (charId < props.text.length) {
        if (!typeStatus) typeStatus = true;

        typeValue.value += props.text[charId];
        charId += 1;
        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus = false;
    }
};

watch(() => props.text, async () => {
    typeValue.value = '';
    charId = 0;
    typeStatus = false;
    await typeText();
});

onMounted(async () => {
    await typeText();
});

</script>

<style lang="scss" scoped>
.blinking-cursor {
    color: white;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-moz-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-webkit-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-ms-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-o-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}
</style>