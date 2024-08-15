import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/ProductContext';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useTypewriter } from 'react-simple-typewriter';
import Footer from '../components/Footer';
import { addToCartApi } from '../api/Api';
import toast from 'react-hot-toast';

const Products = () => {
  const { product, getallProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getallProduct();
      } catch (error) {
        console.log(`Error Fetching Product from page: ${error}`);
      }
    };
    fetchProduct();
  }, [getallProduct]);

  const [text] = useTypewriter({
    words: ["Products We Sell are...."],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const handleAddToCart = async (productId) => {
    if (!user) {
      toast.error("Please log in to add items to the cart.");
      return;
    }

    try {
      const response = await addToCartApi(user._id, productId, 1);
      if (response.status === 200 || response.status === 201) {
        toast.success('Product added to cart successfully');
      } else {
        toast.error('Failed to add product to cart');
      }
    } catch (error) {
      console.error(`Error adding product to cart: ${error}`);
      toast.error('An error occurred while adding product to cart');
    }
  };

  return (
    <>
      <div className='px-10 py-10'>
        <h1 className='font-extrabold text-3xl'>{text}&nbsp;</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5'>
          {product.map((item) => (
            <div key={item._id} className='border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r from-[#e0f7f8] via-white to-[#e0f7f8]'>
              <img src={item.image} alt={item.title} className='w-full h-48 object-cover mb-4 rounded-lg' />
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-xl mb-2'>{item.title}</h1>
                <h1 className='font-semibold text-base text-green-600 mb-2'>Rs. {item.price}</h1>
              </div>
              <div className='flex flex-row justify-between'>
                <Link to={`/details/${item._id}`}>
                  <h1 className="lg:w-32 text-primary mt-2 md:w-13 px-3 py-2 transform transition-transform duration-300 hover:scale-110">
                    View Details
                  </h1>
                </Link>
                <button
                  className="lg:w-32 text-white mt-2 md:w-13 px-3 py-2 bg-primary transform transition-transform duration-300 hover:scale-110"
                  onClick={() => handleAddToCart(item._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>˝
      </div>
      <Footer />
    </>
  );
};

export default Products;
