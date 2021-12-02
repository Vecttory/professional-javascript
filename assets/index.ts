import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('button');
const muteButton: HTMLElement = document.getElementById('muteButton');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });
button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator) {
    console.log('service worker found!!!!');
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}