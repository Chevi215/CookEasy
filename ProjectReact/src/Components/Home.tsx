import React from "react";
import { Link } from "react-router-dom"; // ליבוא הקישורים
import "../Designs/SignUp.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          className="cake-images"
          src="https://source.unsplash.com/1600x900/?cake"
          alt="cake"
        />
      </div>

      <div className="buttons-container">
        <h2>Welcome to Cook Easy!🎂</h2>

        <Link to="/login" className="link-button">
          <button className="custom-button primary">Login</button>
        </Link>

        <Link to="/myrecipes" className="link-button">
          <button className="custom-button secondary">My Recipes</button>
        </Link>

        <Link to="/AllRecipes" className="link-button">
          <button className="custom-button success">All Recipes</button>
        </Link>

        <Link to="/Login" className="link-button">
          <button className="custom-button error">LogOut</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;