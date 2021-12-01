class MediaPlayer {

    media: HTMLVideoElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }

    togglePlay() {
        if (this.media.paused)
            return this.media.play();
        this.media.pause();
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    toggleMuted() {
        if (this.media.muted)
            return this.media.muted = false;
        this.media.muted = true;
    }
    
    private initPlugins() {

        const player = {
            togglePlay: () => this.togglePlay(),
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };

        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
};








export default MediaPlayer;