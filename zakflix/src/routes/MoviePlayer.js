import React, {Component } from 'react';

import { VideoPlayer,MvPlayerList,Spinner} from '../components/';
import '../css/MoviePlayer.css';

class MoviePlayer extends Component {
    state = {
        movies: [
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
            }],
        selectedMovie: {
                    duration: "2h 9m",
                    id: 429617,
                    imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
                    position: 1,
                    title: "Spider-Man : Far from home",
                    videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
             },
        loading:false        
    }
    handeleEnded = () =>{
        console.log('video ended');
    }
    render(){
        const { movies, selectedMovie } = this.state;

        return(
            <div className="moviePlayer">
            {this.state.loading ? 
            (
                <Spinner />
            ): (
                <>
                 <VideoPlayer 
                    videoUrl={selectedMovie.videoUrl}
                    imageUrl={selectedMovie.imageUrl}
                    handeleEnded={this.handeleEnded}
                />
                <MvPlayerList 
                    movies={movies}
                    selectedMovie={selectedMovie}
                />
                </>
            )}
               
            </div>
        )
    }
}

export { MoviePlayer};