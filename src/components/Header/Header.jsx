import { Link } from "react-router";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}> 
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
