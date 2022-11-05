<template>
    <header>
      <img
		id="avatar"
		class="hxxl center"
        alt="Don Truong"
        draggable="false"
		@mouseover="onHover()"
		@mouseleave="onLeave()"
		:src="human"
		/>
    </header>
</template>

<script setup lang="ts">
import human from '../../../assets/avatar/don-cool.jpeg';
import shiba from '../../../assets/avatar/shiba-cool.png';

const onHover = () => {
    (document.getElementById('avatar') as any).src = shiba;
}

const onLeave = () => {
    (document.getElementById('avatar') as any).src = human;
}
</script>

<style scoped>
#avatar {
    border-radius: 50%;
    border: calc(0.1vw + 3px) solid white;
}
</style>