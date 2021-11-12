function MediaPlayer(config) {
    this.media = config.el;
};

MediaPlayer.prototype.playOrPause = function() {
    if (this.media.paused) return this.media.play();
    this.media.pause();
}

export default MediaPlayer;