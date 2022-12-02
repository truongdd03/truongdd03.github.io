<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <div v-for="post in posts" class="posts-wrapper">
            <PostView :post="(post as Post)"></PostView>
        </div>
        <p class="footer s">There are no more posts to show right now.</p>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import PostView from './post/PostView.vue';
import posts from './newsfeed.json';
import type Post from './post/Post';
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 20px;
}
</style>