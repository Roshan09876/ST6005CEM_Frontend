import { createContext, useCallback, useState, useEffect } from "react";
import { getallusersAPI, getProfileApi, loginApi, registerApi, updateProfileApi } from "../api/Api";
import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")) || null);
    const [allusers, setAllUsers] = useState([])
    const [cartItems, setCartItems] = useState(user?.cartItems || []);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser) {
            setUser(storedUser);
            setCartItems(storedUser.cartItems);
        }
    }, []);

    const register = async (userData) => {
        try {
            const response = await registerApi(userData);
            if (response.status === 200 || response.status === 201) {
                setUser(response.data.userData);
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data || "An Error Occurred");
            throw error;
        }
    };

    const login = async (userData) => {
        try {
            const response = await loginApi(userData);
            if (response.status === 200 || response.status === 201) {
                const user = response.data.userData;
                setUser(user);
                toast.success(response.data.message);
                localStorage.setItem("userData", JSON.stringify(user));
                localStorage.setItem("token", response.data.token);
                return user;
            }
        } catch (error) {
            toast.error(error.response?.data.message || "An Error Occurred");
            throw error;
        }
    };

    const getProfile = useCallback(async () => {
        try {
            const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
            const id = token.id;

            if (!id) {
                throw new Error("User ID not found in token");
            }

            const response = await getProfileApi(id);
            if (response.status === 200) {
                setUser(response.data.user);
            }
        } catch (error) {
            toast.error(error.response?.data.message || "An Error Occurred");
            throw error;
        }
    }, []);



    const getallUsers = useCallback(async () => {
        try {
            const response = await getallusersAPI()
            if (response.status === 200 || response.status === 201) {
                console.log('All Users Fetched:', response.data.users)
                setAllUsers(response.data.users);
            }
        } catch (error) {
            console.log(`Error while fetching all users ${error}`)
            throw error;
        }
    }, [])

    const updateProfile = useCallback(async (id, formData) => {
        try {
            const response = await updateProfileApi(id, formData);
            if (response.status === 200) {
                setUser(response.data.user);
                localStorage.setItem("userData", JSON.stringify(response.data.user));
                toast.success("Profile updated successfully");
            }
        } catch (error) {
            toast.error(error.response?.data.message || "An Error Occurred");
            throw error;
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, cartItems, register, login, getProfile, allusers, getallUsers, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
export default AuthContext;
