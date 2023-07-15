<template>
    <div id="gameView" class="zoomiesShibaWrapper bggrey">
        <p class="green">{{ timeElapsed }}</p>
        <button @click="(gameElements[0] as Shiba).jump()">Jump</button>
        <div id="components">
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { GameElement } from './ts/GameElement';
import { Ghost } from './ts/Ghost';
import { Shiba } from './ts/Shiba';

const timeElapsed = ref(0);
let gameElements: GameElement[] = [];

onMounted(() => {
    gameElements.push(new Shiba('shiba'));
});

setInterval(() => {
    gameElements.forEach(element => element.update());
    gameElements = gameElements.filter(element => !element.shouldRemove());
    timeElapsed.value += 1;

    // Randomly add ghost
    if (Math.floor(Math.random() * 20) == 0) {
        gameElements.push(new Ghost(`ghost-${timeElapsed.value}`, 15 + timeElapsed.value / 100));
    }
}, 100);
</script>

<style lang="scss">
.zoomiesShibaWrapper {
    position: relative;
    height: 150px;

    #components {
        position: absolute;
        bottom: 0;

        .shiba {
            width: 80px;
            z-index: 1;
            bottom: -10px;
            left: 50px;
        }

        .ghost {
            position: absolute;
            width: 80px;
            left: 100px;
            bottom: -25px;
        }
    }
}
</style>
