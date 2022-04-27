import React from 'react'
import './Menu.css'
import { formatPrice } from '../utils/helpers'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenFood } from '../features/openFood/openFoodSlice'
import { organiseBySection } from '../features/menu/menuSlice'
import { useEffect } from 'react'

export default function Menu() {
  const dispatch = useDispatch()
  const { foodsObject, itemsBySection } = useSelector((store) => store.menu)

  useEffect(() => {
    dispatch(organiseBySection())
  }, [itemsBySection.length])

  return (
    <div className='menu'>
      {Object.entries(foodsObject).map(([sectionName, foods]) => (
        <div className='section-name' key={sectionName}>
          <hr />
          <h1 id={sectionName}>{sectionName}</h1>
          <div className='food-grid nes-pointer'>
            {foods.map((food) => (
              <div
                key={food.id}
                className='food'
                img={food.img}
                style={{
                  backgroundImage: `url("${food.img}")`,
                }}
                onClick={() => {
                  dispatch(setOpenFood(food))
                }}
              >
                <div className='food-label'>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
