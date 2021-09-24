import '../styles/Movie.css';
function Movie(props) {
    return (<div className="movie" key={`${new Date().getTime}`}>
        <img src={"http://image.tmdb.org/t/p/w500" + props.image_path} alt="Movie"></img>
    </div>
    );
}
export default Movie;
