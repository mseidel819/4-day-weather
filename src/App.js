import "./App.css";
import Weather from "./weather.container/weather.container";

function App() {
  // api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=da68121ee70f44aa5ee01ee020383b54
  return (
    <div className="container">
      <Weather />
    </div>
  );
}

export default App;
