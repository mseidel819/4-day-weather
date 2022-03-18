import React, { useEffect, useState } from "react";
import axios from "axios";
import "./weather.container.css";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=40&lon=88&appid=da68121ee70f44aa5ee01ee020383b54"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.list,
          DataisLoaded: true,
        });
      });
  }

  render() {
    return (
      <div className="days-container">
        {this.state.items.map((day, index) => {
          let time = new Date(this.state.items[index].dt_txt);
          let oldTime =
            index > 0 ? new Date(this.state.items[index - 1].dt_txt) : null;
          const weekArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

          if (time.getDay() !== oldTime?.getDay()) {
            return (
              <div className="day" key={day.dt}>
                <h2 className="day-title">{weekArr[time.getDay()]}</h2>
                <img
                  className="image"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                />
                <div className="high-low">
                  <h2 className="high">
                    {Math.round(((day.main.temp_max - 273.15) * 9) / 5 + 32)}
                    &#176;
                  </h2>
                  <h2 className="low">
                    {Math.round(((day.main.temp_min - 273.15) * 9) / 5 + 32)}
                    &#176;
                  </h2>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Weather;
