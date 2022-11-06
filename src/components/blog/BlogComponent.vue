<template>
    <div
        :class="`blog-wrapper ${isHovering ? 'hovering' : ''}`"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
    >
        <div :class="`blog-title-wrapper`">
            <h1 class="l blog-title">{{ title }}</h1>
            <h1 class="m blog-status">{{ status }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    title: String,
    status: String
});

let isHovering = ref(false);
</script>

<style lang="scss" scoped>
.blog-wrapper {
    width: calc(60vw + 80px);
    background-color: black;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    padding: 30px;

    .blog-title-wrapper {
        text-align: left;

        .blog-title {
            color: white;
            float: left;
        }

        .blog-status {
            color: yellow;
            float: right;
        }
    }
}

.hovering {
    width: calc(62vw + 90px);
}

@media screen and (max-width: 768px) {
    .blog-wrapper {
        .blog-title-wrapper {
            .blog-title {
                color: white;
                float: none;
            }

            .blog-status {
                float: none;
            }
        }
    }
}
</style>