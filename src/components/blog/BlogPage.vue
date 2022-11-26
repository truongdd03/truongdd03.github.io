<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <TypingText
            class="intro"
            constantText="A place where I share my random"
            :dynamicTexts="typingTexts"
            :icon="AlaskaGrr"
        />
        <BlogComponent :title="'The Turing machine'" :status="'In progress'"></BlogComponent>
        <BlogComponent :title="'From casino to archaeology site'" :status="'In progress'"></BlogComponent>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import TypingText from '../portfolio/introduction/TypingText.vue';
import BlogComponent from './BlogComponent.vue';

import AlaskaGrr from '/assets/images/gifs/alaska-grr.gif';

const typingTexts = ['thoughts', 'knowledge', 'stories'];
</script>

<style lang="scss" scoped>
.intro {
    margin-bottom: 50px;
}
</style>