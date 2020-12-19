import React, { FC } from 'react';
import { TProduct } from '../../context/product/productTypes';
import './Product.styles.scss';

type TProps = {
  product: TProduct;
};

const Product: FC<TProps> = ({ product }) => {
  return (
    <div
      style={{ backgroundImage: `url(${product.image})` }}
      className='product-item'
    >
      <div className='details'>
        <h1>{product.title}</h1>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
};

export default Product;
