import React from 'react'
import 'nes.css/css/nes.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  About,
  Cart,
  Checkout,
  Error,
  FoodDialog,
  Menu,
  PrivateRoute,
  AuthWrapper,
} from './pages'
import { Navbar, Title, Order } from './components'

import { ArrowUp } from './icons'

function App() {
  // const { cartItems } = useSelector((store) => store.cart)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(calculateTotal())
  // }, [cartItems])
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Title />
        <FoodDialog />
        <ArrowUp />
        <Cart />
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Order />} />
          <Route
            path='/checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </AuthWrapper>

    // <div className='container'>
    //   <div className='App'>
    //     <NavBar />
    //     <CartContainer />
    //     <FoodDialog />
    //     <main>
    //       <Menu />
    //       <ArrowUp />
    //     </main>
    //   </div>
    // </div>
  )
}

export default App
