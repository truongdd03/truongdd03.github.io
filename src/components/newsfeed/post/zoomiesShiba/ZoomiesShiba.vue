<template>
    <div class="zoomiesShibaWrapper bggrey">
        <div class="components">
            <img id="shiba" class="wxl" :src="`/assets/images/newsfeed/shiba_sprite/shiba_sprite${refs.sprite}.png`" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Shiba } from './ts/Shiba';

const shiba = new Shiba();
const refs = ref({
    sprite: 0,
});

setInterval(() => {
    shiba.update();

    updateView();
}, 100);

const updateView = () => {
    refs.value.sprite = shiba.spriteNumber;
}
</script>

<style lang="scss" scoped>
.zoomiesShibaWrapper {
    height: 100px;

    .components {
        position: absolute;
        bottom: 0;
    }
}
</style>
