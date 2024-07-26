import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const url = "https://63e9ae764f3c6aa6e7d06a70.mockapi.io/student"
    const fetchProducts = () => {
        axios.get(url)
            .then(function (res) {
                setProducts(res.data)
                // setCart(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const addCart = (id) => {
        const res = products.find(item => item.id === id)
        const index = cart.findIndex(item => item.id === id)
        console.log(index)
        if (index >= 0) {
            let newCart = cart
            newCart[index].qty++
            setCart(newCart)
        } else {
            setCart([...cart, { ...res, qty: 1 }])
        }


    }
    const deleteCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    return <AppContext.Provider value={{ count, setCount, cart, addCart, deleteCart }}>
        {children}
    </AppContext.Provider>
}