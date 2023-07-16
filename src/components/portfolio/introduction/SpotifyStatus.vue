<template>
    <div class="spotify-status-wrapper" id="spotify-status">
        <div class="title-wrapper">
            <img class="wm" style="margin-right:10px;" src="/assets/images/gifs/shiba-listen-music.gif" />
            <p class="s green">Listening to Spotify</p>
            <img class="wm" style="margin-left:10px;" src="/assets/images/gifs/shiba-listen-music.gif" />
        </div>
        <a id="spotify-song-url" href="">
            <div class="song-wrapper">
                <img id="spotify-image" class="wxl" style="border-radius: 5px; object-fit: cover;"
                    src="https://i.scdn.co/image/ab67616d0000b2733846fa121fe826af4364df6e" />
                <div class="song-description">
                    <p id="spotify-song" class="s song-info white bold">Siêu phẩm tình ew</p>
                    <p id="spotify-artist" class="s song-info grey">MAI</p>
                </div>
                <div class="playing-icon">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.spotify-status-wrapper {
    display: none;
    width: 100%;
    padding: 10px 10px 20px 10px;
    background-color: rgba(84, 84, 84, 0.48);
    border-radius: 5px;

    .song-wrapper:hover {
        -webkit-box-shadow: 0 0 10px hsla(160, 100%, 37%, 1);
        box-shadow: 0 0 10px hsla(160, 100%, 37%, 1);
    }
    .song-wrapper {
        width: 100%;
        display: flex;
        margin-top: 20px;
        justify-content: center;
        padding: 1px 10px 1px 1px;
        border-radius: 5px;
        background-color: black;
        border: 1px solid hsla(160, 100%, 37%, 1);
        cursor: pointer;

        .song-description {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0 30px 0 10px;
            padding: 5px 0 5px 0;

            .song-info {
                text-align: left;
                width: 100%;
            }
        }

        .playing-icon {
            display: flex;
            align-items: center;
            margin-right: 10px;

            span {
                width: 3px;
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
    }
}

.icon-wrapper {
    width: 90%;
    position: absolute;
    bottom: 10%;
    text-align: center;

    .scroll-icon {
        cursor: pointer;
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
