import { Movie } from "./Movie"

function Movies(props){
  const {movies = [] } = props;

 return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => < Movie key={movie.imdbID} {...movie} />)
        ) : (
          <img src={require('../photos/3585596.png')} alt="#" className="img"/>
        )}
    </div>
  );
}

export { Movies }