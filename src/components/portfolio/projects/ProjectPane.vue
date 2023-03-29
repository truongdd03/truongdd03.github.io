<template>
    <a class="project-link" :href="project.url" target="_blank">
        <div class="project-wrapper">
            <div class="image-wrapper">
                <img class="image" :src="project.image ? project.image : Github" />
            </div>
            <div class="information-wrapper">
                <h1 class="green" style="font-size: 18px;">{{project.name}}</h1>
                <Markdown :html="true" class="subtitle" :source="project.subtitle" />
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import Markdown from 'vue3-markdown-it';
import Github from '/assets/images/projects/github.png';

defineProps({
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
        width: 100%;
        height: 100%;
        opacity: 0.8;
        border-radius: 20px;
        vertical-align: top;
        cursor: pointer;
        background-color: black;
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
