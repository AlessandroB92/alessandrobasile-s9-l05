import React from "react";
import { Row } from "react-bootstrap";
import StarWars from "./StarWars";
import HarryPotter from "./HarryPotter";
import Avengers from "./Avengers";

const MainPage = () => {
  return (
    <>
      <Row>
        <Avengers />
      </Row>
      <Row>
        <HarryPotter />
      </Row>
      <Row>
        <StarWars />
      </Row>
    </>
  );
};

export default MainPage;
