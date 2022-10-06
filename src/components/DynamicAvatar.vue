<template>
    <header>
      <img
		id="avatar"
		class="center"
        draggable="false"
		@mouseover="onHover()"
		@mouseleave="onLeave()"
		:src="human"
		/>
    </header>
</template>

<script setup lang="ts">
import human from "../../public/avatar.jpeg";
import shiba from "../../public/avatar-hover.png";

const onHover = () => {
	(document.getElementById('avatar') as any).src = shiba;
}

const onLeave = () => {
	(document.getElementById('avatar') as any).src = human;
}
</script>

<style scoped>
#avatar {
    width: auto;
    height: 200px;
    border-radius: 50%;
}
</style>