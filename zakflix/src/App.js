import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import { Home,Details } from './routes'
import { Header, Spinner } from './components';
import { API_URL,API_KEY,IMAGE_BASE_URL,BACKDROP_SIZE} from './components/config'

import './App.css';



class App extends Component {
  state ={
    loading :true,
    movies: [],
    badge: 0,
    image: null,
    mTitle: "",
    mDescription: "",
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
        <BrowserRouter>
              <div className="App">
          <Header badge={this.state.badge} />
          {!this.state.image ?
            (
              <Spinner />
            ):
            (
                <Switch>
            <Route path="/" exact render={() => (
              <Home 
                        {...this.state}
                        onSearchClick={this.handleSearch}
                        onButtonClick={this.loadMore}
                      />
            )}
          /> 
            <Route path="/:id" exact component={Details}/>  
          </Switch>
            )}
        
        
          </div>
        </BrowserRouter>

  );
  }

}

export default App;
