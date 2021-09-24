import '../styles/Genre.css';
import Movie from './Movie';
import Carousel from '@jbpartin/react-carousel';
import '@jbpartin/react-carousel/dist/index.css'
function Genre(props) {
    return (
        <div key={`${props.genre}_container`} className="genre">
            <h1>{props.genreName}</h1>
            <Carousel>
                {props.movies.filter(movie => movie.genre_ids.includes(props.genre)).slice(0, 18).map(movie => {
                    return <Movie movie={movie} key={`${props.genre}_${movie.id}`} image_path={movie.backdrop_path} />;
                }
                )}
            </Carousel>
        </div>
    );
}
export default Genre;
