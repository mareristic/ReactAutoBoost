import React from 'react'
import { useDispatch } from 'react-redux';
import decrement from '../actions/decrement';
import increment from '../actions/increment';
import removeItem from '../actions/removeItem';

function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const dispatch = useDispatch();
    //create actions for increment decrement and remove item
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img} 
                    style={{width:'5rem', height:"5rem"}} 
                    className="img-fluid" 
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    product:
                </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">
                    price: 
                </span>
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span onClick={()=>dispatch(decrement(id))} className="btn btn-black mx-1">
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span onClick={()=>dispatch(increment(id))} className="btn btn-black mx-1">
                            +
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>dispatch(removeItem(id))}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total}</strong>
            </div>
        </div>
        
    );
  }
  
  export default CartItem;
  