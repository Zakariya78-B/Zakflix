import {ADD_MOVIE,REMOVE_MOVIE,GET_MOVIE,GET_NUMBER } from './actions';

const initialState = {
    movies : [],
    number: 0
}
export const movieReducer = (state,action) => {
    switch(action,type){
        case ADD_MOVIE:
            return {
                movies: action.payload,
                number: action.payload.length
            }
        case REMOVE_MOVIE:
            return {
                movies: action.payload,
                number: state.number - 1
            }
        case GET_MOVIE:
            return{
                ...state,
                movies: action.payload
            }
        case GET_NUMBER:
            return{
                ...state,
                number: action.payload
            }
        default:
            return state;
    }
    return state;
}

