import React from "react";
import logo from "../../../img/undraw_dog_c7i6.svg";
import "./navBar.css";
import SearchBar from "../../searchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="container_Navbar">
      <div className="logos">
        <img src={logo} alt="" />
        <h2>Dog SPA</h2>
      </div>

      <SearchBar />
    </div>
  );
};

export default NavBar;
