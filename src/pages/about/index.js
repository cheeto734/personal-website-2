// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import { dataabout, meta, skills, languages } from "../../content_option";
import Themetoggle from "../../components/themetoggle";
import "./style.css";

export const About = () => {
    return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Themetoggle /> {/* Add the theme toggle here */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.aboutme2}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Languages</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {languages.map((languages, i) => (
              <div key={i}>
                <Card className="skill-card">
                  <Card.Body>
                    <h3 className="card-title">{languages.name}</h3>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skills, i) => (
              <div key={i}>
                <Card className="skill-card">
                  <Card.Body>
                    <h3 className="card-title">{skills.name}</h3>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

ReactDOM.render(<About />, document.getElementById("root"));
