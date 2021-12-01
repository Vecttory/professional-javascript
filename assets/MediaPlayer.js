function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) return this.media.play();
    this.media.pause();
}

MediaPlayer.prototype.play = function() {
    this.media.play();
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMuted = function() {
    if (this.media.muted) return this.media.muted = false;
    this.media.muted = true;
}

MediaPlayer.prototype._initPlugins = function() {

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
    }

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

export default MediaPlayer;