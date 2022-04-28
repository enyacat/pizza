import React, { useEffect } from 'react'
import './Toppings.css'
import { formatPrice } from '../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenFood, getPrice } from '../features/openFood/openFoodSlice'
import { checkToppings } from '../features/toppings/toppingsSlice'

export function ExtraToppings() {
  const dispatch = useDispatch()
  const { openFood } = useSelector((state) => state.openFood)
  const { extraToppings } = useSelector((state) => state.toppings)

  useEffect(() => {
    dispatch(
      setOpenFood({
        ...openFood,
        extraToppings: extraToppings,
      })
    )
  }, [extraToppings])

  if (openFood.extraToppings) {
    return (
      <div className='topping-content'>
        {openFood.extraToppings.map((topping, i) => (
          <div key={topping.id}>
            <>
              <div>
                {i === 0 ||
                topping.section !== openFood.extraToppings[i - 1].section ? (
                  <div className='topping-section'>{topping.section}</div>
                ) : null}
              </div>
            </>
            <div className='toppings'>
              <input
                type='checkbox'
                className='topping-checkbox nes-pointer'
                checked={topping.checked}
                onChange={() => {
                  dispatch(checkToppings(topping))
                }}
              />
              <div>{topping.name}</div>
              <div>{formatPrice(topping.price)}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className='topping-content'>
      {extraToppings.map((topping, i) => (
        <div key={topping.id}>
          <>
            <div>
              {i === 0 || topping.section !== extraToppings[i - 1].section ? (
                <div className='topping-section'>{topping.section}</div>
              ) : null}
            </div>
          </>
          <div className='toppings'>
            <input
              type='checkbox'
              className='topping-checkbox nes-pointer'
              checked={topping.checked}
              onChange={() => {
                dispatch(checkToppings(topping))
              }}
            />
            <div>{topping.name}</div>
            <div>{formatPrice(topping.price)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ListDefaultToppings() {
  const dispatch = useDispatch()
  const { openFood } = useSelector((state) => state.openFood)
  const checkDefaultToppings = (i) => {
    dispatch(
      setOpenFood({
        ...openFood,
        defaultToppings: openFood.defaultToppings.map((topping, index) => {
          if (index === i) {
            return { ...topping, checked: !topping.checked }
          } else {
            return topping
          }
        }),
      })
    )
  }

  return (
    <div className='topping-content'>
      {openFood &&
        openFood.defaultToppings.map((topping, i) => (
          <div key={topping.name} className='toppings'>
            <input
              type='checkbox'
              className='topping-checkbox nes-pointer'
              checked={topping.checked}
              onChange={() => {
                checkDefaultToppings(i)
              }}
            />
            <div>{topping.name}</div>
          </div>
        ))}
    </div>
  )
}
