<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <TypingText
            class="intro"
            constantText="A place where I share my random"
            :dynamicTexts="typingTexts"
            icon="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-40-28.gif"
        />
        <BlogComponent :title="'The Turing machine'" :status="'In progress'"></BlogComponent>
        <BlogComponent :title="'From casino to archaeology site'" :status="'In progress'"></BlogComponent>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import TypingText from '../portfolio/introduction/TypingText.vue';
import BlogComponent from './BlogComponent.vue';

const typingTexts = ['thoughts', 'knowledge', 'stories'];
</script>

<style lang="scss" scoped>
.intro {
    margin-bottom: 50px;
}
</style>