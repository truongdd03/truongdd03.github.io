<template>
    <a class="project-link" :href="project.url" target="_blank">
        <div class="project-wrapper">
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
import Github from '/assets/images/projects/github.png';

const props = defineProps({
    project: {
        type: Object,
        default: {},
    }
});

</script>

<style lang="scss" scoped>
.project-link {
    text-decoration: none;

    .project-wrapper:hover {
        opacity: 1;
        -webkit-box-shadow: 0 0 20px hsla(160, 100%, 37%, 1);
        box-shadow: 0 0 20px hsla(160, 100%, 37%, 1);
    }

    .project-wrapper {
        opacity: 0.8;
        width: calc(18vw + 60px);
        height: calc(1vh + 20vw + 100px);
        display: inline-block;
        vertical-align: top;
        margin: 20px 20px 20px 20px;
        cursor: pointer;
        background-color: black;
        border-radius: 20px;
        box-shadow: 100px;

        .image-wrapper {
            width: 100%;
            height: 60%;

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
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
