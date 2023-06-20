import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const [form, setForm] = useState({
    name: "",
    picture: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    lifespan: "",
    temperament: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSutmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/dogs", form).then((res) => {
      alert(res.data);
    });
  };

  const tempers = useSelector((state) => state.temper);
  return (
    <>
      <div className="overlay "></div>
      <div className={`form-popup ${isClosing ? "closing" : ""}`}>
        <form className="form" onSubmit={handleSutmit}>
          <div className="boton_cerrar_prueba">
            <button
              type="button"
              className="form-close-button"
              onClick={handleClose}
            >
              X
            </button>
          </div>

          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            placeholder="Snoopy."
            value={form.name}
            onChange={handleInputChange}
          />

          <label htmlFor="picture" className="form-label">
            Picture:
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            className="form-input"
            required
            placeholder="Picture URL"
            value={form.picture}
            onChange={handleInputChange}
          />

          <label htmlFor="minHeight" className="form-label">
            Minimum Height:
          </label>
          <input
            type="number"
            id="minHeight"
            name="minHeight"
            className="form-input"
            required
            placeholder="20"
            value={form.minHeight}
            onChange={handleInputChange}
          />

          <label htmlFor="maxHeight" className="form-label">
            Maximum Height:
          </label>
          <input
            type="number"
            id="maxHeight"
            name="maxHeight"
            className="form-input"
            required
            placeholder="50"
            value={form.maxHeight}
            onChange={handleInputChange}
          />

          <label htmlFor="minWeight" className="form-label">
            Minimum Weight:
          </label>
          <input
            type="number"
            id="minWeight"
            name="minWeight"
            className="form-input"
            required
            placeholder="15"
            value={form.minWeight}
            onChange={handleInputChange}
          />

          <label htmlFor="maxWeight" className="form-label">
            Maximum Weight:
          </label>
          <input
            type="number"
            id="maxWeight"
            name="maxWeight"
            className="form-input"
            required
            placeholder="35"
            value={form.maxWeight}
            onChange={handleInputChange}
          />

          <label htmlFor="lifespan" className="form-label">
            Lifespan:
          </label>
          <input
            type="text"
            id="lifespan"
            name="lifespan"
            className="form-input"
            required
            placeholder="0-15 years"
            value={form.lifespan}
            onChange={handleInputChange}
          />

          <label htmlFor="temperaments" className="form-label">
            Temperaments:
          </label>
          <select
            className="form-select"
            name="temperament"
            value={form.temperament}
            onChange={handleInputChange}
          >
            {tempers.map((temp) => (
              <option key={temp.id} value={temp.id}>
                {temp.name}
              </option>
            ))}
          </select>

          <div className="pruebasutmit">
            <button type="submit" className="form-button">
              Create New Breed
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
