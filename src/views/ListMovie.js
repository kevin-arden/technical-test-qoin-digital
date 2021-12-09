import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieComponent from "../components/MovieComponent";
import axios from "axios";
import { setMovies } from "../redux/actions/movieActions";
import { Pagination } from "react-bootstrap";
import "./Pages.css";
const ListMovie = () => {
  const movies = useSelector((state) => state);
  const disptach = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${pageNumber}`
      );
      disptach(setMovies(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [pageNumber]);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === pageNumber}
        onClick={() => setPageNumber(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="content-wrapper">
      <div className="main-content">
        <h3>List Movie</h3>
        {movies.allMovies.movies.length === 0 ? (
          <p>Loading</p>
        ) : (
          <>
            <MovieComponent />
            <Pagination>{items}</Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default ListMovie;
