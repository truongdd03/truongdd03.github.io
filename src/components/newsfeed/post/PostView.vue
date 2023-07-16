<template>
    <div class="post-wrapper bgblack">
        <div class="heading">
            <div class="info-wrapper">
                <img class="wxm avatar clickable" src="/assets/images/avatar/don-cool.jpeg" @click="redirectToHome()" />
                <div class="header-text-wrapper">
                    <p class="s green clickable" @click="redirectToHome()">Don Truong</p>
                    <p class="s">{{ post?.date }}</p>
                </div>
            </div>
            <div class="tags-wrapper">
                <TagView v-for="tag in post?.tags" v-bind:key="tag" :tag="tag" :selected="true"></TagView>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="description-wrapper">
                <Markdown :html="true" :typographer="true" class="s description white" :source="post?.content" />
            </div>
            <ZoomiesShiba v-if="post?.isCodePost() && post.elementId === 'zoomiesShiba'" />
            <ImageView v-else :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import Markdown from 'vue3-markdown-it';
import { Post } from './Post';
import TagView from './TagView.vue';
import ImageView from './ImageView.vue';
import ZoomiesShiba from './zoomiesShiba/ZoomiesShiba.vue';

defineProps({
    post: Post,
});

const redirectToHome = () => {
    router.push('/');
}

</script>

<style lang="scss" scoped>
.post-wrapper {
    display: inline-block;
    vertical-align: top;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;

    .heading {
        width: 100%;
        display: flex;

        .info-wrapper {
            height: auto;
            display: flex;

            .avatar {
                border-radius: 50%;
                margin-right: 10px;
                object-fit: cover;
            }

            .header-text-wrapper {
                text-align: left;
                display: flex;
                flex-direction: column;
            }
        }

        .tags-wrapper {
            height: 100%;
            margin-left: auto;
            display: flex;
            justify-content: right;
            margin-top: 10px;
        }
    }

    .content-wrapper {
        margin: 10px;

        .description {
            text-align: left;
        }
    }
}
</style>