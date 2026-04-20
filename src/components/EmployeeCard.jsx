import { useState } from "react";
import {
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Avatar,
 Typography,
 Box,
 Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// The component receives a single employee object as a prop.
export default function EmployeeCard({ employee }) {
 // We use React state to track whether the accordion is expanded.
 const [expanded, setExpanded] = useState(false);

 const handleToggle = () => {
   setExpanded((prev) => !prev);
 };

 return (
 // MUI's <Accordion> expands/collapses based on expanded state.
 // onChange toggles the expanded state.
 <>
   {/* 
   This is the header of the accordion. It displays:
   A circular photo using MUI <Avatar>
   The employee's full name
   A down arrow icon to indicate expand/collapse
   */}
   <Accordion expanded={expanded} onChange={handleToggle}>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls={`panel-${employee.id}-header`}
       id={`panel-${employee.id}-content`}
       sx={{ cursor: "pointer" }}
     >
       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
         <Avatar
           src={employee.photo}
           alt={`${employee.firstName} ${employee.lastName}`}
           sx={{ width: 56, height: 56 }}
         />
         <Typography variant="h6">
           {employee.firstName} {employee.lastName}
         </Typography>
       </Box>
     </AccordionSummary>

     {/*
     This area contains additional employee details (title, department, etc.)
     shown when expanded.
     <Grid> from MUI is used for layout.
     */}
     <AccordionDetails>
  <Grid container spacing={1}>
    <Grid xs={6}>
      <strong>Title:</strong> {employee.title}
    </Grid>

    <Grid xs={6}>
      <strong>Department:</strong> {employee.department}
    </Grid>

    <Grid xs={6}>
      <strong>Phone:</strong> {employee.phone}
    </Grid>

    <Grid xs={6}>
      <strong>Email:</strong> {employee.email}
    </Grid>
  </Grid>
</AccordionDetails>
   </Accordion>
 </>
 );
}