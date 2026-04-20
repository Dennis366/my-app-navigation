/*
This component displays one product with its name, price, and an "Add" button.

key MUI components
Card: A container with a border and padding to make the product look like a clean, elevated tile.
CardContent: Wrapper inside the card for layout control.
Typography: Used for displaying text (product name and price) in styled variants (h6, body2).
Button: A Material UI styled button labelled "Add", which calls onAddToCart(product) when clicked.
*/
import { Card, CardContent, Typography, Button } from "@mui/material";

function Product({ product, onAddToCart }) {
return (
<Card variant="outlined" sx={{ mb: 2 }}>
<CardContent
sx={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}
>
<div>
<Typography variant="h6">{product.name}</Typography>
<Typography variant="body2" color="text.secondary">
{product.price.toFixed(2)} £
</Typography>
</div>
<Button variant="contained" onClick={() => onAddToCart(product)}>
Add
</Button>
</CardContent>
</Card>
);
}

export default Product;