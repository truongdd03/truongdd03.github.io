<template>
    <div class="post-wrapper bgblack">
        <div class="heading">
            <div class="info-wrapper">
                <img class="wxm avatar clickable" src="/assets/images/avatar/don-cool.jpeg" @click="redirectToHome()" />
                <div class="header-text-wrapper">
                    <p class="s green clickable" @click="redirectToHome()">Don Truong</p>
                    <p class="ss">{{ post?.date }}</p>
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
            <div class="images-wrapper bggrey" v-if="(post && post.imageUrls.length !== 0)">
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
                <div class="dots-wrapper" v-if="(post.imageUrls.length > 1)">
                    <span v-for="image in post.imageUrls" v-bind:key="image"
                        :class="`dot ${image === post.imageUrls[imageIndex] ? 'bgwhite' : 'bggrey'}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import Markdown from 'vue3-markdown-it';
import { Post } from './Post';
import TagView from './TagView.vue';

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

        .images-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;

            .image-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(60, 60, 60, 0.66);

                .image-content {
                    object-fit: contain;
                    max-height: 70vh;
                    width: 100%;
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

            .dots-wrapper {
                position: absolute;
                display: flex;
                align-items: center;
                width: auto;
                bottom: 10px;

                .dot {
                    width: 5px;
                    height: 5px;
                    margin: 2px;
                    border-radius: 50%;
                    content: '';
                }
            }
        }
    }
}
</style>