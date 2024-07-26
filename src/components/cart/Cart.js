import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Button, Container, Table } from 'reactstrap'

export default function Cart() {
    const { cart, deleteCart } = useContext(AppContext)
    const deleteCartById = (id) => {
        deleteCart(id)
    }
    return (
        <div>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr>
                                    <td scope="row">
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.qty}
                                    </td>
                                    <td>
                                        <Button color='danger' onClick={() => deleteCartById(item.id)}>delete</Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
