import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setGenres } from "../redux/actions/genreActions";
import GenreComponent from "../components/GenreComponent";
import "./Pages.css";

const Genre = () => {
  const genres = useSelector((state) => state.allGenres.genre);
  const dispatch = useDispatch();

  const fetchGenre = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
      );
      dispatch(setGenres(response.data.genres));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="main-content">
        <h3>List Genre</h3>
        {genres.length === 0 ? <p>Loading</p> : <GenreComponent />}
      </div>
    </div>
  );
};

export default Genre;
