import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFood, getPrice } from '../features/openFood/openFoodSlice'
import { generateOrder, resetQuantity } from '../features/order/orderSlice'
import {
  addToCart,
  calculateTotal,
  updateOrder,
} from '../features/cart/cartSlice'
import { resetToppings } from '../features/toppings/toppingsSlice'
import { resetChoiceValue } from '../features/choice/choiceSlice'
import {
  Choices,
  QuantityInput,
  ExtraToppings,
  ListDefaultToppings,
} from '../components'

import { formatPrice, hasToppings } from '../utils/helpers'

const FoodDialog = () => {
  const dispatch = useDispatch()
  const { openFood } = useSelector((store) => store.openFood)
  const { quantity } = useSelector((store) => store.order)
  const { choiceValue } = useSelector((store) => store.choice)
  const { extraToppings } = useSelector((store) => store.toppings)
  const { cartItems, isEditing } = useSelector((store) => store.cart)

  useEffect(() => {
    if (openFood) {
      dispatch(getPrice())
    }
  }, [openFood && openFood.extraToppings, quantity, choiceValue])

  useEffect(() => {
    dispatch(calculateTotal())
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  var order = {}
  if (openFood && hasToppings(openFood)) {
    order = {
      ...openFood,
      quantity: quantity,
      extraToppings: extraToppings,
      choiceValue: choiceValue,
    }
  } else if (openFood) {
    order = {
      ...openFood,
      quantity: quantity,
      choiceValue: choiceValue,
    }
  }

  if (!openFood) return null
  return (
    <aside className='food-dialog'>
      <div
        className='dialog-shadow'
        onClick={() => {
          dispatch(resetQuantity())
          dispatch(resetChoiceValue())
          dispatch(resetToppings())
          dispatch(closeFood())
        }}
      ></div>
      <div className='dialog'>
        <div
          className='dialog-banner'
          style={{
            backgroundImage: `url("${openFood.img}")`,
          }}
        >
          <div className='dialog-banner-name'>{openFood.name}</div>
        </div>
        <div className='dialog-content'>
          {openFood.ingredients && (
            <div>
              Ingredient:{' '}
              <textarea
                className='ingredient'
                defaultValue={openFood.ingredients}
              ></textarea>
            </div>
          )}
          {openFood.choices && (
            <div className='choice'>
              <Choices />
            </div>
          )}
          <QuantityInput />

          {hasToppings(openFood) && (
            <div>
              {openFood.defaultToppings.length !== 0 && (
                <>
                  <div>Current Toppings</div>
                  <ListDefaultToppings />
                </>
              )}
              <div> Extra Toppings </div>
              <ExtraToppings />
            </div>
          )}
        </div>
        <div className='dialog-footer'>
          <button
            type='button'
            className='nes-btn is-error'
            disabled={openFood.choices && !choiceValue}
            onClick={() => {
              isEditing
                ? dispatch(updateOrder(order))
                : dispatch(generateOrder(order))
              dispatch(addToCart({ order, quantity }))
              dispatch(resetToppings())
              dispatch(resetQuantity())
              dispatch(resetChoiceValue())
              dispatch(closeFood())
            }}
          >
            {isEditing ? 'Update order: ' : 'Add to orders: '}
            {formatPrice(openFood.totalPrice * quantity)}
          </button>
        </div>
      </div>
    </aside>
  )
}
export default FoodDialog
