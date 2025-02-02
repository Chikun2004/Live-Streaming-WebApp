document.addEventListener('DOMContentLoaded', () => {
    // Initialize video.js player
    const player = videojs('livestream', {
        techOrder: ['flash', 'html5'],
        autoplay: true,
        controls: true,
        sources: [{
            src: 'rtmp://localhost:1935/live/stream',
            type: 'rtmp/flv'
        }]
    });

    player.on('error', function() {
        const streamStatus = document.getElementById('streamStatus');
        streamStatus.textContent = 'Offline';
        streamStatus.style.color = 'red';
    });

    player.on('playing', function() {
        const streamStatus = document.getElementById('streamStatus');
        streamStatus.textContent = 'Online';
        streamStatus.style.color = 'green';
    });
});
