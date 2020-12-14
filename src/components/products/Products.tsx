import React from 'react';
import { useProductContext } from '../../context/product/productContext';

const Products = () => {
  const { products, status } = useProductContext();

  return (
    products &&
    products.map((prod) => {
      return <h1 key={prod.id}>{prod.title}</h1>;
    })
  );
};

export default Products;
