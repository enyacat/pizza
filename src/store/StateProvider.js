import {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { foods } from '../data/FoodData'
import { Toppings, useToppings, ListDefaultTps } from '../components/Toppings'
import reducer from './reducer'
// import { useToppings } from '../components/Toppings'

const initialState = {
  cart: [],
  total: 0,
  quantity: 0,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [openFood, setOpenFood] = useState()
  const [orders, setOrders] = useState([])
  const [isActive, setIsActive] = useState(true)
  const [choiceValue, setChoiceValue] = useState(openFood?.choice)
  const { toppings, setToppings, checkToppings, defaultTps } = useToppings()
  const { checkDefaultTps } = ListDefaultTps({
    defaultTps,
    setOpenFood,
    openFood,
  })
  const removeItem = (idx) => {
    let orderArr = [...orders]
    orderArr.splice(idx, 1)
    setOrders(orderArr)
  }
  const toggleClass = () => {
    setIsActive(!isActive)
  }

  const close = () => {
    setOpenFood()
  }

  const addToOrder = () => {
    setOrders([...orders, order])
    close()
  }

  const editOrder = () => {
    let newOrders = [...orders]
    newOrders[openFood.index] = order
    setOrders(newOrders)
    close()
    // setOrders(...newOrders, newOrders.map((order, idx) => { if (idx === openFood.index) return order }))
  }

  const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => item.price + amount, 0)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getCartTotal,
        foods,
        openFood,
        setOpenFood,
        addToOrder,
        editOrder,
        orders,
        setOrders,
        toppings,
        setToppings,
        checkToppings,
        defaultTps,
        checkDefaultTps,
        isActive,
        toggleClass,
        removeItem,
        choiceValue,
        setChoiceValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../components/firebase";

//for state
// export const StateContext = createContext()

// export const StateProvider = ({ state, children }) => {
//   return (
//     <StateContext.Provider value={state}>{children}</StateContext.Provider>
//   );
// };

//for Firebase

// const userAuthContext = createContext();

// export const UserAuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState("");
//   const signUp = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const logIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const logOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
//       {children}
//     </userAuthContext.Provider>
//   );
// };

// export const useUserAuth = () => useContext(userAuthContext);
