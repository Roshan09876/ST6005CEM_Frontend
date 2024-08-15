import axios from "axios";

const Api = axios.create({
    // baseURL: "http://localhost:5500/api",
    baseURL: "https://st6005cem-backend.onrender.com",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

// Configuration for axios
const getAuthHeaders = () => ({
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

export const testApi = () => Api.get("/");

export const registerApi = (userData) => Api.post("/user/register", userData);

export const loginApi = (userData) => Api.post("user/login", userData);

export const getProfileApi = (id) => Api.get(`user/profile/${id}`, getAuthHeaders());

// Update Profile API
export const updateProfileApi = (id, formData) => Api.put(`/user/update/${id}`, formData, getAuthHeaders());

//------------------------- All Users -------------------------
export const getallusersAPI = () => Api.get("user/allusers")


//-------------------------  Create Products -------------------------
export const createProductApi = (formData) => Api.post("product/create", formData)

//-------------------------  Get Products -------------------------
export const getProductApi = () => Api.get("product/getallproduct")

//-------------------------  Get Products By ID -------------------------
export const getProductByIDApi = (id) => Api.get(`product/product/${id}`)

//-------------------------  Delete Products By ID -------------------------
export const deleteProductByIDApi = (id) => Api.delete(`product/delete/${id}`)

// Add to Cart API
export const addToCartApi = (userId, productId, quantity) =>
    Api.post('/cart/add', { userId, productId, quantity }, getAuthHeaders());

//-------------------------  Get Cart By User ID -------------------------
export const getCartApi = (userId) => Api.get(`/cart/getcart/${userId}`, getAuthHeaders());

// Delete item from cart
export const deleteCartItemApi = (userId, productId) => Api.delete(`/cart/delete/`, {
    data: { userId, productId }, ...getAuthHeaders()
});

//-------------------------  Get Activity Logs -------------------------
export const getActivityLogsApi = () => Api.get("/user/logactivities", getAuthHeaders());

