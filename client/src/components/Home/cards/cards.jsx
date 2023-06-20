import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actions";

const Cards = (props) => {
  const dogs = useSelector((state) => state.dogs);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const dispatch = useDispatch();

  const totalDogs = dogs.length;
  const totalPages = Math.ceil(totalDogs / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const dogsPage = dogs.slice(start, end);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="container_cards">
      <div className="cards">
        {dogsPage.map((dog) => (
          <Link key={dog.id} to={`/detail/${dog.id}`}>
            <Card
              name={dog.name}
              url={dog.image}
              temperament={dog.temperament}
            />
          </Link>
        ))}
      </div>
      <div className="pagination">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cards;
