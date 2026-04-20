import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

import WeatherScreen from "./screens/WeatherScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import EmployeesScreen from "./screens/EmployeesScreen";
import CounterScreen from "./screens/CounterScreen";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1, display: "flex", gap: 2, p: 2 }}>
        <Button component={Link} to="/counter">
          Counter
        </Button>

        <Button component={Link} to="/employees">
          Employees
        </Button>

        <Button component={Link} to="/shoppingcart">
          Shopping Cart
        </Button>

        <Button component={Link} to="/weather">
          Weather
        </Button>
      </Box>

      <Routes>
        <Route path="/" element={<Navigate to="/counter" />} />

        <Route path="/counter" element={<CounterScreen />} />
        <Route path="/employees" element={<EmployeesScreen />} />
        <Route path="/shoppingcart" element={<ShoppingCartScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;