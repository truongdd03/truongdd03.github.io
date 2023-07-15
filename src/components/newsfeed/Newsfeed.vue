<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <MenuBar></MenuBar>
    <div class="wrapper bgblackmute">
        <div class="posts-wrapper">
            <div v-for="post in posts" v-bind:key="post.date" class="post-wrapper">
                <PostView :post="(post as Post)"></PostView>
            </div>
            <p class="footer s">There are no more posts to show right now.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import PostView from './post/PostView.vue';
import { Post } from './post/Post';
import postsJSON from './newsfeed.json';

const formatDate = (timestamp: number): string => {
    const dateObj = new Date(timestamp);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    let minute = `${dateObj.getMinutes()}`;
    if (minute.length === 1) minute = '0' + minute;
    return `${month}/${date}/${year} - ${hour}:${minute}`;
}

const posts = postsJSON.sort((a, b) => a.date > b.date ? -1 : 1).map((post: any) => {
    return new Post(
        post.type,
        formatDate(post.date),
        post.content,
        post.imageUrls,
        post.tags,
        post.elementId,
    )
});

console.log((new Date()).getTime());
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    padding: 0;
    width: 100%;

    .posts-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 60%;

        .post-wrapper {
            width: 100%;
        }
    }

    .filter-wrapper {
        position: fixed;
        right: 0;
        width: 20%;
        height: 100%;

        .tags-wrapper {
            display: flex;
            justify-content: center;
        }
    }
}

.footer {
    margin: 0 0 20px 0;
}

@media screen and (max-width: 768px) {
    .wrapper {
        margin-top: 50px;

        .posts-wrapper {
            width: 100%;
        }

        .filter-wrapper {
            display: none;
        }
    }
}
</style>