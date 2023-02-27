import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import React from 'react';
import { addMovies, setShowFovourites } from '../actions';
class App extends React.Component {

componentDidMount(){
  const {store}=this.props;
  store.subscribe(()=>{
    console.log('UPDATED');
    this.forceUpdate();
  });
  //make api call
//dispatch action
store.dispatch(addMovies(data));
}

isMovieFavourite=(movie)=>{
  const {favourites}=this.props.store.getState();
  const index=favourites.indexOf(movie);
  if(index !==-1)
  {
    return true;
  }
  return false;
}
onChangeTab=(val)=>{
  this.props.store.dispatch(setShowFovourites(val));
}


  render(){
    const {list,favourites,showFavourites}=this.props.store.getState();
    console.log("RENDER");
    const displayMovies=showFavourites ? favourites : list;
    return (
      <div className="App">
       <Navbar />
       <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favorite</div>
        </div>
        <div className="list">
          {displayMovies.map((movie,index) =>(
            <MovieCart 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
        {displayMovies.length===0 ? <div className='no-movies'>No movie to display!</div>:null}
       </div>
      </div>
    );
  }
  
}

export default App;
