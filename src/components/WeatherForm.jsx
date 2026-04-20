//This component lets the user type a city name and click a button to search.
// city is passed from app.jsx via props.
// setCity updates the value as the user types.
// fetchWeather is run when the button is clicked.

import { TextField, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function WeatherForm({ city, setCity, fetchWeather }) {
  return (
    <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={fetchWeather}
        startIcon={<SearchIcon />}
      >
        Get Weather
      </Button>
    </Stack>
  );
}

export default WeatherForm;