import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

function Cart({ items, onRemove }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {items.map((item) => (
              <div key={item.id}>
                <ListItem
                  secondaryAction={
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove one
                    </Button>
                  }
                >
                  <ListItemText
                    primary={`${item.name} x ${item.quantity}`}
                    secondary={`${(item.price * item.quantity).toFixed(2)} £`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: {total.toFixed(2)} £
          </Typography>
        </>
      )}
    </Container>
  );
} 

export default Cart;