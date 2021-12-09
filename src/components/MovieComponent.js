import React from "react";
import { useSelector } from "react-redux";
import { Table, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const MovieComponent = () => {
  const history = useNavigate();
  const movies = useSelector((state) => state.allMovies.movies);
  console.log(movies);
  const renderList = movies.results.map((movie, index) => {
    const {
      original_title,
      release_date,
      popularity,
      id,
      vote_average,
      vote_count,
    } = movie;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{original_title}</td>
        <td>{release_date}</td>
        <td>{popularity}</td>
        <td>{vote_average}</td>
        <td>{vote_count}</td>
        <td>
          <Button
            variant="primary"
            onClick={() => history(`/detailMovie/${id}`)}
          >
            Detail
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Popularity</th>
            <th>Vote Average</th>
            <th>Vote Count</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </Table>
    </>
  );
};

export default MovieComponent;
