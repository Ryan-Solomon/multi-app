import React, { FC, ReactNode, useContext } from 'react';
import { cartReducer } from './cartReducer';
import { ProductStatus, TContext, TProduct } from './productTypes';

const initialContext: TContext = {
  products: [],
  status: ProductStatus.idle,
  addToCart: (product: TProduct) => null,
  removeFromCart: (id: number) => null,
  clearCart: () => null,
};

const ProductContext = React.createContext<TContext>(initialContext);

export const ProductContextProvider: FC<ReactNode> = ({ children }) => {
  const [products, setProducts] = React.useState<TProduct[]>([]);
  const [status, setStatus] = React.useState<ProductStatus>(ProductStatus.idle);
  const [cart, dispatch] = React.useReducer(cartReducer, []);

  const addToCart = (product: TProduct) => {
    dispatch({ type: 'ADD', payload: product });
  };
  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  React.useEffect(() => {
    const getProducts = async () => {
      setStatus(ProductStatus.pending);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setStatus(ProductStatus.resolved);
      } catch (e) {
        console.error(e);
        setStatus(ProductStatus.rejected);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, status, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
