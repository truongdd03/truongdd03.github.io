<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Post } from './Post';

const imageIndex = ref(0);

const props = defineProps({
    post: Post,
});

const updateImageIndex = (val: number) => {
    imageIndex.value += val;
}

const getImageUrl = () => {
    return new URL(props.post!.imageUrls[imageIndex.value], import.meta.url).href;
}
</script>

<style lang="scss" scoped>
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
</style>