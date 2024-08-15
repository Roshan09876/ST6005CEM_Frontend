import React, { useEffect, useState } from 'react';
import { getCartApi, deleteCartItemApi } from '../api/Api';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('userData'));
                const userId = user._id;
                if (userId) {
                    const response = await getCartApi(userId);
                    if (response.data.success) {
                        setCart(response.data.cart);
                    } else {
                        console.error('Failed to fetch cart:', response.data.message);
                    }
                } else {
                    console.error('User ID not found in localStorage');
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCart();
    }, []);

    const handleDelete = async (productId) => {
        try {
            const user = JSON.parse(localStorage.getItem('userData'));
            const userId = user._id;
            const response = await deleteCartItemApi(userId, productId);
            if (response.data.success) {
                setCart(prevCart => ({
                    ...prevCart,
                    items: prevCart.items.filter(item => item.product._id !== productId)
                }));
                toast.success("Item deleted from cart");
            } else {
                console.error('Failed to delete item:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>
            {cart ? (
                <div className='space-y-6'>
                    {cart.items.length > 0 ? (
                        cart.items.map((item) => (
                            <div key={item.product._id} className='bg-white shadow-md rounded-lg p-4 flex items-center space-x-4'>
                                <img src={item.product.image} alt={item.product.title} className='w-24 h-24 object-cover rounded-lg' />
                                <div className='flex-1'>
                                    <h2 className='text-xl font-semibold'>{item.product.title}</h2>
                                    <div className='flex justify-between items-center mt-2'>
                                        <p className='text-lg font-medium'>${item.product.price}</p>
                                        <p className='text-sm text-primary'>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className='mb-10'>
                                    <DeleteIcon
                                        className='text-red-600 cursor-pointer mb-12'
                                        onClick={() => handleDelete(item.product._id)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-lg text-gray-700'>Your cart is empty</p>
                    )}
                    <div className='px-5 py-5 flex justify-center items-center'>
                        <button className='text-white bg-black px-5 py-3 w-1/2 rounded-full' type='submit'>
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className='text-lg text-gray-700'>Loading cart...</p>
            )}
        </div>
    );
};

export default Cart;
