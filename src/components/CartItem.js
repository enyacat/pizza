import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { openFoodDialog } from '../features/foodDialog/foodDialogSlice'

const CartItem = ({ id, name, price, amount, defaultToppings, choices }) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <div>
        <h4>{name}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
        <button className='remove-btn' onClick={dispatch(openFoodDialog())}>
          edit
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => dispatch(increase({ id }))}
        >
          +
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return
            }
            dispatch(decrease({ id }))
          }}
        >
          -
        </button>
      </div>
    </article>
  )
}
export default CartItem
