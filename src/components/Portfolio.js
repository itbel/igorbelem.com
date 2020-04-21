import React from "react";
import Project from "./Project";
import { Row } from "react-bootstrap";
import chatapp from "./media/chatApp.png";

const Portfolio = () => {
  const imageText1 = "Message 1";
  const imageText2 = "Message 2";
  const imageText3 = "Message 3";
  const imageLabel1 = "Label 1";
  const imageLabel2 = "Label 2";
  const imageLabel3 = "Label 3";

  return (
    <div className="port">
      <h1>My Projects:</h1>
      <Row className="w-100" style={{ marginRight: "0px", marginLeft: "0px" }}>
        <Project
          name={"React Chat Application"}
          description={"Chat Application with MERN Stack and Socket.IO"}
          img1={chatapp}
          img2={chatapp}
          img3={chatapp}
          imageText1={imageText1}
          imageText2={imageText2}
          imageText3={imageText3}
          imageLabel1={imageLabel1}
          imageLabel2={imageLabel2}
          imageLabel3={imageLabel3}
        ></Project>

        <Project
          name={"swapiFetcher"}
          description={
            "React, Node/Express Application for data fetching from SWAPI"
          }
          img1={chatapp}
          img2={chatapp}
          img3={chatapp}
          imageText1={imageText1}
          imageText2={imageText2}
          imageText3={imageText3}
          imageLabel1={imageLabel1}
          imageLabel2={imageLabel2}
          imageLabel3={imageLabel3}
        ></Project>

        <Project
          name={"footGuess"}
          description={
            "Soccer Guessing Tournaments Application using MERN Stack"
          }
          img1={chatapp}
          img2={chatapp}
          img3={chatapp}
          imageText1={imageText1}
          imageText2={imageText2}
          imageText3={imageText3}
          imageLabel1={imageLabel1}
          imageLabel2={imageLabel2}
          imageLabel3={imageLabel3}
        ></Project>
      </Row>
    </div>
  );
};

export default Portfolio;
