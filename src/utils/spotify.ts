import querystring from 'querystring';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refreshToken = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refreshToken,
        }),
    });

    return response.json();
};

const getNowPlaying = async () => {
    // eslint-disable-next-line camelcase
    const { access_token } = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            // eslint-disable-next-line camelcase
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getNowPlayingItem = async () => {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    try {
        const song = await response.json();
        const albumImageUrl = song.item.album.images[0].url;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const artistName = song.item.artists.map((artist: any) => artist.name).join(', ');
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;

        return {
            albumImageUrl,
            artistName,
            isPlaying,
            songUrl,
            title,
        };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return false;
    }
};