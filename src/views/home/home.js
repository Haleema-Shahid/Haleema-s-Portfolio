import React from "react";
import "./home.css";
import Menu from "../menu-panel/menu";
const Home = () => {
  return (
    <div className="main-div display-flex">
      <div className="partition-div display-flex flex-row bg-blue">
        <div className="left-div">
          <Menu/>
        </div>
        <div className="right-div">
          <div className="height-full-vh">
          </div>
          <div className="height-full-vh">
          </div>
          <div className="height-full-vh">
          </div>
          <div className="height-full-vh">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
