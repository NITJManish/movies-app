import React from 'react'
// import {movie} from '../reducer';
import { addFovourite,removeFromFovourites } from '../actions';
class MovieCart extends React.Component {

 handleFavouriteClick=()=>{
  const {movie}=this.props;
  this.props.dispatch(addFovourite(movie));
}
handleUnFavouriteClick=()=>{
  const {movie}=this.props;
  this.props.dispatch(removeFromFovourites(movie));
}
  render(){
    const {movie,isFavourite} =this.props;
    return (
      <div className='movie-card'>
        <div className='left'>
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className='right'>
          <div className='title'>{movie.Title}</div>
          <div className='plot'>{movie.Plot}</div>
          <div className='footer'>
              <div className='rating'>{movie.imdbRating}</div>
              {
                isFavourite
                ? <button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>UnFavorite</button>
                : <button className='favourite-btn' onClick={this.handleFavouriteClick}>Favorite</button>
              
              }
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCart
