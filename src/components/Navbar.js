import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterItems } from '../features/menu/menuSlice'
import { CartButtons } from '../components'

const NavBar = () => {
  const dispatch = useDispatch()
  const { sections } = useSelector((store) => store.menu)

  return (
    <div className='btn-container'>
      {sections.map((section, index) => {
        return (
          <button
            type='button'
            className='filter-btn nes-btn is-warning'
            key={index}
            onClick={() => dispatch(filterItems(section))}
          >
            {section}
          </button>
        )
      })}
      {/* <button
        type='button'
        className='nes-btn is-warning'
        // onClick={() => {
        //   dispatch(toggleCart())
        // }}
      > */}
      {/* <CartIcon />
        <div className='amount-container'>
          <p className='total-amount'>{amount}</p>
        </div> */}
      <CartButtons />
      {/* </button> */}
    </div>
  )

  // return (
  //   <div className='nav-container'>
  //     <div className='nav-bar'>
  //       <a href='#Starters'>Starters</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Traditional-pizza'>Traditional pizza</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Gourmet-pizza'>Gourmet pizza</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Seafood-pizza'>Seafood pizza</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Pasta'>Pasta</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Desserts'>Desserts</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Salads'>Salads</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Deals'>Deals</a>
  //     </div>
  //     <div className='nav-bar'>
  //       <a href='#Beverages'>Beverages</a>
  //       <div>
  //         <button
  //           type='button'
  //           className='nes-btn is-warning'
  //           onClick={() => {
  //             dispatch(toggleCart())
  //           }}
  //         >
  //           <CartIcon />
  //           <div className='amount-container'>
  //             <p className='total-amount'>{amount}</p>
  //           </div>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default NavBar
