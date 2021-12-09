import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedMovie,
  removeSelectedMovie,
} from "../redux/actions/movieActions";
import "./Pages.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const MovieDetail = () => {
  const detailMovie = useSelector((state) => state.movie.data);
  const { movieid } = useParams();
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=2fccde01a371b106b09a241d6d1d5b49`
      );
      dispatch(selectedMovie(response));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (movieid && movieid !== "") {
      fetchMovies();
    }
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [movieid]);
  return (
    <div className="content-wrapper">
      <Container>
        {detailMovie === undefined ? (
          <div>Loading</div>
        ) : (
          <div className="main-content">
            <Row>
              <Col>
                <h1>{detailMovie.original_title}</h1>
                <p>
                  {detailMovie.release_date} | {detailMovie.runtime} Minutes
                </p>
              </Col>
              <Col className="right-side">
                <b>Rating</b>
                <p>{detailMovie.vote_average}/10</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${detailMovie.poster_path}`}
                  alt=""
                />
              </Col>
              <Col sm={7}>
                <div className="genre-display">
                  <b>Genre:</b>
                  {detailMovie.genres.map((item) => {
                    return (
                      <button className="genre-button">{item.name}</button>
                    );
                  })}
                </div>
                <p>{detailMovie.overview}</p>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MovieDetail;
