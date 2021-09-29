import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User/User";

const Latest = () => {
  const [users, setUsers] = useState([]);
  useEffect(
    () =>
      axios("https://jsonplaceholder.typicode.com/users").then((res) =>
        setUsers(res.data)
      ),
    []
  );
  return (
    <>
      <section className="container">
        <h2 className="my-4 text-primary">See our latest users: 😉</h2>
        <Container>
          <Row className="g-4">
            {users.map((item) => (
              <User user={item} key={item.id}></User>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Latest;
