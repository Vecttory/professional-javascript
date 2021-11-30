function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) return this.media.play();
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
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

export default MediaPlayer;