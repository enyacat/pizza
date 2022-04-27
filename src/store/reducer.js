const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [...state.cart, action.item],
    }
  }
  if (action.type === 'DELETE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        if (item.id !== action.id) {
          return item
        }
      }),
    }
  }
  return state
}

export default reducer
