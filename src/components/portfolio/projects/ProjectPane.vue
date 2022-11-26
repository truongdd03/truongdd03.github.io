<template>
    <a class="project-link" :href="project.url" target="_blank" @mouseover="isHovering = true"
        @mouseleave="isHovering = false">
        <div :class="`project-wrapper ${isHovering ? 'hovering' : ''}`">
            <div v-if="isHovering" class="hovering-wrapper">
                <font-awesome-icon class="xl redirect-icon" icon="fa-solid fa-up-right-from-square" />
            </div>
            <div class="image-wrapper">
                <img class="image" :src="project.image ? project.image : Github" />
            </div>
            <div class="information-wrapper">
                <h1 class="m green">{{project.name}}</h1>
                <Markdown :html="true" class="s subtitle" :source="project.subtitle" />
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Markdown from 'vue3-markdown-it';
import Github from '../../../../public/assets/images/projects/github.png';

const props = defineProps({
    project: {
        type: Object,
        default: {},
    }
});

let isHovering = ref(false);

</script>

<style lang="scss" scoped>
.project-link {
    text-decoration: none;

    .hovering {
        opacity: 0.3;
    }

    .hovering-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        z-index: 1;

        .redirect-icon {
            color: gray;
            top: 30%;
            -ms-transform: translateY(-30%);
            transform: translateY(-30%);
        }
    }

    .project-wrapper {
        width: calc(18vw + 60px);
        height: calc(1vh + 20vw + 100px);
        display: inline-block;
        vertical-align: top;
        margin: 20px 20px 20px 20px;
        cursor: pointer;
        background-color: black;

        .image-wrapper {
            width: 100%;
            height: 60%;

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .information-wrapper {
            width: 100%;
            height: 40%;

            .subtitle {
                color: white;
                padding: 5px;
            }
        }
    }
}
</style>
