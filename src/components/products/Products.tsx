import React from 'react';
import { useProductContext } from '../../context/product/productContext';
import Product from './Product';

const Products = () => {
  const { products, status } = useProductContext();

  return (
    <>
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </>
  );
};

export default Products;
