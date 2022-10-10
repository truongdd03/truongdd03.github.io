<template>
    <a class="project-link" :href="project.url" target="_blank">
        <div class="project-wrapper">
            <div class="image-wrapper">
                <img class="image" :src="project.image ? project.image : Github" />
            </div>
            <div class="information-wrapper">
                <h1 class="m green">{{project.name}}</h1>
                <p class="s subtitle">{{project.subtitle}}</p>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import Github from '../../assets/projects/github.png';

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

    .project-wrapper {
        background-color: black;
        width: calc(18vw + 60px);
        height: calc(1vh + 20vw + 100px);
        display: inline-block;
        vertical-align: top;
        margin: 20px 20px 20px 20px;
        cursor: pointer;

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
            }
        }
    }
}
</style>
