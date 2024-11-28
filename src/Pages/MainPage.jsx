import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Loading from '../Components/Loading'

const MainPage = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
    }, [])

    return (
        <div className='p-4 d-flex flex-wrap justify-content-center justify-content-md-between gap-4'>
            {products ?
                (products.map((product) => (<Card key={product.id} product={product} />)))
                :
                (<Loading />)
            }
        </div>
    )
}

export default MainPage