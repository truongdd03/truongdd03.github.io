<template>
    <div :class="`tag-wrapper ${wrapperClass}`">
        <p :class="`ss bold ${textClass}`">{{tag}}</p>
    </div>
</template>

<script setup lang="ts">
import { tagColor } from './Post';

const props = defineProps({
    tag: String,
    selected: Boolean
});

const color = tagColor[props.tag!];
const wrapperClass = props.selected ? `bg${color}` : `bd${color}`;
const textClass = props.selected ? 'white' : color;

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