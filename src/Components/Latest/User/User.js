import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = (props) => {
  const { email, name, phone, id } = props.user;

  return (
    <Col md="4" xs>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Phone: {phone}</Card.Text>
          <Card.Text>Email: {email}</Card.Text>
          <Link
            to={`/latestUser/${id}`}
            variant="primary"
            className="btn btn-warning fw-bold"
          >
            Read more
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
