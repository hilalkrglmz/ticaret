import React, { useContext } from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { BasketContext } from '../BasketContext'

const Header = () => {

    const { basket } = useContext(BasketContext)

    const total = basket.reduce((total, i) => total + i.amount, 0)

    return (
        <header className='d-flex justify-content-between align-items-center p-4 sticky-top bg-dark'>
            <Link to={"/"}>
                <h2>Context Store</h2>
            </Link>
            <Link to={"/basket"}>
                <CiShoppingBasket />
                <span className='badge bg-danger mx-2 fs-7'>{total}</span>
            </Link>
        </header>
    )
}

export default Header