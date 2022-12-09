import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg" className="card-img" alt="Background" height="450px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container ">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE NEW TECHNOLOGIES/CLOTHES AND MORE
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};
export default Home;
