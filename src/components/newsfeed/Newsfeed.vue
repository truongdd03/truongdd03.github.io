<template>
    <MenuBar></MenuBar>
    <div class="posts-wrapper wrapper">
        <PostView></PostView>
        <PostView></PostView>
        <PostView></PostView>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import PostView from './post/PostView.vue';

</script>

<style lang="scss" scoped>

</style>