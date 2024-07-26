import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Container } from 'reactstrap'

export default function Main() {
    return (
        <Container>
            <Header />
            <h1>Main</h1>
            <Footer />
        </Container>
    )
}
