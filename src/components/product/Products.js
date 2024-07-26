import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Row } from 'reactstrap'
import Product from './Product'
import Header from '../header/Header'
import Footer from '../footer/Footer'
export default function Products() {
    const url = "https://63e9ae764f3c6aa6e7d06a70.mockapi.io/student"
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get(url)
            .then(function (res) {
                console.log(res)
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    {
                        data.map((item, index) => (
                            <Product key={index} product={item} />
                        ))
                    }
                </Row>
                <Footer />
            </Container>
        </div>
    )
}
