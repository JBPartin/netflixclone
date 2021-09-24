import Movie from './Movie';
import Carousel from '@jbpartin/react-carousel';
import '@jbpartin/react-carousel/dist/index.css'
import '../styles/Trending.css'
function Trending(props) {
    return (
        <div key="trending-container" className="trending">
            <Carousel>
                {props.movies.slice(0, 10).map(movie => {
                    return <Movie movie={movie} key={movie.id} image_path={movie.poster_path} />;
                })}
            </Carousel>
        </div>
    );
}
export default Trending;
