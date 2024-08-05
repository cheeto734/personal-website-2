import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta, courses } from "../../content_option";

export const Courses = () => {
  return (
    <HelmetProvider>
      <Container className="Courses-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Courses | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Courses</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {courses.map((data) => {
          return <h2 className="pb-2">- {data}</h2>;
        })}
      </Container>
    </HelmetProvider>
  );
};