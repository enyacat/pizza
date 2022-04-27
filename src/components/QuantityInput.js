import React from 'react'
import './QuantityInput.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  changeInputQuantity,
} from '../features/order/orderSlice'

export function QuantityInput() {
  const dispatch = useDispatch()
  const { quantity } = useSelector((store) => store.order)
  return (
    <div className='increment-container'>
      <div>Quantity: </div>
      <button
        type='button'
        className='nes-btn is-success increment-button'
        onClick={() => {
          dispatch(decreaseQuantity())
        }}
        disabled={quantity === 1}
      >
        {' '}
        -{' '}
      </button>
      <input
        className='quantity-input'
        {...quantity}
        value={quantity}
        onChange={(e) => {
          dispatch(changeInputQuantity(e.target.value))
        }}
      ></input>
      <button
        type='button'
        className='nes-btn is-success increment-button'
        onClick={() => {
          dispatch(increaseQuantity())
        }}
      >
        {' '}
        +{' '}
      </button>
    </div>
  )
}
