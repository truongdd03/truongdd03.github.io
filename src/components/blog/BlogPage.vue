<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <TypingText
            constantText="A place where I share my random"
            :dynamicTexts="typingTexts"
            icon="https://pic.funnygifsbox.com/uploads/2021/02/funnygifsbox.com-2021-02-25-14-34-40-28.gif"/>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import TypingText from '../portfolio/introduction/TypingText.vue';

const typingTexts = ['thoughts', 'knowledge', 'stories'];
</script>