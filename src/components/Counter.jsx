import React, { useState } from "react";
// Importing MUI components:
// Box - for layout/spacing, Button - styled buttons
// Typography - styled text, Stack - flexbox layout with spacing

import { Box, Button, Typography, Stack } from "@mui/material";

function Counter() {
 //useState keeps track of the counter value.
const [count, setCount] = useState(0);

return (
 // Box adds margin top.
 <Box sx={{ mt: 4 }}>
{/* Typography shows the current count in a styled heading. */}
<Typography variant="h4" gutterBottom>
 Count: {count}
</Typography>

{/* Stack:
 Lays out children (buttons) horizontally with direction="row"
Adds spacing between buttons (spacing={2} = 16px)
justifyContent="center" centers the buttons horizontally.
*/}
<Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>

<Button
variant="contained"
color="error"
onClick={() => setCount(count - 1)}
>
Decrease
</Button>

<Button
variant="contained"
color="primary"
onClick={() => setCount(count + 1)}
>
Increase
</Button>

<Button
variant="outlined"
color="secondary"
onClick={() => setCount(0)}
>
Reset
</Button>

</Stack>
</Box>
);
}

export default Counter;









