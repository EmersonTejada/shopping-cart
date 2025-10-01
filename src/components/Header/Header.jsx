import { Link } from "react-router";
import styles from "./Header.module.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const CustomButton = styled(Button)({
    fontWeight: "500",
    fontFamily: "Inter",
    fontSize: "1rem",
    color: "var(--color-text-primary)",
  });

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img className={styles.logo} src="./logoipsum-378.svg" alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <CustomButton component={Link} to="/" color="inherit" size="large">
          Home
        </CustomButton>
        <CustomButton component={Link} to="/shop" color="inherit" size="large">
          Shop
        </CustomButton>
        <CustomButton component={Link} to="/cart" color="inherit" size="large">
          Cart
        </CustomButton>
      </nav>

      <div className={styles.rightContainer}>
        <div className={styles.cartLogo}>
          <IconButton onClick={() => toggleDrawer(true)} color="inherit">
            <ShoppingBagIcon fontSize="large" />
            {cart.length > 0 && (
              <span className={styles.cartQuantity}>{cart.length}</span>
            )}
          </IconButton>
          <Drawer
            open={open}
            onClose={() => toggleDrawer(false)}
            anchor="right"
          >
            <div style={{ width: 350, padding: "1rem" }}>
              <Typography variant="h6" gutterBottom>
                Tu Carrito
              </Typography>
              <Divider />

              {cart.length === 0 ? (
                <Typography sx={{ mt: 2 }}>El carrito está vacío</Typography>
              ) : (
                <List>
                  {cart.map((item) => (
                    <ListItem
                      key={item.id}
                      secondaryAction={
                        <Button
                          color="error"
                          size="small"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Eliminar
                        </Button>
                      }
                    >
                      <ListItemText
                        sx={{ mr: 8 }}
                        primary={item.title}
                        secondary={`$${item.price} x ${item.quantity}`}
                      />
                    </ListItem>
                  ))}
                </List>
              )}

              <Divider />
              <Typography
                variant="subtitle1"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                Total: ${total.toFixed(2)}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={cart.length === 0}
              >
                Finalizar compra
              </Button>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
