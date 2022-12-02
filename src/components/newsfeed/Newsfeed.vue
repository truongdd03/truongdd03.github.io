<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <div v-for="post in posts" v-bind:key="post.date" class="posts-wrapper">
            <PostView :post="(post as Post)"></PostView>
        </div>
        <p class="footer s">There are no more posts to show right now.</p>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import PostView from './post/PostView.vue';
import Post from './post/Post';
import postsJSON from './newsfeed.json';

const formatDate = (timestamp: number): string => {
    const dateObj = new Date(timestamp);
    const date = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    let minute =`${dateObj.getMinutes()}`;
    if (minute.length === 1) minute = '0' + minute;
    return `${month}/${date}/${year} - ${hour}:${minute}`;
}

const posts = postsJSON.sort((a, b) => a.date > b.date ? -1 : 1).map((post: any) => {
    return new Post(
        formatDate(post.date),
        post.content,
        post.imageUrls,
    )
});

// console.log((new Date()).getTime());
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 20px;
}
</style>