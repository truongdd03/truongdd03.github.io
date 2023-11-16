<template>
    <img id="avatar" alt="Don Truong" draggable="false" :src="human" />
</template>

<script setup lang="ts">
import human from '/assets/images/avatar/don-cool.jpeg';
</script>

<style scoped>
#avatar {
    border-radius: 50%;
    border: 3px solid var(--primary-color);
    width: 180px;
}
</style>