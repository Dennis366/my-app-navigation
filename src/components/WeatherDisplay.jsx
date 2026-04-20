import { Card, CardContent, Typography, Stack } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";

//This component shows data about the city's weather
// It uses the weather object passed from App.jsx
// Displays city name, temperature, weather description, and wind speed
// Card and CardContent to make a nice box.
//Typography for styled text.
// Stack for layout (horizontal row).

function WeatherDisplay({ weather }) {
  // Grabs the icon code from the weather data (e.g. "04d")
  const iconCode = weather.weather[0].icon;

  // Builds a URL with icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <Card sx={{ mt: 4, maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {weather.name}
        </Typography>

        {/* Show icon + description */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <img src={iconUrl} alt="weather icon" />
        </Stack>

        <Typography>
          <ThermostatIcon /> Temperature: {weather.main.temp} °C
        </Typography>
        <Typography>
  <AirIcon /> Wind: {weather.wind.speed} m/s
</Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherDisplay;