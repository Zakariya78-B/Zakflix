import React, { Component } from 'react';
import axios from 'axios';

import { Home } from './routes'
import { Header } from './components';
import { API_URL,API_KEY,IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from './components/config'

import './App.css';



class App extends Component {
  state ={
    loading :false,
    movies: [
      {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475557,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Joker"
      },
      {
          backdrop_path: "./images/Fast_large.jpg",
          id: 475558,
          overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
          poster_path: "./images/Fast_small.jpg",
          title: "Joker"
        },
        {
          backdrop_path: "./images/Fast_large.jpg",
          id: 475559,
          overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
          poster_path: "./images/Fast_small.jpg",
          title: "Joker"
        },
        {
          backdrop_path: "./images/Fast_large.jpg",
          id: 475550,
          overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
          poster_path: "./images/Fast_small.jpg",
          title: "Joker"
        },
    ],
    badge: 0,
    image: './images/Fast_large.jpg',
    mTitle: "Fast and Furious",
    mDescription: `La nuit tombée, Dominic Toretto règne sur les rues de Los Angeles à la tête d'une équipe 
    de fidèles qui partagent son goût du risque, sa passion de la vitesse et son culte des voitures de sport
     lancées à plus de 250 km/h dans des rodéos urbains d'une rare violence. Ses journées sont consacrées à bricoler 
     et à relooker des modèles haut de gamme, à les rendre toujours plus performants et plus voyants, et à organiser
      des joutes illicites.`,
    activePage: 0,
    totalPages: 0,
    searchText:""
    

  }
  async componentDidMount(){
      try {
        const { data : {results, page, total_Pages}} = await this.loadMovies();
        console.log('res',results);
        this.setState({
          movies: results,
          loading:false,
          activePage: page,
          totalPages:total_Pages,
          image:`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDescription: results[0].overview

        })
      }catch(e){
        console.log('e', e);
      }
  }
  searchMovie = () =>{
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`;
    return axios.get(url)
  }
  loadMovies = () =>{
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
    return axios.get(url)
  }
  handleSearch =  value => {
    try {
      this.setState({loading: true,searchText: value,image:null}, async () => {
              const { data : {results, page, total_Pages}} = await this.searchMovie();
      console.log('res',results);
      this.setState({
        movies: results,
        loading:false,
        activePage: page,
        totalPages:total_Pages,
        image:`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDescription: results[0].overview

      })
    })

    }catch(e){
      console.log('e', e);
    }
    console.log('handleSearch',value)
  }
  loadMore = async () => {

    try{
      this.setState({loading: true});
      const { data : {results, page, total_Pages}} = await this.loadMovies();
        console.log('res',results);
        this.setState({
          movies: [...this.state.movies,...results],
          loading:false,
          activePage: page,
          totalPages:total_Pages,
          image:`${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDescription: results[0].overview

        })
    }catch(e){
        console.log("erreur de loadmore" ,  e);
    }
    console.log('load More')
  }
  render(){
      return (
    <div className="App">
        <Header badge={this.state.badge} />
        <Home 
          {...this.state}
          onSearchClick={this.handleSearch}
          onButtonClick={this.loadMore}
        />
    </div>
  );
  }

}

export default App;
