import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface HeaderProps {
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>🛍️ MyShop</div>
      <button className={styles.cartButton} onClick={onCartOpen}>
        🛒 Корзина
        {totalAmount > 0 && (
          <span className={styles.cartBadge}>{totalAmount}</span>
        )}
      </button>
    </header>
  );
};

export default Header;
