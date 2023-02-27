//pure javascript object

// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }
// {
//     type:'decreament_count'
// }
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';


//action creators
export function addMovies(movies)
{
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addFovourite(movie)
{
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFovourites(movie)
{
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}