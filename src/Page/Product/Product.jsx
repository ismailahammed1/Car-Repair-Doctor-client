import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/Product.json`) 
      .then(res => res.json())
      .then(data => setProducts(data)); 
  }, []);

  return (
    <div className="text-center  mt-8">
    <div className=" ">
      <h1 className="text-xl font-bold text-[#FF3811]">Popular Products</h1>
      <h1 className="text-5xl font-bold">Browse Our Products</h1>
      <p className="text-xl p-4">
        The majority have suffered alteration in some form, by injected humour, or randomised
        <br />
        words which do not look even slightly believable.
      </p>
    </div>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
       
      </div>
      <button className="btn btn-outline  text-xl text-[#FF3811] m-10 hover:text-[#FF3811]">More Products</button>
    </div>
    </div>
  );
};

export default Product;
