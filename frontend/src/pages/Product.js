import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';

export default function Product() {

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const productData = all_product.find((e) => e.id === Number(productId));
    setProduct(productData)

  }, [all_product])

  return (
    (product ?
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProducts />
      </div>
      :
      <div>
        Loading
      </div>
    )


  )
}
