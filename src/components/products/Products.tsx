import React from 'react';
import { useProductContext } from '../../context/product/productContext';

const Products = () => {
  const { products, status } = useProductContext();

  return (
    <>
      {products &&
        products.map((product) => {
          return <h1 key={product.id}>{product.title}</h1>;
        })}
    </>
  );
};

export default Products;
