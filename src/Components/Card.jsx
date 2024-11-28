import React, { useContext } from 'react'
import { BasketContext } from '../BasketContext'

const Card = ({ product }) => {

    const context = useContext(BasketContext)

    return (
        <div className='card pt-2' style={{ width: "18rem" }}>
            <div className='d-flex justify-content-center'>
                <img width={150} height={150} className='rounded object-fit-contain' src={product.image} alt="" />
            </div>
            <div className='d-flex flex-column text-center m-2'>
                <p>{product.title.slice(0, 15) + "..."}</p>
                <h6 className='text-success'>{product.price}₺</h6>
                <h5>{product.category}</h5>
                <p className='text-primary'>{product.description.slice(0, 20) + "..."}</p>
                <button onClick={() => context.addToBasket(product)} className='bg-success w-100'>Sepete Ekle</button>

            </div>
        </div>
    )
}

export default Card