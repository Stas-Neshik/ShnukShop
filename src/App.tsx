import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { useState } from "react";
import Cart from "./components/cart/cart";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import styles from "./App.module.css";
import { products } from "./products";
import { Product } from "./utils/types";

function App() {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: (typeof products)[0]) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.container}>
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <h1 className={styles.heading}>
        Добро пожаловать в магазин шнюка и его друзей!
      </h1>

      <div>
        <h2>Наш современный каталог товаров!</h2>
        <div className={styles.productsList}>
          {products.map((product: Product) => (
            <div key={product.productId} className="product-card">
              <h3>{product.productName}</h3>
              <p>Цена: ${product.productPrice}</p>
              <button
                className={styles.button}
                onClick={() => handleAddToCart(product)}
              >
                Добавить в корзину!
              </button>
            </div>
          ))}
        </div>
      </div>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      <Footer />
    </div>
  );
}

export default App;
