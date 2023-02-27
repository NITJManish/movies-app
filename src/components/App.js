import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import React from 'react';
import { addMovies } from '../actions';
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
  render(){
    const {list}=this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App">
       <Navbar />
       <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorite</div>
        </div>
        <div className="list">
          {list.map((movie,index) =>(
            <MovieCart 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
       </div>
      </div>
    );
  }
  
}

export default App;
