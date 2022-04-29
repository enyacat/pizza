import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './CartContainer.css'
import { Hamster } from '../icons'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenFood } from '../features/openFood/openFoodSlice'
import { removeItem, editOrder } from '../features/cart/cartSlice'
import { formatPrice, hasToppings } from '../utils/helpers'

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, isActive } = useSelector((store) => store.cart)
  const { myUser } = useSelector((store) => store.user)
  const { loginWithRedirect } = useAuth0()

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
                        onClick={() => {
                          dispatch(editOrder())
                          dispatch(setOpenFood({ ...order, index }))
                        }}
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
                    <div>{formatPrice(order.totalPrice)}</div>
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
          {myUser ? (
            <Link
              to='/checkout'
              type='button'
              className='nes-btn is-success pay'
            >
              Proceed to pay
            </Link>
          ) : (
            <button
              type='button'
              className='auth-btn nes-btn is-primary'
              onClick={loginWithRedirect}
            >
              Login to pay
            </button>
          )}{' '}
          <div> </div>
        </section>
      )}
    </div>
  )
}

export default CartContainer
