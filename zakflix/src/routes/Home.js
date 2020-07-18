import React,{ Component } from 'react';
import { HeaderImg, Searchbar, PosterList, LoadButton} from '../components';

const movies = [
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
  ];
class Home extends Component{
    render(){
        return(
            <div>
                <HeaderImg
                    title="Fast and Furious"
                    overview="La nuit tombée, Dominic Toretto règne sur les rues de Los Angeles à la tête d'une équipe 
                    de fidèles qui partagent son goût du risque, sa passion de la vitesse et son culte des voitures de sport
                     lancées à plus de 250 km/h dans des rodéos urbains d'une rare violence. Ses journées sont consacrées à bricoler 
                     et à relooker des modèles haut de gamme, à les rendre toujours plus performants et plus voyants, et à organiser
                      des joutes illicites."
                    imgSrc={'./images/Fast_large.jpg'}
                />
                <Searchbar />
                <PosterList movies={ movies } />
                <LoadButton loading={false}/>
                 </div>
        )
    }
}

export { Home };