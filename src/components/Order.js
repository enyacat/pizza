import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Order.css'
import { formatPrice } from '../utils/helpers'
import { removeItem } from '../features/cart/cartSlice'
import { setOpenFood } from '../features/openFood/openFoodSlice'

const Order = () => {
  const dispatch = useDispatch()
  const { isActive, cartItems, total } = useSelector((state) => state.cart)
  // const {
  //   orders,
  //   setOrders,

  //   removeItem,
  // } = useGlobalContext()

  // const total = orders.reduce((total, order) => {
  //   return total + getPrice(order)
  // }, 0)
  // const GST = total / 11

  // const removeItem = (idx) => {
  // let orderArr = []
  // for (let i = 0; i < idx; i++) {
  //     orderArr.push(orders[i])
  // }
  // if (idx < orders.length - 1) {
  //     for (let i = orders.length - 1; i > idx; i--) {
  //         orderArr.push(orders[i])
  //     }
  // }

  // removePeople(e) {
  //     var array = [...this.state.people]; // make a separate copy of the array
  //     var index = array.indexOf(e.target.value)
  //     if (index !== -1) {
  //         array.splice(index, 1);
  //         this.setState({ people: array });
  //     }
  // }

  // var orderArr = [...orders]
  // orderArr.splice(idx, 1)
  // setOrders(orderArr)

  // const leftOrders = orders.splice(idx, 1)
  // setOrders(leftOrders)

  // setOrders(orderArr)
  // setOrders([...orders, orders.filter(order => { orders.map((order, idx) => { if (idx !== i) { return order } }) })])
  // setOrders(orders.filter(item => item !== orders[idx]))
  // }

  function hasToppings(food) {
    return food.section.includes('pizza')
  }

  return (
    <div
      className={
        isActive
          ? 'nes-container is-rounded order-area'
          : 'nes-container is-rounded order-area.hidden'
      }
    >
      {cartItems.length === 0 ? (
        <>
          <div></div>
          <div className='order-content'>Your order is empty...</div>
        </>
      ) : (
        <div className='order-content'>
          <div className='order-container'>Your Order</div>
          {cartItems.map((order, i) => (
            <div className='order-container' key={order.i}>
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
                      dispatch(setOpenFood({ ...order, index: i }))
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
                    onClick={() => dispatch(removeItem(i))}
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
                        .filter((t) => t.checked === false)
                        .map((t) => t.name)
                        .join(',')}
                    </div>
                    <div>Extra</div>
                    <div className='detailed-items'>
                      {order.toppings
                        .filter((topping) => topping.checked)
                        .map((t) => t.name)
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
          ))}
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
          <button type='button' className='nes-btn is-success pay'>
            Pay
          </button>{' '}
          <div> </div>
        </div>
      )}
    </div>
  )
}

export default Order
