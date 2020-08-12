import {ADD_MOVIE,REMOVE_MOVIE,GET_MOVIE,GET_NUMBER } from './index';

export const addMovie = movie => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if(movies){
        movies = [...movies,movie];
    }else{
        movies = [];
        movies.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(movies));
    return {
        type: ADD_MOVIE,
        payload:movies
    }

}