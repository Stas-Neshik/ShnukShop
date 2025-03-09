// src/Cart.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseProduct,
  decreaseProduct,
  clearState,
} from "../../store/cartSlice";
import { RootState } from "../../store/store";
import styles from "./cart.module.css";
import { Product } from "../../utils/types";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = (props) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  });

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncreaseProduct = (product: Product) => {
    dispatch(increaseProduct(product));
  };

  const handleDecreaseProduct = (product: Product) => {
    dispatch(decreaseProduct(product));
  };

  const handleClearCart = () => {
    dispatch(clearState());
  };

  const handleOverLay = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      console.log(event.target);

      props.onClose();
    }
  };

  return (
    <div className={styles.cartOverlay} onClick={handleOverLay}>
      <div className={styles.cartModal}>
        <button className={styles.closeButton} onClick={() => props.onClose()}>
          ✖
        </button>
        <h2>Корзина покупок</h2>
        {cart.items.length === 0 ? (
          <p>Ваша корзина пуста! </p>
        ) : (
          <div>
            <ul>
              {cart.items.map((item) => (
                <li key={item.productId}>
                  <div>
                    <h3>{item.productName}</h3>
                    <p>Цена: ${item.productPrice}</p>
                    <p>количество: {item.productCount}</p>
                    <button
                      className={styles.increase}
                      onClick={() => handleIncreaseProduct(item)}
                    >
                      Увеличить количество
                    </button>
                    <button
                      className={styles.decrease}
                      onClick={() => handleDecreaseProduct(item)}
                    >
                      Уменьшить количества
                    </button>
                    <button
                      className={styles.remove}
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <h3>Итоговая стоимость: ${cart.totalAmount}</h3>
              <button className={styles.clearCart} onClick={handleClearCart}>
                Очистить корзину
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
