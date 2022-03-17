import React, { useEffect, useState } from "react";
import axios from "axios";
import "./weather.container.css";

function Weather() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios(
      "api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=5&appid=da68121ee70f44aa5ee01ee020383b54"
    )
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log("error");
        setError(error);
      })
      .finally(() => setLoading(false));
  }
  console.log(data);

  //     "api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=5&appid=da68121ee70f44aa5ee01ee020383b54"
  // icon url format: http://openweathermap.org/img/wn/10d@2x.png

  //return a map of the data to each object renders a weather box
  //convert temp to faranheight
  return (
    <div className="day">
      <h2 className="day-title">Tue</h2>
      <img
        className="image"
        src="http://openweathermap.org/img/wn/10d@2x.png"
      />
      <div className="high-low">
        <h2 className="high">80&#176;</h2>
        <h2 className="low">40&#176;</h2>
      </div>
    </div>
  );
}

export default Weather;
