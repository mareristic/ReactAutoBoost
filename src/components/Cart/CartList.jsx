import React, {useEffect}  from 'react'
import CartItem from './CartItem'
function CartList({value}) {
    const {cart} = value;
    useEffect(() => {
       console.log(cart);
      },[]);
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </div>
    );
  }
  
  export default CartList;
  