<template>
    <div class="post-wrapper black-background wxxxl">
        <div class="heading">
            <img class="wxm avatar clickable" src="/assets/images/avatar/don-cool.jpeg" @click="redirectToHome()" />
            <div class="header-text-wrapper">
                <p class="s green clickable" @click="redirectToHome()">Don Truong</p>
                <p class="ss">12/01/2022 - 19:00</p>
            </div>
        </div>
        <div class="content">
            <Markdown :html="true" class="s description" :source="post?.content" />
        </div>
        <div class="images-wrapper grey-background" v-if="(post && post.imageUrls.length !== 0)">
            <span class="image-wrapper">
                <img class="image-content" :src="getImageUrl()" />
            </span>
            <span v-if="(imageIndex !== 0)" class="prev-btn clickable" @click="updateImageIndex(-1)">
                <font-awesome-icon class="m" icon="fa-solid fa-arrow-alt-circle-left" inverse />
            </span>
            <span v-if="(post && imageIndex !== post.imageUrls.length - 1)" class="next-btn clickable"
                @click="updateImageIndex(1)">
                <font-awesome-icon class="m" icon="fa-solid fa-arrow-alt-circle-right" inverse />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import Markdown from 'vue3-markdown-it';
import Post from './Post';

const props = defineProps({
    post: Post,
});

const redirectToHome = () => {
    router.push('/');
}

let imageIndex = ref(0);

const updateImageIndex = (val: number) => {
    imageIndex.value += val;
}

const getImageUrl = () => {
    return new URL(props.post!.imageUrls[imageIndex.value], import.meta.url).href;
}

</script>

<style lang="scss" scoped>
.post-wrapper {
    display: inline-block;
    vertical-align: top;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;

    .heading {
        width: auto;
        display: flex;
        margin-bottom: 20px;

        .avatar {
            height: auto;
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

    .images-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px 0 10px;

        .image-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90%;

            .image-content {
                object-fit: fill;
                max-height: 70vh;
                max-width: 100%;
            }
        }

        .prev-btn {
            position: absolute;
            left: 10px;
            top: 50%;
        }

        .next-btn {
            position: absolute;
            right: 10px;
            top: 50%;
        }
    }
}
</style>