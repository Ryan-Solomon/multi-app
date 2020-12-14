import React, { FC, ReactNode } from 'react';
import { ProductStatus, TContext, TProduct } from './productTypes';

const initialContext: TContext = {
  products: [],
  status: ProductStatus.idle,
};

const ProductContext = React.createContext<TContext>(initialContext);

export const ProductContextProvider: FC<ReactNode> = ({ children }) => {
  const [products, setProducts] = React.useState<TProduct[]>([]);
  const [status, setStatus] = React.useState<ProductStatus>(ProductStatus.idle);

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
    <ProductContext.Provider value={{ products, status }}>
      {children}
    </ProductContext.Provider>
  );
};
