import React, { useContext } from 'react'
import { BasketContext } from '../BasketContext'
import { TbBasketMinus, TbBasketPlus } from 'react-icons/tb'
import { PiConfettiBold, PiMaskSadBold } from 'react-icons/pi'

const Basket = () => {

    const context = useContext(BasketContext)

    const total = context.basket.reduce((total, i) => total + (i.price * i.amount), 0).toFixed(2)

    return (
        <div className='m-3 d-flex flex-column justify-content-between gap-2'>
            {context.basket.length === 0 && (
                <h3 className='basket-text'>Sepet boş, birkaç ürün ekleyiniz...</h3>
            )}
            {context.basket.length > 0 && (
                <div className='d-flex justify-content-center align-items-center gap-3'>
                    <h3>
                        Toplam: <span className='text-success'>{total}₺</span>
                    </h3>

                    {/* Kargo Durumu */}
                    {parseFloat(total) >= 1000 ? (
                        <h6 className='text-success'>KARGO BEDAVA <span className='text-success'><PiConfettiBold /></span></h6>
                    ) : (
                        <h6 className='text-danger gap-2 d-flex  justify-content-center'>
                            KARGO BEDAVA İÇİN EN AZ 1000 TL ÜRÜN ALMALISINIZ!
                        </h6>
                    )}
                </div>
            )}
            {context.basket?.map((p) => (
                <div className='d-flex justify-content-between align-items-center gap-2'>
                    <img className='object-fit-contain rounded p-2' width={130} src={p.image} />
                    <h4>{p.title.slice(0, 20)}</h4>
                    <h3>{(p.price * p.amount).toFixed(2)}₺</h3>
                    <p className='mb-2'>Adet: {p.amount}</p>

                    <div className='d-flex justify-content-center  align-items-center gap-2'>
                        <button className='d-flex text-center bg-success' onClick={() => context.addToBasket(p)}><TbBasketPlus /></button>
                        <button className='d-flex text-center bg-danger' onClick={() => context.removeFromBasket(p.id)}><TbBasketMinus /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Basket