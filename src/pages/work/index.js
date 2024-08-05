import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta, work } from "../../content_option";

export const Work = () => {
  return (
    <HelmetProvider>
      <Container className="Work-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Work | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Work Experiences</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {work.map((data, i) => {
          return (
            <>
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="">{data.company}</h1>
                <h4 className="">{data.time}</h4>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="">{data.position}</h3>
                <h4 className="">{data.location}</h4>
              </div>
              <ul>
                {data.bullet.map((data) => {
                  return <li className="mb-2">- {data}</li>;
                })}
              </ul>
              {data.img.map((data) => {
                return (
                  <img className="m-2" width={300} src={data} alt=""></img>
                );
              })}
              <hr className="t_border my-4 ml-0 text-left" />
            </>
          );
        })}
      </Container>
    </HelmetProvider>
  );
};