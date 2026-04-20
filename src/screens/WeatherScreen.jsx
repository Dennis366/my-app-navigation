import { useState } from "react";
import axios from "axios";
import { Container, Typography, Alert } from "@mui/material";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";

const WeatherScreen = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "5c4fc26113671036d45db9a6f54882ca";

  const fetchWeather = async () => {
    try {
      setError(null);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError("City not found");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        Weather App 🌎
      </Typography>

      <WeatherForm
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {weather && <WeatherDisplay weather={weather} />}
    </Container>
  );
};

export default WeatherScreen;