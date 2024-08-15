import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import Footer from "../components/Footer"


const Details = () => {
  const { productId } = useParams();
  const { getProductById, selectedProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getProductById(productId);
        setLoading(false);
      } catch (error) {
        console.log(`Error Fetching Product Details: ${error}`);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId, getProductById]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  if (!selectedProduct) return <div className="flex justify-center items-center h-screen">Product not found</div>;

  return (
 <>
    <div className="px-10 py-10 min-h-screen">
      <h1 className="font-extrabold text-4xl mb-5">{selectedProduct.title} Details</h1>

      <div className="mt-5 px-12 py-10 flex flex-col md:flex-row items-center justify-evenly shadow-lg rounded-lg">
        <div className="flex flex-col max-w-md">
          <h1 className="font-extrabold text-2xl mb-3">{selectedProduct.title}</h1>
          <p className="text-gray-700 mb-3">{selectedProduct.description}</p>
          <p className="text-xl font-semibold text-green-600">Price: Rs.{selectedProduct.price}</p>
          <button className="lg:w-32 mt-5 text-white md:w-13 px-3 py-2 bg-primary transform transition-transform duration-300 hover:scale-110" >
            Add to Cart
          </button>
        </div>
        <img src={selectedProduct.image} className="h-80 w-96 rounded-lg shadow-md mb-5 md:mb-0 md:mr-10" alt={selectedProduct.title} />
      </div>

    </div>
    <Footer/>
 </>
  );
};

export default Details;
