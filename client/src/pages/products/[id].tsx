/** @format */

import dynamic from 'next/dynamic';
import React from 'react';

const ProductPage = dynamic(() => import('@views/ProductPage').then((mod) => mod.ProductPage));

const Product: React.FC = () => {
  return <ProductPage />;
};

export default Product;
