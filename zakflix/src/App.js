import React, { Component } from 'react';
import { Home } from './routes'
import { Header } from './components';
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
  handleSearch = value => {
    console.log('handleSearch',value)
  }
  render(){
      return (
    <div className="App">
        <Header badge={this.state.badge} />
        <Home 
          {...this.state}
          onSearchClick={this.handleSearch}
        />
    </div>
  );
  }

}

export default App;
