import React from 'react'
import Header from './components/header/Header'
import Main from './components/Main'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/product/Products';
import NotFound from './components/NotFound';
import DetailPro from './components/product/DetailPro';
import { AppProvider } from './AppContext';
import Cart from './components/cart/Cart';


export default function App() {
    return (
        <div>
            <AppProvider>
                <Router>
                    <Routes>
                        <Route path='/router-useContext/' element={<Main />} />
                        <Route path='/router-useContext/product' element={<Products />} />
                        <Route path='/router-useContext/detail/:id' element={<DetailPro />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path='/router-useContext/cart' element={<Cart />} />
                    </Routes>
                </Router>
            </AppProvider>

        </div>
    )
}
