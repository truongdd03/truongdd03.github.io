<template>
    <div id="gameView" class="zoomiesShibaWrapper bggrey">
        <div id="gameCover" @click="startGame">
            <div class="icon">
                <font-awesome-icon class="l" icon="fa-solid fa-play" inverse style="margin-right: 10px;"/>
                <span class="l">Start Game</span>
            </div>
        </div>

        <div class="gameContent" @click="(gameElements[0] as Shiba).jump()">
            <p class="green">{{ timeElapsed }}</p>
            <div id="components">
                <img class="shiba" src="/assets/images/newsfeed/zoomiesShiba/shiba_sprite/shiba_sit.png" />
                <img src="/assets/images/newsfeed/zoomiesShiba/ghost/ghost_begin.png" style="width: 60px; left: 30px;"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { GameElement } from './ts/GameElement';
import { Ghost } from './ts/Ghost';
import { Shiba } from './ts/Shiba';
import { Cloud } from './ts/Cloud';

const timeElapsed = ref(0);
let gameElements: GameElement[] = [];
let isInGame = false;
let timeSinceAddedGhost = 0;

const startGame = () => {
    // Remove cover
    document.getElementById('gameCover')!.style.display = 'none';
    // Reset everything
    document.getElementById('components')!.innerHTML = '';
    gameElements = [];
    timeElapsed.value = 0;
    timeSinceAddedGhost = 0;
    
    // Start a new game
    gameElements.push(new Shiba('shiba'));
    gameElements.push(new Cloud(`cloud-${timeElapsed.value}`, 5));

    isInGame = true;
}

const endGame = () => {
    // Stop game
    isInGame = false;
    // Display cover
    document.getElementById('gameCover')!.style.display = 'flex';
}

/**
 * Randomly add ghosts
 */
const addObstacleRandomly = () => {
    const size = Math.max(5, 20 - timeElapsed.value / 100);

    if (random(size) == 0 && timeSinceAddedGhost >= 10) {
        // Randomly add 1 or 2 ghosts
        for (let i = 0; i <= random(2); i += 1) {
            gameElements.push(new Ghost(`ghost-${timeElapsed.value + i}`, 15 + timeElapsed.value / 100, 20 * i));
        }

        timeSinceAddedGhost = 0;
    }
}

setInterval(() => {
    if (isInGame) {
        gameElements.forEach(element => element.update());
        gameElements = gameElements.filter(element => !element.shouldRemove());
        timeElapsed.value += 1;
        timeSinceAddedGhost += 1;

        addObstacleRandomly();

        // Add cloud
        if (timeElapsed.value % 50 == 0) {
            gameElements.push(new Cloud(`cloud-${timeElapsed.value}`, 5));
        }

        // Check if shiba hits ghost
        gameElements.forEach((element) => {
            if (element instanceof Ghost) {
                if (element.positionX >= 30 && element.positionX <= 95 && !(gameElements[0] as Shiba).isJumping) {
                    // Lose
                    endGame();
                }
            }
        })
    }
}, 100);

window.onkeydown = (e) => {
    if (isInGame) {
        e.preventDefault();
        if (e.code == 'ArrowUp') {
            e.preventDefault();
            (gameElements[0] as Shiba).jump();
        }
    }
    if (e.key == ' ') {
        e.preventDefault();
        if (isInGame) {
            (gameElements[0] as Shiba).jump();
        } else {
            startGame();
        }
    }
}

const random = (size: number) => {
    return Math.floor(Math.random() * size);
}
</script>

<style lang="scss">
.zoomiesShibaWrapper {
    position: relative;
    height: 180px;
    border: 1px solid purple;

    #gameCover {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 2;
        background-color: black;
        opacity: 0.5;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .gameContent {
        position: relative;
        height: 100%;
        width: 100%;

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
            bottom: -25px;
        }

        .cloud {
            position: absolute;
            bottom: 130px;
            width: 80px;
            z-index: 0;
        }

        .toronto {
            position: absolute;
            width: 80px;
        }
    }
    }
}
</style>
