import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Kharkiv" />
        <footer>
          This project was coded by Nat Voronjanska and is {""}
          <a
            href="https://github.com/NatVoronianska/weather-react-app"
            target="blank"
            rel=""
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
