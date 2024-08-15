import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/ProductContext';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminProduct = () => {
  const { product, getallProduct, createNewProduct, deleteProductByID } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    if (formData.image) data.append('image', formData.image);

    try {
      await createNewProduct(data);
      window.location.reload();
      setFormData({
        title: "",
        description: "",
        price: "",
        image: null
      });
    } catch (error) {
      console.error(`Error creating product: ${error}`);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getallProduct();
      } catch (error) {
        console.log(`Error fetching products from page: ${error}`);
      }
    };
    fetchProduct();
  }, [getallProduct]);

  const handleDelete = async (id) => {
    try {
      await deleteProductByID(id);
      window.location.reload();
    } catch (error) {
      console.error(`Error deleting product: ${error}`);
    }
  };

  return (
    <>
      <div className='px-10 py-10'>
        <h1 className='font-bold text-4xl'>Create Product</h1>
        <div className='w-full shadow-lg py-5 px-5 flex flex-col md:flex-row mt-2'>
          <form className='w-full flex flex-col items-center justify-center gap-5 py-5' onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Enter Product Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Enter Product Description"
              onChange={handleChange}
              className="w-full h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="text"
              name="price"
              value={formData.price}
              placeholder="Enter Price"
              onChange={handleChange}
              className="w-full h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <button className='text-white bg-black px-5 py-3 w-1/4 rounded-full' type='submit'>
              Add Product
            </button>
          </form>
        </div>
      </div>
      <h1 className='font-bold text-4xl px-10'>Product List</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 px-12 ml-10 mr-10'>
        {
          product.map((item) => (
            <div key={item._id} className='border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r from-[#e0f7f8] via-white to-[#e0f7f8]'>
              <img src={item.image} alt={item.title} className='w-full h-48 object-cover mb-4 rounded-lg' />
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-xl mb-2'>{item.title}</h1>
                <h1 className='font-semibold text-base text-green-600 mb-2'>Rs. {item.price}</h1>
                <DeleteIcon onClick={() => handleDelete(item._id)} className='text-red-600 cursor-pointer' />
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default AdminProduct;
