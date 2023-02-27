// import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
import React from 'react';
class App extends React.Component {

componentDidMount(){
  const {store}=this.props;
  store.subscribe(()=>{
    console.log('UPDATED');
    this.forceUpdate();
  });
  //make api call
//dispatch action
store.dispatch({
  type:'ADD_MOVIES',
  movies:data
});
}

  render(){
    const movies=this.props.store.getState();
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
          {data.map((movie,index) =>(
            <MovieCart movie={movie} key={`movies-${index}`}/>
          ))}
        </div>
       </div>
      </div>
    );
  }
  
}

export default App;
