import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import { skills, languages, meta } from "../../content_option";

export const Skills = () => {
  return (
    <HelmetProvider>
      <Container className="Skills-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Skills | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Skills</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <h2 className="color_sec py-4">Languages</h2>
            <h2 className="color_sec py-4">Proficiency</h2>
          </div>
          <Col lg="20" className="d-flex flex-column ">
            {languages.map((languages, i) => {
              return (
                <div className="d-flex flex-row align-items-center">
                  <div key={i}>
                    <Card className="skill-card">
                      <Card.Body>
                        <h3 className="card-title">{languages.name}</h3>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="skillContainer">
                    <div
                      class="skills "
                      style={{
                        width: languages.proficiency,
                        backgroundColor: languages.color,
                      }}
                      // className={{ backgroundColor: "black" }}
                    >
                      {languages.proficiency}
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <h2 className="color_sec py-4">Skills</h2>
            <h2 className="color_sec py-4">Proficiency</h2>
          </div>
          <Col lg="20" className="d-flex flex-column  ">
            {skills.map((skills, i) => {
              return (
                <div className="d-flex flex-row align-items-center">
                  <div key={i}>
                    <Card className="skill-card">
                      <Card.Body>
                        <h3 className="card-title">{skills.name}</h3>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="skillContainer">
                    <div
                      class="skills "
                      style={{
                        width: skills.proficiency,
                        backgroundColor: skills.color,
                      }}
                      // className={{ backgroundColor: "black" }}
                    >
                      {skills.proficiency}
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};