<template>
    <h1 class="text-3xl text-center" style="min-height: 100px;">
        <img style="height: 50px; margin-bottom: -10px;" :src="icon" alt="Dog Playing" />
        {{ constantText }}
        <span id="dynamicText" class="text-primary">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    constantText: String,
    dynamicTexts: Array<string>,
    icon: String,
});

const typingSpeed = 60;
const erasingSpeed = 10; // Larger is slower
const delayTime = 1500;
const typeValue = ref('');
let typeStatus = false;
let currentTextId = 0;
let charId = 0;

const typeText = async () => {
    if (!props.dynamicTexts) return;
    if (charId < props.dynamicTexts[currentTextId].length) {
        if (!typeStatus) typeStatus = true;

        typeValue.value += props.dynamicTexts[currentTextId][charId];
        charId += 1;
        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus = false;
        setTimeout(eraseText, delayTime);
    }
};

const eraseText = async () => {
    if (!props.dynamicTexts) return;
    if (charId == 0) {
        nextWord();
        return;
    }
    if (charId > 0) {
        if (typeStatus) typeStatus = true;

        typeValue.value = props.dynamicTexts[currentTextId].substring(0, charId - 1);
        charId -= 1;
        if (currentTextId + 1 < props.dynamicTexts.length
            && props.dynamicTexts[currentTextId + 1].startsWith(typeValue.value)) {
            nextWord();
        } else {
            setTimeout(eraseText, erasingSpeed);
        }
    }
};

const nextWord = () => {
    if (!props.dynamicTexts) return;
    typeStatus = false;
    currentTextId += 1;
    if (currentTextId >= props.dynamicTexts.length) currentTextId = 0;
    setTimeout(typeText, typingSpeed);
};

onMounted(() => {
    typeText();
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