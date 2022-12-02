<template>
    <div class="post-wrapper black-background wxxxl">
        <div class="heading">
            <img class="wxm avatar clickable" src="/assets/images/avatar/don-cool.jpeg" @click="redirectToHome()" />
            <div class="header-text-wrapper">
                <p class="s green clickable" @click="redirectToHome()">Don Truong</p>
                <p class="ss">{{                                             post?.date                                             }}</p>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="description-wrapper">
                <Markdown :html="true" :typographer="true" class="s description white" :source="post?.content" />
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

    .content-wrapper {
        margin: 20px 10px 0 10px;
        .description {
            text-align: left;
        }

        .images-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;

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
}
</style>