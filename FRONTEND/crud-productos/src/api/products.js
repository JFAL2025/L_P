import axios from 'axios'
const productsApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/producto/"
})


export const getProducts = () => productsApi.get()
export const getProduct = (id) => productsApi.get(`/${id}/`)
export const createProduct = (productData) => productsApi.post('/', productData)
export const updateProduct = (id, productData) => productsApi.put(`/${id}/`, productData)
export const deleteProduct = (id) => productsApi.delete(`/${id}/`)