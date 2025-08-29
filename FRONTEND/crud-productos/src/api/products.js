import axios from 'axios'

// URL dinámica para desarrollo y producción
const baseURL = import.meta.env.VITE_API_URL || "https://l-p.onrender.com";

const productsApi = axios.create({
    baseURL: `${baseURL}/api/producto/`
})

export const getProducts = () => productsApi.get('/')
export const getProduct = (id) => productsApi.get(`/${id}/`)
export const createProduct = (productData) => productsApi.post('/', productData)
export const updateProduct = (id, productData) => productsApi.put(`/${id}/`, productData)
export const deleteProduct = (id) => productsApi.delete(`/${id}/`)