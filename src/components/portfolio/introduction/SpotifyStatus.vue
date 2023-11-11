<template>
    <div v-if="playingSong" id="spotify-status" class="p-2 border-round" style="background-color: rgba(0, 0, 0, 0.486);">
        <div class="flex align-items-center justify-content-center mb-3">
            <img class="m-2" style="height: 30px;" src="/assets/images/gifs/shiba-listen-music.gif" />
            <p class="text-md text-center">Listening to Spotify</p>
            <img class="m-2" style="height: 30px;" src="/assets/images/gifs/shiba-listen-music.gif" />
        </div>
        <div id="spotify-song-url" class="grid border-primary border-1 border-round surface-ground cursor-pointer"
            @click="openUrl(playingSong.songUrl)" style="height: 80px;">
            <div class="col-3 h-full">
                <img id="spotify-image" class="h-full" style="border-radius: 5px; object-fit: cover;"
                    :src="playingSong.imageUrl" />
            </div>
            <div class="col-8 flex align-items-center h-full">
                <div>
                    <p id="spotify-song" class="text-lg text-white mb-1">{{ playingSong.title }}</p>
                    <p id="spotify-artist" class="text-300 text-sm">{{ playingSong.artist }}</p>
                </div>
            </div>
            <div class="col-1 h-full">
                <div class="playing-icon">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getNowPlayingItem } from '@/utils/spotify';
import { openUrl } from '@/utils/navigate';
import { onMounted, ref, type Ref } from 'vue';

const playingSong: Ref<{ artist: string, title: string, imageUrl: string, songUrl: string } | null> = ref(null);

const updateSpotifyStatus = async () => {
    const status = await getNowPlayingItem();
    if (!status || status.isPlaying === false) {
        playingSong.value = null;
    } else {
        playingSong.value = {
            artist: status.artist,
            title: status.title,
            imageUrl: status.albumImageUrl,
            songUrl: status.songUrl
        };
    }
};

onMounted(() => {
    setInterval(() => {
        updateSpotifyStatus();
    }, 5000);
});
</script>

<style lang="scss" scoped>
.playing-icon {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;

    span {
        width: 4px;
        height: 13px;
        background-color: hsla(160, 100%, 37%, 1);
        border-radius: 3px;
        transform-origin: bottom;
        animation: bounce 2.2s ease infinite alternate;
        content: '';

        &:nth-of-type(2) {
            animation-delay: -1.2s;
        }

        &:nth-of-type(3) {
            animation-delay: -1.7s;
        }
    }
}

@keyframes bounce {
    10% {
        transform: scaleY(0.3);
    }

    30% {
        transform: scaleY(0.7);
    }

    60% {
        transform: scaleY(0.5);
    }

    80% {
        transform: scaleY(0.75);
    }

    100% {
        transform: scaleY(0.6);
    }
}
</style>
