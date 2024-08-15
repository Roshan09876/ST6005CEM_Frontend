import { createContext, useCallback, useState } from "react";
import { createProductApi, deleteProductByIDApi, getProductApi, getProductByIDApi } from "../api/Api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [createdProduct, setCreatedProduct] = useState(null);
    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedDeleteProduct, setSelectedDeletedProduct] = useState(null);


    const createNewProduct = async (formData) => {
        try {
            const response = await createProductApi(formData);
            if (response.status === 200 || response.status === 201) {
                setCreatedProduct(response.data.product);
                console.log('Product created:', response.data.product);
            }
        } catch (error) {
            console.error(`Error while creating product: ${error}`);
            throw error;
        }
    };

    const getallProduct = useCallback(async () => {
        try {
            const response = await getProductApi();
            if (response.status === 200 || response.status === 201) {
                console.log(response.data.allProducts);
                setProduct(response.data.allProducts);
            }
        } catch (error) {
            console.log(`Error in fetching product ${error}`);
            throw error;
        }
    }, []);

    const getProductById = useCallback(async (id) => {
        try {
            const response = await getProductByIDApi(id);
            if (response.status === 200 || response.status === 201) {
                setSelectedProduct(response.data.product);
                return response.data.product;
            }
        } catch (error) {
            console.log(`Error in fetching product by ID ${error}`);
            throw error;
        }
    }, []);

    const deleteProductByID = async (id) => {
        try {
            const response = await deleteProductByIDApi(id);
            if (response.status === 200 || response.status === 201) {
                // setSelectedDeletedProduct(prevProducts => prevProducts.filter(product => product._id !== id));
                setSelectedDeletedProduct(response.data.deleteProduct)
                console.log('Product deleted:', response.data.deleteProduct);
                return response.data.deleteProduct;
            }
        } catch (error) {
            console.log(`Error deleting product by ID ${error}`);
            throw error;
        }
    };
    


    return (
        <ProductContext.Provider value={{ product, getallProduct, getProductById, selectedProduct, createdProduct, createNewProduct, selectedDeleteProduct, deleteProductByID }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductProvider };
export default ProductContext;
