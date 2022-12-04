<template>
    <MenuBar></MenuBar>
    <div class="wrapper">
        <div class="posts-wrapper">
            <div v-for="post in posts" v-bind:key="post.date" class="post-wrapper">
                <PostView :post="(post as Post)"></PostView>
            </div>
            <p class="footer s">There are no more posts to show right now.</p>
        </div>
        <!-- <div class="filter-wrapper">
            <p class="m green">Tags</p>
            <div class="tags-wrapper">
                <TagView v-for="tag in Object.keys(tagColor)" v-bind:key="tag" :tag="tag" :selected="false"></TagView>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import MenuBar from '../MenuBar.vue';
import PostView from './post/PostView.vue';
import { Post, tagColor } from './post/Post';
import postsJSON from './newsfeed.json';
import TagView from './post/TagView.vue';

const formatDate = (timestamp: number): string => {
    const dateObj = new Date(timestamp);
    const date = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    let minute = `${dateObj.getMinutes()}`;
    if (minute.length === 1) minute = '0' + minute;
    return `${month}/${date}/${year} - ${hour}:${minute}`;
}

const posts = postsJSON.sort((a, b) => a.date > b.date ? -1 : 1).map((post: any) => {
    return new Post(
        formatDate(post.date),
        post.content,
        post.imageUrls,
        post.tags
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
        width: 50%;

        .post-wrapper {
            width: 100%;
        }
    }

    .filter-wrapper {
        position: fixed;
        right: 0;
        width: 25%;
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