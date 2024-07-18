

const ProductCard = ({ product }) => {
  const { title, price, image, star } = product;
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 m-4">
      <img src={image} alt={title} className="h-30 w-full object-cover rounded-md" />
      <div className="flex items-center mt-2 justify-center">
        <span className="text-btnrr ">
          {'★'.repeat(Math.floor(star))}
        </span>
        <span className="">
          {'★'.repeat(5 - Math.floor(star))}
        </span>
        <span className="ml-2 text-gray-600">({star})</span>
      </div>
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">${price.toFixed(2)}</p>
     
    </div>
  );
};

export default ProductCard;
