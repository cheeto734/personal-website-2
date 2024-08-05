import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta, education } from "../../content_option";

export const Education = () => {
  return (
    <HelmetProvider>
      <Container className="Education-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Education | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Education</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {education.map((data) => {
          return (
            <>
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="">{data.school}</h1>
                <h4 className="">{data.time}</h4>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="me-2">{data.degree}</h4>
                  <h5 className="">| CGPA: {data.gpa}</h5>
                </div>
                <h4 className="">{data.location}</h4>
              </div>
              <hr className="t_border my-4 ml-0 text-left" />
            </>
          );
        })}
      </Container>
    </HelmetProvider>
  );
};