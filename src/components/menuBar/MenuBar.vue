<template>
    <div>
        <div class="nav-menu">
            <font-awesome-icon class="icon" icon="fa-solid fa-bars" inverse @click="showMenu()"></font-awesome-icon>
            <div class="nav-content" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="nav-items">
                    <li class="nav-button" @click="onNavButtonClick('introduction')">Home</li>
                    <li class="nav-button" @click="onNavButtonClick('experience')">Experience</li>
                    <li class="nav-button" @click="onNavButtonClick('education')">Education</li>
                    <li class="nav-button" @click="onNavButtonClick('project')">Projects</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { scrollIntoView } from '@/utils';
import { ref } from 'vue';

let showMobileMenu = ref(false);

const showMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

const onNavButtonClick = (id: string) => {
    scrollIntoView(id);
}
</script>

<style lang="scss" scoped>
.nav-menu {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgb(23, 27, 33);
    z-index: 1;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
}

.nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    height: 40px;

    .nav-button {
        padding: 0 20px;
        cursor: pointer;
        color: white;
        font-size: calc(0.6vw + 8px);
    }
}

.icon {
    display: none;
}

@media screen and (max-width: 768px) {
    .nav-menu {
        padding-top: 10px;
        width: 100%;
        cursor: pointer;
        align-items: center;
        text-align: center;
    }

    .open-menu {
        opacity: 1;
        height: 150px;
    }

    .closed-menu {
        opacity: 0;
        padding: 0;
        height: 15px;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }

    .nav-items {
        flex-direction: column;
    }

    .icon {
        display: block;
        text-align: right;
        margin-left: 10px;
    }
}
</style>