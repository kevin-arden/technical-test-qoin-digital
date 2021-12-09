import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const GenreComponent = () => {
  const genres = useSelector((state) => state.allGenres.genre);
  console.log(genres);
  const renderList = genres.map((genre, index) => {
    const { name, id } = genre;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Id</th>
            <th>Genre</th>
          </tr>
          {renderList}
        </thead>
      </Table>
    </>
  );
};

export default GenreComponent;
