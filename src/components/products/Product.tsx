import React, { FC } from 'react';
import { TProduct } from '../../context/product/productTypes';

type TProps = {
  product: TProduct;
};

const Product: FC<TProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default Product;
