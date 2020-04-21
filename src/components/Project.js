import React, { useState, useEffect } from "react";
import { Card, Button, Carousel } from "react-bootstrap";
const Project = (props) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [imgText1, setimgText1] = useState();
  const [imgText2, setimgText2] = useState();
  const [imgText3, setimgText3] = useState();
  const [imgLabel1, setimgLabel1] = useState();
  const [imgLabel2, setimgLabel2] = useState();
  const [imgLabel3, setimgLabel3] = useState();

  useEffect(() => {
    setName(props.name);
    setDescription(props.description);
    setimgText1(props.imageText1);
    setimgText2(props.imageText2);
    setimgText3(props.imageText3);

    setimgLabel1(props.imageLabel1);
    setimgLabel2(props.imageLabel2);
    setimgLabel3(props.imageLabel3);
  }, []);
  return (
    <Card
      style={{
        width: "36rem",
        backgroundColor: "rgb(24, 26, 27)",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img1} alt="First slide" />
          <Carousel.Caption>
            <h3>{imgLabel1}</h3>
            <p>{imgText1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img1} alt="Third slide" />

          <Carousel.Caption>
            <h3>{imgLabel2}</h3>
            <p>{imgText2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={props.img1} alt="Third slide" />

          <Carousel.Caption>
            <h3>{imgLabel3}</h3>
            <p>{imgText3}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="secondary">View Code</Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
