<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <div v-for="post in posts" class="posts-wrapper">
            <PostView :post="post"></PostView>
        </div>
        <p class="footer s">There are no more posts to show right now.</p>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import Post from './post/Post';
import PostView from './post/PostView.vue';

const posts = [
    new Post('12/01/2022 - 19:00', '', [
        '/assets/images/newsfeed/tmp.jpg',
    ]),
    new Post('12/01/2022 - 19:00', '', [
        '/assets/images/newsfeed/spotify-report-2022.jpg',
    ])
];
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 20px;
}
</style>