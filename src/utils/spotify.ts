import querystring from 'querystring';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    return response.json();
};

const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

const getNowPlayingItem = async () => {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    try {
        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;
    
        return {
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        };
    } catch (err: any) {
        return false;
    }
}

const updateSpotifyStatus = async () => {
    const status = await getNowPlayingItem();
    console.log(status);
    if (!status) {
        console.log('lll');
        document.getElementById('spotify-status')!.style.display = 'none';
        return;
    }
    document.getElementById('spotify-status')!.style.display = 'block';
    document.getElementById('spotify-artist')!.innerText = status.artist;
    document.getElementById('spotify-song')!.innerText = status.title;
    (document.getElementById('spotify-image')! as HTMLImageElement).src = status.albumImageUrl;
    (document.getElementById('spotify-song-url') as HTMLLinkElement).href = status.songUrl;
}

export const initSpotifyListener = () => {
    setInterval(() => {
        updateSpotifyStatus();
      }, 5000);
}
