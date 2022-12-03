<template>
    <div :class="`tag-wrapper bg${tagColor[tag!]}`">
        <p :class="`ss white bold`">{{tag}}</p>
    </div>
</template>

<script setup lang="ts">
import { tagColor } from './Post';

const props = defineProps({
    tag: String
});

</script>

<style lang="scss" scoped>
.tag-wrapper {
    width: auto;
    margin: 0 5px 0 5px;
    padding: 0 10px 0 10px;
    border-radius: 10px;
    cursor: pointer;
}
</style>