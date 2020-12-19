import React from 'react';
import { useProductContext } from '../../context/product/productContext';
import Product from './Product';
import './Products.styles.scss';

const Products = () => {
  const { products, status } = useProductContext();
  console.log(products);

  return (
    <div className='product-gallery'>
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Products;
