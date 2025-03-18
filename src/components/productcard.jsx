// write product card here
import React from 'react';
import ViewProductButton from '../components/button';

const ProductCard = () => {
  const productImage = 'https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/512b6d17fc0254a947f9c0b1102d43cd957f93b3.webp';
  const productName = 'Sports shoes for Women';
  const productPrice = 'Rs. 1,000';

  return (
    <div className="product_card">
      <img src={productImage} alt={productName} className="product_image" />

      <h3 className="product_name">{productName}</h3>

      <p className="product_price">{productPrice}</p>

      <ViewProductButton />
    </div>
  );
};

export default ProductCard;