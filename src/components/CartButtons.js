import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { toggleCart, clearCart } from '../features/cart/cartSlice'
import { setMyUser } from '../features/user/userSlice'

const CartButtons = () => {
  const dispatch = useDispatch()
  const { amount } = useSelector((store) => store.cart)
  const { myUser } = useSelector((store) => store.user)
  const { user, loginWithRedirect, logout } = useAuth0()

  useEffect(() => {
    dispatch(setMyUser(user))
  }, [user])

  return (
    <Wrapper className='cart-btn-Wrapper'>
      <Link
        to='/'
        type='button'
        className='filter-btn cart-btn nes-btn is-success'
        onClick={() => {
          dispatch(toggleCart())
        }}
      >
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{amount}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='filter-btn nes-btn is-error'
          onClick={() => {
            dispatch(clearCart())
            localStorage.removeItem('user')
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type='button'
          className='auth-btn nes-btn is-primary'
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
