import React,{ Component } from 'react';
import { HeaderImg, Searchbar, PosterList, LoadButton} from '../components';


class Home extends Component{
    render(){
      const { mTitle, mDescription, image, movies, loading} = this.props;
        return(
            <div>
                <HeaderImg
                    title={mTitle}
                    overview={mDescription}
                    imgSrc={image}
                />
                <Searchbar onSearchClick={this.props.onSearchClick}/>
                <PosterList movies={ movies } />
                <LoadButton loading={loading}/>
                 </div>
        )
    }
}

export { Home };