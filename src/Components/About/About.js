import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("/chartData.json")
      .then((res) => setData(res.data))
      .then((error) => console.log(error));
  }, []);
  return (
    <>
      <h2 className="text-center my-3">Wanna know about us 🙃!</h2>
      <div className="text-center">
        <LineChart
          width={800}
          height={300}
          data={data}
          className="my-5 mx-auto"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </>
  );
};

export default About;
