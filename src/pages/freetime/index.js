import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta, hobby } from "../../content_option";

export const Hobby = () => {
  return (
    <HelmetProvider>
      <Container className="Hobby-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Hobby | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Hobby</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {hobby.map((data, i) => {
          return (
            <div className=" ">
              <div className=" flex flex-row  ">
                <h2>{data.name}</h2>
                <h5>{data.description}</h5>
              </div>
              <div className="flex flex-row ">
                {data.img.map((data, i) => {
                  return (
                    <img width={300} className="mx-1" src={data} alt=""></img>
                  );
                })}

                <hr className="t_border my-4 ml-0 text-left" />
              </div>
            </div>
          );
        })}
      </Container>
    </HelmetProvider>
  );
};