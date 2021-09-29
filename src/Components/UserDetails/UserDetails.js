import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState({});
  const { userId } = useParams();
  const history = useHistory();

  // load single user data-
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    axios(url).then((res) => setUserInfo(res.data));
  }, []);
  const { name, address, company, email, phone, website } = userInfo;

  // handleGOBack: to go back specified route-
  const handleGOBack = () => {
    history.push("/latest");
  };
  return (
    <div className="container my-5">
      <h1>{name}</h1>
      <p className="mb-1">
        Email: <span className="text-success">{email}</span>
      </p>
      <p className="mb-1">
        Phone: <span className="text-success">{phone}</span>
      </p>
      <p className="mb-1">
        Website: <span className="text-primary">{website}</span>
      </p>
      <p>
        Comapny: <span className="text-success">{company?.name}</span>
      </p>
      <h5>Address:</h5>
      <p className="mb-1">
        Street: <span className="text-success">{address?.street}</span>
      </p>
      <p className="mb-1">
        House: <span className="text-success">{address?.suite}</span>
      </p>
      <p>
        City: <span className="text-success">{address?.city}</span>
      </p>
      <button onClick={handleGOBack} className="btn btn-danger">
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
