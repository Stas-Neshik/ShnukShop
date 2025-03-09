// Корзина.

export type Product = {
  productName: string;
  productPrice: number;
  productCategory: string;
  productId: number;
  productCount: number;
};

export interface CartState {
  items: Product[];
  totalAmount: number;
}
