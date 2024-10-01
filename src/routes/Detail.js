import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie.title);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <h1>{movie.title}</h1>}</div>;
}

export default Detail;
