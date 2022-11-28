import SpotifyWebApi from 'spotify-web-api-node';

var spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'http://www.example.com/callback'
});

(async () => {
    spotifyApi.setAccessToken(import.meta.env.VITE_SPOTIFY_API_KEY);
    console.log(await spotifyApi.getMyCurrentPlayingTrack());
})();
