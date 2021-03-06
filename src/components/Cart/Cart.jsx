import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonComponent } from '../Button';
import  Title  from '../Title.jsx';
import CartColumns from './CartColumns.jsx'
import CartList from './CartList';
import EmptyCart from './EmptyCart.jsx';
import CartTotals from './CartTotals.jsx';
function Cart() {
    const dispatch = useDispatch();
    const cartReducer = useSelector(state => state.cartReducer);
    const cartItems = useSelector(state => state.cartReducer.cart);
    return (
      <section>
        {cartItems.length>0?
          <>
            <Title name="your" title="cart"/>
            <CartColumns />
            <CartList value={cartReducer}/>
            <CartTotals value={cartReducer}/>
          </>:
          <EmptyCart />
        }   
      </section>
    );
  }
  export default Cart;

  const ModalContainer = styled.div`

  `

  