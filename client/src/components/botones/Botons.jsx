import React, { useState } from "react";
import "./botons.css";
import Form from "../form/Form";
import { useSelector } from "react-redux";
const Botons = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  const tempers = useSelector((state) => state.temper);

  return (
    <div className="container_botones">
      <div className="filter_temp">
        <label className="filter-label">Filter by temperaments:</label>
        <select className="filter-select">
          <option value="">All</option>
          {tempers.map((temp) => (
            <option key={temp.id} value={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter_where">
        <label className="filter-label">Filter by origin:</label>
        <select className="filter-select">
          <option value="">All</option>
          <option value="api">API</option>
          <option value="database">Database</option>
        </select>
      </div>

      <div className="filter_order">
        <label className="filter-label">Sort by:</label>
        <select className="filter-select">
          <option value="name-asc">Name (ascending)</option>
          <option value="name-desc">Name (descending)</option>
          <option value="weight-asc">Weight (ascending)</option>
          <option value="weight-desc">Weight (descending)</option>
        </select>
      </div>

      <div className="create">
        <button className="boton_create" onClick={openForm}>
          Create Dog
        </button>
        {isFormOpen && (
          <div className="form-popup">
            <div className="form-content">
              <Form onClose={closeForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Botons;
