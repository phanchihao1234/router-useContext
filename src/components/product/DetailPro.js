import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPro() {
    const { id } = useParams()
    console.log(id)
    const [data, setData] = useState({})
    const url = "https://63e9ae764f3c6aa6e7d06a70.mockapi.io/student"
    const getItem = () => {
        axios.get(url + '/' + id)
            .then(function (res) {
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getItem()
    }, [])
    return (
        <div>

            <h1>ten la`:{data.name}</h1>
        </div>
    )
}
