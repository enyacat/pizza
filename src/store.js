import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import foodDialogReducer from './features/foodDialog/foodDialogSlice'
import openFoodReducer from './features/openFood/openFoodSlice'
import orderReducer from './features/order/orderSlice'
import toppingsReducer from './features/toppings/toppingsSlice'
import choiceReducer from './features/choice/choiceSlice'
import menuReducer from './features/menu/menuSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    choice: choiceReducer,
    foodDialog: foodDialogReducer,
    menu: menuReducer,
    openFood: openFoodReducer,
    order: orderReducer,
    toppings: toppingsReducer,
    user: userReducer,
  },
})
