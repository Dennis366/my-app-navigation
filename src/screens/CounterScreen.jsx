import { Container, Typography } from "@mui/material";
import Counter from "../components/Counter.jsx";

function CounterScreen() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Counter App
      </Typography>
      <Counter />
    </Container>
  );
}

export default CounterScreen;