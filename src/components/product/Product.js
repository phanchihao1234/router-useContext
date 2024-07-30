import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle, Col } from 'reactstrap'
import { AppContext } from '../../AppContext'
import Swal from 'sweetalert2'

export default function Product(props) {
    const { product } = props
    const { addCart } = useContext(AppContext)
    const handle_AddCart = (id) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        addCart(id)
    }
    return (
        <>
            <Col lg={3} md={4} sm={6} xs={6}  >
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Product
                        </CardTitle>
                        <CardText>

                            <h1 >{product.name}</h1>

                        </CardText>
                        <Link to={`/router-useContext/detail/${product.id}`}>show id</Link>
                        <Button color='primary' onClick={() => handle_AddCart(product.id)}>
                            Add to cart
                        </Button>
                    </CardBody>
                </Card>

            </Col>
        </>
    )
}
