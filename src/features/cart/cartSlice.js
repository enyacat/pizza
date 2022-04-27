import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
  let cartItems = localStorage.getItem('cartItems')
  if (cartItems) {
    return JSON.parse(localStorage.getItem('cartItems'))
  } else {
    return []
  }
}

const initialState = {
  cartItems: getLocalStorage(),
  amount: 0,
  total: 0,
  isLoading: true,
  isActive: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isActive = !state.isActive
    },
    addToCart: (state, action) => {
      const { order, quantity } = action.payload
      state.cartItems = [...state.cartItems, order]
      state.amount = state.amount + quantity
      state.total = state.total + order.price * quantity
    },
    clearCart: (state) => {
      state.cartItems = []
      state.amount = 0
      state.total = 0
    },
    removeItem: (state, action) => {
      const itemIndex = action.payload
      state.cartItems.splice(itemIndex, 1)
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.index === payload.index
      )
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0
      let extraToppingPrice = 0
      state.cartItems.forEach((item) => {
        extraToppingPrice =
          0 ||
          (item.extraToppings &&
            item.extraToppings
              .filter((topping) => topping.checked)
              .reduce((acc, topping) => {
                return acc + topping.price
              }, 0))
        amount += item.quantity
        total += item.quantity * (item.price + extraToppingPrice)
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const {
  toggleCart,
  addToCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotal,
} = cartSlice.actions
export default cartSlice.reducer
