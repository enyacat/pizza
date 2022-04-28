import React from 'react'
import './CartContainer.css'
import { Hamster } from '../icons'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenFood } from '../features/openFood/openFoodSlice'
import { removeItem } from '../features/cart/cartSlice'
import { formatPrice, hasToppings } from '../utils/helpers'

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount, isActive } = useSelector(
    (store) => store.cart
  )

  return (
    <div
      className={
        isActive
          ? 'nes-container is-rounded is-dark order-area'
          : 'nes-container is-rounded is-dark order-area.hidden'
      }
    >
      {cartItems.length === 0 ? (
        <section className='cart'>
          <header>
            <Hamster />
            <h2>your order</h2>
            <h4 className='empty-cart'>is currently empty</h4>
          </header>
        </section>
      ) : (
        <section className='order-content'>
          <div className='order-container'>Your Order</div>
          <div>
            {cartItems.map((order, index) => {
              return (
                <div className='order-container' key={index}>
                  <div className='order-item'>
                    <div>{order.quantity}</div>
                    <div>{order.name}</div>
                    <div>
                      <img
                        src='/img/edit.png'
                        alt=''
                        width='30vw'
                        height='30vw'
                        className='nes-pointer'
                        onClick={() =>
                          dispatch(setOpenFood({ ...order, index }))
                        }
                      />
                    </div>
                    <div>
                      <img
                        src='/img/bin.png'
                        alt=''
                        width='30vw'
                        height='30vw'
                        className='nes-pointer'
                        onClick={() => dispatch(removeItem(index))}
                      />
                    </div>
                    <div>{order.choice && order.choice}</div>
                    <div>{formatPrice(order.price)}</div>
                    {hasToppings(order) && (
                      <>
                        <div></div>
                        <div className='detailed-items'>
                          - 1 x{' '}
                          {order.defaultToppings
                            .filter((topping) => topping.checked === false)
                            .map((topping) => topping.name)
                            .join(',')}
                        </div>
                        <div>Extra</div>
                        <div className='detailed-items'>
                          {order.extraToppings
                            .filter((topping) => topping.checked)
                            .map((topping) => topping.name)
                            .join(',')}
                        </div>
                        <div />
                        <div />
                      </>
                    )}
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='order-container'>
            <div className='order-item'>
              <div />
              <div>Total: </div>
              <div />
              <div>{formatPrice(total)}</div>
            </div>
            <div className='order-item'>
              <div />
              <div>Includes GST of: </div>
              <div />
              <div>{formatPrice(total / 11)}</div>
            </div>
          </div>
          <button
            type='button'
            className='nes-btn is-success pay'
            onClick={() => dispatch(clearCart())}
          >
            Pay
          </button>{' '}
          <div> </div>
        </section>
      )}
    </div>
  )
}

export default CartContainer
