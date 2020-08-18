import React, {Component } from 'react';

import { VideoPlayer,MvPlayerList} from '../components/';
import '../css/MoviePlayer.css';
const selectedMovie = {
    duration: "2h 9m",
    id: 429617,
    imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    position: 1,
    title: "Spider-Man : Far from home",
    videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
}
const movies =[
    {
        duration: "2h 9m",
        id: 429617,
        imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        position: 1,
        title: "Spider-Man : Far from home",
        videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    },
    {
        duration: "2h 9m",
        id: 429618,
        imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        position: 2,
        title: "Spider-Man : Far from home",
        videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    },
    {
        duration: "2h 9m",
        id: 429619,
        imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        position: 3,
        title: "Spider-Man : Far from home",
        videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    },
    {
        duration: "2h 9m",
        id: 429610,
        imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        position: 4,
        title: "Spider-Man : Far from home",
        videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    },
    {
        duration: "2h 9m",
        id: 429611,
        imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        position: 5,
        title: "Spider-Man : Far from home",
        videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    },
]
class MoviePlayer extends Component {
    render(){
        return(
            <div className="moviePlayer">
                <VideoPlayer 
                    videoUrl={selectedMovie.videoUrl}
                    imageUrl={selectedMovie.imageUrl}
                />
                <MvPlayerList 
                    movies={movies}
                    selectedMovie={selectedMovie}
                />
            </div>
        )
    }
}

export { MoviePlayer};