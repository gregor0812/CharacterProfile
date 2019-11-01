Amplitude.init({
    bindings: {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    debug: true,
    visualization: 'michaelbromley_visualization',
    songs: [
        {
            "name": "Risin' High (feat Raashan Ahmad)",
            "artist": "Ancient Astronauts",
            "album": "We Are to Answer",
            "url": "../assets/songs/Garlean Theme.mp3",
            "cover_art_url": "../assets/img/bird.jpg",
            "visualization": "frequency_analyzer_visualization"
        }]
        ,

    waveforms: {
        sample_rate: 50
    },

    visualizations: [
        {
            object: MichaelBromleyVisualization,
            params: {

            }
        },
        {
            object: FrequencyAnalyzerVisualization,
            params: {
                type: 'dynamic'
            }
        }
    ]
});

document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function(){
    if( this.classList.contains( 'visualization-off' ) ){
        this.classList.remove('visualization-off');
        this.classList.add('visualization-on');
        document.getElementById('large-now-playing-album-art').style.display = 'none';
        document.getElementById('large-visualization').style.display = 'block';
    }else{
        this.classList.remove('visualization-on');
        this.classList.add('visualization-off');
        document.getElementById('large-now-playing-album-art').style.display = 'block';
        document.getElementById('large-visualization').style.display = 'none';
    }
});


document.getElementsByClassName('arrow-up-icon')[0].addEventListener('click', function(){
    document.getElementById('visualizations-player-playlist').style.display = 'block';
});

document.getElementsByClassName('arrow-down-icon')[0].addEventListener('click', function(){
    document.getElementById('visualizations-player-playlist').style.display = 'none';
});
