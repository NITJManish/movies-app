import {data} from '../data';
import Navbar from './Navbar';
import MovieCart from './MovieCart';
function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favorite</div>
      </div>
      <div className="list">
        {data.map(movie =>(
          <MovieCart movie={movie}/>
        ))}
      </div>
     </div>
    </div>
  );
}

export default App;