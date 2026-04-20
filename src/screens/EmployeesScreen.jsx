import { Box, Container, Paper, Typography } from "@mui/material";
import EmployeeCard from "../components/EmployeeCard.jsx";
import { employees } from "../data/employees.jsx";

function EmployeeScreen() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Employee List
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {employees.map((employee) => (
          <Paper elevation={2} key={employee.id}>
            <EmployeeCard employee={employee} />
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default EmployeeScreen;