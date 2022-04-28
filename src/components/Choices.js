import React from 'react'
import './Choices.css'
import { useDispatch, useSelector } from 'react-redux'
import { setChoiceValue } from '../features/choice/choiceSlice'
import { setOpenFood } from '../features/openFood/openFoodSlice'
import { useEffect } from 'react'

const Choices = () => {
  const { openFood } = useSelector((store) => store.openFood)
  const { choiceValue } = useSelector((store) => store.choice)
  const dispatch = useDispatch()

  useEffect(() => {
    if (openFood.section === 'Traditional-pizza') {
      if (choiceValue === 'Medium') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 13,
            choiceValue: 'Medium',
          })
        )
      } else if (choiceValue === 'Large') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 15,
            choiceValue: 'Large',
          })
        )
      } else if (choiceValue === 'Family') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 20,
            choiceValue: 'Family',
          })
        )
      }
    } else if (openFood.section === 'Gourmet-pizza') {
      if (choiceValue === 'Medium') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 15,
            choiceValue: 'Medium',
          })
        )
      } else if (choiceValue === 'Large') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 17,
            choiceValue: 'Large',
          })
        )
      } else if (choiceValue === 'Family') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 23,
            choiceValue: 'Family',
          })
        )
      }
    } else if (openFood.section === 'Seafood-pizza') {
      if (choiceValue === 'Medium') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 16,
            choiceValue: 'Medium',
          })
        )
      } else if (choiceValue === 'Large') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 18,
            choiceValue: 'Large',
          })
        )
      } else if (choiceValue === 'Family') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 24,
            choiceValue: 'Family',
          })
        )
      }
    } else if (openFood.section === 'Desserts') {
      if (choiceValue === 'Large') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 14,
            choiceValue: 'Large',
          })
        )
      } else if (choiceValue === 'Family') {
        dispatch(
          setOpenFood({
            ...openFood,
            price: 20,
            choiceValue: 'Family',
          })
        )
      }
    } else {
      dispatch(setOpenFood({ ...openFood, choiceValue: choiceValue }))
    }
  }, [choiceValue])

  return (
    <div className='size'>
      {openFood.choices.map((choice) => (
        <div key={choice}>
          <label>
            <input
              type='radio'
              id={choice}
              className='nes-radio'
              name='choice'
              value={choice}
              checked={choice === choiceValue}
              onChange={(e) => {
                dispatch(setChoiceValue(e.target.value))
              }}
            />
            <span>{choice}</span>
          </label>{' '}
        </div>
      ))}
    </div>
  )
}

export default Choices
