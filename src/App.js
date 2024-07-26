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
                        <Route path='/' element={<Main />} />
                        <Route path='/product' element={<Products />} />
                        <Route path='/detail/:id' element={<DetailPro />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </Router>
            </AppProvider>

        </div>
    )
}
